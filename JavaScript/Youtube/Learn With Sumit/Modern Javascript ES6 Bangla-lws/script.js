'use strict';

//* #2 - JavaScript Fat Arrow Functions

/* const addTwoNumbers = (num1, num2) => {
  return num1 + num2;
};

const result = addTwoNumbers(1, 2);
console.log(result);

const javascript = {
  name: 'Javascript',
  libraries: ['jQuery', 'React', 'Angular'],
  printLibraries: function () {
    this.libraries.forEach((library) =>
      console.log(`${this.name} loves ${library}`)
    );
  },
};

javascript.printLibraries(); */

//* #3 - Truthy / Falsy values

// falsy values:
/* false, 0, '', null, NaN, undefined */

// truthy values
/* everything else which is not falsy is truthy value */

/* let myVar = '';

if (myVar) {
  console.log('myVar is truthy');
} else {
  console.log('myVar is falsy');
} */

//* #4 - Ternary Operator

// Syntax: condition ? valueIfTrue : valueIfFalse

/* let age = 26;
age > 18 ? console.log('You are an adult') : console.log('You are a child'); */

//* #5 - Array find() method

/* let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = numbers.find((number) => number > 4);

console.log(result); */

//* #6 - Array findIndex() method

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers.findIndex((number) => number > 23);

console.log(result); */

// #7 - Array filter() method
/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers.filter((number) => number > 4);

console.log(numbers)
console.log(result); */

//* #8 - Array slice() method
/* const numbers = [1, 2, 3, 4, 5];

const result = numbers.slice(0, 3);

console.log(numbers);

console.log(result); */

//* #9 - Array splice() method
/* const numbers = [1, 2, 3, 4, 5];

const result = numbers.splice(1, 3, 6, 7, 8);

console.log(numbers);
console.log(result); */

//* #12 - Array map() method

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const result = numbers.map((number) => number * 2);

console.log(result); */

//* #13 - Array reduce() method

/* const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers.reduce((prevValue, currentValue) => {
  return prevValue + currentValue;
}, 0);

console.log(result); */

//* #14 - for loop, for in & for of

//* #17 - Spread Operator
/* const numbers = [1, 2, 3, 4];

const newNumbers = [...numbers, 5, 6, 7]; // copy of numbers array

console.log(numbers);
console.log(newNumbers);

const numbers1 = [1, 2, 3, 4];
const numbers2 = [5, 6, 7, 8];

const totalNumbers = [...numbers1, ...numbers2]; // concat two arrays
console.log(totalNumbers); */

//* #18 - Rest Operator

/* function myFunc(a, b, ...params) {
  console.log(a);
  console.log(b);
  console.log(params);
}

myFunc(1, 2, 3, 4, 5, 6); */

//* #19 - Destructuring

// Object destructuring
// Example: 1
/* const person = {
  name: 'John',
  age: 30,
  location: {
    city: 'Miami',
    temp: 92,
  },
};

const {
  name,
  age,
  location: { city, temp },
} = person;

console.log(name);
console.log(age);
console.log(city);
console.log(temp); */

// Example 2
/* const user = {
  id: 334,
  name: 'John',
  age: 30,
  // education: {
  //   degree: 'Masters',
  // },
};

const { education: { degree } = {} } = user; // if education is not defined, default value is {}

console.log(degree); */

// Array destructuring
// Example: 1

/* const numbers = [1, 2, 3, 4, 5];

const [num1, num2] = numbers;
const [, , num3, , num5] = numbers;

console.log(num1, num2);
console.log(num3, num5); */

// Example: 2 (Nested array destructuring)

/* const numbers2 = [5, 6, [7, 8, 9], 10];

const [, , [, a, b]] = numbers2;

console.log(a, b); */

// Example: 3 (Value Swapping)

/* let x = 1;
let y = 2;

[x, y] = [y, x];

console.log(x, y); */

//* #20 - Module Imports / Exports

/* import { PI, a } from './external.js'; // named import

console.log(PI, a); */

//* #21 - Template Literals

// Example: 1

/* let firstName = 'John';
let lastName = 'Doe';
let age = 30;

let text = `Welcome ${firstName} ${lastName}! You are ${age} years old.`;
console.log(text); */

// Example: 2

/* let price = 10;
let VAT = 0.25;

let totalPrice = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(totalPrice); */

//* #22 - Tagged Template Literals



/* let player1 = 'Sakib';
let player2 = 'Tamim';

console.log(`We have ${player1} and ${player2} in our cricket team`); */


//* #23 - Set & WeakSet 
