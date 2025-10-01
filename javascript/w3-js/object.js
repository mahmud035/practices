'use strict';

// Constructor function for Person Objects
function Person(firstName, lastName, age, eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;
  this.nationality = 'English';
  this.fullName = function () {
    return this.firstName + ' ' + this.lastName;
  };
}

// Create 2 person objects
const person1 = new Person('John', 'Doe', 50, 'blue');
const person2 = new Person('Sally', 'Rally', 48, 'green');

console.log(person1);
console.log(person2);
console.log(person2);
console.log(person2);
console.log(person2);
console.log(person2);
console.log(person2);
console.log(person2);
console.log(person2);
console.log(person2);
