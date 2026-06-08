import { z } from 'zod'

const CATEGORIES = ['Food', 'Transport', 'Utilities', 'Entertainment', 'Other'] as const

const createExpenseSchema = z.object({
  amount: z.number().positive(),
  category: z.enum(CATEGORIES),
  description: z.string().min(1).max(200).trim(),
  date: z.coerce.date(),
})

export const expenseValidation = { createExpenseSchema }
