import React from 'react';
import { recipes } from '../utils/recipeData';

const RecipeList = () => {
  const recipeData = recipes;

  return (
    <div>
      <h1>Recipes</h1>
      {recipeData.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
