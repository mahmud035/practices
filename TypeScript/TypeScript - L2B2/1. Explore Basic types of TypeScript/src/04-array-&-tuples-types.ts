export {};

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
const numbers: number[] = [1, 2, 3];
const names: string[] = ['Alice', 'Bob', 'Charlie'];

// Syntax 2: Array<Type> (Generic syntax)
const strings: Array<string> = ['a', 'b', 'c'];

// ----------------------------------------
// Mixed-Type Arrays
// ----------------------------------------

// Use union types:

const mixed: (string | number)[] = ['hello', 42, 'world', 100];

// ----------------------------------------
// Readonly Arrays
// ----------------------------------------

// Prevent modification:

const readonlyNames: readonly string[] = ['Alice', 'Bob'];
// readonlyNames.push("Charlie"); ❌ Error (mutations not allowed)

// ----------------------------------------
// Array Methods with Type Safe
// ----------------------------------------

const nums: number[] = [1, 2, 3];

// TypeScript infers `number` for `n`
nums.map((n) => n * 2); // [2, 4, 6] (type: number[])

//* ----------------------------------------
//* 2. Tuple Types
//* ----------------------------------------

// Fixed-length arrays where each position has a specific type.

// ----------------------------------------
// Basic Tuples
// ----------------------------------------

type Person = [string, number]; // Name (string), Age (number)

const alice: Person = ['Alice', 30];
// const bob: Person = [40, "Bob"]; ❌ Error (wrong order)

// ----------------------------------------
// Optional Tuple Elements
// ----------------------------------------

type OptionalTuple = [string, number?]; // Age is optional
const a: OptionalTuple = ['Alice']; // ✅
const b: OptionalTuple = ['Bob', 25]; // ✅

// ----------------------------------------
// Rest Elements in Tuples
// ----------------------------------------

type StringNumberBooleans = [string, number, ...boolean[]];
const snb: StringNumberBooleans = ['hello', 42, true, false];

//* ----------------------------------------
//* 3. Practical Examples
//* ----------------------------------------

// ----------------------------------------
// API Coordinates
// ----------------------------------------

type Point3D = [number, number, number];

function movePoint(p: Point3D, delta: number): Point3D {
  return [p[0] + delta, p[1] + delta, p[2] + delta];
}

movePoint([1, 2, 3], 5);

//* ----------------------------------------
//* 5. Best Practices
//* ----------------------------------------

// 1. 'Prefer interfaces/objects' over tuples for complex data:

// ❌ Avoid (unclear what [0] and [1] mean)
type PersonTuple = [string, number];

// ✅ Better
interface IPerson {
  name: string;
  age: number;
}

// 2. Use `as const` for read-only tuples:

const directions = ['north', 'east'] as const; // Type: readonly ["north", "east"]

// 3. Destructure tuples for clarity:

const [x, y] = [10, 20] as const;

console.log(
  numbers,
  names,
  strings,
  mixed,
  readonlyNames,
  alice,
  a,
  b,
  snb,
  directions,
  x,
  y
);
