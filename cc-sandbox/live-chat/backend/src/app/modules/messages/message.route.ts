import { Router } from 'express';
import { messageController } from './message.controller';

const router = Router();

router.get('/:room', messageController.getRecentMessages);

export default router;
