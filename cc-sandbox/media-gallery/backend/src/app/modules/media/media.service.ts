import { UploadApiResponse } from 'cloudinary';
import { Readable } from 'stream';
import cloudinary from '../../../config/cloudinary';
import { IMedia } from './media.interface';
import Media from './media.model';

const ALLOWED_MIMES = new Set(['image/jpeg', 'image/png', 'image/webp']);
const CLOUDINARY_FOLDER = 'clients/mahmud/media-gallery';

/**
 * Pipes a buffer into cloudinary.upload_stream and resolves with the result.
 */
const uploadBufferToCloudinary = (
  buffer: Buffer,
  mimetype: string
): Promise<UploadApiResponse> => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: CLOUDINARY_FOLDER, resource_type: 'image' },
      (error, result) => {
        if (error || !result) return reject(error ?? new Error('Cloudinary upload returned no result'));
        resolve(result);
      }
    );
    Readable.from(buffer).pipe(stream);
  });
};

/**
 * Validates MIME type, uploads buffer to Cloudinary, then persists metadata to MongoDB.
 */
const uploadMedia = async (file: Express.Multer.File): Promise<IMedia> => {
  if (!ALLOWED_MIMES.has(file.mimetype)) {
    throw Object.assign(
      new Error(`Unsupported file type "${file.mimetype}". Only JPEG, PNG, and WebP are allowed.`),
      { statusCode: 400 }
    );
  }

  const result = await uploadBufferToCloudinary(file.buffer, file.mimetype);

  const media = await Media.create({
    public_id: result.public_id,
    secure_url: result.secure_url,
    resource_type: result.resource_type,
    width: result.width,
    height: result.height,
    bytes: result.bytes,
  });

  return media;
};

/**
 * Returns all media documents sorted newest first.
 */
const getAllMedia = async (): Promise<IMedia[]> => {
  return Media.find().sort({ createdAt: -1 });
};

/**
 * Destroys the Cloudinary asset first; only deletes the MongoDB doc on success.
 * If Cloudinary destroy fails, neither side is modified.
 */
const deleteMedia = async (id: string): Promise<void> => {
  const media = await Media.findById(id);
  if (!media) {
    throw Object.assign(new Error('Media not found'), { statusCode: 404 });
  }

  const destroyResult = await cloudinary.uploader.destroy(media.public_id, {
    resource_type: 'image',
  });

  if (destroyResult.result !== 'ok') {
    throw Object.assign(
      new Error(`Cloudinary destroy failed: ${destroyResult.result}`),
      { statusCode: 500 }
    );
  }

  await Media.findByIdAndDelete(id);
};

export const mediaService = { uploadMedia, getAllMedia, deleteMedia };
