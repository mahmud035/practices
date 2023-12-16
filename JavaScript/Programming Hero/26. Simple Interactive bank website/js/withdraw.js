'use strict';

/**
 * 1. add event listener to the withdraw button
 * 2. get the withdraw amount inside the withdraw amount input field
 * 2.5. convert the withdraw amount to a Number
 * 3. get the previous withdraw total
 * 3.5. convert the previous withdraw total to a Number
 * 4. update the withdraw total element with the new withdraw total
 * 5. get the previous balance total
 * 5.5. convert the previous balance total to a Number
 * 6. update the balance total element with the new balance total
 * 7. clear the withdraw amount input field
 *  */

// step-1: add event listener to the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', (e) => {
  // step-2: get the withdraw amount inside the withdraw amount input field
  const withdrawFieldElement = document.getElementById('withdraw-field');
  const newWithdrawAmount = Number(withdrawFieldElement.value);

  // clear the withdraw amount input field
  withdrawFieldElement.value = '';

  if (isNaN(newWithdrawAmount)) {
    alert('Please enter a valid number');
    return;
  }

  // step-3: get the previous withdraw total
  const previousWithdrawTotalElement =
    document.getElementById('withdraw-total');
  const previousWithdrawAmount = Number(previousWithdrawTotalElement.innerText);

  // step-5: get the previous balance total
  const previousBalanceTotalElement = document.getElementById('balance-total');
  const previousBalanceAmount = Number(previousBalanceTotalElement.innerText);

  if (previousBalanceAmount < newWithdrawAmount) {
    alert('Insufficient funds');
    return;
  } else {
    // step-4: update the withdraw total element with the new withdraw total
    const currentWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
    previousWithdrawTotalElement.innerText = currentWithdrawAmount;

    // step-6: update the balance total element with the new balance total
    const currentBalance = previousBalanceAmount - newWithdrawAmount;
    previousBalanceTotalElement.innerText = currentBalance;
  }
});
