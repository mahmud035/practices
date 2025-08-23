'use strict';

// API চেকলিস্ট

/* ১. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ comments এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা।  */

/* const loadComments = () => {
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => response.json())
    .then((data) => console.log(data));
};
loadComments(); */

/* ২. যে কমেন্ট এর ডাটাগুলো কনসোল এ দেখাতে পারছো। সেগুলা আবার তুমি html এ দেখাতে পারতেছো কিনা। একটা সিস্টেম হবে তোমার একটা বাটন। থাকবে সেটাতে ক্লিক করলে ডাটা লোড হবে। তারপর সেই ডাটা তুমি ওয়েবসাইট এ দেখাবে।  */

/* ৩. আরেকটা সিস্টেম হবে। তুমি যে ডাটা লোড করেছো। সেটা কোন বাটনে ক্লিক করা লাগবে না। ওয়েবসাইট লোড হলেই সরাসরি ডাটা লোড হয়ে তারপর সেই ডাটা ওয়েবসাইট এ দেখাবে। চেষ্টা করবে লোড করা ডাটা এর দুইটা প্রপার্টি অবশ্যই দেখাবে।  */

/* const loadComments = () => {
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => response.json())
    .then((data) => displayComments(data));
};
loadComments();

const displayComments = (comments) => {
  const commentContainer = document.getElementById('comments');

  comments.forEach((comment) => {
    console.log(comment);
    const div = document.createElement('div');
    div.className = 'comment';

    div.innerHTML = `
    <h3>CommentId: ${comment.id}</h3>
    <h4> ${comment.name}</h4>
    <p>${comment.email} </p>
    <p>${comment.body} </p> `;

    commentContainer.appendChild(div);
  });
}; */

/* ৫. ডাইনামিক ডাটা লোড। কোন একটা কমেন্ট এ ক্লিক করলে (কমেন্ট এর div এ বা কোন একটা বাটন এ )সেই কমেন্ট এর আইডি নিয়ে সেটা api এর url এ বসিয়ে (ডাইনামিকভাবে টেমপ্লেট স্ট্রিং দিয়ে) সেই ডাটা লোড করে। সেই ডাটা ওয়েবসাইট এ দেখাতে পারতেছো কিনা।  */

/* const loadComments = () => {
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => response.json())
    .then((data) => displayComments(data));
};
loadComments();

const displayComments = (comments) => {
  const commentContainer = document.getElementById('comments');

  comments.forEach((comment) => {
    // console.log(comment);
    const div = document.createElement('div');
    div.className = 'comment';

    div.innerHTML = `
    <h3>CommentId: ${comment.id}</h3>
    <h4> ${comment.name}</h4>
    <p>${comment.email} </p>
    <p>${comment.body} </p>
    <button onclick="loadCommentById('${comment.id}')" >Details</button>
    `;

    commentContainer.appendChild(div);
  });
};

const loadCommentById = (commentID) => {
  // console.log(commentID);
  const url = `https://jsonplaceholder.typicode.com/comments/${commentID}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayCommentDetail(data));
};

const displayCommentDetail = (comment) => {
  console.log(comment);
  const commentDetail = document.getElementById('comment-detail');
  commentDetail.innerHTML = ''; // remove previous clicked comment

  const div = document.createElement('div');
  div.classList.add('comment-detail-div');
  div.innerHTML = `
   <h3>CommentId: ${comment.id}</h3>
    <h4> ${comment.name}</h4>
    <p>${comment.email} </p>
    <p>${comment.body} </p>`;

  commentDetail.appendChild(div);
}; */

/* ৬. randomuser এর ওয়েবসাইট এ গিয়ে (randomuser.me) এ গিয়ে সেখান থেকে ডাটা লোড করবে। তারপর ইউজারের ছবি দেখাবে। শুধু সেটাও না। ইউজারের location এর মধ্যে যত কিছু আছে। সব দেখাবে ওয়েবসাইট এ। অর্থাৎ street, city, coordinates, timezone যেকোন একভাবে দেখলেই হবে। তবে দেখাতে হবে। */

/* const loadUsers = () => {
  fetch('https://randomuser.me/api/?results=10')
    .then((response) => response.json())
    .then((data) => displayUsers(data.results));
};
loadUsers();

const displayUsers = (users) => {
  const userContainer = document.getElementById('users');

  users.forEach((user) => {
    console.log(user);
    const div = document.createElement('div');
    div.className = 'user';

    div.innerHTML = `
    <img src="${user.picture.large}" >
    <h3> ${user.name.title} ${user.name.first} ${user.name.last}</h3> 
    <h4>Location Details: </h4>
    <p> Country: ${user.location.country}, City: ${user.location.city}, State: ${user.location.state}, PostCode: ${user.location.postcode},  Street: ${user.location.street.name},  ${user.location.street.number}</p> 
    <p>Coordinates: latitude: ${user.location.coordinates.latitude}, longitude: ${user.location.coordinates.longitude} </p>
    <p>Timezone: ${user.location.timezone.offset}, ${user.location.timezone.description} </p>
    `;

    userContainer.appendChild(div);
  });
}; */
