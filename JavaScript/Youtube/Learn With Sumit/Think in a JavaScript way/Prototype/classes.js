//* Example: 1
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// function Cricketer(type, country) {
//   Person.call(this);

//   this.type = type;
//   this.country = country;
// }

// Person.prototype = {
//   eat: function () {
//     console.log(`${this.name} is eating`);
//   },
// };

// Cricketer.prototype = Object.create(Person.prototype);

// const sakib = new Person('Sakib', 35);
// const tamim = new Person('Tamim', 35);

// console.log(sakib);

//* Convert to ES6 class
// // parent class
/* class Person {
  constructor(name, age) {
    this.name = name; // property
    this.age = age;
  }

  // method
  eat() {
    console.log(`${this.name} is eating`);
  }
}

// child class
class Cricketer extends Person {
  constructor(name, age, type, country) {
    super(name, age);
    this.type = type;
    this.country = country;
  }

  play() {
    console.log(`${this.name} is playing`);
  }
}

const sakib = new Cricketer('Sakib', 35, 'All rounder', 'Bangladesh');
console.log(sakib); */

//* Example: 2
const Person = function (name, gender, birthYear) {
  this.name = name;
  this.gender = gender;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  let age = new Date().getFullYear() - this.birthYear;
  console.log(age);
};
Person.prototype.city = 'Dhaka'; // add another property

let john = new Person('John', 'Male', 1990);
// john.calcAge();
console.log(john);

let merry = new Person('Merry', 'Female', 1995);
// merry.calcAge();
console.log(merry);

let steve = new Person('Steve', 'Male', 1980);
// steve.calcAge();
console.log(steve);

//* Convert to ES6 class
// class Person {
//   constructor(name, gender, birthYear) {
//     this.name = name;
//     this.gender = gender;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     let age = new Date().getFullYear() - this.birthYear;
//     console.log(age);
//   }
// }

// let john = new Person('John', 'Male', 1990);
// john.calcAge();
// console.log(john);

// let merry = new Person('Merry', 'Female', 1995);
// merry.calcAge();
// console.log(merry);

// let steve = new Person('Steve', 'Male', 1980);
// steve.calcAge();
// console.log(steve);
