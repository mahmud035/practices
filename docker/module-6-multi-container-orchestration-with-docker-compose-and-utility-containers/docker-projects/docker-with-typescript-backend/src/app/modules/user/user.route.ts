import express from 'express';
import { multerUpload } from '../../../config/multer.config.js';
import { UserController } from './user.controller.js';

const router = express.Router();

router.post(
  '/create-user',
  multerUpload.single('image'),
  UserController.createUser
);
router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getSingleUser);

export const UserRoutes = router;
