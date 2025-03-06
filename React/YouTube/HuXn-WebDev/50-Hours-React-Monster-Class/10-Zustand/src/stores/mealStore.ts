import { create } from 'zustand';

interface IMeal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

interface IMealStore {
  meals: IMeal[];
  searchQuery: string;
  setMeals: (meals: IMeal[]) => void;
  setSearchQuery: (query: string) => void;
}

const useMealStore = create<IMealStore>()((set) => ({
  meals: [],
  searchQuery: '',
  setMeals: (meals) => set({ meals }),
  setSearchQuery: (query) => set({ searchQuery: query }),
}));

export default useMealStore;
