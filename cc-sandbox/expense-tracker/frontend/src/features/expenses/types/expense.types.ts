export type TCategory = 'Food' | 'Transport' | 'Utilities' | 'Entertainment' | 'Other'

export const CATEGORIES: TCategory[] = ['Food', 'Transport', 'Utilities', 'Entertainment', 'Other']

export interface IExpense {
  _id: string
  amount: number
  category: TCategory
  description: string
  date: string
  createdAt: string
  updatedAt: string
}

export interface IExpenseSummary {
  thisMonth: number
  byCategory: { category: string; total: number }[]
  trend: { year: number; month: number; total: number }[]
}

export interface ICreateExpensePayload {
  amount: number
  category: TCategory
  description: string
  date: string
}

export interface ApiResponse<T> {
  statusCode: number
  success: boolean
  message: string
  data: T
}
