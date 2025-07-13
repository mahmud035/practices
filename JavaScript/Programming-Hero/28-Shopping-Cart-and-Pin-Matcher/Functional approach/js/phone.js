'use strict';

function calculatePhoneTotalPrice(phoneTotalElementId, currentPhoneNumber) {
  const phoneTotalElement = document.getElementById(phoneTotalElementId);
  const phoneTotalPrice = currentPhoneNumber * 1219;
  phoneTotalElement.innerText = phoneTotalPrice;
  return phoneTotalPrice;
}

// Add event listener to btn-phone-plus
document.getElementById('btn-phone-plus').addEventListener('click', () => {
  const currentPhoneNumber = getInputFieldValueById('phone-number-field', true);

  const phoneTotalPrice = calculatePhoneTotalPrice(
    'phone-total',
    currentPhoneNumber
  );

  cartPrice();
});

// Add event listener to btn-phone-minus
document.getElementById('btn-phone-minus').addEventListener('click', () => {
  const currentPhoneNumber = getInputFieldValueById(
    'phone-number-field',
    false
  );

  const phoneTotalPrice = calculatePhoneTotalPrice(
    'phone-total',
    currentPhoneNumber
  );

  cartPrice();
});
