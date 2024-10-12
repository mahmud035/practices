'use strict';

//* Practice task for local storage (level-3, level-4)

const getInputValueById = (id) => {
  const element = document.getElementById(id);
  const value = element.value;
  element.value = '';
  return value;
};

//* SAVE value to local storage
document.getElementById('btn-send-name').addEventListener('click', (e) => {
  const name = getInputValueById('name-field');

  // save name to local storage
  localStorage.setItem('name', JSON.stringify(name));
});

document.getElementById('btn-send-email').addEventListener('click', () => {
  const email = getInputValueById('email-field');
  console.log(email);

  // save email to local storage
  localStorage.setItem('email', JSON.stringify(email));
});

document.getElementById('btn-send-message').addEventListener('click', () => {
  const message = getInputValueById('message-field');

  // save message to local storage
  localStorage.setItem('message', JSON.stringify(message));
});

//* DELETE value from local storage
document.getElementById('btn-delete-name').addEventListener('click', () => {
  localStorage.removeItem('name');
});

document.getElementById('btn-delete-email').addEventListener('click', () => {
  localStorage.removeItem('email');
});

document.getElementById('btn-delete-message').addEventListener('click', () => {
  localStorage.removeItem('message');
});

const getContactInfoArrayFromLocalStorage = () => {
  let contactInfoArray = JSON.parse(localStorage.getItem('contactInfoArray'))
    ? JSON.parse(localStorage.getItem('contactInfoArray'))
    : [];

  return contactInfoArray;
};

//* SEND all data to localStorage as an Object
document.getElementById('btn-send').addEventListener('click', () => {
  const contactInfoArray = getContactInfoArrayFromLocalStorage();
  console.log(contactInfoArray);

  const name = getInputValueById('name-field');
  const email = getInputValueById('email-field');
  const message = getInputValueById('message-field');
  // console.log(name, email, message);

  const infoObj = {
    name: name,
    email: email,
    message: message,
  };

  contactInfoArray.push(infoObj);

  // save contactInfoArray to local storage
  localStorage.setItem('contactInfoArray', JSON.stringify(contactInfoArray));
});

//* RESET (clear All data from local storage)
document.getElementById('btn-reset').addEventListener('click', () => {
  localStorage.clear();
});
