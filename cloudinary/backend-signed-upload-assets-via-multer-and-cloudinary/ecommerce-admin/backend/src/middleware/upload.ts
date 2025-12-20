import { Request } from 'express';
import multer, { FileFilterCallback } from 'multer';

export class UploadValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UploadValidationError';
  }
}

const ALLOWED_MIME_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'image/avif',
];

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB per file
const MAX_FILES = 10; // Maximum files per upload

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
): void => {
  if (!ALLOWED_MIME_TYPES.includes(file.mimetype)) {
    cb(
      new UploadValidationError(
        `Invalid file type: ${file.mimetype}. Allowed: JPEG, PNG, WebP, Avif`
      )
    );
    return;
  }

  const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];
  const fileExtension = file.originalname
    .toLowerCase()
    .slice(file.originalname.lastIndexOf('.'));

  if (!allowedExtensions.includes(fileExtension)) {
    cb(new UploadValidationError(`Invalid file extension: ${fileExtension}`));
    return;
  }

  cb(null, true);
};

const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter,
  limits: {
    fileSize: MAX_FILE_SIZE,
    files: MAX_FILES,
  },
});

// Single file upload
export const uploadSingle = upload.single('image');

// Multiple files upload (field name: 'images')
export const uploadMultiple = upload.array('images', MAX_FILES);
