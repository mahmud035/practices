import { Router } from 'express';
import { authController } from './auth.controller';
import { authValidation } from './auth.validation';
import { validateRequest } from '../../middlewares/validateRequest';
import { authenticate } from '../../middlewares/authenticate';

const router = Router();

router.post('/register', validateRequest(authValidation.register), authController.register);
router.post('/login', validateRequest(authValidation.login), authController.login);
router.post('/logout', authController.logout);
router.get('/me', authenticate, authController.me);

export const authRouter = router;
