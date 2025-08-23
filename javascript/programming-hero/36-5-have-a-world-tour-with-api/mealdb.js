'use strict';

const loadMeals = () => {
  const searchBox = document.getElementById('search-box');
  const searchText = searchBox.value;
  searchBox.value = '';

  // load data
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayMeals(data.meals));
};

const displayMeals = (meals) => {
  const mealsContainer = document.getElementById('meals');
  mealsContainer.textContent = '';
  meals.forEach((meal) => {
    // console.log(meal);
    const div = document.createElement('div');
    div.className = 'col-md-4 mb-4 ';
    div.innerHTML = `
      <div onclick="loadSingleMeal('${meal.idMeal}')" class="card h-100">
        <img src="${meal.strMealThumb}" >
        <div class="card-body">
           <h5 class="card-title">${meal.strMeal}</h5>
           <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
           <button  class = "btn btn-success"> See Details</button> 
         </div>
      </div>`;
    mealsContainer.appendChild(div);
  });
};

const loadSingleMeal = (mealId) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displaySingleMeal(data.meals[0]));
};

const displaySingleMeal = (singleMeal) => {
  const singleMealContainer = document.getElementById('single-meal');
  singleMealContainer.textContent = '';
  // console.log(singleMeal);

  const div = document.createElement('div');
  div.innerHTML = `
    <div class="card" >
      <img src="${singleMeal.strMealThumb}" >
      <div class="card-body">
          <h5 class="card-title">${singleMeal.strMeal}</h5>
          <p class="card-text">${singleMeal.strInstructions.slice(0, 150)}</p>
      </div>
    </div>
  
  `;
  singleMealContainer.appendChild(div);
};
