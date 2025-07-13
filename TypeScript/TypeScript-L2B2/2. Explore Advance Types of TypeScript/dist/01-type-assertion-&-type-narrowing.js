"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * TypeScript provides powerful ways to assert types and narrow down variable types for safer and more precise code.
 *
 * ✅ Type Assertion → Manually telling TypeScript about a variable’s type.
 * ✅ Type Narrowing → Refining types based on runtime checks.
 *
 * Use Type Assertion (`as`) only when you're sure of a value’s type.
 * Prefer Type Narrowing (`typeof`, `instanceof`, custom guards`) for safer checks.
 * Avoid unnecessary type assertions to prevent runtime errors.
 */
//* ----------------------------------------
//* 1. Type Assertion
//* ----------------------------------------
// Forces TypeScript to treat a value as a specific type (override its inference).
// ----------------------------------------
// Syntax
// ----------------------------------------
const value = 'hello';
const strLength = value.length;
//* ----------------------------------------
//* When to Use
//* ----------------------------------------
// 1. Working with DOM elements:
const input = document.getElementById('email');
console.log(input.value); // Now TypeScript knows it's an input
// 2. API responses with known shape:
fetch('/api/v1/users')
    .then((res) => res.json())
    .then((data) => {
    const user = data;
});
function handleResponse(result) {
    if (result.success) {
        const data = result.data;
    }
}
//* ----------------------------------------
//* 2. Type Narrowing
//* ----------------------------------------
// TypeScript automatically narrows types based on runtime checks.
// ----------------------------------------
// Common Narrowing Techniques
// ----------------------------------------
//* 1. `typeof` Guards
function padLeft(value, padding) {
    if (typeof padding === 'number') {
        return ' '.repeat(padding) + value; // padding is number
    }
    return padding + value; // padding is string
}
//* 2. Truthiness/Falsiness Checks
function printAll(strs) {
    if (strs && typeof strs === 'object') {
        strs.forEach((s) => console.log(s)); // strs is string[]
    }
    else if (typeof strs === 'string') {
        console.log(strs); // strs is string
    }
}
//* 3. Equality Narrowing
function example(x, y) {
    if (x === y) {
        x.toUpperCase(); // Both are string
    }
}
function move(animal) {
    if ('swim' in animal) {
        animal.swim(); // TypeScript knows it's Fish
    }
    else {
        animal.fly(); // TypeScript knows it's Bird
    }
}
//* 5. `instanceof` Narrowing
function logDate(date) {
    if (date instanceof Date) {
        console.log(date.toUTCString()); // date is Date
    }
    else {
        console.log(new Date(date).toUTCString()); // date is string
    }
}
function getArea(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2; // shape is Circle
        case 'square':
            return shape.sideLength ** 2; // shape is Square
    }
}
function handleApiResponse(response) {
    if (response.status === 'success') {
        // Type narrowed to success case
        const data = response.data;
        console.log(data.name);
    }
    else {
        // Type narrowed to error case
        console.error(response.message);
    }
}
// ----------------------------------------
// DOM Element Manipulation
// ----------------------------------------
const element = document.querySelector('.menu');
if (element) {
    // TypeScript knows element is HTMLElement (not null)
    element.style.display = 'none';
}
// ----------------------------------------
// User Input Validation
// ----------------------------------------
function processInput(input) {
    if (typeof input === 'string') {
        console.log(input.toUpperCase());
    }
    else if (Array.isArray(input)) {
        console.log(input.length);
    }
    else {
        throw new Error('Invalid input');
    }
}
console.log(strLength);
