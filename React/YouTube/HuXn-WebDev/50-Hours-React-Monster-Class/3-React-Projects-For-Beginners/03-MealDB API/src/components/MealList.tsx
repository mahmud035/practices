import { useEffect, useState } from 'react';
import '../styles/index.css';

interface IMeal {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

export default function MealList() {
  const [meals, setMeals] = useState<IMeal[]>([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
        );
        if (!res.ok) throw new Error('Something went wrong!');
        const data = await res.json();
        setMeals(data.meals);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMeals();
  }, []);

  return (
    <div>
      <h1>Meal List</h1>

      <section className="items-container">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="card">
            <img src={meal.strMealThumb} alt="" />
            <div className="content">
              <p>{meal.strMeal}</p>
              <p>{meal.idMeal}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
