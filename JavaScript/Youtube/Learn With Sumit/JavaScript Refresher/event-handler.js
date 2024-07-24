'use strict';

// event handler
function hello() {
  console.log('Hello World');
}

//* Best way to do this:
// select button
const button = document.getElementById('button');

// then addEventListener to that button
button.addEventListener('click', (e) => {
  console.log('Hello World Again');
});
