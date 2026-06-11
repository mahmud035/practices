import { z } from 'zod';

const jobTypeEnum = z.enum(['Full-time', 'Part-time', 'Contract', 'Remote'], {
  errorMap: () => ({ message: 'type must be Full-time, Part-time, Contract, or Remote' }),
});

const createJobSchema = z.object({
  body: z
    .object({
      title: z.string().min(1, 'Title is required').trim(),
      company: z.string().min(1, 'Company is required').trim(),
      location: z.string().min(1, 'Location is required').trim(),
      type: jobTypeEnum,
      description: z.string().min(1, 'Description is required'),
      salaryMin: z.number().nonnegative('salaryMin must be >= 0'),
      salaryMax: z.number().nonnegative('salaryMax must be >= 0'),
      deadline: z.coerce.date({ errorMap: () => ({ message: 'deadline must be a valid date' }) }),
    })
    .refine((d) => d.salaryMax >= d.salaryMin, {
      message: 'salaryMax must be greater than or equal to salaryMin',
      path: ['salaryMax'],
    })
    .refine((d) => d.deadline.getTime() > Date.now(), {
      message: 'deadline must be in the future',
      path: ['deadline'],
    }),
});

const browseJobsSchema = z.object({
  query: z.object({
    type: jobTypeEnum.optional(),
    location: z.string().trim().min(1).optional(),
    keyword: z.string().trim().min(1).optional(),
    page: z.coerce.number().int().positive().optional().default(1),
  }),
});

export const jobsValidation = {
  createJobSchema,
  browseJobsSchema,
};
