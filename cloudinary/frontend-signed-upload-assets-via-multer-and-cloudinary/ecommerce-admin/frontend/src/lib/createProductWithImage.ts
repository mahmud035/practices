import {
  confirmProductImage,
  createProduct,
  getUploadSignature,
  markImageFailed,
} from '../api/products';
import { uploadToCloudinaryWithRetry } from './cloudinaryUpload';

export async function createProductWithImage(input: {
  title: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  image: File;
}) {
  // Step 1: create product (fast, always)
  const product = await createProduct({
    title: input.title,
    description: input.description,
    price: input.price,
    category: input.category,
    tags: input.tags,
  });

  try {
    // Step 2: ask backend for signed upload params
    const signed = await getUploadSignature(product._id);

    // Step 3: upload directly to Cloudinary (retry + timeout)
    const uploaded = await uploadToCloudinaryWithRetry(input.image, signed, {
      maxRetries: 2,
      timeoutMs: 20_000,
    });

    // Step 4: confirm to backend (patch product)
    const updated = await confirmProductImage(product._id, uploaded);

    return updated;
  } catch (e: any) {
    // record failure for observability & admin UI
    await markImageFailed(product._id, e?.message || 'Upload failed');
    // rethrow so UI can show error
    throw e;
  }
}
