export {};

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
function add(x: number, y: number): number {
  return x + y;
}

// ----------------------------------------
// Arrow Function with Types
// ----------------------------------------

const multiply = (x: number, y: number): number => x * y;

//* ----------------------------------------
//* 2. Optional and Default Parameters
//* ----------------------------------------

// ----------------------------------------
// Optional Parameters
// ----------------------------------------

function greet(name: string, title?: string): string {
  return title ? `Hello, ${title} ${name}!` : `Hello, ${name}`;
}

console.log(greet('Alice')); // "Hello, Alice!"
console.log(greet('Bob', 'Dr.')); // "Hello, Dr. Bob!"

// ----------------------------------------
// Default Parameters
// ----------------------------------------

function createUser(
  name: string,
  role: string = 'user',
  isActive: boolean = true
) {
  return { name, role, isActive };
}

createUser('Alice');
createUser('Alice', 'user', true);

//* ----------------------------------------
//* 3. Rest Parameters
//* ----------------------------------------

// Typing variable number of arguments:

function sumAll(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAll(1, 2, 3)); // 6

//* ----------------------------------------
//* 4. Function Types (Function Signature)
//* ----------------------------------------

// ----------------------------------------
// Defining Function Types
// ----------------------------------------

type MathOperation = (a: number, b: number) => number;

const divide: MathOperation = (x, y) => x / y;

divide(4, 2);

// ----------------------------------------
// Function Interfaces
// ----------------------------------------

interface IStringTransformer {
  (input: string): string;
}

const toUpper: IStringTransformer = (str) => str.toUpperCase();

toUpper('hello');

//* ----------------------------------------
//* 5. Void and Never Return Types
//* ----------------------------------------

// ----------------------------------------
// Void Return
// ----------------------------------------

function logMessage(message: string): void {
  console.log(message);
}

logMessage('Hello');

// ----------------------------------------
// Never Return (for functions that never complete)
// ----------------------------------------

function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}

//* ----------------------------------------
//* 6. Overloaded Functions
//* ----------------------------------------

// TypeScript supports function overloading, which allows you to define multiple signatures for the same function. This is useful when you want a function to accept different types or numbers of arguments.

// Overload signatures
function greeting(name: string): string;
function greeting(name: string, age: number): string;

// Implementation
function greeting(name: string, age?: number): string {
  if (age) return `Hello, ${name}! You are ${age} years old.`;
  return `Hello, ${name}!`;
}

console.log(greeting('Alice')); // Output: Hello, Alice!
console.log(greeting('Bob', 25)); // Output: Hello, Bob! You are 25 years old.

//* ----------------------------------------
//* 7. Generic Functions
//* ----------------------------------------

// Functions that work with multiple types:

function identity<T>(arg: T): T {
  return arg;
}

const output1 = identity<string>('hello');
const output2 = identity<number>(42);

//* ----------------------------------------
//* 8. `this` Typing
//* ----------------------------------------

// Explicitly typing the `this` context:

interface IUser {
  name: string;
  age: number;
  greet(this: IUser): void;
}

const user: IUser = {
  name: 'Alice',
  age: 30,
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  },
};

//* ----------------------------------------
//* Practical Example
//* ----------------------------------------

type FilterCallback<T> = (value: T, index?: number, array?: T[]) => boolean;

function filterArray<T>(arr: T[], callback: FilterCallback<T>): T[] {
  return arr.filter(callback);
}

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filterArray(numbers, (num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

const words = ['apple', 'banana', 'cherry'];
const shortWords = filterArray(words, (word) => word.length < 6);
console.log(shortWords); // ["apple", "cherry"]

console.log(output1, output2);
