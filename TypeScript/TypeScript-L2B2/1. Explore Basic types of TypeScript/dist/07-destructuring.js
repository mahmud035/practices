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
 * Destructuring in TypeScript allows you to 'unpack values' from arrays and objects in a clean and readable way.
 */
//* ----------------------------------------
//* 1. Array Destructuring
//* ----------------------------------------
// Extract values from arrays into variables with type annotations.
// ----------------------------------------
// Basic Array Destructuring
// ----------------------------------------
const numbers = [10, 20, 30];
const [first, second, third] = numbers;
console.log(first); // Output: 10
console.log(second); // Output: 20
console.log(third); // Output: 30
// ----------------------------------------
// Skipping Elements & Rest Operator
// ----------------------------------------
// You can skip elements using commas.
const colors = ['Red', 'Green', 'Blue', 'Yellow'];
const [primary, , secondary] = colors;
console.log(primary); // Output: Red
console.log(secondary); // Output: Blue (Green is skipped)
// Use rest operator to capture remaining elements
const fruits = ['Apple', 'Banana', 'Cherry', 'Mango'];
const [firstFruit, ...restFruits] = fruits;
console.log(firstFruit); // Output: Apple
console.log(restFruits); // Output: ["Banana", "Cherry", "Mango"]
const personData = ['Alice', 30, true];
const [name, , isActive] = personData;
console.log(name.toUpperCase()); // "ALICE"
const user = {
    id: 1,
    name: 'John',
    email: 'john@example.com',
};
const { id, name: userName, email } = user;
console.log(email);
// ----------------------------------------
// Default Values for Optional Properties
// ----------------------------------------
const { age = 25 } = user; // Default if `age` is missing
console.log(age); // 25 (since `age` was optional)
// ----------------------------------------
// Rest Operator in Object Destructuring
// ----------------------------------------
const { id: userId } = user, rest = __rest(user, ["id"]);
console.log(rest); // { name: "John", email: "john@example.com" }
// TypeScript infers `rest` as `Omit<IUser, "id">`
//* ----------------------------------------
//* 3. Function Parameter Destructuring
//* ----------------------------------------
// Destructure objects or arrays directly in function parameters.
// ----------------------------------------
// Destructuring Object Parameters
// ----------------------------------------
function printUser({ name, email }) {
    console.log(`${name} (${email})`);
}
printUser(user); // "John (john@example.com)"
// ----------------------------------------
// Destructuring with Default Values
// ----------------------------------------
function createPost({ title, content = 'No content', }) {
    console.log(`Title: ${title}, Content: ${content}`);
}
createPost({ title: 'Hello' }); // "Title: Hello, Content: No content"
// ----------------------------------------
// Destructuring Arrays in Parameters
// ----------------------------------------
function sum([a, b, c]) {
    return a + b + (c !== null && c !== void 0 ? c : 0);
}
console.log(sum([1, 2])); // 3
console.log(sum([1, 2, 3])); // 6
const company = {
    name: 'Tech Corp',
    address: {
        city: 'San Francisco',
        country: 'USA',
    },
};
const { name: companyName, address: { city, country }, } = company;
console.log(`${companyName} is located in ${city}, ${country}`);
// ----------------------------------------
// Nested Array Destructuring
// ----------------------------------------
const matrix = [
    [1, 2],
    [3, 4],
];
const [[a, b], [c, d]] = matrix;
console.log(a, b, c, d); // 1, 2, 3, 4
//* ----------------------------------------
//* 5. TypeScript-Specific Features
//* ----------------------------------------
// ----------------------------------------
// Destructuring with Generics
// ----------------------------------------
function getFirstAndLast(arr) {
    return [arr[0], arr[arr.length - 1]];
}
const [firstEl, lastEl] = getFirstAndLast([1, 2, 3, 4]);
console.log(firstEl, lastEl); // 1, 4 (TypeScript infers `number`)
