'use strict';

function getInputFieldValueById(inputId, isIncrease) {
  const inputElement = document.getElementById(inputId);
  const inputValue = parseInt(inputElement.value);

  let newNumber;
  if (isIncrease) {
    newNumber = inputValue + 1;
  } else {
    newNumber = inputValue - 1;
  }
  inputElement.value = newNumber;
  return newNumber;
}

function cartPrice() {
  // calculate subTotal
  const phoneTotalPriceElement = document.getElementById('phone-total');
  const phoneTotalPrice = parseInt(phoneTotalPriceElement.innerText);

  const caseTotalPriceElement = document.getElementById('case-total');
  const caseTotalPrice = parseInt(caseTotalPriceElement.innerText);

  const subTotal = phoneTotalPrice + caseTotalPrice;
  document.getElementById('sub-total').innerText = subTotal;

  // calculate tax
  const taxAmountString = (subTotal * (10 / 100)).toFixed(2);
  const taxAmount = parseFloat(taxAmountString);
  document.getElementById('tax-amount').innerText = taxAmount;

  // calculate total
  const finalAmount = subTotal + taxAmount;
  document.getElementById('final-total').innerText = finalAmount;
}
