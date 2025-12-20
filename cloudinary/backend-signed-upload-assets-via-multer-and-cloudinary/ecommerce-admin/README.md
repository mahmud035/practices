# Complete Guide: File Uploading with Multer & Image Optimization with Cloudinary

I'll give you a comprehensive walkthrough that builds your mental model first, then shows you exactly how to implement everything for your e-commerce project.

---

## Part 1: Building Your Mental Model

### The Big Picture: What Happens When an Admin Uploads a Product Image?

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           THE UPLOAD FLOW                                    │
└─────────────────────────────────────────────────────────────────────────────┘

  ADMIN'S BROWSER                YOUR SERVER                    CLOUDINARY
  ─────────────────              ───────────────                ───────────────
        │                              │                              │
        │  1. Selects image file       │                              │
        │  ──────────────────────►     │                              │
        │     (multipart/form-data)    │                              │
        │                              │                              │
        │                     2. Multer receives &                    │
        │                        temporarily stores                   │
        │                        the file in memory                   │
        │                        or disk                              │
        │                              │                              │
        │                              │  3. Upload to Cloudinary     │
        │                              │  ───────────────────────►    │
        │                              │                              │
        │                              │  4. Cloudinary processes:    │
        │                              │     • Stores original        │
        │                              │     • Creates optimized      │
        │                              │       versions               │
        │                              │     • Returns public_id      │
        │                              │       and secure_url         │
        │                              │  ◄───────────────────────    │
        │                              │                              │
        │                     5. Save product to MongoDB              │
        │                        (with Cloudinary URL)                │
        │                              │                              │
        │  6. Return success +         │                              │
        │     image preview URL        │                              │
        │  ◄──────────────────────     │                              │
        │                              │                              │
```

### Why This Architecture?

**Why Multer?**

- Browsers send files as `multipart/form-data` (not JSON)
- Express can't parse this format natively
- Multer extracts the file and makes it available as `req.file`

**Why Cloudinary (not storing on your server)?**

- Your server disk fills up quickly with images
- No CDN = slow image loading for users far from your server
- No automatic optimization = large files, slow pages
- Cloudinary handles all of this + gives you transformation URLs

**Why the Free Tier Works for You:**

- 25 GB storage
- 25 GB bandwidth/month
- Automatic optimization reduces both storage and bandwidth usage

---

## Part 2: Understanding Multer Deeply

### What Multer Actually Does

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         MULTER'S JOB                                         │
└─────────────────────────────────────────────────────────────────────────────┘

  INCOMING REQUEST                    MULTER MIDDLEWARE                OUTPUT
  ─────────────────                   ─────────────────                ──────

  Content-Type:                       Parses the boundary,             req.file = {
  multipart/form-data;                extracts file bytes,               fieldname: 'image',
  boundary=----WebKit...              validates, and stores              originalname: 'photo.jpg',
                                                                         mimetype: 'image/jpeg',
  ------WebKitFormBoundary                    │                          size: 245832,
  Content-Disposition:                        │                          buffer: <Buffer ff d8...>
  form-data; name="image";                    │                        }
  filename="photo.jpg"                        │
  Content-Type: image/jpeg                    │                        req.body = {
                                              │                          title: 'Product Name',
  [BINARY IMAGE DATA]                         ▼                          price: '99.99'
  ------WebKitFormBoundary                                             }
  Content-Disposition:                 TWO STORAGE OPTIONS:
  form-data; name="title"
                                       Memory Storage:
  Product Name                         • File stays in RAM
  ------WebKitFormBoundary             • Fast, no disk I/O
                                       • Good for small files
                                       • We'll use this (upload to Cloudinary immediately)

                                       Disk Storage:
                                       • File saved to temp folder
                                       • Better for large files
                                       • Need to clean up after
```

### Multer Configuration Options Explained

```javascript
// This is what each option means and when to use it

const multer = require('multer');

// OPTION 1: Memory Storage (We'll use this)
// File stays in RAM as a Buffer - perfect for immediate upload to Cloudinary
const memoryStorage = multer.memoryStorage();

// OPTION 2: Disk Storage (Alternative)
// File saved to disk - use if files are very large or you need to process locally
const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'temp/uploads/'); // Where to save
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

// FILE FILTER: Validate before accepting
const fileFilter = (req, file, cb) => {
  // file.mimetype tells us the actual file type
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true); // Accept file
  } else {
    cb(
      new Error('Invalid file type. Only JPEG, PNG, and WebP allowed.'),
      false
    );
  }
};

// LIMITS: Prevent abuse
const limits = {
  fileSize: 5 * 1024 * 1024, // 5 MB max
  files: 1, // Max 1 file per request (for single upload)
};

// PUTTING IT TOGETHER
const upload = multer({
  storage: memoryStorage,
  fileFilter: fileFilter,
  limits: limits,
});
```

---

## Part 3: Understanding Cloudinary Deeply

### How Cloudinary Organizes Your Assets

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    YOUR CLOUDINARY ACCOUNT: assetvault                       │
└─────────────────────────────────────────────────────────────────────────────┘

  ROOT
    │
    ├── ecommerce/                    ◄── Project folder
    │     │
    │     ├── products/               ◄── Asset type folder
    │     │     ├── prod_abc123       ◄── public_id (your reference)
    │     │     ├── prod_def456
    │     │     └── prod_ghi789
    │     │
    │     ├── categories/
    │     │     ├── cat_electronics
    │     │     └── cat_clothing
    │     │
    │     └── banners/
    │           ├── banner_summer_sale
    │           └── banner_new_arrivals
    │
    └── portfolio/                    ◄── Another project
          └── projects/
                └── ...

  NAMING CONVENTION I RECOMMEND:
  ────────────────────────────────
  folder: "ecommerce/products"
  public_id: "prod_" + timestamp + "_" + sanitized_name

  Example: "ecommerce/products/prod_1703001234567_blue_sneakers"

  This gives you:
  • Easy filtering in Cloudinary dashboard
  • Unique IDs (timestamp prevents collisions)
  • Human-readable names for debugging
```

### Cloudinary URL Anatomy

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         CLOUDINARY URL STRUCTURE                             │
└─────────────────────────────────────────────────────────────────────────────┘

  https://res.cloudinary.com/assetvault/image/upload/v1703001234/ecommerce/products/prod_abc123.jpg
  ─────────────────────────────────────────────────────────────────────────────────────────────────
       │                    │        │      │         │                │                    │
       │                    │        │      │         │                │                    │
  Base URL            Cloud Name   Type  Action   Version          Folder Path        Public ID
                                                  (cache)


  WITH TRANSFORMATIONS (The Magic!):
  ──────────────────────────────────

  https://res.cloudinary.com/assetvault/image/upload/w_400,h_400,c_fill,q_auto,f_auto/ecommerce/products/prod_abc123.jpg
                                                   ─────────────────────────────────
                                                              │
                                                   Transformation Parameters:
                                                   • w_400: width 400px
                                                   • h_400: height 400px
                                                   • c_fill: crop to fill (like object-fit: cover)
                                                   • q_auto: automatic quality (reduces size)
                                                   • f_auto: automatic format (webp if supported)

  COMMON TRANSFORMATIONS FOR E-COMMERCE:
  ─────────────────────────────────────

  Thumbnail (product grid):     w_300,h_300,c_fill,q_auto,f_auto
  Product detail:               w_800,h_800,c_limit,q_auto,f_auto
  Zoom view:                    w_1200,h_1200,c_limit,q_auto,f_auto
  Admin preview:                w_200,h_200,c_fill,q_auto,f_auto
```

### The Upload Response Explained

```javascript
// When you upload to Cloudinary, you get back something like this:

{
  "public_id": "ecommerce/products/prod_1703001234567_blue_sneakers",
  "version": 1703001234,
  "signature": "abc123...",
  "width": 2000,           // Original dimensions
  "height": 2000,
  "format": "jpg",         // Original format
  "resource_type": "image",
  "created_at": "2024-12-19T10:00:34Z",
  "bytes": 524288,         // Original size in bytes
  "type": "upload",
  "url": "http://res.cloudinary.com/...",      // HTTP URL (don't use)
  "secure_url": "https://res.cloudinary.com/...", // HTTPS URL (use this!)
  "asset_id": "abc123def456",
  "folder": "ecommerce/products"
}

// WHAT YOU SAVE TO YOUR DATABASE:
const productData = {
  image: {
    public_id: result.public_id,    // Need this for deletion!
    url: result.secure_url          // Display URL
  }
};

// WHY SAVE public_id?
// Because to DELETE an image, you need the public_id:
await cloudinary.uploader.destroy('ecommerce/products/prod_abc123');
```

---

## Part 4: Step-by-Step Implementation

Now let's build everything. I'll create a complete, working example.

### Project Structure

```
ecommerce-admin/
├── server/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.ts
│   │   │   └── cloudinary.ts
│   │   ├── middleware/
│   │   │   ├── upload.ts
│   │   │   └── errorHandler.ts
│   │   ├── models/
│   │   │   └── Product.ts
│   │   ├── controllers/
│   │   │   └── productController.ts
│   │   ├── routes/
│   │   │   └── productRoutes.ts
│   │   ├── services/
│   │   │   └── cloudinaryService.ts
│   │   └── index.ts
│   ├── package.json
│   └── .env
│
└── client/
    ├── src/
    │   ├── api/
    │   │   └── products.ts
    │   ├── hooks/
    │   │   └── useProducts.ts
    │   ├── components/
    │   │   ├── ProductForm.tsx
    │   │   ├── ProductList.tsx
    │   │   ├── ImageUpload.tsx
    │   │   └── DeleteConfirmation.tsx
    │   ├── pages/
    │   │   └── AdminDashboard.tsx
    │   └── App.tsx
    └── package.json
```

---

### Backend Implementation

**Step 1: Environment Setup**

```bash
# server/.env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ecommerce
CLOUDINARY_CLOUD_NAME=assetvault
CLOUDINARY_API_KEY=your_api_key_here
CLOUDINARY_API_SECRET=your_api_secret_here
```

**Step 2: Cloudinary Configuration**

```typescript
// server/src/config/cloudinary.ts

import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary with your credentials
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;
```

**Step 3: Cloudinary Service (The Core Logic)**

```typescript
// server/src/services/cloudinaryService.ts

import cloudinary from '../config/cloudinary';
import { UploadApiResponse, UploadApiErrorResponse } from 'cloudinary';

// Define the structure of our upload result
interface CloudinaryUploadResult {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  format: string;
  bytes: number;
}

// Custom error for Cloudinary operations
export class CloudinaryError extends Error {
  constructor(message: string, public originalError?: any) {
    super(message);
    this.name = 'CloudinaryError';
  }
}

/**
 * Upload an image buffer to Cloudinary
 *
 * @param buffer - The file buffer from Multer
 * @param folder - The folder path in Cloudinary (e.g., "ecommerce/products")
 * @param filename - A sanitized filename for the public_id
 */
export const uploadImage = async (
  buffer: Buffer,
  folder: string,
  filename: string
): Promise<CloudinaryUploadResult> => {
  // Generate a unique public_id with timestamp
  const timestamp = Date.now();
  const sanitizedFilename = filename
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '_') // Replace special chars with underscore
    .substring(0, 50); // Limit length

  const publicId = `${folder}/prod_${timestamp}_${sanitizedFilename}`;

  return new Promise((resolve, reject) => {
    // Create an upload stream
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        // UPLOAD OPTIONS - These are important!
        public_id: publicId,
        folder: undefined, // We're including folder in public_id already
        resource_type: 'image',

        // OPTIMIZATION OPTIONS - Save storage and bandwidth
        transformation: [
          {
            quality: 'auto:good', // Automatic quality optimization
            fetch_format: 'auto', // Convert to WebP/AVIF if browser supports
          },
        ],

        // ORGANIZATION OPTIONS
        tags: ['product', 'ecommerce'], // Helps with bulk operations

        // UPLOAD BEHAVIOR
        overwrite: false, // Don't overwrite if exists
        invalidate: true, // Invalidate CDN cache if updating
      },
      (
        error: UploadApiErrorResponse | undefined,
        result: UploadApiResponse | undefined
      ) => {
        if (error) {
          reject(
            new CloudinaryError('Failed to upload image to Cloudinary', error)
          );
          return;
        }

        if (!result) {
          reject(new CloudinaryError('No result received from Cloudinary'));
          return;
        }

        resolve({
          public_id: result.public_id,
          secure_url: result.secure_url,
          width: result.width,
          height: result.height,
          format: result.format,
          bytes: result.bytes,
        });
      }
    );

    // Pipe the buffer to the upload stream
    uploadStream.end(buffer);
  });
};

/**
 * Delete an image from Cloudinary
 *
 * @param publicId - The public_id of the image to delete
 */
export const deleteImage = async (publicId: string): Promise<boolean> => {
  try {
    const result = await cloudinary.uploader.destroy(publicId, {
      resource_type: 'image',
      invalidate: true, // Invalidate CDN cache
    });

    // Cloudinary returns { result: 'ok' } on success
    // Returns { result: 'not found' } if image doesn't exist
    if (result.result === 'ok') {
      return true;
    } else if (result.result === 'not found') {
      console.warn(`Image not found in Cloudinary: ${publicId}`);
      return true; // Consider it a success if already gone
    } else {
      throw new CloudinaryError(`Unexpected result: ${result.result}`);
    }
  } catch (error) {
    throw new CloudinaryError('Failed to delete image from Cloudinary', error);
  }
};

/**
 * Generate optimized URLs for different use cases
 * This is useful because you store ONE image but serve MANY sizes
 */
export const getOptimizedUrl = (
  publicId: string,
  options: {
    width?: number;
    height?: number;
    crop?: 'fill' | 'limit' | 'fit' | 'scale';
  } = {}
): string => {
  const { width = 800, height = 800, crop = 'limit' } = options;

  return cloudinary.url(publicId, {
    transformation: [
      {
        width,
        height,
        crop,
        quality: 'auto',
        fetch_format: 'auto',
      },
    ],
    secure: true,
  });
};
```

**Step 4: Multer Middleware**

```typescript
// server/src/middleware/upload.ts

import multer, { FileFilterCallback } from 'multer';
import { Request } from 'express';

// Custom error for upload validation
export class UploadValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UploadValidationError';
  }
}

// Allowed MIME types for product images
const ALLOWED_MIME_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

// Max file size: 5MB (generous for product photos)
const MAX_FILE_SIZE = 5 * 1024 * 1024;

// File filter function
const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
): void => {
  // Check MIME type
  if (!ALLOWED_MIME_TYPES.includes(file.mimetype)) {
    cb(
      new UploadValidationError(
        `Invalid file type: ${file.mimetype}. Allowed types: JPEG, PNG, WebP`
      )
    );
    return;
  }

  // Additional check: file extension (some browsers might lie about MIME type)
  const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
  const fileExtension = file.originalname
    .toLowerCase()
    .slice(file.originalname.lastIndexOf('.'));

  if (!allowedExtensions.includes(fileExtension)) {
    cb(
      new UploadValidationError(
        `Invalid file extension: ${fileExtension}. Allowed: ${allowedExtensions.join(
          ', '
        )}`
      )
    );
    return;
  }

  cb(null, true);
};

// Configure multer with memory storage
// We use memory storage because we're immediately uploading to Cloudinary
const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter,
  limits: {
    fileSize: MAX_FILE_SIZE,
    files: 1, // Only allow 1 file per request
  },
});

// Export configured upload middleware
// .single('image') means we expect a single file in the 'image' field
export const uploadSingle = upload.single('image');

// For multiple images (e.g., product gallery)
export const uploadMultiple = upload.array('images', 5); // Max 5 images
```

**Step 5: Product Model**

```typescript
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
```

**Step 6: Product Controller**

```typescript
// server/src/controllers/productController.ts

import { Request, Response, NextFunction } from 'express';
import { Product, IProduct } from '../models/Product';
import {
  uploadImage,
  deleteImage,
  CloudinaryError,
} from '../services/cloudinaryService';
import { UploadValidationError } from '../middleware/upload';

// Type for the request with file
interface MulterRequest extends Request {
  file?: Express.Multer.File;
}

/**
 * Create a new product with image
 * POST /api/products
 */
export const createProduct = async (
  req: MulterRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // Validate that an image was uploaded
    if (!req.file) {
      res.status(400).json({
        success: false,
        message: 'Product image is required',
      });
      return;
    }

    // Extract product data from body
    const { title, description, price, tags, category } = req.body;

    // Validate required fields
    if (!title || !description || !price || !category) {
      res.status(400).json({
        success: false,
        message: 'Title, description, price, and category are required',
      });
      return;
    }

    // Upload image to Cloudinary
    // Using 'ecommerce/products' as the folder for organization
    const cloudinaryResult = await uploadImage(
      req.file.buffer,
      'ecommerce/products',
      title // Use title as base for filename
    );

    // Create product in database
    const product = await Product.create({
      title,
      description,
      price: parseFloat(price),
      tags: tags ? JSON.parse(tags) : [], // Tags come as JSON string from form
      category,
      image: {
        public_id: cloudinaryResult.public_id,
        url: cloudinaryResult.secure_url,
      },
    });

    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      data: product,
    });
  } catch (error) {
    // Handle specific error types
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
 * Get all products
 * GET /api/products
 */
export const getProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const products = await Product.find()
      .sort({ createdAt: -1 }) // Newest first
      .lean(); // Returns plain objects (faster)

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
 * GET /api/products/:id
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
 * PUT /api/products/:id
 */
export const updateProduct = async (
  req: MulterRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // Find existing product
    const existingProduct = await Product.findById(req.params.id);

    if (!existingProduct) {
      res.status(404).json({
        success: false,
        message: 'Product not found',
      });
      return;
    }

    // Prepare update data
    const updateData: Partial<IProduct> = {
      title: req.body.title || existingProduct.title,
      description: req.body.description || existingProduct.description,
      price: req.body.price
        ? parseFloat(req.body.price)
        : existingProduct.price,
      category: req.body.category || existingProduct.category,
      tags: req.body.tags ? JSON.parse(req.body.tags) : existingProduct.tags,
      inStock:
        req.body.inStock !== undefined
          ? req.body.inStock === 'true'
          : existingProduct.inStock,
    };

    // If new image uploaded, handle image replacement
    if (req.file) {
      // Upload new image first
      const cloudinaryResult = await uploadImage(
        req.file.buffer,
        'ecommerce/products',
        updateData.title || existingProduct.title
      );

      // Delete old image from Cloudinary
      await deleteImage(existingProduct.image.public_id);

      // Update image data
      updateData.image = {
        public_id: cloudinaryResult.public_id,
        url: cloudinaryResult.secure_url,
      };
    }

    // Update product in database
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
    if (error instanceof CloudinaryError) {
      res.status(500).json({
        success: false,
        message: 'Failed to process image',
        error: error.message,
      });
      return;
    }

    next(error);
  }
};

/**
 * Delete product
 * DELETE /api/products/:id
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

    // Delete image from Cloudinary FIRST
    // If this fails, we don't delete from DB (preventing orphaned records)
    await deleteImage(product.image.public_id);

    // Delete product from database
    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Product and associated image deleted successfully',
      data: {
        deletedProductId: req.params.id,
        deletedImageId: product.image.public_id,
      },
    });
  } catch (error) {
    if (error instanceof CloudinaryError) {
      res.status(500).json({
        success: false,
        message:
          'Failed to delete image from cloud storage. Product not deleted.',
        error: error.message,
      });
      return;
    }

    next(error);
  }
};
```

**Step 7: Routes**

```typescript
// server/src/routes/productRoutes.ts

import express from 'express';
import {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productController';
import { uploadSingle } from '../middleware/upload';

const router = express.Router();

// All routes are prefixed with /api/products

router.route('/').get(getProducts).post(uploadSingle, createProduct); // uploadSingle processes the file first

router
  .route('/:id')
  .get(getProduct)
  .put(uploadSingle, updateProduct)
  .delete(deleteProduct);

export default router;
```

**Step 8: Error Handler Middleware**

```typescript
// server/src/middleware/errorHandler.ts

import { Request, Response, NextFunction } from 'express';
import { UploadValidationError } from './upload';
import multer from 'multer';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error('Error:', err);

  // Multer file size error
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      res.status(400).json({
        success: false,
        message: 'File too large. Maximum size is 5MB.',
      });
      return;
    }
    if (err.code === 'LIMIT_FILE_COUNT') {
      res.status(400).json({
        success: false,
        message: 'Too many files. Maximum is 1 file.',
      });
      return;
    }
  }

  // Custom upload validation error
  if (err instanceof UploadValidationError) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
    return;
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    res.status(400).json({
      success: false,
      message: 'Validation error',
      errors: err.message,
    });
    return;
  }

  // Mongoose cast error (invalid ObjectId)
  if (err.name === 'CastError') {
    res.status(400).json({
      success: false,
      message: 'Invalid ID format',
    });
    return;
  }

  // Default error
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined,
  });
};
```

**Step 9: Main Server File**

```typescript
// server/src/index.ts

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import productRoutes from './routes/productRoutes';
import { errorHandler } from './middleware/errorHandler';

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: 'http://localhost:5173', // Vite default port
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/products', productRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error handler (must be last)
app.use(errorHandler);

// Database connection and server start
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

### Frontend Implementation

**Step 1: API Layer**

```typescript
// client/src/api/products.ts

import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

// Create axios instance with base config
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Types
export interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: {
    public_id: string;
    url: string;
  };
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
  image: File;
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
  count?: number;
}

// API Functions

/**
 * Get all products
 */
export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get<ApiResponse<Product[]>>('/products');
  return response.data.data;
};

/**
 * Get single product
 */
export const getProduct = async (id: string): Promise<Product> => {
  const response = await api.get<ApiResponse<Product>>(`/products/${id}`);
  return response.data.data;
};

/**
 * Create a new product
 * Uses FormData because we're uploading a file
 */
export const createProduct = async (
  data: CreateProductData
): Promise<Product> => {
  const formData = new FormData();

  // Append text fields
  formData.append('title', data.title);
  formData.append('description', data.description);
  formData.append('price', data.price.toString());
  formData.append('category', data.category);
  formData.append('tags', JSON.stringify(data.tags));

  // Append file - the key 'image' must match the multer field name
  formData.append('image', data.image);

  const response = await api.post<ApiResponse<Product>>('/products', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data.data;
};

/**
 * Update a product
 */
export const updateProduct = async (
  id: string,
  data: Partial<CreateProductData>
): Promise<Product> => {
  const formData = new FormData();

  if (data.title) formData.append('title', data.title);
  if (data.description) formData.append('description', data.description);
  if (data.price) formData.append('price', data.price.toString());
  if (data.category) formData.append('category', data.category);
  if (data.tags) formData.append('tags', JSON.stringify(data.tags));
  if (data.image) formData.append('image', data.image);

  const response = await api.put<ApiResponse<Product>>(
    `/products/${id}`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );

  return response.data.data;
};

/**
 * Delete a product
 */
export const deleteProduct = async (
  id: string
): Promise<{ deletedProductId: string; deletedImageId: string }> => {
  const response = await api.delete<
    ApiResponse<{ deletedProductId: string; deletedImageId: string }>
  >(`/products/${id}`);
  return response.data.data;
};
```

**Step 2: TanStack Query Hooks**

```typescript
// client/src/hooks/useProducts.ts

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  Product,
  CreateProductData,
} from '../api/products';

// Query key factory for consistency
export const productKeys = {
  all: ['products'] as const,
  detail: (id: string) => ['products', id] as const,
};

/**
 * Hook to fetch all products
 */
export const useProducts = () => {
  return useQuery({
    queryKey: productKeys.all,
    queryFn: getProducts,
  });
};

/**
 * Hook to fetch single product
 */
export const useProduct = (id: string) => {
  return useQuery({
    queryKey: productKeys.detail(id),
    queryFn: () => getProduct(id),
    enabled: !!id, // Only fetch if id exists
  });
};

/**
 * Hook to create a product
 */
export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProduct,
    onSuccess: (newProduct) => {
      // Invalidate products list to refetch
      queryClient.invalidateQueries({ queryKey: productKeys.all });
    },
  });
};

/**
 * Hook to update a product
 */
export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Partial<CreateProductData>;
    }) => updateProduct(id, data),
    onSuccess: (updatedProduct) => {
      // Update cache with new data
      queryClient.setQueryData(
        productKeys.detail(updatedProduct._id),
        updatedProduct
      );
      queryClient.invalidateQueries({ queryKey: productKeys.all });
    },
  });
};

/**
 * Hook to delete a product
 */
export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: (result) => {
      // Remove from cache
      queryClient.removeQueries({
        queryKey: productKeys.detail(result.deletedProductId),
      });
      queryClient.invalidateQueries({ queryKey: productKeys.all });
    },
  });
};
```

**Step 3: Image Upload Component**

```tsx
// client/src/components/ImageUpload.tsx

import React, { useState, useCallback, useRef } from 'react';

interface ImageUploadProps {
  onFileSelect: (file: File) => void;
  currentImageUrl?: string;
  error?: string;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  onFileSelect,
  currentImageUrl,
  error,
}) => {
  const [preview, setPreview] = useState<string | null>(
    currentImageUrl || null
  );
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle file selection
  const handleFileChange = useCallback(
    (file: File | null) => {
      if (!file) return;

      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        alert('Please select a JPEG, PNG, or WebP image.');
        return;
      }

      // Validate file size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB.');
        return;
      }

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);

      // Pass file to parent
      onFileSelect(file);
    },
    [onFileSelect]
  );

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    handleFileChange(file);
  };

  // Handle drag events
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

    const file = e.dataTransfer.files?.[0] || null;
    handleFileChange(file);
  };

  // Remove image
  const handleRemove = () => {
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="image-upload">
      <label className="image-upload__label">Product Image *</label>

      {preview ? (
        // Preview state
        <div className="image-upload__preview">
          <img src={preview} alt="Preview" className="image-upload__image" />
          <div className="image-upload__preview-overlay">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="image-upload__change-btn"
            >
              Change
            </button>
            <button
              type="button"
              onClick={handleRemove}
              className="image-upload__remove-btn"
            >
              Remove
            </button>
          </div>
        </div>
      ) : (
        // Upload state
        <div
          className={`image-upload__dropzone ${
            isDragging ? 'image-upload__dropzone--active' : ''
          }`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="image-upload__dropzone-content">
            <svg
              className="image-upload__icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="image-upload__text">
              <span className="image-upload__text--highlight">
                Click to upload
              </span>
              {' or drag and drop'}
            </p>
            <p className="image-upload__hint">JPEG, PNG, or WebP (max 5MB)</p>
          </div>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        onChange={handleInputChange}
        className="image-upload__input"
      />

      {error && <p className="image-upload__error">{error}</p>}

      <style>{`
        .image-upload {
          margin-bottom: 1.5rem;
        }

        .image-upload__label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: #374151;
        }

        .image-upload__dropzone {
          border: 2px dashed #d1d5db;
          border-radius: 0.5rem;
          padding: 2rem;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s;
        }

        .image-upload__dropzone:hover,
        .image-upload__dropzone--active {
          border-color: #3b82f6;
          background-color: #eff6ff;
        }

        .image-upload__icon {
          width: 3rem;
          height: 3rem;
          margin: 0 auto 1rem;
          color: #9ca3af;
        }

        .image-upload__text {
          color: #6b7280;
          margin-bottom: 0.5rem;
        }

        .image-upload__text--highlight {
          color: #3b82f6;
          font-weight: 500;
        }

        .image-upload__hint {
          font-size: 0.875rem;
          color: #9ca3af;
        }

        .image-upload__preview {
          position: relative;
          border-radius: 0.5rem;
          overflow: hidden;
          aspect-ratio: 1;
          max-width: 300px;
        }

        .image-upload__image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .image-upload__preview-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          opacity: 0;
          transition: opacity 0.2s;
        }

        .image-upload__preview:hover .image-upload__preview-overlay {
          opacity: 1;
        }

        .image-upload__change-btn,
        .image-upload__remove-btn {
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          font-weight: 500;
          cursor: pointer;
          border: none;
        }

        .image-upload__change-btn {
          background: white;
          color: #374151;
        }

        .image-upload__remove-btn {
          background: #ef4444;
          color: white;
        }

        .image-upload__input {
          display: none;
        }

        .image-upload__error {
          color: #ef4444;
          font-size: 0.875rem;
          margin-top: 0.5rem;
        }
      `}</style>
    </div>
  );
};
```

**Step 4: Product Form Component**

```tsx
// client/src/components/ProductForm.tsx

import React, { useState } from 'react';
import { ImageUpload } from './ImageUpload';
import { useCreateProduct } from '../hooks/useProducts';
import { CreateProductData } from '../api/products';

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
  const [image, setImage] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const createMutation = useCreateProduct();

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
    if (!image) {
      newErrors.image = 'Product image is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm() || !image) return;

    const productData: CreateProductData = {
      title: formData.title,
      description: formData.description,
      price: parseFloat(formData.price),
      category: formData.category,
      tags: formData.tags
        .split(',')
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0),
      image,
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
      setImage(null);

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
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <h2 className="product-form__title">Add New Product</h2>

      <ImageUpload
        onFileSelect={(file) => {
          setImage(file);
          if (errors.image) {
            setErrors((prev) => ({ ...prev, image: '' }));
          }
        }}
        error={errors.image}
      />

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
        className="product-form__submit"
        disabled={createMutation.isPending}
      >
        {createMutation.isPending ? (
          <>
            <span className="spinner"></span>
            Uploading...
          </>
        ) : (
          'Add Product'
        )}
      </button>

      {createMutation.isError && (
        <div className="product-form__error">
          Failed to create product. Please try again.
        </div>
      )}

      {createMutation.isSuccess && (
        <div className="product-form__success">
          Product created successfully! Image uploaded to Cloudinary.
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
          transition: background 0.2s;
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

        .spinner {
          width: 1rem;
          height: 1rem;
          border: 2px solid white;
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

**Step 5: Delete Confirmation Component**

```tsx
// client/src/components/DeleteConfirmation.tsx

import React from 'react';

interface DeleteConfirmationProps {
  isOpen: boolean;
  productTitle: string;
  isDeleting: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({
  isOpen,
  productTitle,
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
          This will also permanently delete the image from Cloudinary. This
          action cannot be undone.
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
                Deleting...
              </>
            ) : (
              'Delete'
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
          color: #6b7280;
          margin-bottom: 1.5rem;
          line-height: 1.5;
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

**Step 6: Product List Component**

```tsx
// client/src/components/ProductList.tsx

import React, { useState } from 'react';
import { useProducts, useDeleteProduct } from '../hooks/useProducts';
import { DeleteConfirmation } from './DeleteConfirmation';
import { Product } from '../api/products';

export const ProductList: React.FC = () => {
  const { data: products, isLoading, error } = useProducts();
  const deleteMutation = useDeleteProduct();

  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const [deleteSuccess, setDeleteSuccess] = useState<string | null>(null);

  const handleDeleteClick = (product: Product) => {
    setProductToDelete(product);
  };

  const handleDeleteConfirm = async () => {
    if (!productToDelete) return;

    try {
      const result = await deleteMutation.mutateAsync(productToDelete._id);
      setDeleteSuccess(
        `"${productToDelete.title}" has been deleted. Image (${result.deletedImageId}) removed from Cloudinary.`
      );
      setProductToDelete(null);

      // Clear success message after 5 seconds
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
              <div className="product-card__image-container">
                <img
                  src={product.image.url}
                  alt={product.title}
                  className="product-card__image"
                  loading="lazy"
                />
                {/* Image loaded from Cloudinary indicator */}
                <span
                  className="product-card__cloudinary-badge"
                  title="Served from Cloudinary CDN"
                >
                  ☁️
                </span>
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
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
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

        .product-card__image-container {
          position: relative;
          aspect-ratio: 1;
          background: #f3f4f6;
        }

        .product-card__image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .product-card__cloudinary-badge {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          background: white;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-size: 0.75rem;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
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

**Step 7: Admin Dashboard Page**

```tsx
// client/src/pages/AdminDashboard.tsx

import React, { useState } from 'react';
import { ProductForm } from '../components/ProductForm';
import { ProductList } from '../components/ProductList';

export const AdminDashboard: React.FC = () => {
  const [showForm, setShowForm] = useState(true);

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>E-Commerce Admin Dashboard</h1>
        <p>Manage your products with Cloudinary image storage</p>
      </header>

      <nav className="admin-nav">
        <button
          className={`admin-nav__btn ${showForm ? 'active' : ''}`}
          onClick={() => setShowForm(true)}
        >
          Add Product
        </button>
        <button
          className={`admin-nav__btn ${!showForm ? 'active' : ''}`}
          onClick={() => setShowForm(false)}
        >
          View Products
        </button>
      </nav>

      <main className="admin-main">
        {showForm ? (
          <ProductForm onSuccess={() => setShowForm(false)} />
        ) : (
          <ProductList />
        )}
      </main>

      <style>{`
        .admin-dashboard {
          min-height: 100vh;
          background: #f3f4f6;
        }

        .admin-header {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          color: white;
          padding: 2rem;
          text-align: center;
        }

        .admin-header h1 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .admin-header p {
          opacity: 0.9;
        }

        .admin-nav {
          display: flex;
          justify-content: center;
          gap: 1rem;
          padding: 1rem;
          background: white;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .admin-nav__btn {
          padding: 0.75rem 1.5rem;
          border: 2px solid #e5e7eb;
          background: white;
          border-radius: 0.5rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .admin-nav__btn:hover {
          border-color: #3b82f6;
          color: #3b82f6;
        }

        .admin-nav__btn.active {
          background: #3b82f6;
          border-color: #3b82f6;
          color: white;
        }

        .admin-main {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
};
```

**Step 8: App Entry Point**

```tsx
// client/src/App.tsx

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AdminDashboard } from './pages/AdminDashboard';

// Create QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AdminDashboard />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
```

---

## Part 5: Key Concepts Summary

### The Mental Model Cheatsheet

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    QUICK REFERENCE CHEATSHEET                                │
└─────────────────────────────────────────────────────────────────────────────┘

MULTER:
  • Purpose: Parse multipart/form-data (file uploads)
  • Memory vs Disk: Use memory for immediate cloud upload, disk for large files
  • Access file: req.file (single) or req.files (multiple)
  • Key properties: buffer, originalname, mimetype, size

CLOUDINARY:
  • Purpose: Store, optimize, transform, and deliver images via CDN
  • Key to save: public_id (for deletion) and secure_url (for display)
  • Organization: Use folders like "project/asset-type/filename"
  • Transformations: Add to URL for on-the-fly resizing/optimization

THE FLOW:
  1. Frontend: FormData with file + fields
  2. Backend: Multer parses → Cloudinary upload → Save to DB
  3. Display: Use secure_url from Cloudinary
  4. Delete: Use public_id to remove from Cloudinary, then DB

FREE TIER LIMITS:
  • 25 GB storage
  • 25 GB bandwidth/month
  • Use q_auto,f_auto to reduce both

FOLDER NAMING CONVENTION:
  • Pattern: "project/type/unique_id"
  • Example: "ecommerce/products/prod_1703001234_blue_sneakers"
```

---

## Part 6: Common Gotchas & Tips

**1. Always save the public_id**
Without it, you can't delete images from Cloudinary.

**2. Use secure_url, not url**
`url` is HTTP, `secure_url` is HTTPS. Always use HTTPS.

**3. File field name must match**
If Multer expects `image`, the frontend must use `formData.append('image', file)`.

**4. Validate on both sides**
Frontend validation improves UX; backend validation is required for security.

**5. Handle upload failures gracefully**
If Cloudinary upload fails, don't save to DB. If DB save fails after upload, consider deleting from Cloudinary.

**6. Use transformations for thumbnails**
Don't upload multiple sizes. Upload once, use URL transformations for different sizes.

---

This should give you a solid foundation to build your e-commerce project. The code is production-ready and follows best practices. Let me know if you want me to clarify any part or add additional features like multiple image uploads or image galleries!
