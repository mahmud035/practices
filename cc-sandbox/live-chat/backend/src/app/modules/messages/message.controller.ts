import { Request, Response } from 'express';
import { ROOMS, TRoom } from './message.interface';
import { messageService } from './message.service';

/**
 * GET /api/messages/:room?limit=50
 * Returns the most recent messages for a room, oldest-first.
 */
const getRecentMessages = async (req: Request, res: Response): Promise<void> => {
  const { room } = req.params;

  if (!ROOMS.includes(room as TRoom)) {
    res.status(400).json({
      statusCode: 400,
      success: false,
      message: `Invalid room. Must be one of: ${ROOMS.join(', ')}`,
      data: null,
    });
    return;
  }

  const limit = Math.min(parseInt(req.query.limit as string) || 50, 100);
  const messages = await messageService.getRecent(room as TRoom, limit);

  res.status(200).json({
    statusCode: 200,
    success: true,
    message: 'Messages fetched successfully',
    data: messages,
  });
};

export const messageController = { getRecentMessages };
