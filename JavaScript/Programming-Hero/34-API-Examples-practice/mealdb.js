'use-strict';

const searchResult = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  searchField.value = ''; // clear search field

  if (searchText == '') {
    alert('Please Search by Name');
  } else {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
      .then((response) => response.json())
      .then((data) => displayFoods(data.meals));
  }
};

const displayFoods = (foods) => {
  const foodContainer = document.getElementById('food-container'); // existing element
  foodContainer.textContent = ''; // remove previous search result

  foods.forEach((food) => {
    // console.log(food);
    const div = document.createElement('div');
    div.className = 'col';
    div.className = 'mouse-pointer';

    div.innerHTML = `
     <div onclick = "singleFoodDetail('${food.idMeal}')" class="card h-100">
      <img src="${food.strMealThumb}" class="card-img-top" >
      <div class = "card-body">
        <h5 class = "card-title">${food.strMeal}</h5>
        <p class = "card-text">${food.strInstructions.slice(0, 150)}</p>
      </div>
    </div>`;
    foodContainer.appendChild(div); // append div into existing element
  });
};

const singleFoodDetail = (foodId) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displaySingleFoodDetail(data.meals[0]));
};

const displaySingleFoodDetail = (food) => {
  console.log(food);
  const foodDetailContainer = document.getElementById('food-detail-container'); // existing element
  foodDetailContainer.innerHTML = ''; // remove previous item

  const div = document.createElement('div');
  div.className = 'mouse-pointer';

  div.innerHTML = `
  <div class="card w-50 mx-auto " >
    <img src="${food.strMealThumb}" class="card-img-top">
    <div class="card-body">
      <h 5 class="card-title">${food.strMeal}</h>
       <p class="card-text">${food.strInstructions.slice(0, 150)}</p>
       <a href="${food.strYoutube}" class="btn btn-primary">See Details</a>
    </div>
  </div>`;

  foodDetailContainer.appendChild(div); // append div into existing element
};
