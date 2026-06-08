import { Router } from 'express';
import multer from 'multer';
import validateRequest from '../../middlewares/validateRequest';
import { mediaController } from './media.controller';
import { mediaValidation } from './media.validation';

const router = Router();

// Memory storage — buffer is passed directly to Cloudinary upload_stream
const upload = multer({ storage: multer.memoryStorage() });

router.post('/upload', upload.single('image'), mediaController.uploadMedia);
router.get('/', mediaController.getAllMedia);
router.delete('/:id', validateRequest(mediaValidation.deleteMediaSchema), mediaController.deleteMedia);

export default router;
