import { Router } from 'express';
import { validateRequest } from '../../middleware/validateRequest';
import { itemController } from './item.controller';
import { itemValidation } from './item.validation';

const router = Router();

router.get('/', itemController.getAllItems);

router.post(
  '/',
  validateRequest(itemValidation.createItemZodValidation),
  itemController.createItem,
);

export const itemRoutes = router;
/**
 * POST /api/items
 * Creates an item from the validated body.
 */
