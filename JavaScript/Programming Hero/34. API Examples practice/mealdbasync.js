'use-strict';
//* (34-5)

const searchFood = async () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  searchField.value = ''; // Clear input Data

  if (searchText == '') {
    // please write some thing to display
  } else {
    // Load Data
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      displaySearchResult(data.meals);
    } catch (error) {
      console.log(error);
    }

    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => displaySearchResult(data.meals));
  }
};

//* (34-6)
const displaySearchResult = (meals) => {
  const searchResult = document.getElementById('search-result'); // existing element
  searchResult.textContent = ''; // Clear search Data/Result
  if (meals.length == 0) {
    // show no result found
  }

  meals.forEach((meal) => {
    // console.log(meal);
    const div = document.createElement('div');
    div.classList.add('col'); // add bootstrap class
    div.innerHTML = `
    <div onclick="loadMealDetail('${meal.idMeal}')" class="card h-100">
          <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">
            ${meal.strInstructions.slice(0, 150)}
            </p>
          </div>
        </div>`;
    searchResult.appendChild(div);
  });
};

//* (34-8)
const loadMealDetail = async (mealId) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

  const response = await fetch(url);
  const data = await response.json();
  displayMealDetail(data.meals[0]);

  // fetch(url)
  //   .then((response) => response.json())
  //   .then((data) => displayMealDetail(data.meals[0]));
};

const displayMealDetail = (meal) => {
  console.log(meal);
  const mealDetails = document.getElementById('meal-details');
  mealDetails.textContent = ''; // clear previous item
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
      <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text"> ${meal.strInstructions.slice(0, 150)}</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
     </div>
  `;
  mealDetails.appendChild(div);
};

//* -----Quiz Questions-----
// bondCode = ` I am Fake James bond . My new code is: 00${7 + 1 + 2}`;
// console.log(bondCode);

// const data = {
//   result: [
//     {
//       userName: { title: 'Mr.', name: 'sakib khan' },
//     },
//   ],
// };
// console.log(data.result[0].userName.name);

// const p = [1, 2, 3];
// const q = p.map((n) => Math.pow(n, 3));
// console.log(q);

// const path = 'images/cat.jpg';
// const div = document.createElement('div');
// div.innerHTML = `<img src=${path} alt = "">`;

// const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`;

// const info = { name: '', phoneNumber: null };
// console.log(JSON.stringify(info));

// const array = { hobbies: ['dancing', 'singing', 'acting'] };
// console.log(JSON.stringify(array));

// console.log(JSON.stringify({ eventName: 'birthday', date: Date().tomorrow() }));

