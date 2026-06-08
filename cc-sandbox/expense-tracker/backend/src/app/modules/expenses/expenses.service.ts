import { Expense } from './expenses.model'
import { IExpense, IExpenseFilters, IExpenseSummary } from './expenses.interface'

/**
 * Creates a new expense document.
 */
const createExpense = async (payload: IExpense): Promise<IExpense> => {
  return Expense.create(payload)
}

/**
 * Returns all expenses, newest first, with optional category and month/year filters.
 */
const getAllExpenses = async (filters: IExpenseFilters): Promise<IExpense[]> => {
  const match: Record<string, unknown> = {}

  if (filters.category) {
    match.category = filters.category
  }

  if (filters.month != null && filters.year != null) {
    match.date = {
      $gte: new Date(filters.year, filters.month - 1, 1),
      $lte: new Date(filters.year, filters.month, 0, 23, 59, 59, 999),
    }
  } else if (filters.year != null) {
    match.date = {
      $gte: new Date(filters.year, 0, 1),
      $lte: new Date(filters.year, 11, 31, 23, 59, 59, 999),
    }
  }

  return Expense.find(match).sort({ date: -1 }).lean()
}

/**
 * Deletes an expense by its ID.
 */
const deleteExpense = async (id: string): Promise<void> => {
  await Expense.findByIdAndDelete(id)
}

/**
 * Returns dashboard summary data via three MongoDB aggregation pipelines:
 * total spent this month, all-time total per category, last 6 months trend.
 */
const getExpenseSummary = async (): Promise<IExpenseSummary> => {
  const now = new Date()
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999)
  // first day of the month 5 months ago (gives a rolling 6-month window)
  const sixMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 5, 1)

  const [thisMonthResult, byCategory, trend] = await Promise.all([
    Expense.aggregate<{ total: number }>([
      { $match: { date: { $gte: startOfMonth, $lte: endOfMonth } } },
      { $group: { _id: null, total: { $sum: '$amount' } } },
    ]),

    Expense.aggregate<{ category: string; total: number }>([
      { $group: { _id: '$category', total: { $sum: '$amount' } } },
      { $project: { _id: 0, category: '$_id', total: 1 } },
      { $sort: { total: -1 } },
    ]),

    Expense.aggregate<{ year: number; month: number; total: number }>([
      { $match: { date: { $gte: sixMonthsAgo } } },
      {
        $group: {
          _id: { year: { $year: '$date' }, month: { $month: '$date' } },
          total: { $sum: '$amount' },
        },
      },
      { $sort: { '_id.year': 1, '_id.month': 1 } },
      { $project: { _id: 0, year: '$_id.year', month: '$_id.month', total: 1 } },
    ]),
  ])

  return {
    thisMonth: thisMonthResult[0]?.total ?? 0,
    byCategory,
    trend,
  }
}

export const expenseService = { createExpense, getAllExpenses, deleteExpense, getExpenseSummary }
