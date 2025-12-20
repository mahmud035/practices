import express from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import { productController } from './product.controller';
import {
  confirmImageSchema,
  createProductZodSchema,
  getSignatureSchema,
  idParamSchema,
} from './product.validation';

const router = express.Router();

router
  .route('/')
  .get(productController.list)
  .post(validateRequest(createProductZodSchema), productController.create);

router.get('/:id', validateRequest(idParamSchema), productController.getById);

router.post(
  '/:id/image/signature',
  validateRequest(getSignatureSchema),
  productController.getUploadSignature
);

router.patch(
  '/:id/image/confirm',
  validateRequest(confirmImageSchema),
  productController.confirmImage
);

// optional: if upload fails on client
router.patch(
  '/:id/image/failed',
  validateRequest(idParamSchema),
  productController.markImageFailed
);

router.delete('/:id', validateRequest(idParamSchema), productController.delete);

export default router;
