import { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';
import cloudinary from '../config/cloudinary';

// Define the structure of our upload result
interface CloudinaryUploadResult {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  format: string;
  bytes: number;
}

// Custom error for Cloudinary operations
export class CloudinaryError extends Error {
  constructor(message: string, public originalError?: any) {
    super(message);
    this.name = 'CloudinaryError';
  }
}

/**
 * Upload an image buffer to Cloudinary
 *
 * @param buffer - The file buffer from Multer
 * @param folder - The folder path in Cloudinary (e.g., "ecommerce/products")
 * @param filename - A sanitized filename for the public_id
 */
export const uploadImage = async (
  buffer: Buffer,
  folder: string,
  filename: string
): Promise<CloudinaryUploadResult> => {
  // Generate a unique public_id with timestamp
  const timestamp = Date.now();
  const sanitizedFilename = filename
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '_') // Replace special chars with underscore
    .substring(0, 50); // Limit length

  const publicId = `${folder}/prod_${timestamp}_${sanitizedFilename}`;

  return new Promise((resolve, reject) => {
    // Create an upload stream
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        // UPLOAD OPTIONS - These are important!
        public_id: publicId,
        folder: undefined, // We're including folder in public_id already
        resource_type: 'image',

        // OPTIMIZATION OPTIONS - Save storage and bandwidth
        transformation: [
          {
            quality: 'auto:good', // Automatic quality optimization
            fetch_format: 'auto', // Convert to WebP/AVIF if browser supports
          },
        ],

        // ORGANIZATION OPTIONS
        tags: ['product', 'ecommerce'], // Helps with bulk operations

        // UPLOAD BEHAVIOR
        overwrite: false, // Don't overwrite if exists
        invalidate: true, // Invalidate CDN cache if updating
      },
      (
        error: UploadApiErrorResponse | undefined,
        result: UploadApiResponse | undefined
      ) => {
        if (error) {
          console.log(error);
          reject(
            new CloudinaryError('Failed to upload image to Cloudinary', error)
          );
          return;
        }

        if (!result) {
          reject(new CloudinaryError('No result received from Cloudinary'));
          return;
        }

        resolve({
          public_id: result.public_id,
          secure_url: result.secure_url,
          width: result.width,
          height: result.height,
          format: result.format,
          bytes: result.bytes,
        });
      }
    );

    // Pipe the buffer to the upload stream
    uploadStream.end(buffer);
  });
};

/**
 * Delete an image from Cloudinary
 *
 * @param publicId - The public_id of the image to delete
 */
export const deleteImage = async (publicId: string): Promise<boolean> => {
  try {
    const result = await cloudinary.uploader.destroy(publicId, {
      resource_type: 'image',
      invalidate: true, // Invalidate CDN cache
    });

    // Cloudinary returns { result: 'ok' } on success
    // Returns { result: 'not found' } if image doesn't exist
    if (result.result === 'ok') {
      return true;
    } else if (result.result === 'not found') {
      console.warn(`Image not found in Cloudinary: ${publicId}`);
      return true; // Consider it a success if already gone
    } else {
      throw new CloudinaryError(`Unexpected result: ${result.result}`);
    }
  } catch (error) {
    throw new CloudinaryError('Failed to delete image from Cloudinary', error);
  }
};

/**
 * Generate optimized URLs for different use cases
 * This is useful because you store ONE image but serve MANY sizes
 */
export const getOptimizedUrl = (
  publicId: string,
  options: {
    width?: number;
    height?: number;
    crop?: 'fill' | 'limit' | 'fit' | 'scale';
  } = {}
): string => {
  const { width = 800, height = 800, crop = 'limit' } = options;

  return cloudinary.url(publicId, {
    transformation: [
      {
        width,
        height,
        crop,
        quality: 'auto',
        fetch_format: 'auto',
      },
    ],
    secure: true,
  });
};
