"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Ternary: Clean alternative to if-else for value assignments.
 * Optional Chaining: Prevents Cannot read property of undefined errors.
 * Nullish Coalescing: Better than || when 0, "", false are valid values.
 * Combine Them: For robust, concise, and type-safe code.
 */
//* ----------------------------------------
//* 1. Ternary Operator (? :)
//* ----------------------------------------
// A shorthand for if-else that returns a value based on a condition.
// ----------------------------------------
// Basic Usage
// ----------------------------------------
const age = 20;
const message = age >= 18 ? 'Adult' : 'Minor';
console.log(message); // "Adult"
const user = { name: 'Alice' };
// TypeScript infers the correct return type
const role = user.isAdmin ? 'Administrator' : 'User';
console.log(role); // "User" (since isAdmin is undefined)
// ----------------------------------------
// Nested Ternary (Avoid When Possible)
// ----------------------------------------
const score = 85;
const grade = score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : 'D';
console.log(grade); // "B"
const person = { name: 'Bob' };
// Without optional chaining (verbose)
const city = person.address && person.address.city;
// With optional chaining (cleaner)
const street = (_a = person.address) === null || _a === void 0 ? void 0 : _a.street; // undefined (no error)
console.log(street); // undefined
// ----------------------------------------
// Array Index Access
// ----------------------------------------
const persons = [{ name: 'Alice' }, { name: 'Bob' }];
const firstPersonCity = (_c = (_b = persons[0]) === null || _b === void 0 ? void 0 : _b.address) === null || _c === void 0 ? void 0 : _c.city; // undefined
const response = {};
const userName = (_d = response.data) === null || _d === void 0 ? void 0 : _d.getUser; // undefined (no runtime error)
//* ----------------------------------------
//* 3. Nullish Coalescing (??)
//* ----------------------------------------
// Provides a fallback value only when the left-hand side is `null` or `undefined` (not just falsy).
// ----------------------------------------
// Basic Usage
// ----------------------------------------
const input = '';
const value = input !== null && input !== void 0 ? input : 'default'; // "" (since empty string is not nullish)
console.log(value); // ''
const nullValue = null;
const result = nullValue !== null && nullValue !== void 0 ? nullValue : 'fallback'; // "fallback"
// ----------------------------------------
// vs Logical OR (||)
// ----------------------------------------
const count = 0;
console.log(count || 10); // 10 (0 is falsy)
console.log(count !== null && count !== void 0 ? count : 10); // 0 (only null/undefined triggers fallback)
const config = { timeout: 0 };
const apiUrl = (_e = config.apiUrl) !== null && _e !== void 0 ? _e : 'https://default.api';
const timeout = (_f = config.timeout) !== null && _f !== void 0 ? _f : 5000; // 0 (since 0 is not nullish)
const order = { id: 1, discountCode: null };
// 1. Optional chaining to safely access nested properties
// 2. Nullish coalescing for fallback values
// 3. Ternary for conditional logic
const customerName = (_h = (_g = order.customer) === null || _g === void 0 ? void 0 : _g.name) !== null && _h !== void 0 ? _h : 'Guest';
const discountMessage = order.discountCode !== null
    ? `Discount: ${order.discountCode}`
    : `No discount`;
console.log(customerName); // "Guest"
console.log(discountMessage); // "No discount"
console.log(city, firstPersonCity, userName, result, apiUrl, timeout);
