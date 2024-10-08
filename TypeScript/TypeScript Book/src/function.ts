//* Basic Function Signature
function addTwo(num1: number, num2: number): number {
  return num1 + num2;
}
addTwo(11, 22);

// Arrow function
const addTwoArrow = (num1: number, num2: number): number => {
  return num1 + num2;
};
addTwoArrow(33, 44);

//* Function Type Signature
type MathOperation = (a: number, b: number) => number;

const multiply: MathOperation = (a, b) => a * b;

//* Optional Parameters:
function greet(name: string, age?: number): string {
  if (age !== undefined) {
    return `Hello, ${name}! You are ${age} years old.`;
  } else {
    return `Hello, ${name}!`;
  }
}

// Array Methods
// NOTE: map, forEach, filter, reduce ইত্যাদি Array Methods গুলোর ভিতরে আমরা যে callback function টা পাই, তার parameter গুলোর type Explicitly বলে দেওয়ার দরকার নেই। TypeScript এর type Implicitly Infer করে নিতে পারে।

const arr: number[] = [2, 3, 4, 5];
const newArr: number[] = arr.map((num) => num * num);
console.log(newArr);

//* Rest Parameters
function sumNumbers(...numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

//* Default Parameter Values
function sayHello(name: string = 'World'): string {
  return `Hello, ${name}!`;
}

// NOTE: function inside an object is called method.

// IMPORTANT: Object & Method

const person: {
  name: string;
  balance: number;

  // addBalance(money: number): number;
  addBalance(money: number): void;
} = {
  name: 'Mezba',
  balance: 5,

  // addBalance(money: number): number {
  //   return this.balance + money;
  // },

  addBalance(money: number): void {
    console.log(`My new balance is: ${this.balance + money}`);
  },
};

person.addBalance(1000);
