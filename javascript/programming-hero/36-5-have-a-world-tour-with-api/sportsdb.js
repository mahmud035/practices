'use strict';
const playerContainer = document.getElementById('player-container');
const singlePlayerContainer = document.getElementById('single-player');
const maleTeamPhoto = document.getElementById('male');
const femaleTeamPhoto = document.getElementById('female');

const loadPlayers = () => {
  const input = document.getElementById('search-box');
  const error = document.getElementById('error');
  const searchText = input.value;
  input.value = '';

  if (searchText == '') {
    // alert(`Search By Player Name`);
    error.innerText = 'Search by Player Name';
    playerContainer.textContent = ''; // remove previous search result
  } else {
    //* Error
    error.innerText = ''; // remove error message
    singlePlayerContainer.textContent = ''; // remove previous player detail
    maleTeamPhoto.style.display = 'none';
    femaleTeamPhoto.style.display = 'none';

    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchText}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.player == null); //* handle irrelevant search name
        if (data.player == null) {
          alert('Sorry! search not found');
        } else {
          displayPlayers(data.player);
        }
      });
    playerContainer.textContent = '';
  }
};

const displayPlayers = (players) => {
  players.forEach((player) => {
    // console.log(player);

    const div = document.createElement('div');
    div.className = 'col-lg-5 border m-3 text-center py-3';

    div.innerHTML = `
      <div>
         <img class="w-50 rounded" src="${player.strThumb}" alt="">
      </div>
      <h3 class="mt-2">Name: ${player.strPlayer}</h3>
      <h5>Country: ${player.strNationality}</h5>
      <p> ${player.strDescriptionEN?.slice(0, 120)} </p> 
      <button onclick="deletePlayer()" class="btn btn-danger">Delete</button>
      <button onclick="loadSinglePlayer('${
        player.idPlayer
      }')" class="btn btn-success">Details</button>`;

    playerContainer.appendChild(div);
  });
};

const loadSinglePlayer = (id) => {
  const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => displaySinglePlayer(data.players[0]));
};

const displaySinglePlayer = (player) => {
  const singlePlayerContainer = document.getElementById('single-player');
  singlePlayerContainer.textContent = ''; // remove previous player detail
  // console.log(player);

  if (player.strGender == 'Male') {
    document.getElementById('male').style.display = 'block';
    document.getElementById('female').style.display = 'none';
  } else if (player.strGender == 'Female') {
    document.getElementById('female').style.display = 'block';
    document.getElementById('male').style.display = 'none';
  }

  const div = document.createElement('div');
  div.className = 'mx-5 my-3 text-center py-3';

  div.innerHTML = `
    <div>
      <img class="w-75 rounded" src="${player.strThumb}" alt="">
    </div>
      <h3 class="mt-2">Name: ${player.strPlayer}</h3>
      <h5>Country: ${player.strNationality}</h5>
      <p> ${player.strDescriptionEN?.slice(0, 170)}</p>`;
  singlePlayerContainer.appendChild(div);
};
