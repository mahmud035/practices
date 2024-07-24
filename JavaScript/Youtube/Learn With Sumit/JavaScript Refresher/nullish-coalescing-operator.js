'use strict';

//* Nullish Coalescing Operator (null / undefined)

// NOTE:
//* এটাকে double question mark (??) দিয়ে লিখতে হয়। (??) এর বামপাশে যদি `null / undefined` থাকে, তাহলে (??) এর  ডানপাশের code execute হবে।

//* আর যদি (??) এর বামপাশে `null / undefined` ছাড়া অন্য কোন value থাকে, তাহলে ডানপাশের code execute হবে না। তখন বামপাশের ঐ value টা ই variable এর value হিসেবে বসবে।

// The nullish coalescing operator, represented as ??, is a JavaScript operator introduced in ECMAScript 2020 (ES11) that provides a way to handle default values in a more precise manner when dealing with potentially null or undefined values. "It's especially useful for cases where you want to assign a default value if a variable is null or undefined but not for other falsy values like empty strings or zeros."

// Ex: 01
const someValue = null;
const defaultValue = 'This is a default value';

const result = someValue ?? defaultValue;
console.log(result); // Output: "This is a default value"

// Explanation: In this example, result is assigned the defaultValue because someValue is null.

//* ==============>>==============>>================>>

// IMPORTANT:
//* Ex: 02 (Nullish Coalescing Operator, Logical OR Operator, Logical AND Operator)
let language = null;
// let language = 'Python';
// let language = false;

console.log(language ?? 'JavaScript');

//* Short Circuit Conditionals
console.log(language || 'JavaScript');
console.log(language && 'JavaScript');
