import { create } from 'zustand';

export interface IRecipe {
  id: string;
  name: string;
  ingredients: string[];
  instructions: string;
}

interface IRecipeStore {
  recipes: IRecipe[];
  addRecipe: (recipe: IRecipe) => void;
  updateRecipe: (id: string, updatedRecipe: Partial<IRecipe>) => void;
  removeRecipe: (id: string) => void;
}

const useRecipeStore = create<IRecipeStore>()((set) => ({
  recipes: [],

  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),

  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),

  removeRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
}));

export default useRecipeStore;
