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
