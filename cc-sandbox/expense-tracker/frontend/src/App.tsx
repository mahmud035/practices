import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import ExpensesPage from './pages/ExpensesPage'

const queryClient = new QueryClient()

const navClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? 'font-semibold text-white border-b-2 border-white pb-0.5'
    : 'text-white/70 hover:text-white transition-colors'

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <header className="bg-[--color-primary] text-white px-6 py-4 flex items-center gap-8">
          <span className="font-bold text-lg tracking-tight">Expense Tracker</span>
          <nav className="flex gap-6">
            <NavLink to="/" end className={navClass}>
              Dashboard
            </NavLink>
            <NavLink to="/expenses" className={navClass}>
              Expenses
            </NavLink>
          </nav>
        </header>
        <main className="min-h-screen bg-[--color-surface]">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/expenses" element={<ExpensesPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
