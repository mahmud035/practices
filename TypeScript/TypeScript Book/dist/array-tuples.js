"use strict";
// NOTE: Array
// Basic Array Types
const names = ['abul', 'kabul', 'babul'];
const rollNumbers = [44, 55, 66];
const isRaining = [true, false];
// Multi-Type Arrays
const mixedTypesArray = ['abul', 44, true];
const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
];
// NOTE: Tuple
// Tuple Syntax
const user = [112, 'John'];
let myTuple;
myTuple = ['Hello', 42, true];
// Accessing Tuple Elements
let firstElement = myTuple[0];
let secondElement = myTuple[1];
// Optional Elements
let optionalTuple;
optionalTuple = ['Hello']; // Valid
optionalTuple = ['Hello', 42]; // Valid
// optionalTuple = [42]; // Error: Type 'number' is not assignable to type 'string'.
// Rest Elements
let tupleWithRest;
tupleWithRest = ['Hello', 1, 2, 3]; // Valid
