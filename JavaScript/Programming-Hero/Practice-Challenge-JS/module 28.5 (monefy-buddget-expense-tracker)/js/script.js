'use strict';

function getInputFieldValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValue = parseFloat(inputField.value);
  // inputField.value = '';
  return inputValue;
}

function getElementTextValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValue = parseFloat(element.innerText);
  return elementValue;
}

function addMoney(foodExpense, rentExpense, clotheExpense) {
  return foodExpense + rentExpense + clotheExpense;
}

function calculateBalance(previousBalance, incomeAmount, totalExpense) {
  return previousBalance + incomeAmount - totalExpense;
}

function setElementTextValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

// Add event listener to calculate button
document.getElementById('calculate-button').addEventListener('click', () => {
  const incomeAmount = getInputFieldValueById('income-value');

  const foodExpense = getInputFieldValueById('food-value');
  const rentExpense = getInputFieldValueById('rent-value');
  const clotheExpense = getInputFieldValueById('clothe-value');

  const previousTotalExpense = getElementTextValueById('total-expenses');

  // error handling: This is checking if the input is a number and if it is less than 0.
  if (
    isNaN(incomeAmount) ||
    isNaN(foodExpense) ||
    isNaN(rentExpense) ||
    isNaN(clotheExpense) ||
    incomeAmount < 0 ||
    foodExpense < 0 ||
    rentExpense < 0 ||
    clotheExpense < 0
  ) {
    alert('Please enter only valid number');
    return 0;
  }

  const totalExpense = addMoney(foodExpense, rentExpense, clotheExpense);
  // error handling
  if (totalExpense > incomeAmount) {
    alert(`Total Expense can't be greater than Income.`);
    return;
  }

  const newTotalExpenseElement = previousTotalExpense + totalExpense;
  setElementTextValueById('total-expenses', newTotalExpenseElement);

  const previousBalance = getElementTextValueById('balance');
  const newBalance = calculateBalance(
    previousBalance,
    incomeAmount,
    totalExpense
  );
  setElementTextValueById('balance', newBalance);
});

// Add event listener to save button
document.getElementById('save-button').addEventListener('click', () => {
  const incomeAmount = getInputFieldValueById('income-value');
  const savePercentage = getInputFieldValueById('saving-percent');

  // error handling: This is checking if the input is a number and if it is less than 0 or greater than 100
  if (isNaN(savePercentage) || savePercentage > 100 || savePercentage < 0) {
    alert('Please enter valid percentage between 0 and 100');
    return;
  }

  const saveAmount = incomeAmount * (savePercentage / 100);

  const currentBalance = getElementTextValueById('balance');
  // error handling
  if (saveAmount > currentBalance) {
    alert(`Saving amount can't be greater than current balance.`);
    return;
  }

  setElementTextValueById('saving-amount', saveAmount);
  const remainingBalance = currentBalance - saveAmount;
  setElementTextValueById('remaining-balance', remainingBalance);
});
