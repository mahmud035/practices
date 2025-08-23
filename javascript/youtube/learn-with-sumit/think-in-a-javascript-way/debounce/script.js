//* Example: 1

// const button = document.getElementById('button');

// // debounce handler
// function debounce(fn, delay) {
//   let timeOutId;
//   return function () {
//     if (timeOutId) {
//       clearTimeout(timeOutId);
//     }

//     timeOutId = setTimeout(() => {
//       fn();
//     }, delay);
//   };
// }

// button.addEventListener(
//   'click',
//   debounce(function () {
//     console.log('Clicked');
//   }, 500)
// );

//* Example: 2
const input = document.querySelector('input');
const defaultText = document.getElementById('default');
const debounceText = document.getElementById('debounce');
const throttleText = document.getElementById('throttle');

const updateDebounceText = debounce((text) => {
  debounceText.textContent = text;
});

input.addEventListener('input', (e) => {
  defaultText.textContent = e.target.value;
  updateDebounceText(e.target.value);
});

function debounce(cb, delay = 1000) {
  return (...args) => {};
}
