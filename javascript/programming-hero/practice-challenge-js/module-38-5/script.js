'use strict';

//* task: 1
// setTimeout এর ভিতরে একটা কিছু কনসোল লগ করবে যেটা সাড়ে তিন সেকেন্ড পরে আউটপুট দেখাবে।

// console.log('first');
// console.log('second');
// setTimeout(() => {
//   console.log('three');
// }, 3500);
// console.log('fourth');
// console.log('fifth');

//* task: 2
// prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও

// document.getElementById('show-prompt').addEventListener('click', () => {
//   const userInput = prompt('Enter a number');
//   console.log(userInput);
//   const result = Number(userInput) + 200;
//   alert(result);
// });

//* task: 3
// ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও

// document
//   .getElementById('see-website-location')
//   .addEventListener('click', () => {
//     const response = confirm('Do you want to see this website location?');
//     console.log(response);
//     let location = window.location;

//     if (response === true) {
//       location = location.href;
//       console.log(location);
//     }
//   });

//* Practice task for local storage (level-2)

document.getElementById('increment').addEventListener('click', () => {
  const countElement = document.getElementById('count-element');
  const count = Number(countElement.innerText) + 1;
  countElement.innerText = count;
  saveCountToLocalStorage();
});

const getCountFromLocalStorage = () => {
  let count = JSON.parse(localStorage.getItem('count'))
    ? JSON.parse(localStorage.getItem('count'))
    : 0;

  return count;
};

const saveCountToLocalStorage = () => {
  let count = getCountFromLocalStorage();
  let newCount = count + 1;

  localStorage.setItem('count', JSON.stringify(newCount));

  console.log(count);
};

const displayStoredResult = () => {
  const count = getCountFromLocalStorage();
  document.getElementById('count-element').innerText = count;
  console.log(count);
};
displayStoredResult();
