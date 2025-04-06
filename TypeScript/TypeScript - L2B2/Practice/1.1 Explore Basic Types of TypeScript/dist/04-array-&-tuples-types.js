"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * TypeScript enhances JavaScript arrays with strong typing and introduces tuples for fixed-length, typed arrays.
 *
 * ✅ Arrays → Homogeneous collections (same type elements).
 * ✅ Tuples → Fixed-length, ordered collections (each element has a specific type).
 */
//* ----------------------------------------
//* 1. Array Types
//* ----------------------------------------
// Arrays where all elements are of the same type.
// ----------------------------------------
// Syntax Options
// ----------------------------------------
// Syntax 1: Type[]
const numbers = [1, 2, 3];
const names = ['Alice', 'Bob', 'Charlie'];
// Syntax 2: Array<Type> (Generic syntax)
const strings = ['a', 'b', 'c'];
// ----------------------------------------
// Mixed-Type Arrays
// ----------------------------------------
// Use union types:
const mixed = ['hello', 42, 'world', 100];
// ----------------------------------------
// Readonly Arrays
// ----------------------------------------
// Prevent modification:
const readonlyNames = ['Alice', 'Bob'];
// readonlyNames.push("Charlie"); ❌ Error (mutations not allowed)
// ----------------------------------------
// Array Methods with Type Safe
// ----------------------------------------
const nums = [1, 2, 3];
// TypeScript infers `number` for `n`
nums.map((n) => n * 2); // [2, 4, 6] (type: number[])
const alice = ['Alice', 30];
const a = ['Alice']; // ✅
const b = ['Bob', 25]; // ✅
const snb = ['hello', 42, true, false];
function movePoint(p, delta) {
    return [p[0] + delta, p[1] + delta, p[2] + delta];
}
movePoint([1, 2, 3], 5);
// 2. Use `as const` for read-only tuples:
const directions = ['north', 'east']; // Type: readonly ["north", "east"]
// 3. Destructure tuples for clarity:
const [x, y] = [10, 20];
console.log(numbers, names, strings, mixed, readonlyNames, alice, a, b, snb, directions, x, y);
