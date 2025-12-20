import express from 'express';

import {
  deleteImageController,
  uploadMultipleImages,
  uploadSingleImage,
} from '../controllers/uploadController';
import { uploadMultiple, uploadSingle } from '../middleware/upload';

const router = express.Router();

// Upload single image immediately (returns Cloudinary data)
router.post('/image', uploadSingle, uploadSingleImage);

// Upload multiple images immediately (returns array of Cloudinary data)
router.post('/images', uploadMultiple, uploadMultipleImages);

// Delete an orphaned image (when user cancels form after uploading)
router.delete('/image', deleteImageController);

export default router;
