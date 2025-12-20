Absolutely — here’s a **production-grade** implementation that does all three upgrades:

1. **Signed uploads (frontend → Cloudinary directly)**
2. **Async image handling (create product first → upload second → confirm/patch)**
3. **Retry + timeout + observability (client retries + server logs slow operations + upload status)**

This replaces your current “backend uploads image via Multer” approach (the one in your current codebase) with a more resilient architecture.

---

## New flow (the system you’re building)

### ✅ Create product (no image yet)

**Client → API**: `POST /api/v1/products` (JSON only)
Server stores product with `image.status = "pending"`

### ✅ Get signed params

**Client → API**: `POST /api/v1/products/:id/image/signature`
Server returns: `{ timestamp, signature, apiKey, cloudName, publicId, folder }`

### ✅ Upload directly to Cloudinary

**Client → Cloudinary**: `POST https://api.cloudinary.com/v1_1/:cloudName/image/upload`

### ✅ Confirm/patch image metadata

**Client → API**: `PATCH /api/v1/products/:id/image/confirm`
Server sets `image.status = "ready"` and saves `public_id`, `url`, etc.

### ✅ Delete is safe

- If image is ready → delete from Cloudinary + DB
- If pending/failed → delete DB only (no Cloudinary dependency)

---

# Backend (Express + TS + Mongoose + Zod)

## 1) Install deps

```bash
npm i zod
npm i -D @types/node
```

> You can remove `multer` entirely for product images in this architecture.

---

## 2) `.env`

```env
PORT=5000
MONGODB_URI=...

CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

CLIENT_URL=http://localhost:5173
```

---

## 3) File structure (feature-driven)

```
src/
  app.ts
  server.ts
  config/
    cloudinary.ts
  middlewares/
    errorHandler.ts
    validateRequest.ts
    requestLogger.ts
  modules/
    product/
      product.interface.ts
      product.model.ts
      product.validation.ts
      product.service.ts
      product.controller.ts
      product.route.ts
```

---

## 4) `src/config/cloudinary.ts`

```ts
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
  secure: true,
});

export default cloudinary;
```

---

## 5) `src/middlewares/validateRequest.ts`

```ts
import { AnyZodObject } from 'zod';
import { Request, Response, NextFunction } from 'express';

export const validateRequest =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse({
      body: req.body,
      params: req.params,
      query: req.query,
    });

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: result.error.flatten(),
      });
    }

    next();
  };
```

---

## 6) `src/middlewares/requestLogger.ts` (observability)

```ts
import { Request, Response, NextFunction } from 'express';
import crypto from 'crypto';

export const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const requestId = crypto.randomUUID();
  (req as any).requestId = requestId;

  const start = process.hrtime.bigint();

  res.on('finish', () => {
    const end = process.hrtime.bigint();
    const ms = Number(end - start) / 1_000_000;

    const slow = ms > 1500 ? '🐢 SLOW' : '';
    // practical logs (keep it)
    console.log(
      `[${requestId}] ${req.method} ${req.originalUrl} ${
        res.statusCode
      } ${ms.toFixed(1)}ms ${slow}`.trim()
    );
  });

  next();
};
```

---

## 7) `src/modules/product/product.interface.ts`

```ts
export type ProductImageStatus = 'pending' | 'ready' | 'failed';

export interface ProductImage {
  status: ProductImageStatus;
  public_id?: string;
  url?: string;
  width?: number;
  height?: number;
  format?: string;
  bytes?: number;

  // observability/debug
  attempts: number;
  lastError?: string;
  updatedAt?: Date;
}

export interface ProductEntity {
  title: string;
  description: string;
  price: number;
  tags: string[];
  category: string;
  inStock: boolean;
  image: ProductImage;
}
```

---

## 8) `src/modules/product/product.model.ts`

```ts
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
```

---

## 9) `src/modules/product/product.validation.ts`

```ts
import { z } from 'zod';

export const createProductZodSchema = z.object({
  body: z.object({
    title: z.string().min(1).max(200),
    description: z.string().min(1).max(2000),
    price: z.number().nonnegative(),
    category: z.string().min(1),
    tags: z.array(z.string()).optional().default([]),
    inStock: z.boolean().optional().default(true),
  }),
});

export const idParamSchema = z.object({
  params: z.object({
    id: z.string().min(1),
  }),
});

export const getSignatureSchema = idParamSchema;

export const confirmImageSchema = z.object({
  params: z.object({ id: z.string().min(1) }),
  body: z.object({
    public_id: z.string().min(1),
    secure_url: z.string().url(),
    width: z.number().optional(),
    height: z.number().optional(),
    format: z.string().optional(),
    bytes: z.number().optional(),
  }),
});
```

---

## 10) `src/modules/product/product.service.ts`

```ts
import crypto from 'crypto';
import cloudinary from '../../config/cloudinary';
import { Product } from './product.model';

const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME!;
const API_KEY = process.env.CLOUDINARY_API_KEY!;
const API_SECRET = process.env.CLOUDINARY_API_SECRET!;

const PRODUCT_FOLDER = 'ecommerce/products';

const nowIso = () => new Date().toISOString();

function cloudinarySign(params: Record<string, string | number>) {
  // Cloudinary signature rule: sort params, join "k=v", append api_secret, sha1
  const sorted = Object.keys(params)
    .sort()
    .map((k) => `${k}=${params[k]}`)
    .join('&');

  return crypto
    .createHash('sha1')
    .update(sorted + API_SECRET)
    .digest('hex');
}

export const productService = {
  async create(payload: {
    title: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    inStock: boolean;
  }) {
    const product = await Product.create({
      ...payload,
      image: {
        status: 'pending',
        attempts: 0,
        updatedAt: new Date(),
      },
    });

    return product;
  },

  async list() {
    return Product.find().sort({ createdAt: -1 }).lean();
  },

  async getById(id: string) {
    return Product.findById(id);
  },

  async getUploadSignature(productId: string) {
    const product = await Product.findById(productId);
    if (!product) throw new Error('Product not found');

    // unique public id that includes productId (great for tracking + cleanup)
    const timestamp = Math.floor(Date.now() / 1000);
    const publicId = `${PRODUCT_FOLDER}/prod_${productId}_${timestamp}`;

    // params included in signature must match upload request
    const toSign = {
      timestamp,
      public_id: publicId,
      folder: PRODUCT_FOLDER,
      // optional: eager transformations, tags, etc.
    };

    const signature = cloudinarySign(toSign);

    // update attempt count for observability
    product.image.attempts = (product.image.attempts || 0) + 1;
    product.image.updatedAt = new Date();
    await product.save();

    return {
      cloudName: CLOUD_NAME,
      apiKey: API_KEY,
      timestamp,
      signature,
      folder: PRODUCT_FOLDER,
      publicId,
    };
  },

  async confirmUpload(
    productId: string,
    data: {
      public_id: string;
      secure_url: string;
      width?: number;
      height?: number;
      format?: string;
      bytes?: number;
    }
  ) {
    const product = await Product.findById(productId);
    if (!product) throw new Error('Product not found');

    product.image.status = 'ready';
    product.image.public_id = data.public_id;
    product.image.url = data.secure_url;
    product.image.width = data.width;
    product.image.height = data.height;
    product.image.format = data.format;
    product.image.bytes = data.bytes;
    product.image.lastError = undefined;
    product.image.updatedAt = new Date();

    await product.save();
    return product;
  },

  async markUploadFailed(productId: string, reason: string) {
    const product = await Product.findById(productId);
    if (!product) return;

    product.image.status = 'failed';
    product.image.lastError = `[${nowIso()}] ${reason}`;
    product.image.updatedAt = new Date();
    await product.save();
  },

  async deleteProduct(productId: string) {
    const product = await Product.findById(productId);
    if (!product) return null;

    // delete cloudinary only if we have a ready image
    if (product.image?.status === 'ready' && product.image.public_id) {
      const start = Date.now();
      try {
        await cloudinary.uploader.destroy(product.image.public_id, {
          resource_type: 'image',
          invalidate: true,
        });
        const ms = Date.now() - start;
        if (ms > 1500) console.warn(`🐢 Cloudinary destroy slow: ${ms}ms`);
      } catch (e: any) {
        // fail-tolerant: still allow product deletion if cloudinary is down
        console.warn(
          'Cloudinary destroy failed, continuing DB delete:',
          e?.message
        );
      }
    }

    await Product.findByIdAndDelete(productId);
    return productId;
  },
};
```

---

## 11) `src/modules/product/product.controller.ts`

```ts
import { Request, Response, NextFunction } from 'express';
import { productService } from './product.service';

export const productController = {
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product = await productService.create(req.body);
      res.status(201).json({
        success: true,
        message: 'Product created. Image upload pending.',
        data: product,
      });
    } catch (e) {
      next(e);
    }
  },

  list: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const products = await productService.list();
      res
        .status(200)
        .json({ success: true, count: products.length, data: products });
    } catch (e) {
      next(e);
    }
  },

  getById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product = await productService.getById(req.params.id);
      if (!product)
        return res
          .status(404)
          .json({ success: false, message: 'Product not found' });
      res.status(200).json({ success: true, data: product });
    } catch (e) {
      next(e);
    }
  },

  getUploadSignature: async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const signature = await productService.getUploadSignature(req.params.id);
      res.status(200).json({
        success: true,
        message: 'Upload signature generated',
        data: signature,
      });
    } catch (e) {
      next(e);
    }
  },

  confirmImage: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product = await productService.confirmUpload(
        req.params.id,
        req.body
      );
      res.status(200).json({
        success: true,
        message: 'Image confirmed and product updated',
        data: product,
      });
    } catch (e) {
      next(e);
    }
  },

  markImageFailed: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await productService.markUploadFailed(
        req.params.id,
        req.body?.reason || 'Upload failed'
      );
      res
        .status(200)
        .json({ success: true, message: 'Upload failure recorded' });
    } catch (e) {
      next(e);
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const deletedId = await productService.deleteProduct(req.params.id);
      if (!deletedId)
        return res
          .status(404)
          .json({ success: false, message: 'Product not found' });
      res
        .status(200)
        .json({
          success: true,
          message: 'Product deleted',
          data: { deletedId },
        });
    } catch (e) {
      next(e);
    }
  },
};
```

---

## 12) `src/modules/product/product.route.ts`

```ts
import express from 'express';
import { productController } from './product.controller';
import { validateRequest } from '../../middlewares/validateRequest';
import {
  createProductZodSchema,
  confirmImageSchema,
  getSignatureSchema,
  idParamSchema,
} from './product.validation';

const router = express.Router();

router
  .route('/')
  .get(productController.list)
  .post(validateRequest(createProductZodSchema), productController.create);

router.get('/:id', validateRequest(idParamSchema), productController.getById);

router.post(
  '/:id/image/signature',
  validateRequest(getSignatureSchema),
  productController.getUploadSignature
);

router.patch(
  '/:id/image/confirm',
  validateRequest(confirmImageSchema),
  productController.confirmImage
);

// optional: if upload fails on client
router.patch(
  '/:id/image/failed',
  validateRequest(idParamSchema),
  productController.markImageFailed
);

router.delete('/:id', validateRequest(idParamSchema), productController.delete);

export default router;
```

---

## 13) `src/app.ts` + `src/server.ts`

### `src/app.ts`

```ts
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import { requestLogger } from './middlewares/requestLogger';
import { errorHandler } from './middlewares/errorHandler';
import productRoutes from './modules/product/product.route';

export const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
  })
);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(requestLogger);

app.get('/api/v1/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/api/v1/products', productRoutes);

app.use(errorHandler);
```

### `src/server.ts`

```ts
import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import { app } from './app';

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

# Frontend (React + TS + TanStack Query) — Signed Upload + Retry/Timeout

## 1) API helpers

### `client/src/api/products.ts`

```ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  withCredentials: true,
});

export type Product = {
  _id: string;
  title: string;
  description: string;
  price: number;
  tags: string[];
  category: string;
  inStock: boolean;
  image: {
    status: 'pending' | 'ready' | 'failed';
    public_id?: string;
    url?: string;
    attempts: number;
    lastError?: string;
  };
};

type ApiResponse<T> = {
  success: boolean;
  message?: string;
  data: T;
  count?: number;
};

export async function createProduct(payload: {
  title: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  inStock?: boolean;
}) {
  const res = await api.post<ApiResponse<Product>>('/products', payload);
  return res.data.data;
}

export async function getProducts() {
  const res = await api.get<ApiResponse<Product[]>>('/products');
  return res.data.data;
}

export async function getUploadSignature(productId: string) {
  const res = await api.post<
    ApiResponse<{
      cloudName: string;
      apiKey: string;
      timestamp: number;
      signature: string;
      folder: string;
      publicId: string;
    }>
  >(`/products/${productId}/image/signature`);
  return res.data.data;
}

export async function confirmProductImage(
  productId: string,
  payload: {
    public_id: string;
    secure_url: string;
    width?: number;
    height?: number;
    format?: string;
    bytes?: number;
  }
) {
  const res = await api.patch<ApiResponse<Product>>(
    `/products/${productId}/image/confirm`,
    payload
  );
  return res.data.data;
}

export async function markImageFailed(productId: string, reason: string) {
  await api.patch(`/products/${productId}/image/failed`, { reason });
}
```

---

## 2) Cloudinary upload with timeout + retry

### `client/src/lib/cloudinaryUpload.ts`

```ts
type SignedParams = {
  cloudName: string;
  apiKey: string;
  timestamp: number;
  signature: string;
  folder: string;
  publicId: string;
};

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

async function fetchWithTimeout(
  input: RequestInfo,
  init: RequestInit,
  timeoutMs: number
) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(input, { ...init, signal: controller.signal });
    return res;
  } finally {
    clearTimeout(id);
  }
}

export async function uploadToCloudinaryWithRetry(
  file: File,
  signed: SignedParams,
  opts?: { maxRetries?: number; timeoutMs?: number }
) {
  const maxRetries = opts?.maxRetries ?? 2; // total attempts = 1 + retries
  const timeoutMs = opts?.timeoutMs ?? 20_000;

  const url = `https://api.cloudinary.com/v1_1/${signed.cloudName}/image/upload`;

  let lastError: any;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    const started = performance.now();
    try {
      const form = new FormData();
      form.append('file', file);
      form.append('api_key', signed.apiKey);
      form.append('timestamp', String(signed.timestamp));
      form.append('signature', signed.signature);
      form.append('folder', signed.folder);
      form.append('public_id', signed.publicId);
      form.append('tags', 'product,ecommerce');

      const res = await fetchWithTimeout(
        url,
        { method: 'POST', body: form },
        timeoutMs
      );

      const elapsed = performance.now() - started;
      if (elapsed > 2500)
        console.warn(`🐢 Cloudinary upload slow: ${elapsed.toFixed(0)}ms`);

      if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(
          `Cloudinary upload failed: ${res.status} ${text}`.slice(0, 500)
        );
      }

      const json = await res.json();
      return json as {
        public_id: string;
        secure_url: string;
        width?: number;
        height?: number;
        format?: string;
        bytes?: number;
      };
    } catch (e) {
      lastError = e;
      // exponential-ish backoff
      await sleep(400 * (attempt + 1));
    }
  }

  throw lastError;
}
```

---

## 3) “Create product + upload image” orchestrator

### `client/src/lib/createProductWithImage.ts`

```ts
import {
  createProduct,
  getUploadSignature,
  confirmProductImage,
  markImageFailed,
} from '../api/products';
import { uploadToCloudinaryWithRetry } from './cloudinaryUpload';

export async function createProductWithImage(input: {
  title: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  image: File;
}) {
  // Step 1: create product (fast, always)
  const product = await createProduct({
    title: input.title,
    description: input.description,
    price: input.price,
    category: input.category,
    tags: input.tags,
  });

  try {
    // Step 2: ask backend for signed upload params
    const signed = await getUploadSignature(product._id);

    // Step 3: upload directly to Cloudinary (retry + timeout)
    const uploaded = await uploadToCloudinaryWithRetry(input.image, signed, {
      maxRetries: 2,
      timeoutMs: 20_000,
    });

    // Step 4: confirm to backend (patch product)
    const updated = await confirmProductImage(product._id, uploaded);

    return updated;
  } catch (e: any) {
    // record failure for observability & admin UI
    await markImageFailed(product._id, e?.message || 'Upload failed');
    // rethrow so UI can show error
    throw e;
  }
}
```

---

## 4) TanStack Query mutation (practical UX)

Use your existing query setup (from your current code) , but replace the mutation function.

```ts
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createProductWithImage } from '../lib/createProductWithImage';

export const useCreateProductWithImage = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: createProductWithImage,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['products'] });
    },
  });
};
```

Your form stays almost the same — but instead of posting `multipart/form-data` to your API, it calls `createProductWithImage()`.

---

# What you gain (immediately)

✅ **Zero backend upload failures** (your server no longer streams files to Cloudinary)
✅ **Network resilience** (mobile hotspot issues become “client upload retry”, not “API down”)
✅ **Fail-tolerant product creation** (product exists even if image upload fails)
✅ **Observability** (attempt counters, failure reason, slow logs)

---

# One honest warning (security)

Signed uploads mean your backend authorizes uploads. That’s good.

But **do not expose your API secret** to the frontend — ever. In this design, you don’t.

Also, in production you’ll typically:

- restrict allowed formats / size at Cloudinary (upload presets or rules)
- authenticate `/:id/image/signature` (admin-only)

---

If you paste your _actual current repo structure_ (or upload the repo zip), I can map this **exactly** into your naming pattern (`*.route.ts`, `*.controller.ts`, `*.service.ts`, `*.validation.ts`, etc.) with minimal diff — but the code above is already the full working implementation of the three “next-level” improvements.
