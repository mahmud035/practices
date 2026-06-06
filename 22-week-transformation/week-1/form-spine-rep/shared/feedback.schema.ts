import { z } from 'zod';

export const createFeedbackSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'Name is required')
    .max(80, 'Name must be at most 80 characters'),
  email: z.email('Enter a valid email'),

  // z.coerce.number() is the deliberate hook — it makes `z.input` and `z.output` diverge (string in, number out)
  rating: z.coerce
    .number()
    .int()
    .min(1, 'Rating must be at least 1')
    .max(5, 'Rating must be at most 5'),
  category: z.enum(['bug', 'feature', 'general']),
  message: z
    .string()
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be at most 1000 characters'),
});

// OUTPUT type (post coercion): rating is `number`. Use everywhere downstream
export type CreateFeedbackInput = z.infer<typeof createFeedbackSchema>;

/* 
  {
      name: string;
      email: string;
      rating: number;
      category: "bug" | "feature" | "general";
      message: string;
  }
*/

// INPUT type (pre coercion): what the form fields hold before Zod runs.
export type CreateFeedbackFormValues = z.input<typeof createFeedbackSchema>;

/*  
  {
      name: string;
      email: string;
      rating: unknown;
      category: "bug" | "feature" | "general";
      message: string;
  }
*/
