import { Request, Response, Router } from 'express';
import { itemRoutes } from '../modules/item/item.route';

export const router = Router();

/** Liveness probe — also our Nginx reverse-proxy smoke test in Batch 2. */
router.get('/health', (_req: Request, res: Response) => {
  res.json({
    statusCode: 200,
    success: true,
    message: 'ok',
    data: { status: 'ok' },
  });
});

router.use('/items', itemRoutes);
