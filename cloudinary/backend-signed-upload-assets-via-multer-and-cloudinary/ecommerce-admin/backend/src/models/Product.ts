import mongoose, { Document, Schema } from 'mongoose';

// Interface for a single image
interface IProductImage {
  public_id: string;
  url: string;
  isPrimary?: boolean; // For gallery: which image shows first
}

export interface IProduct extends Document {
  title: string;
  description: string;
  price: number;
  images: IProductImage[]; // Changed from single image to array
  tags: string[];
  category: string;
  inStock: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const productImageSchema = new Schema<IProductImage>(
  {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    isPrimary: {
      type: Boolean,
      default: false,
    },
  },
  { _id: false }
);

const productSchema = new Schema<IProduct>(
  {
    title: {
      type: String,
      required: [true, 'Product title is required'],
      trim: true,
      maxlength: [200, 'Title cannot exceed 200 characters'],
    },
    description: {
      type: String,
      required: [true, 'Product description is required'],
      trim: true,
      maxlength: [2000, 'Description cannot exceed 2000 characters'],
    },
    price: {
      type: Number,
      required: [true, 'Product price is required'],
      min: [0, 'Price cannot be negative'],
    },
    images: {
      type: [productImageSchema],
      validate: {
        validator: function (v: IProductImage[]) {
          return v && v.length > 0;
        },
        message: 'At least one product image is required',
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
    timestamps: true,
  }
);

// Virtual to get primary image easily
productSchema.virtual('primaryImage').get(function () {
  const primary = this.images.find((img) => img.isPrimary);
  return primary || this.images[0];
});

// Ensure virtuals are included in JSON
productSchema.set('toJSON', { virtuals: true });
productSchema.set('toObject', { virtuals: true });

productSchema.index({ title: 'text', description: 'text', tags: 'text' });

export const Product = mongoose.model<IProduct>('Product', productSchema);
