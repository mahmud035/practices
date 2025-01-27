const userName: string = 'anisul islam';
const age: number = 28;
console.log(userName, age);

const addNumbers = (num1: number, num2: number) => {
  return num1 + num2;
};

console.log(addNumbers(10, 20));
console.log(addNumbers(10, 30));

// tsc index.ts => index.js => node index.js
