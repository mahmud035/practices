import express from 'express';
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from '../controllers/productController';
import { uploadSingle } from '../middleware/upload';

const router = express.Router();

// All routes are prefixed with /api/v1/products

router.route('/').get(getProducts).post(uploadSingle, createProduct); // uploadSingle processes the file first

router
  .route('/:id')
  .get(getProduct)
  .put(uploadSingle, updateProduct)
  .delete(deleteProduct);

export default router;
