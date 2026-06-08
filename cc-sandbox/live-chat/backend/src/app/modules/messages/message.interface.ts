import { Document, Types } from 'mongoose';

export const ROOMS = ['general', 'tech', 'random'] as const;
export type TRoom = (typeof ROOMS)[number];
export type TMessageType = 'message' | 'system';

export interface IMessage {
  room: TRoom;
  username: string;
  content: string;
  type: TMessageType;
  createdAt?: Date;
}

export interface IMessageDocument extends IMessage, Document {
  _id: Types.ObjectId;
}
