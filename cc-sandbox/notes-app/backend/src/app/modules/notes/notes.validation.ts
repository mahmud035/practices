import { z } from 'zod';

const create = z.object({
  body: z.object({
    title: z.string().min(1, 'Title is required'),
    body: z.string().min(1, 'Body is required'),
  }),
});

const update = z.object({
  body: z.object({
    title: z.string().min(1, 'Title is required').optional(),
    body: z.string().min(1, 'Body is required').optional(),
  }),
  params: z.object({
    id: z.string().min(1),
  }),
});

const byId = z.object({
  params: z.object({
    id: z.string().min(1),
  }),
});

export const notesValidation = { create, update, byId };
