"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * TypeScript enhances JavaScript functions with type safety, providing better documentation and catching errors during development.
 *
 * Array Methods - map, forEach, filter, reduce ইত্যাদি Array Methods গুলোর ভিতরে আমরা যে callback function টা পাই, তার parameter গুলোর type Explicitly বলে দেওয়ার দরকার নেই। TypeScript এর type Implicitly Infer করে নিতে পারে।
 */
//* ----------------------------------------
//* 1. Basic Function Typing
//* ----------------------------------------
// ----------------------------------------
// Function with Type Annotations
// ----------------------------------------
// Named function with parameter and return types
function add(x, y) {
    return x + y;
}
// ----------------------------------------
// Arrow Function with Types
// ----------------------------------------
const multiply = (x, y) => x * y;
//* ----------------------------------------
//* 2. Optional and Default Parameters
//* ----------------------------------------
// ----------------------------------------
// Optional Parameters
// ----------------------------------------
function greet(name, title) {
    return title ? `Hello, ${title} ${name}!` : `Hello, ${name}`;
}
console.log(greet('Alice')); // "Hello, Alice!"
console.log(greet('Bob', 'Dr.')); // "Hello, Dr. Bob!"
// ----------------------------------------
// Default Parameters
// ----------------------------------------
function createUser(name, role = 'user', isActive = true) {
    return { name, role, isActive };
}
createUser('Alice');
createUser('Alice', 'user', true);
//* ----------------------------------------
//* 3. Rest Parameters
//* ----------------------------------------
// Typing variable number of arguments:
function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(1, 2, 3)); // 6
const divide = (x, y) => x / y;
divide(4, 2);
const toUpper = (str) => str.toUpperCase();
toUpper('hello');
//* ----------------------------------------
//* 5. Void and Never Return Types
//* ----------------------------------------
// ----------------------------------------
// Void Return
// ----------------------------------------
function logMessage(message) {
    console.log(message);
}
logMessage('Hello');
// ----------------------------------------
// Never Return (for functions that never complete)
// ----------------------------------------
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) { }
}
// Implementation
function greeting(name, age) {
    if (age)
        return `Hello, ${name}! You are ${age} years old.`;
    return `Hello, ${name}!`;
}
console.log(greeting('Alice')); // Output: Hello, Alice!
console.log(greeting('Bob', 25)); // Output: Hello, Bob! You are 25 years old.
//* ----------------------------------------
//* 7. Generic Functions
//* ----------------------------------------
// Functions that work with multiple types:
function identity(arg) {
    return arg;
}
const output1 = identity('hello');
const output2 = identity(42);
const user = {
    name: 'Alice',
    age: 30,
    greet() {
        console.log(`Hello, I'm ${this.name}`);
    },
};
function filterArray(arr, callback) {
    return arr.filter(callback);
}
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filterArray(numbers, (num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
const words = ['apple', 'banana', 'cherry'];
const shortWords = filterArray(words, (word) => word.length < 6);
console.log(shortWords); // ["apple", "cherry"]
console.log(output1, output2);
