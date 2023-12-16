'use strict';

document.getElementById('search-field').addEventListener('keyup', () => {
  const searchElement = document.getElementById('search-field');
  const searchValue = searchElement.value;

  loadPlayers(searchValue);
});

const loadPlayers = (playerName) => {
  const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${playerName}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPlayers(data.player));
};

const displayPlayers = (players) => {
  const playersContainer = document.getElementById('players-container');
  playersContainer.textContent = '';

  players.forEach((player) => {
    console.log(player);
    const playerDiv = document.createElement('div');
    playerDiv.classList.add('col');
    playerDiv.innerHTML = `
      <div class="card h-100">
          <img src="${
            player?.strThumb ? player?.strThumb : './images/dummy-img.jpg'
          }" class="card-img-top" alt="..." />
          <div class="card-body">
              <h3 class="card-title">${player?.strPlayer}</h3>
              <p class="card-text">
              ${
                player?.strDescriptionEN
                  ? (player?.strDescriptionEN).slice(0, 100)
                  : 'Not Available'
              }
              </p>
               <button onclick="loadPlayerDetail(${
                 player?.idPlayer
               })" type="button" class="btn btn-success d-block w-100">See Details</button>
          </div>
      
      </div>
    `;

    playersContainer.appendChild(playerDiv);
  });
};

const loadPlayerDetail = (playerId) => {
  const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${playerId}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPlayerDetails(data.players[0]));
};

const displayPlayerDetails = (player) => {
  const playerDetailContainer = document.getElementById(
    'player-detail-container'
  );
  playerDetailContainer.textContent = '';

  const playerDiv = document.createElement('div');
  playerDiv.classList.add('col');
  playerDiv.innerHTML = `
      <div class="card h-100 mb-5">
          <img src="${
            player?.strThumb ? player?.strThumb : './images/dummy-img.jpg'
          }" class="card-img-top" alt="..." />
          <div class="card-body">
              <h3 class="card-title">${player?.strPlayer}</h3>
              <p class="card-text ">
              ${
                player?.strDescriptionEN
                  ? (player?.strDescriptionEN).slice(0, 100)
                  : 'Not Available'
              }
              </p>
          </div>
      </div>
    `;

  playerDetailContainer.appendChild(playerDiv);
};
