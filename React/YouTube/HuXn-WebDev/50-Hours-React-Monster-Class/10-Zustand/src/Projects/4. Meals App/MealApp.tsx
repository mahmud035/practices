import { useEffect } from 'react';
import useMealStore from '../../stores/mealStore';

export default function MealApp() {
  const { meals, setMeals, searchQuery, setSearchQuery } = useMealStore();

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const res = await fetch(
          'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
        );
        const data = await res.json();
        setMeals(data.meals);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMeals();
  }, [setMeals]);

  const filteredMeals = meals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Seafood Recipes</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for a meal..."
      />
      <div>
        {filteredMeals.length > 0 ? (
          filteredMeals.map((meal) => (
            <div key={meal.idMeal}>
              <h2>{meal.strMeal}</h2>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
            </div>
          ))
        ) : (
          <p>No meals found</p>
        )}
      </div>
    </div>
  );
}
