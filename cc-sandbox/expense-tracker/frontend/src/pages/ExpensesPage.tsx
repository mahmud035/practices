import { useState } from 'react'
import ExpenseFilters from '../features/expenses/components/ExpenseFilters'
import ExpenseForm from '../features/expenses/components/ExpenseForm'
import ExpenseList from '../features/expenses/components/ExpenseList'
import { useDeleteExpense, useExpenses } from '../features/expenses/hooks/useExpenses'
import type { TCategory } from '../features/expenses/types/expense.types'

export default function ExpensesPage() {
  const [category, setCategory] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [deletingId, setDeletingId] = useState<string | null>(null)

  const activeFilters = {
    ...(category ? { category: category as TCategory } : {}),
    ...(month
      ? { month: parseInt(month, 10), year: year ? parseInt(year, 10) : new Date().getFullYear() }
      : year
      ? { year: parseInt(year, 10) }
      : {}),
  }

  const { data: expenses = [], isLoading, isError } = useExpenses(activeFilters)
  const { mutate: deleteExpense } = useDeleteExpense()

  const handleDelete = (id: string) => {
    setDeletingId(id)
    deleteExpense(id, { onSettled: () => setDeletingId(null) })
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 items-start">
        <div className="lg:sticky lg:top-6">
          <ExpenseForm />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-text">Expenses</h1>
            {!isLoading && !isError && (
              <span className="text-sm text-text-muted">
                {expenses.length} {expenses.length === 1 ? 'entry' : 'entries'}
              </span>
            )}
          </div>

          <ExpenseFilters
            category={category}
            month={month}
            year={year}
            onCategoryChange={setCategory}
            onMonthChange={setMonth}
            onYearChange={setYear}
            onReset={() => {
              setCategory('')
              setMonth('')
              setYear('')
            }}
          />

          <ExpenseList
            expenses={expenses}
            isLoading={isLoading}
            isError={isError}
            onDelete={handleDelete}
            deletingId={deletingId}
          />
        </div>
      </div>
    </div>
  )
}
