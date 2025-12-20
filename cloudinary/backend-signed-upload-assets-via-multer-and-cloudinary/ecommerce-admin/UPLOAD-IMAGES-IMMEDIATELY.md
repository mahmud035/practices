Great observation! You've identified a real UX problem that many developers face. Let me first explain why this happens, then show you the solution along with the multiple image upload and gallery features.

---

## Part 1: Understanding the Slow "Add Product" Problem

### Why It Feels Slow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    CURRENT FLOW (SLOW)                                       │
└─────────────────────────────────────────────────────────────────────────────┘

  User clicks "Add Product"
          │
          ▼
  ┌───────────────────────────────────────────────────────────────────────┐
  │                    EVERYTHING HAPPENS SEQUENTIALLY                     │
  │                                                                        │
  │   1. Send form data to server ────────────────────────► 500ms         │
  │   2. Multer parses file ──────────────────────────────► 100ms         │
  │   3. Upload to Cloudinary ────────────────────────────► 2-5 seconds   │  ← THE BOTTLENECK!
  │   4. Save to MongoDB ─────────────────────────────────► 100ms         │
  │   5. Send response back ──────────────────────────────► 100ms         │
  │                                                                        │
  │   TOTAL: 3-6 seconds of waiting with no feedback!                     │
  └───────────────────────────────────────────────────────────────────────┘

  User sees: Spinner... Spinner... Spinner... Finally done!
  User thinks: "This is slow and I don't know what's happening"
```

### The Solution: Upload Images Immediately

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    IMPROVED FLOW (FAST PERCEIVED)                            │
└─────────────────────────────────────────────────────────────────────────────┘

  PHASE 1: When user selects/drops image (BACKGROUND)
  ────────────────────────────────────────────────────
          │
          ▼
  ┌─────────────────────────────────────────────────────┐
  │  1. Show local preview immediately ──────► instant  │
  │  2. Upload to Cloudinary in background              │
  │  3. Show progress bar ───────────────────► 2-5 sec  │
  │  4. Store Cloudinary response in state              │
  │  5. Show ✓ checkmark when done                      │
  └─────────────────────────────────────────────────────┘

  User sees: Preview → Progress → ✓ Done
  User does: Fills in title, description, price... (WHILE upload happens!)


  PHASE 2: When user clicks "Add Product" (FAST)
  ──────────────────────────────────────────────
          │
          ▼
  ┌─────────────────────────────────────────────────────┐
  │  1. Send form data + Cloudinary URLs ────► 100ms    │
  │  2. Save to MongoDB ─────────────────────► 100ms    │
  │  3. Send response ───────────────────────► 100ms    │
  │                                                      │
  │  TOTAL: ~300ms (feels instant!)                     │
  └─────────────────────────────────────────────────────┘

  User sees: Click → Done!
  User thinks: "Wow, that was fast!"
```

### The Key Insight

The upload time hasn't changed, but the **perceived** speed is dramatically better because:

1. Upload happens while user is doing other things (filling form)
2. User sees progress feedback
3. The final "submit" action is instant

---

## Part 2: Architecture for Immediate Upload + Multiple Images

### New API Structure

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    API ENDPOINTS                                             │
└─────────────────────────────────────────────────────────────────────────────┘

  EXISTING:
  ─────────
  POST   /api/products           → Create product (now accepts Cloudinary data)
  GET    /api/products           → List products
  GET    /api/products/:id       → Get product
  PUT    /api/products/:id       → Update product
  DELETE /api/products/:id       → Delete product

  NEW (for immediate upload):
  ───────────────────────────
  POST   /api/upload/image       → Upload single image, return Cloudinary data
  POST   /api/upload/images      → Upload multiple images, return Cloudinary data
  DELETE /api/upload/image       → Delete orphaned image (if user cancels form)
```

### Data Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    MULTIPLE IMAGE UPLOAD FLOW                                │
└─────────────────────────────────────────────────────────────────────────────┘

  Frontend State:
  ───────────────
  {
    images: [
      {
        id: "temp_1",           // Temporary ID for tracking
        file: File,             // Original file (for retry)
        preview: "blob:...",    // Local preview URL
        status: "uploading",    // "pending" | "uploading" | "success" | "error"
        progress: 45,           // Upload progress %
        cloudinary: null        // Will contain { public_id, url } after upload
      },
      {
        id: "temp_2",
        file: File,
        preview: "blob:...",
        status: "success",
        progress: 100,
        cloudinary: {
          public_id: "ecommerce/products/img_123",
          url: "https://res.cloudinary.com/..."
        }
      }
    ]
  }

  On "Add Product" Submit:
  ────────────────────────
  // Only send the Cloudinary data, not the files!
  POST /api/products
  {
    title: "Blue Sneakers",
    description: "...",
    price: 99.99,
    images: [
      { public_id: "ecommerce/products/img_123", url: "https://..." },
      { public_id: "ecommerce/products/img_456", url: "https://..." }
    ]
  }
```

---

## Part 3: Backend Implementation

### New Upload Routes

```typescript
// server/src/routes/uploadRoutes.ts

import express from 'express';
import {
  uploadSingleImage,
  uploadMultipleImages,
  deleteImage,
} from '../controllers/uploadController';
import { uploadSingle, uploadMultiple } from '../middleware/upload';

const router = express.Router();

// Upload single image immediately (returns Cloudinary data)
router.post('/image', uploadSingle, uploadSingleImage);

// Upload multiple images immediately (returns array of Cloudinary data)
router.post('/images', uploadMultiple, uploadMultipleImages);

// Delete an orphaned image (when user cancels form after uploading)
router.delete('/image/:publicId(*)', deleteImage); // (*) allows slashes in publicId

export default router;
```

### Upload Controller

```typescript
// server/src/controllers/uploadController.ts

import { Request, Response, NextFunction } from 'express';
import {
  uploadImage,
  deleteImage as deleteCloudinaryImage,
  CloudinaryError,
} from '../services/cloudinaryService';

interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: Express.Multer.File[];
}

/**
 * Upload a single image immediately
 * Returns Cloudinary data for frontend to store
 */
export const uploadSingleImage = async (
  req: MulterRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({
        success: false,
        message: 'No image file provided',
      });
      return;
    }

    // Get folder from query param or default
    const folder = (req.query.folder as string) || 'ecommerce/products';

    // Generate a name from original filename
    const baseName = req.file.originalname
      .replace(/\.[^/.]+$/, '') // Remove extension
      .substring(0, 30);

    const result = await uploadImage(req.file.buffer, folder, baseName);

    res.status(200).json({
      success: true,
      data: {
        public_id: result.public_id,
        url: result.secure_url,
        width: result.width,
        height: result.height,
        format: result.format,
        bytes: result.bytes,
      },
    });
  } catch (error) {
    if (error instanceof CloudinaryError) {
      res.status(500).json({
        success: false,
        message: 'Failed to upload image',
        error: error.message,
      });
      return;
    }
    next(error);
  }
};

/**
 * Upload multiple images immediately
 * Returns array of Cloudinary data
 */
export const uploadMultipleImages = async (
  req: MulterRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.files || !Array.isArray(req.files) || req.files.length === 0) {
      res.status(400).json({
        success: false,
        message: 'No image files provided',
      });
      return;
    }

    const folder = (req.query.folder as string) || 'ecommerce/products';

    // Upload all images in parallel for speed
    const uploadPromises = req.files.map(async (file, index) => {
      const baseName = file.originalname
        .replace(/\.[^/.]+$/, '')
        .substring(0, 30);

      try {
        const result = await uploadImage(file.buffer, folder, baseName);
        return {
          success: true,
          originalName: file.originalname,
          data: {
            public_id: result.public_id,
            url: result.secure_url,
            width: result.width,
            height: result.height,
            format: result.format,
            bytes: result.bytes,
          },
        };
      } catch (error) {
        return {
          success: false,
          originalName: file.originalname,
          error: error instanceof Error ? error.message : 'Upload failed',
        };
      }
    });

    const results = await Promise.all(uploadPromises);

    // Separate successes and failures
    const successful = results.filter((r) => r.success);
    const failed = results.filter((r) => !r.success);

    res.status(200).json({
      success: true,
      data: {
        uploaded: successful.map((r) => r.data),
        failed: failed.map((r) => ({
          originalName: r.originalName,
          error: r.error,
        })),
        summary: {
          total: results.length,
          successful: successful.length,
          failed: failed.length,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete an orphaned image
 * Used when user cancels form after uploading
 */
export const deleteImage = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { publicId } = req.params;

    if (!publicId) {
      res.status(400).json({
        success: false,
        message: 'Public ID is required',
      });
      return;
    }

    await deleteCloudinaryImage(publicId);

    res.status(200).json({
      success: true,
      message: 'Image deleted successfully',
    });
  } catch (error) {
    if (error instanceof CloudinaryError) {
      res.status(500).json({
        success: false,
        message: 'Failed to delete image',
        error: error.message,
      });
      return;
    }
    next(error);
  }
};
```

### Updated Multer Middleware

```typescript
// server/src/middleware/upload.ts

import multer, { FileFilterCallback } from 'multer';
import { Request } from 'express';

export class UploadValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UploadValidationError';
  }
}

const ALLOWED_MIME_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB per file
const MAX_FILES = 10; // Maximum files per upload

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
): void => {
  if (!ALLOWED_MIME_TYPES.includes(file.mimetype)) {
    cb(
      new UploadValidationError(
        `Invalid file type: ${file.mimetype}. Allowed: JPEG, PNG, WebP`
      )
    );
    return;
  }

  const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
  const fileExtension = file.originalname
    .toLowerCase()
    .slice(file.originalname.lastIndexOf('.'));

  if (!allowedExtensions.includes(fileExtension)) {
    cb(new UploadValidationError(`Invalid file extension: ${fileExtension}`));
    return;
  }

  cb(null, true);
};

const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter,
  limits: {
    fileSize: MAX_FILE_SIZE,
    files: MAX_FILES,
  },
});

// Single file upload
export const uploadSingle = upload.single('image');

// Multiple files upload (field name: 'images')
export const uploadMultiple = upload.array('images', MAX_FILES);
```

### Updated Product Model (Multiple Images)

```typescript
// server/src/models/Product.ts

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
```

### Updated Product Controller

```typescript
// server/src/controllers/productController.ts

import { Request, Response, NextFunction } from 'express';
import { Product, IProduct } from '../models/Product';
import { deleteImage, CloudinaryError } from '../services/cloudinaryService';

interface ProductImage {
  public_id: string;
  url: string;
  isPrimary?: boolean;
}

interface CreateProductBody {
  title: string;
  description: string;
  price: string;
  category: string;
  tags?: string;
  images: ProductImage[] | string; // Can be JSON string or array
}

/**
 * Create product with pre-uploaded images
 * Images are already in Cloudinary, we just save the references
 */
export const createProduct = async (
  req: Request<{}, {}, CreateProductBody>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { title, description, price, category, tags, images } = req.body;

    // Parse images if it's a string (from form data)
    let parsedImages: ProductImage[];
    if (typeof images === 'string') {
      parsedImages = JSON.parse(images);
    } else {
      parsedImages = images;
    }

    // Validate images
    if (!parsedImages || parsedImages.length === 0) {
      res.status(400).json({
        success: false,
        message: 'At least one product image is required',
      });
      return;
    }

    // Ensure at least one image is marked as primary
    const hasPrimary = parsedImages.some((img) => img.isPrimary);
    if (!hasPrimary) {
      parsedImages[0].isPrimary = true;
    }

    // Parse tags
    let parsedTags: string[] = [];
    if (tags) {
      parsedTags = typeof tags === 'string' ? JSON.parse(tags) : tags;
    }

    const product = await Product.create({
      title,
      description,
      price: parseFloat(price),
      category,
      tags: parsedTags,
      images: parsedImages,
    });

    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all products
 */
export const getProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const products = await Product.find().sort({ createdAt: -1 }).lean();

    res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get single product
 */
export const getProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404).json({
        success: false,
        message: 'Product not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update product
 */
export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const existingProduct = await Product.findById(req.params.id);

    if (!existingProduct) {
      res.status(404).json({
        success: false,
        message: 'Product not found',
      });
      return;
    }

    const { title, description, price, category, tags, images, inStock } =
      req.body;

    // Build update object
    const updateData: Partial<IProduct> = {};

    if (title) updateData.title = title;
    if (description) updateData.description = description;
    if (price) updateData.price = parseFloat(price);
    if (category) updateData.category = category;
    if (inStock !== undefined)
      updateData.inStock = inStock === 'true' || inStock === true;
    if (tags) {
      updateData.tags = typeof tags === 'string' ? JSON.parse(tags) : tags;
    }

    // Handle image updates
    if (images) {
      const newImages: ProductImage[] =
        typeof images === 'string' ? JSON.parse(images) : images;

      // Find images that were removed
      const newPublicIds = new Set(newImages.map((img) => img.public_id));
      const removedImages = existingProduct.images.filter(
        (img) => !newPublicIds.has(img.public_id)
      );

      // Delete removed images from Cloudinary
      for (const img of removedImages) {
        try {
          await deleteImage(img.public_id);
        } catch (error) {
          console.error(`Failed to delete image ${img.public_id}:`, error);
          // Continue with update even if deletion fails
        }
      }

      updateData.images = newImages;
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      data: updatedProduct,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete product
 */
export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404).json({
        success: false,
        message: 'Product not found',
      });
      return;
    }

    // Delete ALL images from Cloudinary
    const deletePromises = product.images.map((img) =>
      deleteImage(img.public_id).catch((err) => {
        console.error(`Failed to delete image ${img.public_id}:`, err);
        return null; // Continue even if some deletions fail
      })
    );

    await Promise.all(deletePromises);

    // Delete product from database
    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Product and all associated images deleted successfully',
      data: {
        deletedProductId: req.params.id,
        deletedImagesCount: product.images.length,
      },
    });
  } catch (error) {
    next(error);
  }
};
```

### Updated Server Index

```typescript
// server/src/index.ts

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import productRoutes from './routes/productRoutes';
import uploadRoutes from './routes/uploadRoutes'; // NEW
import { errorHandler } from './middleware/errorHandler';

dotenv.config();

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);
app.use(express.json({ limit: '50mb' })); // Increased for multiple images
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Routes
app.use('/api/products', productRoutes);
app.use('/api/upload', uploadRoutes); // NEW

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  });
```

---

## Part 4: Frontend Implementation

### Updated API Layer

```typescript
// client/src/api/products.ts

import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Types
export interface ProductImage {
  public_id: string;
  url: string;
  isPrimary?: boolean;
}

export interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  images: ProductImage[];
  primaryImage: ProductImage;
  tags: string[];
  category: string;
  inStock: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateProductData {
  title: string;
  description: string;
  price: number;
  tags: string[];
  category: string;
  images: ProductImage[]; // Pre-uploaded Cloudinary data
}

export interface UploadedImage {
  public_id: string;
  url: string;
  width: number;
  height: number;
  format: string;
  bytes: number;
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
}

// Product API Functions

export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get<ApiResponse<Product[]>>('/products');
  return response.data.data;
};

export const getProduct = async (id: string): Promise<Product> => {
  const response = await api.get<ApiResponse<Product>>(`/products/${id}`);
  return response.data.data;
};

export const createProduct = async (
  data: CreateProductData
): Promise<Product> => {
  // Now sending JSON since images are already uploaded
  const response = await api.post<ApiResponse<Product>>('/products', {
    ...data,
    price: data.price.toString(),
    tags: JSON.stringify(data.tags),
    images: data.images,
  });
  return response.data.data;
};

export const updateProduct = async (
  id: string,
  data: Partial<CreateProductData>
): Promise<Product> => {
  const response = await api.put<ApiResponse<Product>>(`/products/${id}`, {
    ...data,
    price: data.price?.toString(),
    tags: data.tags ? JSON.stringify(data.tags) : undefined,
  });
  return response.data.data;
};

export const deleteProduct = async (
  id: string
): Promise<{ deletedProductId: string }> => {
  const response = await api.delete<ApiResponse<{ deletedProductId: string }>>(
    `/products/${id}`
  );
  return response.data.data;
};

// Upload API Functions

export const uploadImage = async (
  file: File,
  onProgress?: (progress: number) => void
): Promise<UploadedImage> => {
  const formData = new FormData();
  formData.append('image', file);

  const response = await api.post<ApiResponse<UploadedImage>>(
    '/upload/image',
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        if (progressEvent.total && onProgress) {
          const progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          onProgress(progress);
        }
      },
    }
  );

  return response.data.data;
};

export const uploadMultipleImages = async (
  files: File[],
  onProgress?: (fileIndex: number, progress: number) => void
): Promise<UploadedImage[]> => {
  // Upload files one by one for individual progress tracking
  const results: UploadedImage[] = [];

  for (let i = 0; i < files.length; i++) {
    const result = await uploadImage(files[i], (progress) => {
      onProgress?.(i, progress);
    });
    results.push(result);
  }

  return results;
};

export const deleteUploadedImage = async (publicId: string): Promise<void> => {
  await api.delete(`/upload/image/${encodeURIComponent(publicId)}`);
};
```

### Multi-Image Upload Component with Progress

```tsx
// client/src/components/MultiImageUpload.tsx

import React, { useState, useCallback, useRef } from 'react';
import {
  uploadImage,
  deleteUploadedImage,
  UploadedImage,
} from '../api/products';

// State for each image in the upload queue
export interface ImageUploadState {
  id: string; // Unique temp ID
  file: File; // Original file
  preview: string; // Local blob URL for preview
  status: 'pending' | 'uploading' | 'success' | 'error';
  progress: number; // 0-100
  error?: string;
  cloudinary?: UploadedImage; // Cloudinary response after upload
}

interface MultiImageUploadProps {
  maxImages?: number;
  value: ImageUploadState[];
  onChange: (images: ImageUploadState[]) => void;
}

export const MultiImageUpload: React.FC<MultiImageUploadProps> = ({
  maxImages = 10,
  value: images,
  onChange,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Generate unique ID
  const generateId = () =>
    `img_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  // Upload a single image
  const uploadSingleImage = async (imageState: ImageUploadState) => {
    // Update status to uploading
    onChange(
      images.map((img) =>
        img.id === imageState.id
          ? { ...img, status: 'uploading' as const, progress: 0 }
          : img
      )
    );

    try {
      const result = await uploadImage(imageState.file, (progress) => {
        // Update progress
        onChange(
          images.map((img) =>
            img.id === imageState.id ? { ...img, progress } : img
          )
        );
      });

      // Update with success
      onChange(
        images.map((img) =>
          img.id === imageState.id
            ? {
                ...img,
                status: 'success' as const,
                progress: 100,
                cloudinary: result,
              }
            : img
        )
      );
    } catch (error) {
      // Update with error
      onChange(
        images.map((img) =>
          img.id === imageState.id
            ? {
                ...img,
                status: 'error' as const,
                error: error instanceof Error ? error.message : 'Upload failed',
              }
            : img
        )
      );
    }
  };

  // Handle file selection
  const handleFiles = useCallback(
    async (files: FileList | File[]) => {
      const fileArray = Array.from(files);

      // Check if adding these would exceed limit
      const remainingSlots = maxImages - images.length;
      if (remainingSlots <= 0) {
        alert(`Maximum ${maxImages} images allowed`);
        return;
      }

      const filesToAdd = fileArray.slice(0, remainingSlots);

      // Validate files
      const validFiles = filesToAdd.filter((file) => {
        const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
        const maxSize = 5 * 1024 * 1024;

        if (!validTypes.includes(file.type)) {
          alert(`${file.name}: Invalid file type`);
          return false;
        }
        if (file.size > maxSize) {
          alert(`${file.name}: File too large (max 5MB)`);
          return false;
        }
        return true;
      });

      // Create image states
      const newImageStates: ImageUploadState[] = validFiles.map((file) => ({
        id: generateId(),
        file,
        preview: URL.createObjectURL(file),
        status: 'pending' as const,
        progress: 0,
      }));

      // Add to state
      const updatedImages = [...images, ...newImageStates];
      onChange(updatedImages);

      // Start uploading each image
      for (const imageState of newImageStates) {
        await uploadSingleImage(imageState);
      }
    },
    [images, maxImages, onChange]
  );

  // Handle drag and drop
  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  // Remove image
  const handleRemove = async (imageState: ImageUploadState) => {
    // If uploaded to Cloudinary, delete it
    if (imageState.cloudinary) {
      try {
        await deleteUploadedImage(imageState.cloudinary.public_id);
      } catch (error) {
        console.error('Failed to delete from Cloudinary:', error);
      }
    }

    // Revoke blob URL to prevent memory leak
    URL.revokeObjectURL(imageState.preview);

    // Remove from state
    onChange(images.filter((img) => img.id !== imageState.id));
  };

  // Retry failed upload
  const handleRetry = (imageState: ImageUploadState) => {
    uploadSingleImage(imageState);
  };

  // Set primary image
  const handleSetPrimary = (imageId: string) => {
    onChange(
      images.map((img) => ({
        ...img,
        cloudinary: img.cloudinary
          ? { ...img.cloudinary, isPrimary: img.id === imageId }
          : undefined,
      }))
    );
  };

  // Reorder images (drag to reorder)
  const handleMoveImage = (fromIndex: number, toIndex: number) => {
    const newImages = [...images];
    const [movedImage] = newImages.splice(fromIndex, 1);
    newImages.splice(toIndex, 0, movedImage);
    onChange(newImages);
  };

  return (
    <div className="multi-image-upload">
      <label className="multi-image-upload__label">
        Product Images *{' '}
        <span className="multi-image-upload__count">
          ({images.length}/{maxImages})
        </span>
      </label>

      {/* Drop Zone */}
      <div
        className={`multi-image-upload__dropzone ${
          isDragging ? 'multi-image-upload__dropzone--active' : ''
        }`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <svg
          className="multi-image-upload__icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <p className="multi-image-upload__text">
          <span className="multi-image-upload__text--highlight">
            Click to upload
          </span>{' '}
          or drag and drop
        </p>
        <p className="multi-image-upload__hint">
          JPEG, PNG, WebP (max 5MB each, up to {maxImages} images)
        </p>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        multiple
        onChange={(e) => e.target.files && handleFiles(e.target.files)}
        className="multi-image-upload__input"
      />

      {/* Image Preview Grid */}
      {images.length > 0 && (
        <div className="multi-image-upload__grid">
          {images.map((img, index) => (
            <div
              key={img.id}
              className={`image-preview ${
                img.status === 'error' ? 'image-preview--error' : ''
              }`}
              draggable
              onDragStart={(e) => {
                e.dataTransfer.setData('text/plain', index.toString());
              }}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const fromIndex = parseInt(
                  e.dataTransfer.getData('text/plain')
                );
                handleMoveImage(fromIndex, index);
              }}
            >
              {/* Image */}
              <img
                src={img.preview}
                alt="Preview"
                className="image-preview__img"
              />

              {/* Primary badge */}
              {index === 0 && (
                <span className="image-preview__primary-badge">Primary</span>
              )}

              {/* Progress overlay */}
              {img.status === 'uploading' && (
                <div className="image-preview__progress-overlay">
                  <div className="image-preview__progress-bar">
                    <div
                      className="image-preview__progress-fill"
                      style={{ width: `${img.progress}%` }}
                    />
                  </div>
                  <span className="image-preview__progress-text">
                    {img.progress}%
                  </span>
                </div>
              )}

              {/* Success overlay */}
              {img.status === 'success' && (
                <div className="image-preview__success-overlay">
                  <svg
                    className="image-preview__success-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              )}

              {/* Error overlay */}
              {img.status === 'error' && (
                <div className="image-preview__error-overlay">
                  <span className="image-preview__error-text">{img.error}</span>
                  <button
                    type="button"
                    onClick={() => handleRetry(img)}
                    className="image-preview__retry-btn"
                  >
                    Retry
                  </button>
                </div>
              )}

              {/* Action buttons */}
              <div className="image-preview__actions">
                {index !== 0 && img.status === 'success' && (
                  <button
                    type="button"
                    onClick={() => handleMoveImage(index, 0)}
                    className="image-preview__action-btn"
                    title="Set as primary"
                  >
                    ⭐
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => handleRemove(img)}
                  className="image-preview__action-btn image-preview__action-btn--remove"
                  title="Remove"
                >
                  ×
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <style>{`
        .multi-image-upload {
          margin-bottom: 1.5rem;
        }

        .multi-image-upload__label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: #374151;
        }

        .multi-image-upload__count {
          color: #6b7280;
          font-weight: normal;
        }

        .multi-image-upload__dropzone {
          border: 2px dashed #d1d5db;
          border-radius: 0.5rem;
          padding: 2rem;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s;
        }

        .multi-image-upload__dropzone:hover,
        .multi-image-upload__dropzone--active {
          border-color: #3b82f6;
          background-color: #eff6ff;
        }

        .multi-image-upload__icon {
          width: 2.5rem;
          height: 2.5rem;
          margin: 0 auto 0.75rem;
          color: #9ca3af;
        }

        .multi-image-upload__text {
          color: #6b7280;
          margin-bottom: 0.25rem;
        }

        .multi-image-upload__text--highlight {
          color: #3b82f6;
          font-weight: 500;
        }

        .multi-image-upload__hint {
          font-size: 0.875rem;
          color: #9ca3af;
        }

        .multi-image-upload__input {
          display: none;
        }

        .multi-image-upload__grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }

        .image-preview {
          position: relative;
          aspect-ratio: 1;
          border-radius: 0.5rem;
          overflow: hidden;
          background: #f3f4f6;
          cursor: move;
        }

        .image-preview--error {
          border: 2px solid #ef4444;
        }

        .image-preview__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .image-preview__primary-badge {
          position: absolute;
          top: 0.25rem;
          left: 0.25rem;
          padding: 0.125rem 0.5rem;
          background: #3b82f6;
          color: white;
          font-size: 0.625rem;
          font-weight: 600;
          border-radius: 0.25rem;
          text-transform: uppercase;
        }

        .image-preview__progress-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .image-preview__progress-bar {
          width: 80%;
          height: 4px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
          overflow: hidden;
        }

        .image-preview__progress-fill {
          height: 100%;
          background: #3b82f6;
          transition: width 0.2s;
        }

        .image-preview__progress-text {
          color: white;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .image-preview__success-overlay {
          position: absolute;
          bottom: 0.25rem;
          right: 0.25rem;
          width: 1.5rem;
          height: 1.5rem;
          background: #10b981;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-preview__success-icon {
          width: 1rem;
          height: 1rem;
          color: white;
        }

        .image-preview__error-overlay {
          position: absolute;
          inset: 0;
          background: rgba(239, 68, 68, 0.9);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.5rem;
        }

        .image-preview__error-text {
          color: white;
          font-size: 0.75rem;
          text-align: center;
        }

        .image-preview__retry-btn {
          padding: 0.25rem 0.75rem;
          background: white;
          color: #ef4444;
          border: none;
          border-radius: 0.25rem;
          font-size: 0.75rem;
          font-weight: 500;
          cursor: pointer;
        }

        .image-preview__actions {
          position: absolute;
          top: 0.25rem;
          right: 0.25rem;
          display: flex;
          gap: 0.25rem;
          opacity: 0;
          transition: opacity 0.2s;
        }

        .image-preview:hover .image-preview__actions {
          opacity: 1;
        }

        .image-preview__action-btn {
          width: 1.5rem;
          height: 1.5rem;
          border: none;
          border-radius: 0.25rem;
          background: rgba(0, 0, 0, 0.5);
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.875rem;
        }

        .image-preview__action-btn:hover {
          background: rgba(0, 0, 0, 0.7);
        }

        .image-preview__action-btn--remove:hover {
          background: #ef4444;
        }
      `}</style>
    </div>
  );
};
```

### Updated Product Form

```tsx
// client/src/components/ProductForm.tsx

import React, { useState } from 'react';
import { MultiImageUpload, ImageUploadState } from './MultiImageUpload';
import { useCreateProduct } from '../hooks/useProducts';
import { CreateProductData, ProductImage } from '../api/products';

interface ProductFormProps {
  onSuccess?: () => void;
}

export const ProductForm: React.FC<ProductFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    tags: '',
  });
  const [images, setImages] = useState<ImageUploadState[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const createMutation = useCreateProduct();

  // Check if all images are uploaded
  const allImagesUploaded =
    images.length > 0 && images.every((img) => img.status === 'success');
  const hasUploadingImages = images.some((img) => img.status === 'uploading');
  const hasErrorImages = images.some((img) => img.status === 'error');

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    if (!formData.price || parseFloat(formData.price) <= 0) {
      newErrors.price = 'Valid price is required';
    }
    if (!formData.category.trim()) {
      newErrors.category = 'Category is required';
    }
    if (images.length === 0) {
      newErrors.images = 'At least one product image is required';
    } else if (!allImagesUploaded) {
      newErrors.images = 'Please wait for all images to upload';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Convert image states to ProductImage format
    const productImages: ProductImage[] = images
      .filter((img) => img.cloudinary)
      .map((img, index) => ({
        public_id: img.cloudinary!.public_id,
        url: img.cloudinary!.url,
        isPrimary: index === 0,
      }));

    const productData: CreateProductData = {
      title: formData.title,
      description: formData.description,
      price: parseFloat(formData.price),
      category: formData.category,
      tags: formData.tags
        .split(',')
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0),
      images: productImages,
    };

    try {
      await createMutation.mutateAsync(productData);

      // Reset form
      setFormData({
        title: '',
        description: '',
        price: '',
        category: '',
        tags: '',
      });

      // Clean up blob URLs
      images.forEach((img) => URL.revokeObjectURL(img.preview));
      setImages([]);

      onSuccess?.();
    } catch (error) {
      console.error('Failed to create product:', error);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Determine submit button state
  const getSubmitButtonState = () => {
    if (createMutation.isPending) {
      return { disabled: true, text: 'Creating Product...', icon: 'spinner' };
    }
    if (hasUploadingImages) {
      return { disabled: true, text: 'Uploading Images...', icon: 'spinner' };
    }
    if (hasErrorImages) {
      return { disabled: true, text: 'Fix Image Errors First', icon: 'error' };
    }
    if (images.length === 0) {
      return { disabled: false, text: 'Add Product', icon: null };
    }
    if (!allImagesUploaded) {
      return { disabled: true, text: 'Waiting for Upload...', icon: 'spinner' };
    }
    return { disabled: false, text: 'Add Product', icon: 'check' };
  };

  const buttonState = getSubmitButtonState();

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <h2 className="product-form__title">Add New Product</h2>

      {/* Image upload - NOW AT THE TOP for better UX */}
      <MultiImageUpload
        maxImages={10}
        value={images}
        onChange={(newImages) => {
          setImages(newImages);
          if (errors.images) {
            setErrors((prev) => ({ ...prev, images: '' }));
          }
        }}
      />
      {errors.images && <p className="error-text">{errors.images}</p>}

      {/* Upload status indicator */}
      {images.length > 0 && (
        <div
          className={`upload-status ${
            allImagesUploaded ? 'upload-status--success' : ''
          }`}
        >
          {hasUploadingImages && (
            <>
              <span className="spinner-small"></span>
              Uploading images...
            </>
          )}
          {hasErrorImages && (
            <span className="upload-status--error">
              Some images failed to upload
            </span>
          )}
          {allImagesUploaded && (
            <>
              <svg
                className="upload-status__icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              All {images.length} image(s) uploaded to Cloudinary
            </>
          )}
        </div>
      )}

      <div className="product-form__field">
        <label htmlFor="title">Product Title *</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Enter product title"
          className={errors.title ? 'error' : ''}
        />
        {errors.title && <span className="error-text">{errors.title}</span>}
      </div>

      <div className="product-form__field">
        <label htmlFor="description">Description *</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Enter product description"
          rows={4}
          className={errors.description ? 'error' : ''}
        />
        {errors.description && (
          <span className="error-text">{errors.description}</span>
        )}
      </div>

      <div className="product-form__row">
        <div className="product-form__field">
          <label htmlFor="price">Price ($) *</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="0.00"
            step="0.01"
            min="0"
            className={errors.price ? 'error' : ''}
          />
          {errors.price && <span className="error-text">{errors.price}</span>}
        </div>

        <div className="product-form__field">
          <label htmlFor="category">Category *</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className={errors.category ? 'error' : ''}
          >
            <option value="">Select category</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="home">Home & Garden</option>
            <option value="sports">Sports & Outdoors</option>
            <option value="books">Books</option>
          </select>
          {errors.category && (
            <span className="error-text">{errors.category}</span>
          )}
        </div>
      </div>

      <div className="product-form__field">
        <label htmlFor="tags">Tags (comma-separated)</label>
        <input
          type="text"
          id="tags"
          name="tags"
          value={formData.tags}
          onChange={handleInputChange}
          placeholder="e.g., new, featured, sale"
        />
      </div>

      <button
        type="submit"
        className={`product-form__submit ${
          buttonState.icon === 'check' ? 'product-form__submit--ready' : ''
        }`}
        disabled={buttonState.disabled}
      >
        {buttonState.icon === 'spinner' && <span className="spinner"></span>}
        {buttonState.icon === 'check' && (
          <svg
            className="submit-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
        {buttonState.text}
      </button>

      {createMutation.isError && (
        <div className="product-form__error">
          Failed to create product. Please try again.
        </div>
      )}

      {createMutation.isSuccess && (
        <div className="product-form__success">
          Product created successfully!
        </div>
      )}

      <style>{`
        .product-form {
          max-width: 600px;
          margin: 0 auto;
          padding: 2rem;
          background: white;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .product-form__title {
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
          font-weight: 600;
          color: #111827;
        }

        .product-form__field {
          margin-bottom: 1.25rem;
        }

        .product-form__field label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: #374151;
        }

        .product-form__field input,
        .product-form__field textarea,
        .product-form__field select {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          font-size: 1rem;
          transition: border-color 0.2s;
        }

        .product-form__field input:focus,
        .product-form__field textarea:focus,
        .product-form__field select:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .product-form__field input.error,
        .product-form__field textarea.error,
        .product-form__field select.error {
          border-color: #ef4444;
        }

        .error-text {
          display: block;
          margin-top: 0.25rem;
          font-size: 0.875rem;
          color: #ef4444;
        }

        .product-form__row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .upload-status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem;
          background: #f3f4f6;
          border-radius: 0.375rem;
          margin-bottom: 1.25rem;
          font-size: 0.875rem;
          color: #6b7280;
        }

        .upload-status--success {
          background: #f0fdf4;
          color: #16a34a;
        }

        .upload-status--error {
          color: #dc2626;
        }

        .upload-status__icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        .product-form__submit {
          width: 100%;
          padding: 0.875rem;
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 0.375rem;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .product-form__submit:hover:not(:disabled) {
          background: #2563eb;
        }

        .product-form__submit:disabled {
          background: #93c5fd;
          cursor: not-allowed;
        }

        .product-form__submit--ready {
          background: #10b981;
        }

        .product-form__submit--ready:hover:not(:disabled) {
          background: #059669;
        }

        .submit-icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        .spinner {
          width: 1rem;
          height: 1rem;
          border: 2px solid white;
          border-top-color: transparent;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        .spinner-small {
          width: 0.875rem;
          height: 0.875rem;
          border: 2px solid #6b7280;
          border-top-color: transparent;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .product-form__error {
          margin-top: 1rem;
          padding: 0.75rem;
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 0.375rem;
          color: #dc2626;
        }

        .product-form__success {
          margin-top: 1rem;
          padding: 0.75rem;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 0.375rem;
          color: #16a34a;
        }
      `}</style>
    </form>
  );
};
```

### Image Gallery Component

```tsx
// client/src/components/ImageGallery.tsx

import React, { useState } from 'react';
import { ProductImage } from '../api/products';

interface ImageGalleryProps {
  images: ProductImage[];
  productTitle: string;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  productTitle,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!images || images.length === 0) {
    return (
      <div className="image-gallery__placeholder">No images available</div>
    );
  }

  const selectedImage = images[selectedIndex];

  // Generate Cloudinary transformation URLs
  const getThumbnailUrl = (url: string) => {
    // Insert transformation before /upload/
    return url.replace('/upload/', '/upload/w_100,h_100,c_fill,q_auto,f_auto/');
  };

  const getMainUrl = (url: string) => {
    return url.replace(
      '/upload/',
      '/upload/w_600,h_600,c_limit,q_auto,f_auto/'
    );
  };

  const getFullUrl = (url: string) => {
    return url.replace(
      '/upload/',
      '/upload/w_1200,h_1200,c_limit,q_auto,f_auto/'
    );
  };

  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') setIsLightboxOpen(false);
  };

  return (
    <div className="image-gallery" onKeyDown={handleKeyDown} tabIndex={0}>
      {/* Main Image */}
      <div
        className="image-gallery__main"
        onClick={() => setIsLightboxOpen(true)}
      >
        <img
          src={getMainUrl(selectedImage.url)}
          alt={`${productTitle} - Image ${selectedIndex + 1}`}
          className="image-gallery__main-img"
        />
        <div className="image-gallery__zoom-hint">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
            />
          </svg>
          Click to zoom
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="image-gallery__thumbnails">
          {images.map((img, index) => (
            <button
              key={img.public_id}
              className={`image-gallery__thumbnail ${
                index === selectedIndex
                  ? 'image-gallery__thumbnail--active'
                  : ''
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={getThumbnailUrl(img.url)}
                alt={`${productTitle} - Thumbnail ${index + 1}`}
              />
            </button>
          ))}
        </div>
      )}

      {/* Navigation arrows for main image */}
      {images.length > 1 && (
        <>
          <button
            className="image-gallery__nav image-gallery__nav--prev"
            onClick={handlePrevious}
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="image-gallery__nav image-gallery__nav--next"
            onClick={handleNext}
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="lightbox" onClick={() => setIsLightboxOpen(false)}>
          <div
            className="lightbox__content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={getFullUrl(selectedImage.url)}
              alt={`${productTitle} - Full size`}
              className="lightbox__img"
            />

            {images.length > 1 && (
              <>
                <button
                  className="lightbox__nav lightbox__nav--prev"
                  onClick={handlePrevious}
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  className="lightbox__nav lightbox__nav--next"
                  onClick={handleNext}
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}

            <button
              className="lightbox__close"
              onClick={() => setIsLightboxOpen(false)}
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="lightbox__counter">
              {selectedIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .image-gallery {
          position: relative;
          outline: none;
        }

        .image-gallery__main {
          position: relative;
          aspect-ratio: 1;
          border-radius: 0.5rem;
          overflow: hidden;
          background: #f3f4f6;
          cursor: zoom-in;
        }

        .image-gallery__main-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .image-gallery__zoom-hint {
          position: absolute;
          bottom: 0.5rem;
          right: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.25rem 0.5rem;
          background: rgba(0, 0, 0, 0.5);
          color: white;
          font-size: 0.75rem;
          border-radius: 0.25rem;
          opacity: 0;
          transition: opacity 0.2s;
        }

        .image-gallery__main:hover .image-gallery__zoom-hint {
          opacity: 1;
        }

        .image-gallery__zoom-hint svg {
          width: 1rem;
          height: 1rem;
        }

        .image-gallery__thumbnails {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.75rem;
          overflow-x: auto;
          padding-bottom: 0.25rem;
        }

        .image-gallery__thumbnail {
          flex-shrink: 0;
          width: 4rem;
          height: 4rem;
          border: 2px solid transparent;
          border-radius: 0.375rem;
          overflow: hidden;
          cursor: pointer;
          padding: 0;
          background: #f3f4f6;
          transition: border-color 0.2s;
        }

        .image-gallery__thumbnail:hover {
          border-color: #93c5fd;
        }

        .image-gallery__thumbnail--active {
          border-color: #3b82f6;
        }

        .image-gallery__thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .image-gallery__nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 2.5rem;
          height: 2.5rem;
          border: none;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          opacity: 0;
          transition: opacity 0.2s;
        }

        .image-gallery:hover .image-gallery__nav {
          opacity: 1;
        }

        .image-gallery__nav:hover {
          background: white;
        }

        .image-gallery__nav svg {
          width: 1.25rem;
          height: 1.25rem;
          color: #374151;
        }

        .image-gallery__nav--prev {
          left: 0.5rem;
        }

        .image-gallery__nav--next {
          right: 0.5rem;
        }

        .image-gallery__placeholder {
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f3f4f6;
          border-radius: 0.5rem;
          color: #9ca3af;
        }

        /* Lightbox */
        .lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.95);
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox__content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
        }

        .lightbox__img {
          max-width: 100%;
          max-height: 90vh;
          object-fit: contain;
        }

        .lightbox__nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 3rem;
          height: 3rem;
          border: none;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox__nav:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .lightbox__nav svg {
          width: 1.5rem;
          height: 1.5rem;
          color: white;
        }

        .lightbox__nav--prev {
          left: -4rem;
        }

        .lightbox__nav--next {
          right: -4rem;
        }

        .lightbox__close {
          position: absolute;
          top: -3rem;
          right: 0;
          width: 2.5rem;
          height: 2.5rem;
          border: none;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox__close:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .lightbox__close svg {
          width: 1.25rem;
          height: 1.25rem;
          color: white;
        }

        .lightbox__counter {
          position: absolute;
          bottom: -2rem;
          left: 50%;
          transform: translateX(-50%);
          color: white;
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          .lightbox__nav--prev {
            left: 0.5rem;
          }
          .lightbox__nav--next {
            right: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};
```

### Updated Product List with Gallery

```tsx
// client/src/components/ProductList.tsx

import React, { useState } from 'react';
import { useProducts, useDeleteProduct } from '../hooks/useProducts';
import { DeleteConfirmation } from './DeleteConfirmation';
import { ImageGallery } from './ImageGallery';
import { Product } from '../api/products';

export const ProductList: React.FC = () => {
  const { data: products, isLoading, error } = useProducts();
  const deleteMutation = useDeleteProduct();

  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [deleteSuccess, setDeleteSuccess] = useState<string | null>(null);

  const handleDeleteClick = (product: Product) => {
    setProductToDelete(product);
  };

  const handleDeleteConfirm = async () => {
    if (!productToDelete) return;

    try {
      await deleteMutation.mutateAsync(productToDelete._id);
      setDeleteSuccess(
        `"${productToDelete.title}" and ${productToDelete.images.length} image(s) deleted successfully.`
      );
      setProductToDelete(null);
      setTimeout(() => setDeleteSuccess(null), 5000);
    } catch (error) {
      console.error('Delete failed:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="loading">
        <div className="loading__spinner"></div>
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-state">
        <p>Failed to load products. Please try again.</p>
      </div>
    );
  }

  return (
    <div className="product-list">
      <h2 className="product-list__title">
        Products ({products?.length || 0})
      </h2>

      {deleteSuccess && (
        <div className="product-list__success">✓ {deleteSuccess}</div>
      )}

      {products?.length === 0 ? (
        <div className="product-list__empty">
          <p>No products yet. Add your first product above!</p>
        </div>
      ) : (
        <div className="product-list__grid">
          {products?.map((product) => (
            <div key={product._id} className="product-card">
              {/* Image Gallery */}
              <div className="product-card__gallery">
                <ImageGallery
                  images={product.images}
                  productTitle={product.title}
                />
                {/* Image count badge */}
                {product.images.length > 1 && (
                  <span className="product-card__image-count">
                    {product.images.length} images
                  </span>
                )}
              </div>

              <div className="product-card__content">
                <h3 className="product-card__title">{product.title}</h3>
                <p className="product-card__description">
                  {product.description.length > 100
                    ? `${product.description.substring(0, 100)}...`
                    : product.description}
                </p>

                <div className="product-card__meta">
                  <span className="product-card__price">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="product-card__category">
                    {product.category}
                  </span>
                </div>

                {product.tags.length > 0 && (
                  <div className="product-card__tags">
                    {product.tags.map((tag) => (
                      <span key={tag} className="product-card__tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="product-card__actions">
                  <button className="product-card__btn product-card__btn--edit">
                    Edit
                  </button>
                  <button
                    className="product-card__btn product-card__btn--delete"
                    onClick={() => handleDeleteClick(product)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <DeleteConfirmation
        isOpen={!!productToDelete}
        productTitle={productToDelete?.title || ''}
        imageCount={productToDelete?.images.length || 0}
        isDeleting={deleteMutation.isPending}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setProductToDelete(null)}
      />

      <style>{`
        .product-list {
          padding: 2rem;
        }

        .product-list__title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: #111827;
        }

        .product-list__success {
          padding: 1rem;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 0.5rem;
          color: #16a34a;
          margin-bottom: 1.5rem;
        }

        .product-list__empty {
          text-align: center;
          padding: 3rem;
          background: #f9fafb;
          border-radius: 0.5rem;
          color: #6b7280;
        }

        .product-list__grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
        }

        .product-card {
          background: white;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: box-shadow 0.2s;
        }

        .product-card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .product-card__gallery {
          position: relative;
        }

        .product-card__image-count {
          position: absolute;
          top: 0.5rem;
          left: 0.5rem;
          padding: 0.25rem 0.5rem;
          background: rgba(0, 0, 0, 0.6);
          color: white;
          font-size: 0.75rem;
          border-radius: 0.25rem;
          z-index: 1;
        }

        .product-card__content {
          padding: 1rem;
        }

        .product-card__title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #111827;
          margin-bottom: 0.5rem;
        }

        .product-card__description {
          font-size: 0.875rem;
          color: #6b7280;
          margin-bottom: 0.75rem;
          line-height: 1.5;
        }

        .product-card__meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }

        .product-card__price {
          font-size: 1.25rem;
          font-weight: 700;
          color: #059669;
        }

        .product-card__category {
          font-size: 0.75rem;
          padding: 0.25rem 0.75rem;
          background: #f3f4f6;
          border-radius: 1rem;
          color: #4b5563;
          text-transform: capitalize;
        }

        .product-card__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .product-card__tag {
          font-size: 0.75rem;
          padding: 0.125rem 0.5rem;
          background: #eff6ff;
          color: #2563eb;
          border-radius: 0.25rem;
        }

        .product-card__actions {
          display: flex;
          gap: 0.5rem;
        }

        .product-card__btn {
          flex: 1;
          padding: 0.5rem;
          border: none;
          border-radius: 0.375rem;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s;
        }

        .product-card__btn--edit {
          background: #f3f4f6;
          color: #374151;
        }

        .product-card__btn--edit:hover {
          background: #e5e7eb;
        }

        .product-card__btn--delete {
          background: #fef2f2;
          color: #dc2626;
        }

        .product-card__btn--delete:hover {
          background: #fee2e2;
        }

        .loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem;
          color: #6b7280;
        }

        .loading__spinner {
          width: 2rem;
          height: 2rem;
          border: 3px solid #e5e7eb;
          border-top-color: #3b82f6;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          margin-bottom: 1rem;
        }

        .error-state {
          padding: 2rem;
          text-align: center;
          color: #dc2626;
          background: #fef2f2;
          border-radius: 0.5rem;
          margin: 2rem;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
```

### Updated Delete Confirmation (for multiple images)

```tsx
// client/src/components/DeleteConfirmation.tsx

import React from 'react';

interface DeleteConfirmationProps {
  isOpen: boolean;
  productTitle: string;
  imageCount: number; // NEW
  isDeleting: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({
  isOpen,
  productTitle,
  imageCount,
  isDeleting,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal__icon">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <h3 className="modal__title">Delete Product</h3>

        <p className="modal__message">
          Are you sure you want to delete <strong>"{productTitle}"</strong>?
        </p>

        <p className="modal__warning">
          This will permanently delete {imageCount} image
          {imageCount !== 1 ? 's' : ''} from Cloudinary. This action cannot be
          undone.
        </p>

        <div className="modal__actions">
          <button
            type="button"
            onClick={onCancel}
            className="modal__btn modal__btn--cancel"
            disabled={isDeleting}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="modal__btn modal__btn--delete"
            disabled={isDeleting}
          >
            {isDeleting ? (
              <>
                <span className="spinner"></span>
                Deleting {imageCount} image{imageCount !== 1 ? 's' : ''}...
              </>
            ) : (
              'Delete Product'
            )}
          </button>
        </div>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 50;
        }

        .modal {
          background: white;
          border-radius: 0.5rem;
          padding: 1.5rem;
          max-width: 400px;
          width: 90%;
          text-align: center;
        }

        .modal__icon {
          width: 3rem;
          height: 3rem;
          margin: 0 auto 1rem;
          background: #fef2f2;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal__icon svg {
          width: 1.5rem;
          height: 1.5rem;
          color: #ef4444;
        }

        .modal__title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #111827;
          margin-bottom: 0.5rem;
        }

        .modal__message {
          color: #374151;
          margin-bottom: 0.5rem;
          line-height: 1.5;
        }

        .modal__warning {
          color: #dc2626;
          font-size: 0.875rem;
          margin-bottom: 1.5rem;
          padding: 0.5rem;
          background: #fef2f2;
          border-radius: 0.25rem;
        }

        .modal__actions {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
        }

        .modal__btn {
          padding: 0.625rem 1.25rem;
          border-radius: 0.375rem;
          font-weight: 500;
          cursor: pointer;
          border: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .modal__btn--cancel {
          background: #f3f4f6;
          color: #374151;
        }

        .modal__btn--cancel:hover:not(:disabled) {
          background: #e5e7eb;
        }

        .modal__btn--delete {
          background: #ef4444;
          color: white;
        }

        .modal__btn--delete:hover:not(:disabled) {
          background: #dc2626;
        }

        .modal__btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .spinner {
          width: 1rem;
          height: 1rem;
          border: 2px solid currentColor;
          border-top-color: transparent;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
```

---

## Part 5: Summary - The Key Changes

### UX Improvement Recap

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    BEFORE vs AFTER                                           │
└─────────────────────────────────────────────────────────────────────────────┘

  BEFORE (Slow perceived):
  ─────────────────────────
  1. User fills form
  2. User selects image
  3. User clicks "Add Product"
  4. WAIT 3-6 seconds (upload + save)
  5. Done

  User perception: "The submit button is slow"


  AFTER (Fast perceived):
  ────────────────────────
  1. User selects image → Immediate preview + background upload
  2. User fills form (WHILE image uploads)
  3. User sees "✓ All images uploaded"
  4. User clicks "Add Product"
  5. Done in ~300ms

  User perception: "Everything is instant!"
```

### What We Built

| Feature               | Description                                             |
| --------------------- | ------------------------------------------------------- |
| **Immediate Upload**  | Images upload as soon as selected, not on form submit   |
| **Progress Feedback** | Real-time progress bar for each image                   |
| **Multiple Images**   | Support for up to 10 images per product                 |
| **Drag & Reorder**    | Drag images to change order, first = primary            |
| **Image Gallery**     | Thumbnails, zoom, lightbox, keyboard navigation         |
| **Smart Delete**      | Deletes all images from Cloudinary when product deleted |
| **Error Handling**    | Retry failed uploads, graceful error messages           |

### API Changes Summary

| Endpoint                             | Purpose                             |
| ------------------------------------ | ----------------------------------- |
| `POST /api/upload/image`             | Upload single image immediately     |
| `POST /api/upload/images`            | Upload multiple images immediately  |
| `DELETE /api/upload/image/:publicId` | Delete orphaned image               |
| `POST /api/products`                 | Now accepts pre-uploaded image data |

This architecture scales well and provides a much better user experience. The upload time is the same, but users don't notice it because they're busy filling out the form while images upload in the background!
