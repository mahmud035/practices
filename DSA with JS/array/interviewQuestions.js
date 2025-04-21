// Reference Link:
// https://www.geeksforgeeks.org/javascript-array-interview-questions-and-answers/

// How do you merge two arrays and remove duplicates?

const array1 = [1, 2, 3];
const array2 = [2, 3, 4];
const mergedArray = [...new Set([...array1, ...array2])];
console.log(mergedArray); // [ 1, 2, 3, 4 ]

// How do you sort an array of objects by a property value?

const users = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Peter', age: 35 },
];

users.sort((a, b) => a.age - b.age); // Sort by age
users.sort((a, b) => a.name.localeCompare(b.name)); // Sort by name

console.log(users);

// What is the difference between deep copy and shallow copy of an array?

const original = [{ a: 1 }, { b: 2 }];
const shallowCopy = [...original];
const deepCopy = JSON.parse(JSON.stringify(original));

original[0].a = 10;

console.log(shallowCopy[0].a); // 10
console.log(deepCopy[0].a); // 1

// How do you remove duplicates from an array?

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // [ 1, 2, 3, 4, 5 ]

// What is the Array.of method?

// The Array.of method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.

const arr1 = Array.of(1, 2, 3);
console.log(arr1); // [ 1, 2, 3 ]

const arr2 = Array.of('a', 'b', 'c');
console.log(arr2); // [ 'a', 'b', 'c' ]

// How do you fill an array with a specific value?

const arr = new Array(5).fill(0);
console.log(arr); // [ 0, 0, 0, 0, 0 ]

// How do you remove falsy values from an array?

const mixedArray = [0, 1, false, 2, '', 3, null, 'a', undefined];
const truthyArray = mixedArray.filter(Boolean);
console.log(truthyArray); // [ 1, 2, 3, 'a' ]
