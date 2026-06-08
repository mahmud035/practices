import { z } from 'zod';

const deleteMediaSchema = z.object({
  params: z.object({
    id: z.string().min(1, 'Media ID is required'),
  }),
});

export const mediaValidation = { deleteMediaSchema };
