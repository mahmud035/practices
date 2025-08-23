import { create } from 'zustand';

export interface IExpense {
  id: string;
  description: string;
  amount: number;
}

interface IExpenseTrackerStore {
  expenses: IExpense[];
  addExpense: (expense: IExpense) => void;
  removeExpense: (id: string) => void;
}

const useExpenseTrackerStore = create<IExpenseTrackerStore>()((set) => ({
  expenses: [],

  addExpense: (expense) =>
    set((state) => ({
      expenses: [...state.expenses, expense],
    })),

  removeExpense: (id) =>
    set((state) => ({
      expenses: state.expenses.filter((expense) => expense.id !== id),
    })),
}));

export default useExpenseTrackerStore;
