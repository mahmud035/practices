'use strict';

function calculateCaseTotalPrice(caseTotalElementId, currentCaseNumber) {
  const caseTotalElement = document.getElementById(caseTotalElementId);
  const caseTotalPrice = currentCaseNumber * 59;
  caseTotalElement.innerText = caseTotalPrice;
  return caseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click', () => {
  const currentCaseNumber = getInputFieldValueById('case-number-field', true);

  const caseTotalPrice = calculateCaseTotalPrice(
    'case-total',
    currentCaseNumber
  );

  cartPrice();
});

document.getElementById('btn-case-minus').addEventListener('click', () => {
  const currentCaseNumber = getInputFieldValueById('case-number-field', false);

  const caseTotalPrice = calculateCaseTotalPrice(
    'case-total',
    currentCaseNumber
  );

  cartPrice();
});
