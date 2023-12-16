// event handler
function hello() {
  console.log('Hello World');
}

//* Another way to do this:
// select the button
const button = document.getElementById('button');

// then addEventListener to that button
button.addEventListener('click', () => {
  console.log('Hello World Again');
});
