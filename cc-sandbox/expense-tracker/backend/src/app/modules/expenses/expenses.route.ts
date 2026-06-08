import { Router } from 'express'
import { expenseController } from './expenses.controller'
import validateRequest from '../../middlewares/validateRequest'
import { expenseValidation } from './expenses.validation'

const router = Router()

// /summary must be before /:id to prevent Express treating "summary" as an id
router.get('/summary', expenseController.getSummary)
router.get('/', expenseController.getAllExpenses)
router.post('/', validateRequest(expenseValidation.createExpenseSchema), expenseController.createExpense)
router.delete('/:id', expenseController.deleteExpense)

export default router
