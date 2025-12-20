import mongoose, { Schema } from 'mongoose';
import { ProductEntity } from './product.interface';

const productSchema = new Schema<ProductEntity>(
  {
    title: { type: String, required: true, trim: true, maxlength: 200 },
    description: { type: String, required: true, trim: true, maxlength: 2000 },
    price: { type: Number, required: true, min: 0 },
    tags: { type: [String], default: [] },
    category: { type: String, required: true, trim: true },
    inStock: { type: Boolean, default: true },

    image: {
      status: {
        type: String,
        enum: ['pending', 'ready', 'failed'],
        default: 'pending',
      },
      public_id: { type: String },
      url: { type: String },
      width: { type: Number },
      height: { type: Number },
      format: { type: String },
      bytes: { type: Number },
      attempts: { type: Number, default: 0 },
      lastError: { type: String },
      updatedAt: { type: Date },
    },
  },
  { timestamps: true }
);

productSchema.index({ title: 'text', description: 'text', tags: 'text' });

export const Product = mongoose.model<ProductEntity>('Product', productSchema);
