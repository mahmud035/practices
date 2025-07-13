// NOTE: Array

// Basic Array Types
const names: string[] = ['abul', 'kabul', 'babul'];
const rollNumbers: number[] = [44, 55, 66];
const isRaining: boolean[] = [true, false];

// Multi-Type Arrays
const mixedTypesArray: (string | number | boolean)[] = ['abul', 44, true];

// Array of Objects
interface Person {
  name: string;
  age: number;
}

const people: Person[] = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
];

// NOTE: Tuple

// Tuple Syntax
const user: [number, string] = [112, 'John'];

let myTuple: [string, number, boolean];
myTuple = ['Hello', 42, true];

// Accessing Tuple Elements
let firstElement: string = myTuple[0];
let secondElement: number = myTuple[1];

// Optional Elements
let optionalTuple: [string, number?];
optionalTuple = ['Hello']; // Valid
optionalTuple = ['Hello', 42]; // Valid
// optionalTuple = [42]; // Error: Type 'number' is not assignable to type 'string'.

// Rest Elements
let tupleWithRest: [string, ...number[]];
tupleWithRest = ['Hello', 1, 2, 3]; // Valid
