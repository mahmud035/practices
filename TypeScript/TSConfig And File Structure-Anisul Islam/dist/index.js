"use strict";
console.log('Hello I am index.ts');
const userForm = document.querySelector('.user-form');
// console.log(userForm);
const userName = document.querySelector('#username');
// console.log(userName);
const userEmail = document.querySelector('#useremail');
// console.log(userEmail);
const userCountry = document.querySelector('#country');
// console.log(userCountry)
const userFeedback = document.querySelector('#feedback');
// console.log(userFeedback);
userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
        userName: userName.value,
        userEmail: userEmail.value,
        userCountry: userCountry.value,
        userFeedback: userFeedback.value,
    };
    console.log(data);
});
