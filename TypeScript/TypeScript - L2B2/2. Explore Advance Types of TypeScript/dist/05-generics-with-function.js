"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generics in functions allow you to create flexible, type-safe utilities that work with multiple types while preserving type information. This is one of the most powerful applications of TypeScript generics.
 
 * ✅ Why Use Generics in Functions?
 *  - Reusability → Write one function for different types.
 *  - Type Safety → Ensures proper type usage.
 *  - Flexibility → Works with various data types dynamically.
 */
//* ----------------------------------------
//* 1. Basic Generic Functions
//* ----------------------------------------
// ----------------------------------------
// Simple Identity Function
// ----------------------------------------
// A generic function uses a type placeholder (`T`), which is replaced when the function is called.
// ✅ The function works with any type while maintaining type safety.
function identity(value) {
    return value;
}
// Usage
console.log(identity('Hello')); // ✅ "Hello"
console.log(identity(42)); // ✅ 42
console.log(identity(true)); // ✅ true
// ----------------------------------------
// Generic Array Processing
// ----------------------------------------
// We can use generics to write functions that work with arrays.
function getFirstElement(arr) {
    return arr[0];
}
getFirstElement(['apple', 'banana', 'mango']); // ✅ "apple"
getFirstElement([10, 20, 30]); // ✅ 10
//* ----------------------------------------
//* 2. Multiple Type Parameters
//* ----------------------------------------
// ----------------------------------------
// Function with Two Generic Types
// ----------------------------------------
// We can use multiple generic parameters for more flexibility.
// ✅ Allows different types for each argument.
function pair(first, second) {
    return [first, second];
}
pair('Alice', 25); // ✅ ["Alice", 25]
pair(true, 'Yes'); // ✅ [true, "Yes"]
// ----------------------------------------
// Key-Value Mapper
// ----------------------------------------
function mapObject(obj, transform) {
    const result = {};
    for (const key in obj) {
        result[key] = transform(obj[key]);
    }
    return result;
}
const mapped = mapObject({ a: 1, b: 2 }, (num) => num.toString());
// Type: { a: string; b: string }
//* ----------------------------------------
//* 3. Constrained Generic Functions
//* ----------------------------------------
// We can restrict the generic type using `extends` to ensure it meets certain conditions.
// ----------------------------------------
// Length Constraint
// ----------------------------------------
function longest(a, b) {
    return a.length >= b.length ? a : b;
}
const longerArray = longest([1, 2], [1, 2, 3]);
const longerString = longest('alice', 'bob');
// longest(10, 100); ❌ Error (numbers don't have .length)
// ----------------------------------------
// Keyof Constraint
// ----------------------------------------
function getProperty(obj, key) {
    return obj[key];
}
const person = { name: 'Alice', age: 30 };
const name = getProperty(person, 'name');
const age = getProperty(person, 'age');
const stringToNumber = (str) => str.length;
const lengthProcessor = (str) => str.length;
lengthProcessor.description = 'Converts string to its length';
//* ----------------------------------------
//* 5. Default Type Parameters
//* ----------------------------------------
// ----------------------------------------
// Function with Default Generic Type
// ----------------------------------------
function createArray(length, value) {
    return Array(length).fill(value);
}
const strs = createArray(3, 'x'); // Type: string[]
const numbs = createArray(3, 0); // Type: number[]
//* ----------------------------------------
//* 6. Real-World Examples
//* ----------------------------------------
// ----------------------------------------
// API Fetch Wrapper
// ----------------------------------------
function fetchData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(url);
        return res.json();
    });
}
// const user = await fetchData<User>('/api/user/1');
console.log(mapped, longerArray, longerString, name, age, stringToNumber, strs, numbs);
