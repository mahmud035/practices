import { Document } from 'mongoose';

export interface IMedia extends Document {
  public_id: string;
  secure_url: string;
  resource_type: string;
  width: number;
  height: number;
  bytes: number;
  createdAt: Date;
  updatedAt: Date;
}
