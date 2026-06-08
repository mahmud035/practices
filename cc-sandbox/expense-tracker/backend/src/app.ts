import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import expenseRoutes from './app/modules/expenses/expenses.route'

const app = express()

app.use(cors({ origin: 'http://localhost:5173', credentials: true }))
app.use(express.json())

app.use('/api/expenses', expenseRoutes)

app.get('/health', (_req, res) => res.json({ status: 'ok' }))

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err)
  res.status(500).json({
    statusCode: 500,
    success: false,
    message: err.message || 'Internal server error',
    data: null,
  })
})

export default app
