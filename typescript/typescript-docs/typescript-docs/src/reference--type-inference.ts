export {};

//* Type Inference (ChatGPT & DeepSeek) 👇
/**
 * Type Inference means How the compiler automatically determines types when they aren't explicitly annotated:
 *
 * What is Type Inference?
 * TypeScript's ability to "automatically deduce types" based on:
 *
 * - Initial values assigned to variables
 * - Function return values
 * - Contextual usage (e.g., event handlers)
 * - Usage patterns in code
 *
 * Inference reduces boilerplate while maintaining type safety.
 */

// ----------------------------------------
// Key Inference Scenarios
// ----------------------------------------

//* A. Variable Initialization
// TypeScript infers types from initial values:

let age = 30; // Inferred as `number`
const username = 'Alice'; // Inferred as `"Alice"` (literal type)
let scores = [95, 88]; // Inferred as `number[]`

// Type Widening: `let` variables get wider types, `const` gets literal types:

let a = 10; // number
const b = 10; // 10 (literal type)

//* B. Function Return Types
// Return types are inferred from `return` statements:

function add(a: number, b: number) {
  return a + b; // Return type inferred as `number`
}

function getUser() {
  return { name: 'Alice', age: 30 }; // Inferred as { name: string; age: number }
}

//* C. Contextual Typing
// Types are inferred from usage context:

// Event handler parameter types inferred from DOM context
document.addEventListener('click', (event) => {
  console.log(event.clientX); // `event` is inferred as `MouseEvent`
});

// Array method callback parameter types
const names = ['Alice', 'Bob'];
names.map((name) => name.toUpperCase()); // `name` inferred as `string`

//* D. Best Common Type
// For multiple possible types, TypeScript finds a compatible union:

const values = [0, 1, 'two']; // Inferred as (number | string)[]

//* E. Object Literals
// Properties are inferred based on initial structure:

const user = {
  name: 'Alice', // string
  age: 30, // number
};
/* 
Type: { 
  name: string;
  age: number;
} 
*/

// ----------------------------------------
// Advanced Inference Patterns
// ----------------------------------------

//* A. Const Assertions
// Freeze type inference with `as const`:

const colors = ['red', 'green'] as const;
// Type: readonly ["red", "green"]

//* B. Generic Type Inference
// Type parameters inferred from usage:

function identity<T>(value: T): T {
  return value;
}

const result = identity('text'); // T inferred as `string`

//* C. Conditional Type Inference
// Types inferred in conditional logic:

type IsString<T> = T extends string ? true : false;
type A = IsString<'hello'>; // true

//* D. Mapped Type Inference
// Automatically inferred in mapped types:

type Optional<T> = {
  [K in keyof T]?: T[K];
};

type PartialUser = Optional<{ name: string; age: number }>;
// { name?: string; age?: number }

// ----------------------------------------
// When to Use Explicit Types
// ----------------------------------------

// NOTE: While inference is powerful, explicit types are better when:

//* 1. Complex Objects:
interface IUser {
  name: string;
  age: number;
}
const user1: IUser = { name: 'Alice', age: 30 };

//* 2. Empty Arrays:
let scores1: number[] = [];

//* 3. Function Overloads:
function parse(input: string): number;
function parse(input: number): string;

function parse(input: string | number): string | number {
  if (typeof input === 'string') {
    return Number(input);
  } else {
    return input.toString();
  }
}

//* 4. API Boundaries: For public interfaces/parameters

// ----------------------------------------
// Best Practices
// ----------------------------------------

/**
 * "Lean on Inference" for local variables/simple cases
 * "Annotate" at module boundaries (function parameters, return types)
 * Use `as const` when you need literal type preservation
 * "Combine with Generics" for flexible yet type-safe code
 * "Leverage IDE Hover" to inspect inferred types during development
 */
