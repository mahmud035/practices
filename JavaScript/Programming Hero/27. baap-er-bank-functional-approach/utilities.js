'use strict';

function getInputFieldValueById(inputFieldId) {
  const inputFieldElement = document.getElementById(inputFieldId);
  const inputFieldValue = parseFloat(inputFieldElement.value);
  inputFieldElement.value = '';
  // error handling
  if (isNaN(inputFieldValue) || inputFieldValue < 0) {
    alert('Please enter a valid number');
    return 0;
  }
  return inputFieldValue;
}

function getElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const elementValue = parseFloat(textElement.innerText);
  return elementValue;
}

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}
