'use strict';

const element = document.getElementsByTagName('h1')[0];
const elementValue = Number(element.innerText);

const btnDouble = document.getElementById('btn-double');
const btnTriple = document.getElementById('btn-triple');
const btnFourTimes = document.getElementById('btn-four-times');
const btnReset = document.getElementById('btn-reset');

btnDouble.addEventListener('click', () => {
  const newElementValue = elementValue * 2;
  element.innerText = newElementValue;
});

btnTriple.addEventListener('click', () => {
  const newElementValue = elementValue * 3;
  element.innerText = newElementValue;
});

btnFourTimes.addEventListener('click', () => {
  const newElementValue = elementValue * 4;
  element.innerText = newElementValue;
});

btnReset.addEventListener('click', () => {
  element.innerText = elementValue;
});
