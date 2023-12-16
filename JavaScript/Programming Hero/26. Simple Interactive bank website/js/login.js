'use strict';

document.getElementById('btn-submit').addEventListener('click', (e) => {
  const emailField = document.getElementById('user-email');
  const email = emailField.value;

  const passwordField = document.getElementById('user-password');
  const password = passwordField.value;

  if (email === 'admin@gamil.com' && password === 'admin') {
    window.location.href = './banking.html';
  } else {
    alert('Invalid email or password');
  }
});
