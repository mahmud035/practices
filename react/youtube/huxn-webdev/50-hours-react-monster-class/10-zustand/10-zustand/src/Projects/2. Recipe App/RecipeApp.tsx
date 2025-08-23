import { useState } from 'react';
import useRecipeStore, { IRecipe } from '../../stores/recipeStore';

const defaultFormData = {
  id: '',
  name: '',
  ingredients: [],
  instructions: '',
};

export default function RecipeApp() {
  const { recipes, addRecipe, updateRecipe, removeRecipe } = useRecipeStore(); // Get state and actions from the store
  const [formData, setFormData] = useState<IRecipe>(defaultFormData);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === 'ingredients') {
      setFormData((previousFormData) => ({
        ...previousFormData,
        [name]: value.split(' '),
      }));
    } else {
      setFormData((previousFormData) => ({
        ...previousFormData,
        [name]: value,
      }));
    }
  };

  // Create or Update Recipe
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      formData.name === '' ||
      formData.ingredients.length === 0 ||
      formData.instructions === ''
    )
      return;

    if (editingId) {
      updateRecipe(editingId, {
        name: formData.name,
        ingredients: formData.ingredients,
        instructions: formData.instructions,
      });
    } else {
      addRecipe({
        id: crypto.randomUUID(),
        name: formData.name,
        ingredients: formData.ingredients,
        instructions: formData.instructions,
      });
    }

    setEditingId(null);
    setFormData(defaultFormData);
  };

  // Edit Recipe
  const handleEditRecipe = (recipe: IRecipe) => {
    setEditingId(recipe.id);
    setFormData(recipe);
  };

  // Delete Recipe
  const handleDeleteRecipe = (id: string) => {
    removeRecipe(id);
  };

  // Cancel Recipe
  const handleCancelRecipe = () => {
    setEditingId(null);
    setFormData(defaultFormData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-800">
          Recipe Book
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Recipe Name"
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            placeholder="Ingredients (comma separated)"
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            placeholder="Instructions"
            className="w-full h-32 px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <div className="flex justify-between">
            {editingId ? (
              <>
                <button
                  type="submit"
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  Update Recipe
                </button>
                <button
                  onClick={handleCancelRecipe}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Add Recipe
              </button>
            )}
          </div>
        </form>

        {/* Recipe List */}
        <ul className="space-y-4">
          {recipes.map((recipe) => (
            <li
              key={recipe.id}
              className="p-4 bg-green-50 rounded-lg shadow-sm"
            >
              <h2 className="text-xl font-semibold text-green-800 mb-2">
                {recipe.name}
              </h2>
              <p className="text-gray-700 mb-2">
                <strong>Ingredients:</strong> {recipe.ingredients.join(', ')}
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Instructions:</strong> {recipe.instructions}
              </p>
              <div className="flex justify-between">
                <button
                  onClick={() => handleEditRecipe(recipe)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteRecipe(recipe.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
