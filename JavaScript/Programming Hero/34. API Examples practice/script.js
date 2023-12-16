'use strict';

//* -----34-1 Basic API concept recap with Kanye West-----

/* const loadQuotes = () => {
  fetch('https://api.kanye.rest/')
    .then((response) => response.json())
    .then((data) => displayQuote(data));
};

const displayQuote = (quote) => {
  console.log(quote);
  const quoteElement = document.getElementById('quotes');
  quoteElement.innerText = quote.quote;

}; */

//* -----34-2 (advanced) Handle and display Nested API data-----

/* const loadUsers = () => {
  fetch('https://randomuser.me/api/?results=5')
    .then((response) => response.json())
    .then((data) => displayUsers(data.results));
};
loadUsers(); // Call the function

const displayUsers = (users) => {
  // console.log(users);
  const userContainer = document.getElementById('users');

  users.forEach((user) => {
    console.log(user);
    const div = document.createElement('div');
    div.classList.add('user');

    div.innerHTML = `
    <h5>Name: ${user.name.title} ${user.name.first} ${user.name.last}</h5>
    <img src="${user.picture.medium}">
    <p>Email: ${user.email}</p> <p>Phone: ${user.phone}</p>
    <p>Address: ${user.location.country}, ${user.location.street.number},
    ${user.location.street.name}</p>`;

    userContainer.appendChild(div);
  });
}; */

//* -----34-3 International Travel, Display countries name, capital-----

/* const loadCountries = () => {
  fetch('https://restcountries.com/v3.1/all')
    .then((response) => response.json())
    .then((data) => displayCountries(data));
};
loadCountries();

const displayCountries = (countries) => {
  // console.log(countries);
  const countryContainer = document.getElementById('countries');

  countries.forEach((country) => {
    console.log(country);
    const div = document.createElement('div');
    div.classList.add('country');

    div.innerHTML = `
    <h4>Name: ${country.name.official}</h4>
    <p>Capital: ${country.capital}, TimeZone: ${country.timezones[0]}</p>`;

    countryContainer.appendChild(div);
  });
}; */

//* -----34-4 (advanced) Call dynamic API, load dynamic data to display-----

/* const loadCountries = () => {
  fetch('https://restcountries.com/v3.1/all')
    .then((response) => response.json())
    .then((data) => displayCountries(data));
};
loadCountries();

const displayCountries = (countries) => {
  // console.log(countries);
  const countryContainer = document.getElementById('countries'); //existing element
  const first20Country = countries.slice(0, 20); // slice first 20 country

  first20Country.forEach((country) => {
    console.log(country);
    const div = document.createElement('div');
    div.classList.add('country');

    div.innerHTML = `
    <h4>Name: ${country.name.official}</h4>
    <p>Capital: ${country.capital}, TimeZone: ${country.timezones[0]}</p>
    <button onclick="loadCountryName('${country.name.official}')">Details</button>`;

    countryContainer.appendChild(div);
  });
};

const loadCountryName = (name) => {
  // console.log(name);
  const url = `https://restcountries.com/v3.1/name/${name}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayCountryDetail(data[0]));
};

const displayCountryDetail = (country) => {
  console.log(country);
  const countryDiv = document.getElementById('country-detail');
  countryDiv.className = 'country-detail';

  countryDiv.innerHTML = `
  <h3>${country.name.official}</h3>
  <p>Population: ${country.population}</p>
  <img src="${country.flags.png}">
  `;
}; */
