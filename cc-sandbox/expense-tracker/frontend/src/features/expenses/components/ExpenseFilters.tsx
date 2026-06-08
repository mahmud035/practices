import { CATEGORIES } from '../types/expense.types'

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const currentYear = new Date().getFullYear()
const YEAR_OPTIONS = Array.from({ length: 3 }, (_, i) => currentYear - i)

const selectClass =
  'border border-border rounded-lg px-3 py-1.5 text-sm text-text bg-surface focus:outline-none focus:ring-2 focus:ring-primary transition-shadow'

interface ExpenseFiltersProps {
  category: string
  month: string
  year: string
  onCategoryChange: (v: string) => void
  onMonthChange: (v: string) => void
  onYearChange: (v: string) => void
  onReset: () => void
}

export default function ExpenseFilters({
  category,
  month,
  year,
  onCategoryChange,
  onMonthChange,
  onYearChange,
  onReset,
}: ExpenseFiltersProps) {
  const hasFilter = category || month || year

  return (
    <div className="flex flex-wrap items-center gap-3">
      <select
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
        className={selectClass}
        aria-label="Filter by category"
      >
        <option value="">All categories</option>
        {CATEGORIES.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <select
        value={month}
        onChange={(e) => onMonthChange(e.target.value)}
        className={selectClass}
        aria-label="Filter by month"
      >
        <option value="">All months</option>
        {MONTHS.map((name, i) => (
          <option key={name} value={String(i + 1)}>
            {name}
          </option>
        ))}
      </select>

      <select
        value={year}
        onChange={(e) => onYearChange(e.target.value)}
        className={selectClass}
        aria-label="Filter by year"
      >
        <option value="">All years</option>
        {YEAR_OPTIONS.map((y) => (
          <option key={y} value={String(y)}>
            {y}
          </option>
        ))}
      </select>

      {hasFilter && (
        <button
          onClick={onReset}
          className="text-sm text-text-muted hover:text-text transition-colors underline cursor-pointer"
        >
          Clear filters
        </button>
      )}
    </div>
  )
}
