'use strict';

/**
 * 1. add deposit button event handler
 * 2. get deposit amount by using  getInputFieldValueById function
 * 3. get previous deposit amount by using getElementValueById function
 * 4. calculate new deposit total and set the value
 * 4.5. set new deposit total by using setTextElementValueById function
 * 5. get previous balance total by using getElementValueById function
 * 6. calculate new balance total
 * 7. set balance total by using setTextElementValueById function
 */

document.getElementById('btn-deposit').addEventListener('click', (e) => {
  const newDepositAmount = getInputFieldValueById('deposit-field');
  const previousDepositAmount = getElementValueById('deposit-total');

  const totalDepositAmount = previousDepositAmount + newDepositAmount;
  setTextElementValueById('deposit-total', totalDepositAmount);

  const previousBalanceAmount = getElementValueById('balance-total');
  const totalBalanceAmount = previousBalanceAmount + newDepositAmount;

  setTextElementValueById('balance-total', totalBalanceAmount);
});
