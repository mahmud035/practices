import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import api from '../../../lib/axios'
import type { ApiResponse, ICreateExpensePayload, IExpense, TCategory } from '../types/expense.types'

interface ExpenseFilters {
  category?: TCategory
  month?: number
  year?: number
}

const EXPENSES_KEY = 'expenses'

export function useExpenses(filters: ExpenseFilters = {}) {
  return useQuery({
    queryKey: [EXPENSES_KEY, filters],
    queryFn: async () => {
      const params = new URLSearchParams()
      if (filters.category) params.set('category', filters.category)
      if (filters.month != null) params.set('month', String(filters.month))
      if (filters.year != null) params.set('year', String(filters.year))
      const { data } = await api.get<ApiResponse<IExpense[]>>(`/expenses?${params}`)
      return data.data
    },
  })
}

export function useCreateExpense() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (payload: ICreateExpensePayload) => {
      const { data } = await api.post<ApiResponse<IExpense>>('/expenses', payload)
      return data.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [EXPENSES_KEY] })
    },
  })
}

export function useDeleteExpense() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (id: string) => {
      await api.delete(`/expenses/${id}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [EXPENSES_KEY] })
    },
  })
}
