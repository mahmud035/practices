import { model, Schema } from 'mongoose';
import { IItemDocument } from './item.interface';

const itemSchema = new Schema<IItemDocument>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: 1,
      maxlength: 100,
    },
  },
  { timestamps: true },
);

export const Item = model<IItemDocument>('Item', itemSchema);
