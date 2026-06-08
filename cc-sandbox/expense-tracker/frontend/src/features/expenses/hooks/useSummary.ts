import { useQuery } from '@tanstack/react-query'
import api from '../../../lib/axios'
import type { ApiResponse, IExpenseSummary } from '../types/expense.types'

const SUMMARY_KEY = 'expenses-summary'

export function useSummary() {
  return useQuery({
    queryKey: [SUMMARY_KEY],
    queryFn: async () => {
      const { data } = await api.get<ApiResponse<IExpenseSummary>>('/expenses/summary')
      return data.data
    },
  })
}
