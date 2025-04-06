"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * TypeScript fully supports JavaScript's spread (...) and rest operators while adding type safety. These operators are powerful tools for working with arrays and objects.
 *
 * Both use the three dots (...) syntax, but they serve different purposes.
 */
//* ----------------------------------------
//* 1. Spread Operator (...)
//* ----------------------------------------
// The spread operator is used to expand elements of an array or properties of an object. It is commonly used for 'copying', 'merging', and 'passing elements' to functions.
// ----------------------------------------
// Array Spread
// ----------------------------------------
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5, 6]; // [1, 2, 3, 4, 5, 6]
// Merging Arrays
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const combined = [...nums1, ...nums2]; // [1, 2, 3, 4, 5, 6]
// With tuple types
const tuple1 = [1, 'one'];
const tuple2 = [true, 2];
const mixed = [...tuple1, ...tuple2]; // [number, string, boolean, number]
// ----------------------------------------
// Object Spread
// ----------------------------------------
const user = { name: 'Alice', age: 30 };
const updatedUser = Object.assign(Object.assign({}, user), { age: 31, city: 'New York' });
const person = { name: 'Bob', age: 25 };
const employee = Object.assign(Object.assign({}, person), { department: 'Engineering' });
// ----------------------------------------
// Function Call Spread
// ----------------------------------------
function sum(a, b, c) {
    return a + b + c;
}
const nums = [1, 2, 3]; // TypeScript needs const assertion here
const result = sum(...nums); // 6
//* ----------------------------------------
//* 2. Rest Operator (...)
//* ----------------------------------------
// The rest operator allows you to represent an indefinite number of arguments as an array.
// ----------------------------------------
// Rest Parameters in Functions
// ----------------------------------------
// Typed rest parameters
function logName(...names) {
    names.forEach((name) => console.log(name));
}
logName('Alice', 'Bob', 'Charlie');
// With mixed parameters
function createUser(id, ...details) {
    console.log(`User ${id}:`, details.join(' - '));
}
createUser(1, 'Alice', 30);
createUser(2, 'Bob', 25, 'Admin');
// ----------------------------------------
// Array Destructuring with Rest
// ----------------------------------------
const numbers2 = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers2; // rest is [3, 4, 5]
// With tuple types
const tuple = ['hello', 1, true, 42];
const [str, num, ...restTuple] = tuple; // restTuple is [boolean, number]
// ----------------------------------------
// Object Destructuring with Rest
// ----------------------------------------
const newUser = {
    name: 'Alice',
    age: 30,
    city: 'New York',
    country: 'USA',
};
const { name, age } = newUser, address = __rest(newUser, ["name", "age"]);
const _a = newUser, { name: userName } = _a, userInfo = __rest(_a, ["name"]);
const defaultConfig = {
    apiUrl: 'https://api.example.com',
    timeout: 5000,
};
const customConfig = {
    timeout: 10000,
    headers: { Authorization: 'Bearer token' },
};
const finalConfig = Object.assign(Object.assign({}, defaultConfig), customConfig);
console.log(finalConfig);
//* ----------------------------------------
//* Common Patterns
//* ----------------------------------------
// ----------------------------------------
// Copying Arrays/Objects Safely
// ----------------------------------------
const original = [1, 2, 3];
const copy = [...original]; // New array with same elements
const obj = { a: 1, b: 2 };
const objCopy = Object.assign({}, obj); // New object with same properties
const defaultOptions = {
    color: 'red',
    width: 100,
};
function createElement(options) {
    const finalOptions = Object.assign(Object.assign({}, defaultOptions), options);
    // Use finalOptions...
}
console.log(moreNumbers, combined, mixed, updatedUser, employee, result, first, second, rest, str, num, restTuple, address, userInfo, copy, objCopy);
