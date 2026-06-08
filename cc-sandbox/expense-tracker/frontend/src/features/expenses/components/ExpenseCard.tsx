import type { IExpense } from '../types/expense.types'

const CATEGORY_STYLES: Record<string, string> = {
  Food: 'bg-green-100 text-green-800',
  Transport: 'bg-blue-100 text-blue-800',
  Utilities: 'bg-amber-100 text-amber-800',
  Entertainment: 'bg-purple-100 text-purple-800',
  Other: 'bg-gray-100 text-gray-700',
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

function formatAmount(amount: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)
}

interface ExpenseCardProps {
  expense: IExpense
  onDelete: (id: string) => void
  isDeleting: boolean
}

export default function ExpenseCard({ expense, onDelete, isDeleting }: ExpenseCardProps) {
  return (
    <div className="flex items-center gap-4 bg-surface-raised border border-border rounded-xl px-4 py-3">
      <div className="w-20 shrink-0 text-xs text-text-muted">{formatDate(expense.date)}</div>

      <div className="flex-1 min-w-0 space-y-0.5">
        <p className="text-sm text-text truncate">{expense.description}</p>
        <span
          className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${CATEGORY_STYLES[expense.category] ?? 'bg-gray-100 text-gray-700'}`}
        >
          {expense.category}
        </span>
      </div>

      <div className="shrink-0 text-sm font-semibold text-text">
        {formatAmount(expense.amount)}
      </div>

      <button
        onClick={() => onDelete(expense._id)}
        disabled={isDeleting}
        aria-label="Delete expense"
        className="shrink-0 p-1.5 rounded-lg text-text-muted hover:text-danger hover:bg-danger/10 disabled:opacity-40 transition-colors cursor-pointer"
      >
        {isDeleting ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-spin">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
            <path d="M10 11v6M14 11v6" />
            <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
          </svg>
        )}
      </button>
    </div>
  )
}
