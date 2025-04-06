"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * TypeScript provides special types (`never`, `unknown`) and nullable type handling to improve type safety in edge cases.
 *
 * When to Use Each
 ** `never`:
 *   - Functions that never return.
 *   - Exhaustive type checking (ensure all union cases are handled).
 *
 ** `unknown`:
 *   - When you need type safety but don’t know the shape yet (e.g., API responses).
 *   - Better alternative to `any`.
 *
 ** `Nullable`:
 *   - Explicitly handle missing values (`null`/`undefined`).
 *   - Use with `strictNullChecks` for safety.
 */
//* ----------------------------------------
//* 1. The `never` Type
//* ----------------------------------------
// Represents values that 'should never occur' (used for exhaustive checks and unreachable code).
// ----------------------------------------
// Use Cases
// ----------------------------------------
// 1. Functions that never return (always throw errors or infinite loops):
function throwError(message) {
    throw new Error(message);
}
function getArea(shape) {
    switch (shape) {
        case 'circle':
            return Math.PI * 10 ** 2;
        case 'square':
            return 10 * 10;
        default:
            const _exhaustiveCheck = shape; // ❌ Error if new shape is added
            return _exhaustiveCheck;
    }
}
getArea('circle');
getArea('square');
// 3. Empty arrays (inferred when a variable can never have values):
const emptyArray = [];
//* ----------------------------------------
//* 2. The `unknown` Type
//* ----------------------------------------
// A type-safe counterpart to `any` (must be type-checked before use).
/*
 Key Features
  - Safer than `any` because it forces type checks.
  - Accepts any value but restricts usage until narrowed.
*/
// ----------------------------------------
// Examples
// ----------------------------------------
let userInput;
// ✅ Allowed (can assign anything)
userInput = 'Hello';
userInput = 42;
// ❌ Error (can't use directly)
// const str: string = userInput;
// ✅ Type narrowing required
if (typeof userInput === 'string') {
    const str = userInput; // Now safe
}
//* ----------------------------------------
//* 3. Nullable Types (`null` and `undefined`)
//* ----------------------------------------
// TypeScript treats `null` and `undefined` as distinct types when `strictNullChecks` is enabled.
// ----------------------------------------
// Basic Usage
// ----------------------------------------
let maybeString = null;
maybeString = 'Hello'; // ✅
// ----------------------------------------
// Nullish Coalescing (??)
// ----------------------------------------
// Fallback for null/undefined (not just falsy values):
const input = null;
const value = input !== null && input !== void 0 ? input : 'default'; // "default"
// ----------------------------------------
// Definite Assignment Assertion (!)
// ----------------------------------------
// Assert that a variable is assigned (avoid `undefined` errors):
let userId; // Tell TS "trust me, this will be assigned"
initializeUser();
console.log(userId); // No error (you take responsibility)
function initializeUser() {
    userId = 1;
}
function processResponse(response) {
    if (response.error)
        throwError(response.error); // never-returning
    // Narrow down data type
    if (typeof response.data === 'object' && response.data !== null) {
        console.log(response.data);
    }
}
processResponse({ data: { id: 1, name: 'Alice' }, error: null });
function reducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return Object.assign(Object.assign({}, state), { items: [...state.items, action.payload] });
        case 'DELETE':
            return Object.assign(Object.assign({}, state), { items: state.items.filter((_, i) => i !== action.payload) });
        default:
            const _exhaustiveCheck = action; // ❌ Error if new action is added
            return _exhaustiveCheck;
    }
}
reducer({ items: ['Task 1'] }, { type: 'ADD', payload: 'Task 2' });
console.log(emptyArray, maybeString, value);
