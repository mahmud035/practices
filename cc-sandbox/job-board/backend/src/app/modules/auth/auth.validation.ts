import { z } from 'zod';

const registerSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required').trim(),
    email: z.string().email('A valid email is required').trim(),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    role: z.enum(['employer', 'jobseeker'], {
      errorMap: () => ({ message: "Role must be 'employer' or 'jobseeker'" }),
    }),
  }),
});

const loginSchema = z.object({
  body: z.object({
    email: z.string().email('A valid email is required').trim(),
    password: z.string().min(1, 'Password is required'),
  }),
});

export const authValidation = {
  registerSchema,
  loginSchema,
};
