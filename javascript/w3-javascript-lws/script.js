'use strict';

// -----------JavaScript Data Types--------------

// let x = 16 + 4 + 'Volvo';
// console.log(typeof x);

// ----------JavaScript Functions------------

/* function productOfTwoNumber(num1, num2) {
  return num1 * num2;
}
console.log(productOfTwoNumber(5, 6));

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
const celsius = toCelsius(77);
console.log(celsius);

function sleep(name, time) {
  console.log(`${name} is sleeping from ${time}`);
}
sleep('Jasim', '10 PM');
sleep('Rahim', '11 PM');

let carName = 'BMW';
function myFunction() {
  let carName = 'Volvo';
  console.log(carName);
}
myFunction();
console.log(carName); */

//* ---------JavaScript Objects----------
/* const cars = {
  name: 'Fiat',
  model: 500,
  weight: '850kg',
  color: 'white',
  start: function () {
    console.log(`Car has started`);
    this.drive();
  },
  drive: function () {
    console.log(`Car is driving`);
  },
};
console.log(cars);
console.log(cars.weight);
console.log(cars['weight']);
cars.start(); */

/* const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue',
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(person);
console.log(person.age);
console.log(person.fullName()); */

/* const mouse = {
  name: 'Mickey',
  small: true,
};

const bird = {
  size: 'small',
  mouse: mouse,
};
console.log(bird.mouse.name);
console.log(bird['mouse']['name']); */

// -------------JavaScript Events---------------

/* function displayDate() {
  document.getElementById('demo').innerHTML = Date();
}
 */

// --------------JavaScript Strings---------------

/* let text = "We are the so-called \\Vikings\\ from the north.";
let length = text.length;
console.log(text); */

// ---------------JavaScript String Methods----------------

/* let text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
console.log(text.length);

let str = 'Apple, Banana, Kiwi';
let part = str.slice(7, 13);
let part2 = str.substring(7, 13);
let part3 = str.substr(7, 6);
console.log(part, part2, part3);

let text2 = 'Please visit Microsoft!';
console.log(text2.replace('Microsoft', 'W3School'));

let text3 = 'Hello World!';
console.log(text3.toUpperCase());
console.log(text3.toLowerCase());

let text4 = '      Hello World!      ';
console.log(text4.trim());

let text5 = 'HELLO WORLD';
let char = text5.charAt(0);
let char2 = text5[0];
console.log(char, char2);

let fullName = 'Mahamudul Hasan Pavel';
console.log(fullName.split(''));
console.log(fullName.split(','));
console.log(fullName.split(' '));
console.log(fullName.split('|'));
 */

// --------------JavaScript String Search-------------

/* let str = "Please locate where 'locate' occurs!";
console.log(str.indexOf('locate'));
console.log(str.lastIndexOf('locate'));

let text = 'Hello world, welcome to the universe.';
console.log(text.includes('world'));

console.log(text.startsWith('Hello'));
console.log(text.endsWith('universe.'));
 */

// -------------JavaScript Template Literals-------------

/* let firstName = `John`;
let lastName = `Doe`;
let text = `Welcome Mr. ${firstName} ${lastName}.`;
console.log(text);

let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total); */

// ----------------JS Numbers--------------------------

/* let x = 0.2;
let y = 0.1;
console.log(x + y);

console.log(typeof NaN);

let myNumber = 32;
console.log(myNumber.toString(10));
console.log(myNumber.toString(2));
console.log(myNumber.toString(8));
console.log(myNumber.toString(16)); */

// ------------JS Number Methods--------------------

/* let x = 9.65656456;
console.log(x.toFixed(2));
console.log(x.toFixed(4));
console.log(x.toPrecision(2));

console.log(Number(true));
console.log(Number(false));
console.log(Number('10'));
console.log(Number('john'));

console.log(`The parseInt() Method`);
console.log(parseInt('-10'));
console.log(parseInt('-10.33'));
console.log(parseInt('10 20 30'));
console.log(parseInt('years 10 '));

console.log(`The parseFloat() Method`);
console.log(parseFloat('10'));
console.log(parseFloat('10.33'));
console.log(parseFloat('10 20 30'));
console.log(parseFloat('years 10 '));

let num = Number.MAX_VALUE;
let num2 = Number.MIN_VALUE;
console.log(num, num2); */

// ------------------Javascript Array------------------

/* const cars = ['Saab', 'Volvo', 'BMW'];
let car = cars[0];
console.log(cars.length);

const person = ['John', 'Doe', 46];
console.log(person[0]);

const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.push('Lemon');

console.log(fruits);
console.log(fruits[fruits.length - 1]);
console.log(Array.isArray(fruits)); 

console.log(`Print element of an Array`);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log(`Same work using forEach method`);

function myFunction(value) {
  console.log(value);
}
fruits.forEach(myFunction); */

// -----------------JavaScript Array Methods-----------------

// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// console.log(fruits.toString());
// console.log(fruits.join(' | '));

// let fruit = fruits.pop();
// console.log(fruit);

// fruits.push('Kiwi');
// console.log(fruits);

// fruits.shift();
// console.log(fruits);

// fruits.unshift('Lemon');
// console.log(fruits);

// fruits[0] = 'PineApple';
// console.log(fruits);

// fruits[fruits.length] = 'Jack-fruit';
// console.log(fruits);

// fruits.splice(2, 0, 'ABC', 'DEF');
// console.log(fruits);

// const citrus = fruits.slice(4);
// console.log(citrus);

// const myGirls = ['Jane', 'Lone'];
// const myBoys = ['Emil', 'Tobias', 'Linus'];

// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren);

// --------------JavaScript Sorting Arrays--------------

// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// console.log(fruits.sort());
// console.log(fruits.reverse());

// const points = [40, 100, 1, 5, 25, 10];

// points.sort(function (a, b) {
//   return a - b;
// });
// console.log(points);

// function myArrayMax(points) {
//   return Math.max.apply(null, points);
// }
// console.log(myArrayMax(points));

// ----------------JavaScript Array Iteration-------------------
// const numbers = [45, 4, 9, 16, 25];

// function myFunction(value, index, array) {
//   return value > 10;
// }

// array method
// const newNumber = numbers.findIndex(myFunction);

// console.log(newNumber);

// ----------------JavaScript Array Const------------------------
// const cars = ['Saab', 'Volvo', 'BMW'];

// cars[0] = 'Toyota';
// console.log(cars);

// cars.push('Audi');
// console.log(cars);

// ----------------JavaScript Date Objects-----------------
// const date = new Date();
// console.log(date);

// console.log(date.toUTCString())
// console.log(date.toDateString())

// ----------------JavaScript Date Formats---------------
// const d = new Date('Mar 25 2015');
// console.log(d)

// --------------JavaScript Get Date Methods-----------
// const date = new Date();

// console.log(date.getFullYear());

// --------------JavaScript Set Date Methods------------
// const d = new Date();
// d.setMonth(11);
// console.log(d);

// Compare Dates
// let text = '';
// const today = new Date();
// const someday = new Date();
// someday.setFullYear(2100, 0, 14);

// if (someday > today) {
//   console.log(`Today is before January 14, 2100`);
// } else {
//   console.log(`Today is after January 14, 2100`);
// }

// -------------JavaScript Math Object-------------

// const number1 = 5.34324;
// const number2 = 4;
// const newNumber = Math.round(number1);

// console.log(newNumber);

// --------------JavaScript Random---------------
/*
// Returns a random integer from 0 to 9:
console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 11));

// Returns a random integer from 0 to 99:
console.log(Math.floor(Math.random() * 100));

// Returns a random integer from 1 to 100:
console.log(Math.floor(Math.random() * 100) + 1);

// A Proper Random Function [min (included) and max (excluded)]
function getRanInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRanInteger(0, 3));

// min and max (both included)
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(getRandomInteger(0, 3));
*/

//--------JavaScript Function Definitions---------

/* // Function Declarations
function myFunction(a, b) {
  return a * b;
}
const result = myFunction(4, 3);
console.log(result);

// Function Expression
const x = function (a, b) {
  return a * b;
};
let z = x(4, 3);

// Self-Invoking Functions
(function () {
  let x = 'Hello!!'; // I will invoke myself
  console.log(x);
})();

// Function can be used as values
function myFunction(a, b) {
  return a * b;
}
let result2 = myFunction(4, 3) * 2;
console.log(result2);

// Functions are Objects
function myFunction(a, b, c) {
  return arguments.length;
}
console.log(myFunction(1, 2, 3));

// Arrow Function
const myFunction3 = (x, y) => {
  return x * y;
};
console.log(myFunction3(4, 3)); */

// -------------JavaScript Function Parameters--------------

// --------JavaScript Function call()----------

/* const person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};
console.log(person.fullName());

const add = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})(); */

//* ----------JavaScript Switch Statement------------

/* let day;
switch (new Date().getDay()) {
  case 0:
    day = 'Sunday';
    console.log(day);

    break;
  case 1:
    day = 'Monday';
    console.log(day);
    break;
  case 2:
    day = 'Tuesday';
    console.log(day);
    break;
  case 3:
    day = 'Wednesday';
    console.log(day);
    break;
  case 4:
    day = 'Thursday';
    console.log(day);
    break;
  case 5:
    day = 'Friday';
    console.log(day);
    break;
  case 6:
    day = 'Saturday';
    console.log(day);
    break;

  default:
    break;
} */

//* নেস্টেড  অবজেক্ট  অফ  এরে

/* const dreamGirl = [
  {
    dream1: {
      name: 'bbu',
      height: '5.4',
      family: [{ father: 'rock', mother: 'shila', sister: 'chinki' }],
      age: undefined,
      contactInfo: [
        {
          facebook: {
            link: 'https://www.facebook.com/',
            followers: '12545',
            status: 'single',
            friendsList: [
              { name: 'rofik' },
              { name: 'jobbar' },
              { name: 'salam' },
              { name: 'borkot' },
              undefined,
            ],
          },
        },
        { instagram: 'https://www.instagram.com/' },
        { twitter: 'https://twitter.com/' },
        { github: 'https://github.com/' },
        { phone: ['01254823212', '02152457'] },
      ],
    },
  },
];

// console.log(dreamGirl[0]?.dream1?.contactInfo[0].facebook.friendsList);
const friends = dreamGirl[0]?.dream1?.contactInfo[0].facebook.friendsList;

const friend = friends.map((friend) => {
  console.log(friend?.name);
}) */

//* -------JavaScript Classes----------

/* class Cars {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let myCar1 = new Cars('Ford', '2014');
console.log(myCar1);

let myCar2 = new Cars('BMW', '2018');
console.log(myCar2);

console.log(myCar1.age()); */
