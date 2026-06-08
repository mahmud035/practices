import { Request, Response } from 'express'
import { expenseService } from './expenses.service'
import { IExpenseFilters } from './expenses.interface'
import catchAsync from '../../utils/catchAsync'

/**
 * Creates a new expense from the validated request body.
 */
const createExpense = catchAsync(async (req: Request, res: Response) => {
  const expense = await expenseService.createExpense(req.body)
  res.status(201).json({ statusCode: 201, success: true, message: 'Expense created', data: expense })
})

/**
 * Lists expenses newest first. Accepts optional ?category, ?month, ?year query params.
 */
const getAllExpenses = catchAsync(async (req: Request, res: Response) => {
  const { category, month, year } = req.query
  const filters: IExpenseFilters = {}

  if (category) filters.category = category as IExpenseFilters['category']
  if (month) filters.month = parseInt(month as string, 10)
  if (year) filters.year = parseInt(year as string, 10)

  const expenses = await expenseService.getAllExpenses(filters)
  res.json({ statusCode: 200, success: true, message: 'Expenses retrieved', data: expenses })
})

/**
 * Deletes an expense by the :id route param.
 */
const deleteExpense = catchAsync(async (req: Request, res: Response) => {
  await expenseService.deleteExpense(req.params.id)
  res.json({ statusCode: 200, success: true, message: 'Expense deleted', data: null })
})

/**
 * Returns dashboard summary: this-month total, all-time per category, last-6-months trend.
 */
const getSummary = catchAsync(async (req: Request, res: Response) => {
  const summary = await expenseService.getExpenseSummary()
  res.json({ statusCode: 200, success: true, message: 'Summary retrieved', data: summary })
})

export const expenseController = { createExpense, getAllExpenses, deleteExpense, getSummary }
