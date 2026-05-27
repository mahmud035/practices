import z from 'zod';

const createItemZodValidation = z.object({
  body: z.object({
    name: z
      .string({ required_error: 'Name is required' })
      .trim()
      .min(1, 'Name cannot be empty')
      .max(100, 'Name cannot exceed 100 characters'),
  }),
});

export const itemValidation = {
  createItemZodValidation,
};
