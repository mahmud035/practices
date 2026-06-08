export type TCategory = 'Food' | 'Transport' | 'Utilities' | 'Entertainment' | 'Other'

export interface IExpense {
  amount: number
  category: TCategory
  description: string
  date: Date
}

export interface IExpenseSummary {
  thisMonth: number
  byCategory: { category: string; total: number }[]
  trend: { year: number; month: number; total: number }[]
}

export interface IExpenseFilters {
  category?: TCategory
  month?: number
  year?: number
}
