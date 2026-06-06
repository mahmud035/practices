import { Request, Response } from 'express';
import { sendResponse } from '../../utils/sendResponse';
import { feedbackService } from './feedback.service';

export const feedbackController = {
  // POST /api/feedback - body already validated + coerced by middleware
  create: async (req: Request, res: Response): Promise<void> => {
    const result = await feedbackService.create(req.body);
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: 'Feedback submitted',
      data: result,
    });
  },

  // GET /api/feedback
  list: async (req: Request, res: Response): Promise<void> => {
    const result = await feedbackService.list();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Feedback fetched',
      data: result,
    });
  },
};

// Teaches: controller touches no DB and runs no validation — middleware already did the latter, service owns the former. Charter discipline, enforced by structure.
