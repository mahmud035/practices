'use strict';

//* -----33-5 Dynamically display loaded data on your website-----

/* // Load Users on UI
function loadUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => displayUsers(users));
}

function displayUsers(users) {
  // console.log(users);
  const ul = document.getElementById('users'); //existing element

  for (const user of users) {
    // console.log(user);
    const li = document.createElement('li');
    li.innerText = `name: ${user.name}, id: ${user.id}, email: ${user.email}`;
    ul.appendChild(li);
  }
}

// Load Albums on UI
function loadAlbums() {
  fetch('https://jsonplaceholder.typicode.com/albums')
    .then((response) => response.json())
    .then((albums) => displayAlbums(albums));
}

function displayAlbums(albums) {
  // console.log(albums);
  const ul = document.getElementById('photos');

  for (const photo of albums) {
    console.log(photo);
    const li = document.createElement('li');
    li.innerText = `id: ${photo.id}, title: ${photo.title}`;
    ul.appendChild(li);
  }
} */

//* -----33-6 Load posts and display on the website with CSS-----

// Load posts on UI
function loadPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => displayPosts(data));
}
loadPosts(); // call the function

function displayPosts(posts) {
  const postContainer = document.getElementById('posts'); // existing html element

  for (const post of posts) {
    console.log(post);
    const div = document.createElement('div'); // create mew element
    div.classList.add('post'); // add css class
    div.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    `;
    postContainer.appendChild(div);
  }
}
