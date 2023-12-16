'use strict';

//* ----JavaScript Callbacks-----
//* A callback is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine.

/* function myDisplayer(some) {
  document.getElementById('demo').innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer); */

//* -----Asynchronous JavaScript-----

// Waiting for a Timeout

/* setTimeout(myFunction, 3000);

function myFunction() {
  document.getElementById('demo').innerHTML = 'I waited 3 seconds';
}
 */

// Instead of passing the name of a function as an argument to another function, you can always pass a whole function instead:

/* setTimeout(function () {
  myFunction('I love You !!!');
}, 3000);

function myFunction(value) {
  document.getElementById('demo').innerHTML = value;
} */

// Waiting for Intervals: When using the JavaScript function setInterval(), you can specify a callback function to be executed for each interval:

/* setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById(
    'demo'
  ).innerHTML = `${d.getHours()}: ${d.getMinutes()}: ${d.getSeconds()}`;
}
 */