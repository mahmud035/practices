import { Request } from 'express';
import multer, { FileFilterCallback } from 'multer';

// Custom error for upload validation
export class UploadValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UploadValidationError';
  }
}

// Allowed MIME types for product images
const ALLOWED_MIME_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

// Max file size: 5MB (generous for product photos)
const MAX_FILE_SIZE = 5 * 1024 * 1024;

// File filter function
const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
): void => {
  // Check MIME type
  if (!ALLOWED_MIME_TYPES.includes(file.mimetype)) {
    cb(
      new UploadValidationError(
        `Invalid file type: ${file.mimetype}. Allowed types: JPEG, PNG, WebP`
      )
    );
    return;
  }

  // Additional check: file extension (some browsers might lie about MIME type)
  const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
  const fileExtension = file.originalname
    .toLowerCase()
    .slice(file.originalname.lastIndexOf('.'));

  if (!allowedExtensions.includes(fileExtension)) {
    cb(
      new UploadValidationError(
        `Invalid file extension: ${fileExtension}. Allowed: ${allowedExtensions.join(
          ', '
        )}`
      )
    );
    return;
  }

  cb(null, true); // File is okay
};

// Configure multer with memory storage
// We use memory storage because we're immediately uploading to Cloudinary
const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter,
  limits: {
    fileSize: MAX_FILE_SIZE,
    files: 1, // Only allow 1 file per request
  },
});

// Export configured upload middleware
// .single('image') means we expect a single file in the 'image' field
export const uploadSingle = upload.single('image');

// For multiple images (e.g., product gallery)
export const uploadMultiple = upload.array('images', 5); // Max 5 images
