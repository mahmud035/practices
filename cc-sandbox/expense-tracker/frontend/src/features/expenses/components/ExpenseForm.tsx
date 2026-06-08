import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useCreateExpense } from '../hooks/useExpenses'
import { CATEGORIES } from '../types/expense.types'

const CATEGORY_ENUM = ['Food', 'Transport', 'Utilities', 'Entertainment', 'Other'] as const

const schema = z.object({
  amount: z
    .number({ invalid_type_error: 'Enter a valid amount' })
    .positive('Must be greater than 0'),
  category: z.enum(CATEGORY_ENUM, {
    errorMap: () => ({ message: 'Select a category' }),
  }),
  description: z.string().min(1, 'Required').max(200, 'Max 200 characters').trim(),
  date: z.string().min(1, 'Required'),
})

type FormValues = z.infer<typeof schema>

const inputClass =
  'w-full border border-border rounded-lg px-3 py-2 text-sm text-text bg-surface focus:outline-none focus:ring-2 focus:ring-primary transition-shadow'

export default function ExpenseForm() {
  const { mutate, isPending, isError } = useCreateExpense()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      description: '',
      date: new Date().toISOString().slice(0, 10),
    },
  })

  const onSubmit = (values: FormValues) => {
    mutate(values, { onSuccess: () => reset() })
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-surface-raised border border-border rounded-xl p-6 space-y-4"
    >
      <h2 className="font-semibold text-text text-base">Add Expense</h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-xs font-medium text-text-muted uppercase tracking-wide">
            Amount
          </label>
          <input
            type="number"
            step="0.01"
            min="0.01"
            placeholder="0.00"
            {...register('amount', { valueAsNumber: true })}
            className={inputClass}
          />
          {errors.amount && (
            <p className="text-xs text-danger">{errors.amount.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <label className="text-xs font-medium text-text-muted uppercase tracking-wide">
            Category
          </label>
          <select {...register('category')} className={inputClass}>
            <option value="">Select…</option>
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-xs text-danger">{errors.category.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-xs font-medium text-text-muted uppercase tracking-wide">
          Description
        </label>
        <input
          type="text"
          placeholder="What did you spend on?"
          {...register('description')}
          className={inputClass}
        />
        {errors.description && (
          <p className="text-xs text-danger">{errors.description.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <label className="text-xs font-medium text-text-muted uppercase tracking-wide">
          Date
        </label>
        <input type="date" {...register('date')} className={inputClass} />
        {errors.date && (
          <p className="text-xs text-danger">{errors.date.message}</p>
        )}
      </div>

      {isError && (
        <p className="text-sm text-danger">Failed to add expense. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-primary hover:bg-primary-hover text-white py-2 rounded-lg text-sm font-medium disabled:opacity-50 transition-colors cursor-pointer"
      >
        {isPending ? 'Adding…' : 'Add Expense'}
      </button>
    </form>
  )
}
