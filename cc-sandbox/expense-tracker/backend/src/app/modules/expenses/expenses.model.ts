import { Schema, model } from 'mongoose'
import { IExpense, TCategory } from './expenses.interface'

const CATEGORIES: TCategory[] = ['Food', 'Transport', 'Utilities', 'Entertainment', 'Other']

const expenseSchema = new Schema<IExpense>(
  {
    amount: { type: Number, required: true, min: 0.01 },
    category: { type: String, enum: CATEGORIES, required: true },
    description: { type: String, required: true, trim: true },
    date: { type: Date, required: true },
  },
  { timestamps: true }
)

export const Expense = model<IExpense>('Expense', expenseSchema)
