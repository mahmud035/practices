import { NextFunction, Request, Response } from 'express';
import {
  CloudinaryError,
  deleteImage as deleteCloudinaryImage,
  uploadImage,
} from '../services/cloudinaryService';

interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?:
    | Express.Multer.File[]
    | { [fieldname: string]: Express.Multer.File[] };
}

/**
 * Upload a single image immediately
 * Returns Cloudinary data for frontend to store
 */
export const uploadSingleImage = async (
  req: MulterRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({
        success: false,
        message: 'No image file provided',
      });
      return;
    }

    // Get folder from query param or default
    const folder = (req.query.folder as string) || 'ecommerce/products';

    // Generate a name from original filename
    const baseName = req.file.originalname
      .replace(/\.[^/.]+$/, '') // Remove extension
      .substring(0, 30);

    const result = await uploadImage(req.file.buffer, folder, baseName);

    res.status(200).json({
      success: true,
      data: {
        public_id: result.public_id,
        url: result.secure_url,
        width: result.width,
        height: result.height,
        format: result.format,
        bytes: result.bytes,
      },
    });
  } catch (error) {
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
 * Upload multiple images immediately
 * Returns array of Cloudinary data
 */
export const uploadMultipleImages = async (
  req: MulterRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.files || !Array.isArray(req.files) || req.files.length === 0) {
      res.status(400).json({
        success: false,
        message: 'No image files provided',
      });
      return;
    }

    const folder = (req.query.folder as string) || 'ecommerce/products';

    // Upload all images in parallel for speed
    const uploadPromises = req.files.map(async (file, index) => {
      const baseName = file.originalname
        .replace(/\.[^/.]+$/, '')
        .substring(0, 30);

      try {
        const result = await uploadImage(file.buffer, folder, baseName);
        return {
          success: true,
          originalName: file.originalname,
          data: {
            public_id: result.public_id,
            url: result.secure_url,
            width: result.width,
            height: result.height,
            format: result.format,
            bytes: result.bytes,
          },
        };
      } catch (error) {
        return {
          success: false,
          originalName: file.originalname,
          error: error instanceof Error ? error.message : 'Upload failed',
        };
      }
    });

    const results = await Promise.all(uploadPromises);

    // Separate successes and failures
    const successful = results.filter((r) => r.success);
    const failed = results.filter((r) => !r.success);

    res.status(200).json({
      success: true,
      data: {
        uploaded: successful.map((r) => r.data),
        failed: failed.map((r) => ({
          originalName: r.originalName,
          error: r.error,
        })),
        summary: {
          total: results.length,
          successful: successful.length,
          failed: failed.length,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete an orphaned image
 * Used when user cancels form after uploading
 */
export const deleteImage = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { publicId } = req.params;

    if (!publicId) {
      res.status(400).json({
        success: false,
        message: 'Public ID is required',
      });
      return;
    }

    await deleteCloudinaryImage(publicId);

    res.status(200).json({
      success: true,
      message: 'Image deleted successfully',
    });
  } catch (error) {
    if (error instanceof CloudinaryError) {
      res.status(500).json({
        success: false,
        message: 'Failed to delete image',
        error: error.message,
      });
      return;
    }
    next(error);
  }
};
