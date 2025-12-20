import { NextFunction, Request, Response } from 'express';
import { IProduct, Product } from '../models/Product';
import { deleteImage } from '../services/cloudinaryService';

interface ProductImage {
  public_id: string;
  url: string;
  isPrimary?: boolean;
}

interface CreateProductBody {
  title: string;
  description: string;
  price: string;
  category: string;
  tags?: string;
  images: ProductImage[] | string; // Can be JSON string or array
}

/**
 * Create product with pre-uploaded images
 * Images are already in Cloudinary, we just save the references
 */
export const createProduct = async (
  req: Request<{}, {}, CreateProductBody>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { title, description, price, category, tags, images } = req.body;

    // Parse images if it's a string (from form data)
    let parsedImages: ProductImage[];
    if (typeof images === 'string') {
      parsedImages = JSON.parse(images);
    } else {
      parsedImages = images;
    }

    // Validate images
    if (!parsedImages || parsedImages.length === 0) {
      res.status(400).json({
        success: false,
        message: 'At least one product image is required',
      });
      return;
    }

    // Ensure at least one image is marked as primary
    const hasPrimary = parsedImages.some((img) => img.isPrimary);
    if (!hasPrimary) {
      parsedImages[0].isPrimary = true;
    }

    // Parse tags
    let parsedTags: string[] = [];
    if (tags) {
      parsedTags = typeof tags === 'string' ? JSON.parse(tags) : tags;
    }

    const product = await Product.create({
      title,
      description,
      price: parseFloat(price),
      category,
      tags: parsedTags,
      images: parsedImages,
    });

    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all products
 */
export const getProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const products = await Product.find().sort({ createdAt: -1 }).lean();

    res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get single product
 */
export const getProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404).json({
        success: false,
        message: 'Product not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update product
 */
export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const existingProduct = await Product.findById(req.params.id);

    if (!existingProduct) {
      res.status(404).json({
        success: false,
        message: 'Product not found',
      });
      return;
    }

    const { title, description, price, category, tags, images, inStock } =
      req.body;

    // Build update object
    const updateData: Partial<IProduct> = {};

    if (title) updateData.title = title;
    if (description) updateData.description = description;
    if (price) updateData.price = parseFloat(price);
    if (category) updateData.category = category;
    if (inStock !== undefined)
      updateData.inStock = inStock === 'true' || inStock === true;
    if (tags) {
      updateData.tags = typeof tags === 'string' ? JSON.parse(tags) : tags;
    }

    // Handle image updates
    if (images) {
      const newImages: ProductImage[] =
        typeof images === 'string' ? JSON.parse(images) : images;

      // Find images that were removed
      const newPublicIds = new Set(newImages.map((img) => img.public_id));
      const removedImages = existingProduct.images.filter(
        (img) => !newPublicIds.has(img.public_id)
      );

      // Delete removed images from Cloudinary
      for (const img of removedImages) {
        try {
          await deleteImage(img.public_id);
        } catch (error) {
          console.error(`Failed to delete image ${img.public_id}:`, error);
          // Continue with update even if deletion fails
        }
      }

      updateData.images = newImages;
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      data: updatedProduct,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete product
 */
export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404).json({
        success: false,
        message: 'Product not found',
      });
      return;
    }

    // Delete ALL images from Cloudinary
    const deletePromises = product.images.map((img) =>
      deleteImage(img.public_id).catch((err) => {
        console.error(`Failed to delete image ${img.public_id}:`, err);
        return null; // Continue even if some deletions fail
      })
    );

    await Promise.all(deletePromises);

    // Delete product from database
    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Product and all associated images deleted successfully',
      data: {
        deletedProductId: req.params.id,
        deletedImagesCount: product.images.length,
      },
    });
  } catch (error) {
    next(error);
  }
};
