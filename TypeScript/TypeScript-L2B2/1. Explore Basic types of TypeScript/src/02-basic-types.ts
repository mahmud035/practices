export {};

/**
 * TypeScript provides several basic (primitive) data types that extend JavaScript's dynamic typing with static type checking. Here's a comprehensive explanation of all the basic data types:
 *
 * `number`  : Represents both integer and floating-point numbers
 * `string`  : Represents textual data
 * `boolean` : Represents true/false values
 *
 * `any`     : Opts out of type checking (use sparingly)
 * `unknown` : Type-safe counterpart of `any` (must be type-checked before use)
 * `void`    : Represents absence of a value (common for functions)
 * `never`   : Represents functions that never return (e.g., throwing an error or infinite loops)
 * `null` and `undefined` : Represents the absence of value
 *
 * `Type Inference`  : TypeScript can often infer types without explicit annotations
 * `Type Assertions` : Tell the compiler to treat a value as a specific type
 * `Array Types`
 * `Tuple Types`     : Fixed-length arrays with known types at each position
 * `Enum Types`
 */

//* ----------------------------------------
//* 1. Core Primitive Types
//* ----------------------------------------

// ----------------------------------------
// `number`
// ----------------------------------------

// Represents both integer and floating-point numbers

let age: number = 25;
let price: number = 9.99;
let hex: number = 0xf00d; // Hexadecimal
let binary: number = 0b1010; // Binary
let octal: number = 0o744; // Octal

// ----------------------------------------
// `string`
// ----------------------------------------

// Represents textual data

let name: string = 'Alice';
let greeting: string = `Hello ${name}`;

// ----------------------------------------
// `boolean`
// ----------------------------------------

// Represents true/false values

let isActive: boolean = true;
let hasPermission: boolean = false;

//* ----------------------------------------
//* 2. Special Types
//* ----------------------------------------

// ----------------------------------------
// `any`
// ----------------------------------------

// Opts out of type checking (use sparingly)

let flexible: any = 4;
flexible = 'maybe a string';
flexible = false; // No error

// ----------------------------------------
// `unknown`
// ----------------------------------------

// Type-safe counterpart of `any` (must be type-checked before use)

let notSure: unknown = 4;
notSure = 'maybe a string';

// let str: string = notSure; // ❌ Error

if (typeof notSure === 'string') {
  let str: string = notSure; // ✅ OK
}

// ----------------------------------------
// `void`
// ----------------------------------------

// Represents absence of a value (common for functions)

function warnUser(): void {
  console.log('This is a warning');
}

warnUser();

// ----------------------------------------
// `never`
// ----------------------------------------

// Represents functions that never return (e.g., throwing an error or infinite loops)

function error(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}

// ----------------------------------------
// `null` and `undefined`
// ----------------------------------------

// Primitives for absent values

let u: undefined = undefined;
let n: null = null;

//* ----------------------------------------
//* 3. Type Inference
//* ----------------------------------------

// TypeScript can often infer types without explicit annotations:

let inferredString = 'This is a string'; // TypeScript infers 'string'
let inferredNumber = 42; // TypeScript infers 'number'
let inferredBoolean = true; // TypeScript infers 'boolean'

//* ----------------------------------------
//* 4. Type Assertions
//* ----------------------------------------

// Tell the compiler to treat a value as a specific type:

let someValue: unknown = 'this is a string';
let strLength: number = (someValue as string).length; // As-syntax

//* ----------------------------------------
//* 5. Array Types
//* ----------------------------------------

// Two equivalent syntaxes:

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3]; // Generic syntax

//* ----------------------------------------
//* 6. Tuple Types
//* ----------------------------------------

// Fixed-length arrays with known types at each position:

let person: [string, number] = ['Alice', 28];
// person = [28, "Alice"]; // ❌ Error - wrong order

//* ----------------------------------------
//* 7. Enum Types
//* ----------------------------------------

// Named numeric constants:

enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green; // 1

// String enums
enum Direction {
  Up = 'UP',
  Down = 'DOWN',
}

//* ----------------------------------------
//* Practical Example
//* ----------------------------------------

function processData(
  id: number,
  name: string,
  isActive: boolean,
  scores: number[],
  metadata: [string, number]
): string {
  if (!isActive) throw new Error('User is not active');

  const average = scores.reduce((acc, curr) => acc + curr, 0) / scores.length;

  return `User ${name} (ID: ${id}) has average score ${average}. Metadata: ${metadata.join(
    ' - '
  )}`;
}

const result = processData(1, 'Alice', true, [85, 90, 78], ['employee', 1234]);
console.log(result); // Output: User Alice (ID: 1) has average score 84.34. Metadata: employee - 1234

console.log(
  age,
  price,
  hex,
  binary,
  octal,
  greeting,
  isActive,
  hasPermission,
  flexible,
  u,
  n,
  inferredString,
  inferredNumber,
  inferredBoolean,
  strLength,
  list1,
  list2,
  person
);
