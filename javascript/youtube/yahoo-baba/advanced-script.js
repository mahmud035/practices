'use strict';

//* Advance JavaScript - Let & Const Variable Tutorial in Hindi / Urdu

/* if (1 == 1) {
  let a = 'Hello';
}
console.log(a); */

//* Advance JavaScript - Arrow Functions Tutorial in Hindi / Urdu

/* const welcome = (name) => `Hello & Welcome ${name}.`;
console.log(welcome('Yahoo Baba'));
console.log(typeof welcome); */

//* Advance JavaScript - Spread Operator Tutorial in Hindi / Urdu

/* const array1 = [10, 20, 30, 40];
// array merging using spread operator
const array2 = [777, ...array1, 100];
const array3 = [5, ...array1, ...array2, 85];

array1.push(50, 60, 70);

console.log(array1);
console.log(array2);
console.log(array3);

// object merging using spread operator
const obj1 = {
  name: 'Yahoo Baba',
  course: 'Btech',
};

const obj2 = {
  id: 1,
  age: 25,
};

const obj3 = { ...obj1, ...obj2 };
console.log(obj3); */

//* Advance JavaScript - Destructuring Array Tutorial in Hindi / Urdu

/* let user = ['Yahoo Baba', 25, 'Delhi', ['Male', 25000]];
// ---Example:1---
// let [name, age = 20, city, [gender, salary]] = user;
// console.log(name);
// console.log(age);
// console.log(city);
// console.log(gender);
// console.log(salary);

// ---Example:2---
// function user2([name, age = 20, city]) {
//   console.log(name);
//   console.log(age);
//   console.log(city);
// }
// user2(['Yahoo Baba', 25, 'Delhi']);

// ---Example:3---
// function user3() {
//   return ['Yahoo Baba', 25, 'Delhi'];
// }
// let [name, age, city] = user3();
// console.log(name);
// console.log(age);
// console.log(city); */

//* Advance Javascript - Destructuring Object Tutorial in Hindi / Urdu

/* const user = {
  name: 'Yahoo Baba',
  age: 25,
  city: 'Delhi',
};

const { name, age, city } = user;
console.log(name);
console.log(age);
console.log(city);

// const { name: n, age: a, city: c } = user;
// console.log(n);
// console.log(a);
// console.log(c); */

//* Advance Javascript - OOP Introduction Tutorial in Hindi / Urdu

// class hello {
//   message() {
//     console.log('Hello Everyone');
//   }
//   sorry() {
//     console.log('Sorry Everyone');
//   }
// }
// const a = new hello();
// a.message();
// a.sorry();

// class student {
//   constructor() {
//     console.log('constructor function');
//   }
// }

// let a = new student();
// let b = new student();

//* Advance Javascript - Class Inheritance Tutorial in Hindi / Urdu

class employee {
  constructor(name) {
    console.log(`Constructor : Employee`);
  }
}

class manager extends employee {}
let a = new manager('Yahoo Baba');
