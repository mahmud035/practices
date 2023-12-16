'use strict';
const main = document.getElementById('main'); // existing element
const searchButton = () => {
  const input = document.getElementById('input-value');
  const error = document.getElementById('error');
  const inputValue = parseInt(input.value);
  input.value = '';

  if (isNaN(inputValue) || inputValue == '') {
    // alert('Please enter a valid number.');
    error.innerText = 'Please give a number';
    main.textContent = ''; // remove search result
  } else if (inputValue <= 0 || inputValue > 52) {
    error.innerText = `Enter a number between 1 to 52`;
    main.textContent = '';
  } else {
    main.textContent = '';
    error.innerText = ''; // remove error message
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
      .then((response) => response.json())
      .then((data) => cardsDisplay(data.cards));
  }
};

const cardsDisplay = (cards) => {
  cards.forEach((card) => {
    console.log(card);
    const div = document.createElement('div');
    // div.classList.add('col-md-4'); // can't give multiple class
    div.className = 'col-md-4 my-4';
    div.innerHTML = `
      <div class="card h-100" >
        <img src="${card.images.png}" class="card-img-top" >
        <div class="card-body">
            <h5 class="card-title">${card.suit}</h5>
            <p class="card-text">${card.code}</p>
          <button onclick="cardDetails('${card.code}')" class="btn btn-primary"> See More </button>
        </div>
      </div>`;
    main.appendChild(div); // append div into existing element
  });
};

const cardDetails = (code) => {
  fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=52`)
    .then((response) => response.json())
    .then((data) => {
      const allCards = data.cards;
      const singleCard = allCards.find((card) => card.code === code);
      console.log(singleCard);

      const singleCardContainer = document.getElementById('single-card');
      singleCardContainer.textContent = ''; // remove previous result
      const div = document.createElement('div');
      div.innerHTML = `
      <div class="card h-100" >
        <img src="${singleCard.images.png}" class="card-img-top" >
        <div class="card-body">
            <h5 class="card-title">${singleCard.suit}</h5>
            <p class="card-text">${singleCard.code}</p>
        </div>
      </div>`;
      singleCardContainer.appendChild(div);
    });
};
