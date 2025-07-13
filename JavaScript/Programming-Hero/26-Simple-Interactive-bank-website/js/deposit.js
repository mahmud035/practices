'use strict';

/**
 * 1. add event listener to the deposit button
 * 2. get the deposit amount inside the deposit amount input field
 * 2.5. convert the deposit amount to a Number
 * 3. get the previous deposit total
 * 3.5. convert the previous deposit total to a Number
 * 4. update the deposit total element with the new deposit total
 * 5. get the previous balance total
 * 5.5. convert the previous balance total to a Number
 * 6. update the balance total element with the new balance total
 * 7. clear the deposit amount input field
 *  */

// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', (e) => {
  // step-2: get the deposit amount inside the deposit amount input field
  const depositFieldElement = document.getElementById('deposit-field');
  const newDepositAmount = Number(depositFieldElement.value);
  // clear the deposit amount input field
  depositFieldElement.value = '';

  if (isNaN(newDepositAmount)) {
    alert('Please enter a valid number');
    return;
  }

  // step-3: get the previous deposit total
  const depositTotalElement = document.getElementById('deposit-total');
  const previousDepositAmount = Number(depositTotalElement.innerText);

  // step-4: update the deposit total element with the new deposit total
  const currentDepositAmount = previousDepositAmount + newDepositAmount;
  depositTotalElement.innerText = currentDepositAmount;

  // step-5: get the previous balance total
  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceAmount = Number(balanceTotalElement.innerText);

  // step-6: update the balance total element with the new balance total
  const currentBalanceAmount = previousBalanceAmount + newDepositAmount;
  balanceTotalElement.innerText = currentBalanceAmount;
});
