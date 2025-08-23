export interface IRecipe {
  name: string;
  picture: string;
  description: string;
  amount: number;
  ingredients: Ingredient[]; // Dynamic fields
}

export interface Ingredient {
  name: string;
  amount: number;
}
