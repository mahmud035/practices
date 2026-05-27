import { Document, Types } from 'mongoose';

/** Domain shape - what an item is, independent of Mongo. */
export interface IItem {
  name: string;
}

/** Mongoose document shape - adds _id and timestamps. */
export interface IItemDocument extends IItem, Document {
  _id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
