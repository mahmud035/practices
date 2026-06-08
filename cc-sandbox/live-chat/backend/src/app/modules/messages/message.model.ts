import mongoose from 'mongoose';
import { IMessageDocument, ROOMS } from './message.interface';

const messageSchema = new mongoose.Schema<IMessageDocument>(
  {
    room: { type: String, enum: ROOMS, required: true },
    username: { type: String, required: true, trim: true },
    content: { type: String, required: true, trim: true },
    type: { type: String, enum: ['message', 'system'], default: 'message' },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

messageSchema.index({ room: 1, createdAt: -1 });

const MessageModel = mongoose.model<IMessageDocument>('Message', messageSchema);

export default MessageModel;
