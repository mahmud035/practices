export {};

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

function throwError(message: string): never {
  throw new Error(message);
}

// 2. Exhaustive type checking (ensure all union cases are handled):

type Shape = 'circle' | 'square';

function getArea(shape: Shape): number {
  switch (shape) {
    case 'circle':
      return Math.PI * 10 ** 2;
    case 'square':
      return 10 * 10;
    default:
      const _exhaustiveCheck: never = shape; // ❌ Error if new shape is added
      return _exhaustiveCheck;
  }
}

getArea('circle');
getArea('square');

// 3. Empty arrays (inferred when a variable can never have values):

const emptyArray: never[] = [];

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

let userInput: unknown;

// ✅ Allowed (can assign anything)
userInput = 'Hello';
userInput = 42;

// ❌ Error (can't use directly)
// const str: string = userInput;

// ✅ Type narrowing required
if (typeof userInput === 'string') {
  const str: string = userInput; // Now safe
}

//* ----------------------------------------
//* 3. Nullable Types (`null` and `undefined`)
//* ----------------------------------------

// TypeScript treats `null` and `undefined` as distinct types when `strictNullChecks` is enabled.

// ----------------------------------------
// Basic Usage
// ----------------------------------------

let maybeString: string | null = null;
maybeString = 'Hello'; // ✅
// maybeString = undefined; // ❌ (unless `undefined` is in the union)

// ----------------------------------------
// Optional Properties (?)
// ----------------------------------------

// Automatically adds `undefined` to the type:

interface User {
  name: string;
  age?: number; // Same as `number | undefined`
}

// ----------------------------------------
// Nullish Coalescing (??)
// ----------------------------------------

// Fallback for null/undefined (not just falsy values):

const input = null;
const value = input ?? 'default'; // "default"

// ----------------------------------------
// Definite Assignment Assertion (!)
// ----------------------------------------

// Assert that a variable is assigned (avoid `undefined` errors):

let userId!: number; // Tell TS "trust me, this will be assigned"
initializeUser();
console.log(userId); // No error (you take responsibility)

function initializeUser() {
  userId = 1;
}

//* ----------------------------------------
//* Practical Examples
//* ----------------------------------------

// ----------------------------------------
// API Response Handling
// ----------------------------------------

interface ApiResponse {
  data: unknown; // We don't know the shape yet
  error: string | null;
}

function processResponse(response: ApiResponse) {
  if (response.error) throwError(response.error); // never-returning

  // Narrow down data type
  if (typeof response.data === 'object' && response.data !== null) {
    console.log(response.data);
  }
}

processResponse({ data: { id: 1, name: 'Alice' }, error: null });

// ----------------------------------------
// Exhaustive Switch (React Reducer)
// ----------------------------------------

type Action =
  | { type: 'ADD'; payload: string }
  | { type: 'DELETE'; payload: number };

type State = {
  items: string[];
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'ADD':
      return { ...state, items: [...state.items, action.payload] };
    case 'DELETE':
      return {
        ...state,
        items: state.items.filter((_, i) => i !== action.payload),
      };
    default:
      const _exhaustiveCheck: never = action; // ❌ Error if new action is added
      return _exhaustiveCheck;
  }
}

reducer({ items: ['Task 1'] }, { type: 'ADD', payload: 'Task 2' });

console.log(emptyArray, maybeString, value);
