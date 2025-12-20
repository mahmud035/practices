import crypto from 'crypto';
import cloudinary from '../../config/cloudinary';
import { Product } from './product.model';

const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME!;
const API_KEY = process.env.CLOUDINARY_API_KEY!;
const API_SECRET = process.env.CLOUDINARY_API_SECRET!;

const PRODUCT_FOLDER = 'ecommerce/products';

const nowIso = () => new Date().toISOString();

function cloudinarySign(params: Record<string, string | number>) {
  // Cloudinary signature rule: sort params, join "k=v", append api_secret, sha1
  const sorted = Object.keys(params)
    .sort()
    .map((k) => `${k}=${params[k]}`)
    .join('&');

  return crypto
    .createHash('sha1')
    .update(sorted + API_SECRET)
    .digest('hex');
}

export const productService = {
  async create(payload: {
    title: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    inStock: boolean;
  }) {
    const product = await Product.create({
      ...payload,
      image: {
        status: 'pending',
        attempts: 0,
        updatedAt: new Date(),
      },
    });

    return product;
  },

  async list() {
    return Product.find().sort({ createdAt: -1 }).lean();
  },

  async getById(id: string) {
    return Product.findById(id);
  },

  async getUploadSignature(productId: string) {
    const product = await Product.findById(productId);
    if (!product) throw new Error('Product not found');

    // unique public id that includes productId (great for tracking + cleanup)
    const timestamp = Math.floor(Date.now() / 1000);
    const publicId = `${PRODUCT_FOLDER}/prod_${productId}_${timestamp}`;

    // params included in signature must match upload request
    const toSign = {
      timestamp,
      public_id: publicId,
      folder: PRODUCT_FOLDER,
      tags: 'product,ecommerce',
      // optional: eager transformations, tags, etc.
    };

    const signature = cloudinarySign(toSign);

    // update attempt count for observability
    product.image.attempts = (product.image.attempts || 0) + 1;
    product.image.updatedAt = new Date();
    await product.save();

    return {
      cloudName: CLOUD_NAME,
      apiKey: API_KEY,
      timestamp,
      signature,
      folder: PRODUCT_FOLDER,
      publicId,
    };
  },

  async confirmUpload(
    productId: string,
    data: {
      public_id: string;
      secure_url: string;
      width?: number;
      height?: number;
      format?: string;
      bytes?: number;
    }
  ) {
    const product = await Product.findById(productId);
    if (!product) throw new Error('Product not found');

    product.image.status = 'ready';
    product.image.public_id = data.public_id;
    product.image.url = data.secure_url;
    product.image.width = data.width;
    product.image.height = data.height;
    product.image.format = data.format;
    product.image.bytes = data.bytes;
    product.image.lastError = undefined;
    product.image.updatedAt = new Date();

    await product.save();
    return product;
  },

  async markUploadFailed(productId: string, reason: string) {
    const product = await Product.findById(productId);
    if (!product) return;

    product.image.status = 'failed';
    product.image.lastError = `[${nowIso()}] ${reason}`;
    product.image.updatedAt = new Date();
    await product.save();
  },

  async deleteProduct(productId: string) {
    const product = await Product.findById(productId);
    if (!product) return null;

    // delete cloudinary only if we have a ready image
    if (product.image?.status === 'ready' && product.image.public_id) {
      const start = Date.now();
      try {
        await cloudinary.uploader.destroy(product.image.public_id, {
          resource_type: 'image',
          invalidate: true,
        });
        const ms = Date.now() - start;
        if (ms > 1500) console.warn(`🐢 Cloudinary destroy slow: ${ms}ms`);
      } catch (e: any) {
        // fail-tolerant: still allow product deletion if cloudinary is down
        console.warn(
          'Cloudinary destroy failed, continuing DB delete:',
          e?.message
        );
      }
    }

    await Product.findByIdAndDelete(productId);
    return productId;
  },
};
