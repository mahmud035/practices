"use strict";
//* Basic Function Signature
function addTwo(num1, num2) {
    return num1 + num2;
}
addTwo(11, 22);
// Arrow function
const addTwoArrow = (num1, num2) => {
    return num1 + num2;
};
addTwoArrow(33, 44);
const multiply = (a, b) => a * b;
//* Optional Parameters:
function greet(name, age) {
    if (age !== undefined) {
        return `Hello, ${name}! You are ${age} years old.`;
    }
    else {
        return `Hello, ${name}!`;
    }
}
// Array Methods
// NOTE: map, forEach, filter, reduce ইত্যাদি Array Methods গুলোর ভিতরে আমরা যে callback function টা পাই, তার parameter গুলোর type Explicitly বলে দেওয়ার দরকার নেই। TypeScript এর type Implicitly Infer করে নিতে পারে।
const arr = [2, 3, 4, 5];
const newArr = arr.map((num) => num * num);
console.log(newArr);
//* Rest Parameters
function sumNumbers(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
//* Default Parameter Values
function sayHello(name = 'World') {
    return `Hello, ${name}!`;
}
// NOTE: function inside an object is called method.
// IMPORTANT: Object & Method
const person = {
    name: 'Mezba',
    balance: 5,
    // addBalance(money: number): number {
    //   return this.balance + money;
    // },
    addBalance(money) {
        console.log(`My new balance is: ${this.balance + money}`);
    },
};
person.addBalance(1000);
