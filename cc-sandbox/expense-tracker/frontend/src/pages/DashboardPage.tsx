import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { useSummary } from '../features/expenses/hooks/useSummary'
import { CATEGORIES } from '../features/expenses/types/expense.types'
import type { IExpenseSummary } from '../features/expenses/types/expense.types'

const MONTH_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const CATEGORY_STYLES: Record<string, string> = {
  Food: 'bg-green-100 text-green-800',
  Transport: 'bg-blue-100 text-blue-800',
  Utilities: 'bg-amber-100 text-amber-800',
  Entertainment: 'bg-purple-100 text-purple-800',
  Other: 'bg-gray-100 text-gray-700',
}

function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)
}

// Fill in any months with no data so the chart always shows a 6-month window.
function buildTrendData(trend: IExpenseSummary['trend']) {
  const now = new Date()
  return Array.from({ length: 6 }, (_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() - 5 + i, 1)
    const year = d.getFullYear()
    const month = d.getMonth() + 1
    const found = trend.find((t) => t.year === year && t.month === month)
    return {
      label: `${MONTH_SHORT[month - 1]} '${String(year).slice(2)}`,
      total: parseFloat((found?.total ?? 0).toFixed(2)),
    }
  })
}

function LoadingSkeleton() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <div className="h-8 w-36 bg-border rounded-lg animate-pulse" />
      <div className="h-36 bg-border rounded-xl animate-pulse" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-24 bg-border rounded-xl animate-pulse" />
        ))}
      </div>
      <div className="h-72 bg-border rounded-xl animate-pulse" />
    </div>
  )
}

export default function DashboardPage() {
  const { data, isLoading, isError } = useSummary()

  if (isLoading) return <LoadingSkeleton />

  if (isError) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <p className="text-danger text-sm">Failed to load dashboard. Please refresh the page.</p>
      </div>
    )
  }

  const { thisMonth, byCategory, trend } = data!

  const categoryBreakdown = CATEGORIES.map((cat) => {
    const found = byCategory.find((c) => c.category === cat)
    return { category: cat, total: found?.total ?? 0 }
  })

  const trendData = buildTrendData(trend)
  const hasTrendData = trendData.some((d) => d.total > 0)

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-text">Dashboard</h1>

      {/* This month hero */}
      <div className="bg-primary rounded-xl p-6">
        <p className="text-sm text-white/70 uppercase tracking-wide font-medium">This Month</p>
        <p className="text-4xl font-bold text-white mt-1">{formatCurrency(thisMonth)}</p>
      </div>

      {/* All-time by category */}
      <div>
        <h2 className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-3">
          All-Time by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {categoryBreakdown.map(({ category, total }) => (
            <div
              key={category}
              className="bg-surface-raised border border-border rounded-xl p-4 space-y-2"
            >
              <span
                className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${CATEGORY_STYLES[category] ?? 'bg-gray-100 text-gray-700'}`}
              >
                {category}
              </span>
              <p className="text-base font-semibold text-text">{formatCurrency(total)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 6-month spending trend */}
      <div className="bg-surface-raised border border-border rounded-xl p-6">
        <h2 className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-4">
          Last 6 Months
        </h2>

        {hasTrendData ? (
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={trendData} margin={{ top: 4, right: 8, left: 0, bottom: 4 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
              <XAxis
                dataKey="label"
                tick={{ fontSize: 12, fill: 'var(--color-text-muted)' }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 12, fill: 'var(--color-text-muted)' }}
                tickFormatter={(v: number) => `$${v}`}
                axisLine={false}
                tickLine={false}
                width={56}
              />
              <Tooltip
                formatter={(value) => [formatCurrency(value as number), 'Spent']}
                contentStyle={{
                  background: 'var(--color-surface-raised)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  fontSize: '13px',
                }}
                cursor={{ fill: 'var(--color-border)', opacity: 0.5 }}
              />
              <Bar dataKey="total" fill="var(--color-primary)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex items-center justify-center h-48 text-text-muted text-sm">
            No spending data yet — add some expenses to see your trend.
          </div>
        )}
      </div>
    </div>
  )
}
