import { z } from 'zod';

const applySchema = z.object({
  params: z.object({
    jobId: z.string().min(1, 'jobId is required'),
  }),
  body: z.object({
    coverLetter: z.string().min(1, 'Cover letter is required').trim(),
  }),
});

const updateStatusSchema = z.object({
  params: z.object({
    id: z.string().min(1, 'application id is required'),
  }),
  body: z.object({
    status: z.enum(['pending', 'reviewed', 'rejected'], {
      errorMap: () => ({ message: 'status must be pending, reviewed, or rejected' }),
    }),
  }),
});

export const applicationsValidation = {
  applySchema,
  updateStatusSchema,
};
