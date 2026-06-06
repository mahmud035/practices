import { Router } from 'express';
import { createFeedbackSchema } from '../../../../shared/feedback.schema';
import { validateRequest } from '../../middleware/validateRequest';
import { feedbackController } from './feedback.controller';

const router = Router();

router.post(
  '/',
  validateRequest(createFeedbackSchema),
  feedbackController.create,
);

router.get('/', feedbackController.list);

export const feedbackRoutes = router;
