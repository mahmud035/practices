'use strict';

const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');
const listItems = document.querySelectorAll('.list-item');
console.log(listItems);

hamburger.addEventListener('click', function () {
  navUL.classList.toggle('show');
});

listItems.forEach((item) => {
  // console.log(item);
  item.addEventListener('click', function () {
    navUL.classList.remove('show');
  });
});
