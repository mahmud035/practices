import type { IExpense } from '../types/expense.types'
import ExpenseCard from './ExpenseCard'

interface ExpenseListProps {
  expenses: IExpense[]
  isLoading: boolean
  isError: boolean
  onDelete: (id: string) => void
  deletingId: string | null
}

export default function ExpenseList({
  expenses,
  isLoading,
  isError,
  onDelete,
  deletingId,
}: ExpenseListProps) {
  if (isLoading) {
    return (
      <div className="space-y-3" aria-label="Loading expenses">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-[60px] bg-border rounded-xl animate-pulse" />
        ))}
      </div>
    )
  }

  if (isError) {
    return (
      <div className="text-center py-12 text-danger text-sm">
        Failed to load expenses. Please refresh the page.
      </div>
    )
  }

  if (expenses.length === 0) {
    return (
      <div className="text-center py-12 text-text-muted text-sm">
        No expenses found. Add your first expense above.
      </div>
    )
  }

  return (
    <ul className="space-y-3">
      {expenses.map((expense) => (
        <li key={expense._id}>
          <ExpenseCard
            expense={expense}
            onDelete={onDelete}
            isDeleting={deletingId === expense._id}
          />
        </li>
      ))}
    </ul>
  )
}
