// 06. Function Types (parameter, return, anonymous/callback, function signature, optional parameters/default parameter

// function add(num1: number, num2: number): void {
//   console.log(num1 + num2);
// }

// add(10, 30);

//? function declarations
// function add(num1: number, num2: number): number {
//   return num1 + num2;
// }

// const result = add(10, 30);

// console.log(result);

//? function expression
// const add = function (num1: number, num2: number): number {
//   return num1 + num2;
// };

// const result = add(10, 30);

// console.log(result);

//? arrow function
// const add = (num1: number, num2: number): number => {
//   return num1 + num2;
// };

// const result = add(10, 30);

// console.log(result);

//? mix parameter type
// const add = (num1: number[], num2: number): number => {
//   return num1[0] + num2;
// };

// const result = add([10], 30);

// console.log(result);

//?  parameter default value
// const add = (num1: number, num2: number, num3: number = 10): number => {
//   return num1 + num2 + num3;
// };

// const result = add(10, 30);

// console.log(result);

//? anonymous/callback
// const add = (...numbers: number[]): number => {
//   const func = (pre: number, cur: number) => pre + cur;

//   return numbers.reduce(func, 0);
// };

// const result = add(10, 30, 10, 20, 50);

// console.log(result);

//? function signature(Mostly function signature use korbo)
// let add: (num1: number, num2: number, num3?: number) => number;

// add = (num1, num2, num3 = 10) => {
//   return num1 + num2 + num3;
// };

// const result = add(10, 30);

// console.log(result);

//? temon use hobe na
// let add: Function;

// add = (num1: number, num2: number, num3 = 10) => {
//   return num1 + num2 + num3;
// };

// const result = add(10, 30);

// console.log(result);
