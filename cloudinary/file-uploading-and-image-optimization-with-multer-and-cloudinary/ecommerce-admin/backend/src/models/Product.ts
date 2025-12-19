// server/src/models/Product.ts

import mongoose, { Document, Schema } from 'mongoose';

// Interface for the image subdocument
interface IProductImage {
  public_id: string; // Cloudinary public_id (needed for deletion)
  url: string; // Cloudinary secure_url
}

// Interface for the Product document
export interface IProduct extends Document {
  title: string;
  description: string;
  price: number;
  image: IProductImage;
  tags: string[];
  category: string;
  inStock: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Schema definition
const productSchema = new Schema<IProduct>(
  {
    title: {
      type: String,
      required: [true, 'Product title is required'],
      trim: true,
      maxLength: [200, 'Title cannot exceed 200 characters'],
    },
    description: {
      type: String,
      required: [true, 'Product description is required'],
      trim: true,
      maxLength: [2000, 'Description cannot exceed 2000 characters'],
    },
    price: {
      type: Number,
      required: [true, 'Product price is required'],
      min: [0, 'Price cannot be negative'],
    },
    image: {
      public_id: {
        type: String,
        required: [true, 'Image public_id is required'],
      },
      url: {
        type: String,
        required: [true, 'Image URL is required'],
      },
    },
    tags: {
      type: [String],
      default: [],
    },
    category: {
      type: String,
      required: [true, 'Product category is required'],
      trim: true,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

// Index for search functionality
productSchema.index({ title: 'text', description: 'text', tags: 'text' });

export const Product = mongoose.model<IProduct>('Product', productSchema);
