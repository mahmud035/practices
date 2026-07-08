import { z } from 'zod';

export const createTodoSchema = z.object({
  body: z.object({
    title: z.string().min(1),
  }),
});

export const updateTodoSchema = z.object({
  params: z.object({
    id: z.string(),
  }),
  body: z.object({
    title: z.string().optional(),
    completed: z.boolean().optional(),
  }),
});
