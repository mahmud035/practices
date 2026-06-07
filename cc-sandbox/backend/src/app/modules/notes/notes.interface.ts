import { Document, Types } from 'mongoose';

export interface INote extends Document {
  title: string;
  body: string;
  userId: Types.ObjectId;
}
