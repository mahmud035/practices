//* regular function
// function hello() {
//   console.log('Hello World');
// }

// let msg = hello();
// console.log(msg);

//* function expression
// const hello = function () {
//   console.log('Hello World');
// };

//* named function expression
// const hello = function hello() {
//   console.log('Hello World');
// };

//* arrow function
// const hello = () => console.log('Hello World');

// const add = (a, b) => a + b;

// IMPORTANT: When we want to return something from the arrow function, there are two ways to do it.
// Suppose we want to return an object like that:
/* 

{
  a: b,
  b: 6
}

*/

//? First way: (use parenthesis or () first brackets)
const returnSomething = () => ({
  a: 5,
  b: 6,
});

console.log(returnSomething()); // {a: 5, b: 6}

//? Second way: use explicit return keyword
const returnSomethingTwo = () => {
  return {
    a: 5,
    b: 6,
  };
};

console.log(returnSomethingTwo()); // {a: 5, b: 6}

//* anonymous function
// function hello() {
//   return () => {
//     console.log('Hello World');
//   };
// }

// function hello() {
//   return function () {
//     console.log('Hello World');
//   };
// }
