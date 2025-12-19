import { NextFunction, Request, Response } from 'express';
import { IProduct, Product } from '../models/Product';
import {
  CloudinaryError,
  deleteImage,
  uploadImage,
} from '../services/cloudinaryService';

// Type for the request with file
interface MulterRequest extends Request {
  file?: Express.Multer.File;
}

/**
 * Create a new product with image
 * POST /api/v1/products
 */
export const createProduct = async (
  req: MulterRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // Validate that an image was uploaded
    if (!req.file) {
      res.status(400).json({
        success: false,
        message: 'Product image is required',
      });
      return;
    }

    // Extract product data from body
    const { title, description, price, tags, category } = req.body;

    // Validate required fields
    if (!title || !description || !price || !category) {
      res.status(400).json({
        success: false,
        message: 'Title, description, price, and category are required',
      });
      return;
    }

    // Upload image to Cloudinary
    // Using 'ecommerce/products' as the folder for organization
    const cloudinaryResult = await uploadImage(
      req.file.buffer,
      'ecommerce/products',
      title // Use title as base for filename
    );

    // Create product in database
    const product = await Product.create({
      title,
      description,
      price: parseFloat(price),
      tags: tags ? JSON.parse(tags) : [], // Tags come as JSON string from form
      category,
      image: {
        public_id: cloudinaryResult.public_id,
        url: cloudinaryResult.secure_url,
      },
    });

    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      data: product,
    });
  } catch (error) {
    // Handle specific error types
    if (error instanceof CloudinaryError) {
      res.status(500).json({
        success: false,
        message: 'Failed to upload image',
        error: error.message,
      });
      return;
    }

    next(error);
  }
};

/**
 * Get all products
 * GET /api/v1/products
 */
export const getProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const products = await Product.find()
      .sort({ createdAt: -1 }) // Newest first
      .lean(); // Returns plain objects (faster)

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
 * GET /api/v1/products/:id
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
 * PUT /api/v1/products/:id
 */
export const updateProduct = async (
  req: MulterRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // Find existing product
    const existingProduct = await Product.findById(req.params.id);

    if (!existingProduct) {
      res.status(404).json({
        success: false,
        message: 'Product not found',
      });
      return;
    }

    // Prepare update data
    const updateData: Partial<IProduct> = {
      title: req.body.title || existingProduct.title,
      description: req.body.description || existingProduct.description,
      price: req.body.price
        ? parseFloat(req.body.price)
        : existingProduct.price,
      category: req.body.category || existingProduct.category,
      tags: req.body.tags ? JSON.parse(req.body.tags) : existingProduct.tags,
      inStock:
        req.body.inStock !== undefined
          ? req.body.inStock === 'true'
          : existingProduct.inStock,
    };

    // If new image uploaded, handle image replacement
    if (req.file) {
      // Upload new image first
      const cloudinaryResult = await uploadImage(
        req.file.buffer,
        'ecommerce/products',
        updateData.title || existingProduct.title
      );

      // Delete old image from Cloudinary
      await deleteImage(existingProduct.image.public_id);

      // Update image data
      updateData.image = {
        public_id: cloudinaryResult.public_id,
        url: cloudinaryResult.secure_url,
      };
    }

    // Update product in database
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
    if (error instanceof CloudinaryError) {
      res.status(500).json({
        success: false,
        message: 'Failed to process image',
        error: error.message,
      });
      return;
    }

    next(error);
  }
};

/**
 * Delete product
 * DELETE /api/v1/products/:id
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

    // Delete image from Cloudinary FIRST
    // If this fails, we don't delete from DB (preventing orphaned records)
    await deleteImage(product.image.public_id);

    // Delete product from database
    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Product and associated image deleted successfully',
      data: {
        deletedProductId: req.params.id,
        deletedImageId: product.image.public_id,
      },
    });
  } catch (error) {
    if (error instanceof CloudinaryError) {
      res.status(500).json({
        success: false,
        message:
          'Failed to delete image from cloud storage. Product not deleted.',
        error: error.message,
      });
      return;
    }

    next(error);
  }
};
