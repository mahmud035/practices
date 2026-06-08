import { IMessage, IMessageDocument, TRoom } from './message.interface';
import MessageModel from './message.model';

/**
 * Persists a single message (regular or system) to the database.
 */
const save = async (payload: IMessage): Promise<IMessageDocument> => {
  return MessageModel.create(payload);
};

/**
 * Returns the most recent `limit` messages for a room, oldest-first,
 * so the client can render them in chronological order.
 */
const getRecent = async (
  room: TRoom,
  limit: number = 50
): Promise<IMessageDocument[]> => {
  return MessageModel.find({ room })
    .sort({ createdAt: -1 })
    .limit(limit)
    .lean()
    .then((docs) => docs.reverse() as IMessageDocument[]);
};

export const messageService = { save, getRecent };
