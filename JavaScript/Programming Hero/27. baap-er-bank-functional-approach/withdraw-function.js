'use strict';

/**
 * 1. add withdraw button event handler
 * 2. get withdraw amount by using  getInputFieldValueById function
 * 3. get previous withdraw amount by using getElementValueById function
 * 4. calculate new withdraw total and se the value
 * 4.5. set new withdraw total by using setTextElementValueById function
 * 5. get previous balance total by using getElementValueById function
 * 6. calculate new balance total
 * 7. set balance total by using setTextElementValueById function
 */

document.getElementById('btn-withdraw').addEventListener('click', (e) => {
  const newWithdrawAmount = getInputFieldValueById('withdraw-field');
  const previousWithdrawAmount = getElementValueById('withdraw-total');
  const totalWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;

  const previousBalanceAmount = getElementValueById('balance-total');

  // error handling
  if (previousBalanceAmount < newWithdrawAmount) {
    alert('Insufficient funds');
    return;
  }
  setTextElementValueById('withdraw-total', totalWithdrawAmount);

  const newBalanceAmount = previousBalanceAmount - newWithdrawAmount;
  setTextElementValueById('balance-total', newBalanceAmount);
});
