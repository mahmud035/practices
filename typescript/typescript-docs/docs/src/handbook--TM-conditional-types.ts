export {};

//* Conditional Types
/**
 * `Conditional Types` in TypeScript allow you to define "dynamic type relationships" based on conditions, much like ternary expressions (`a ? b : c`) but at the type level.
 *
 * They enable you to select between two possible types depending on whether a condition is met, making them essential for advanced type transformations and utility types.
 *
 * Syntax
 * `T extends U ? X : Y`
 * `SomeType extends OtherType ? TrueType : FalseType`;
 *
 ** Condition: Check if `T` is assignable to `U`.
 * Result: If `true`, use type `X`; otherwise, use `Y`.
 *
 * Why Use Conditional Types?
 *
 * Dynamic Logic: Create types that adapt to inputs.
 * Reusability: Build utilities like `Partial`, `Required`, or custom solutions.
 * Type Safety: Enforce constraints programmatically.
 */

// ----------------------------------------
// Key Concepts
// ----------------------------------------

// 1. Basic Example
// Check if a type is string:

type IsString<T> = T extends string ? true : false;

type A = IsString<'hello'>; // true
type B = IsString<42>; // false

// 2. Combine with Generics
// Create a type that flattens nested arrays:

type Flatten<T> = T extends Array<infer U> ? Flatten<U> : T;

type Nested = [[1, 2], [3, 4]];
type Flat = Flatten<Nested>; // 1 | 2 | 3 | 4

// 3. Distributive Conditional Types
// When given a union, the condition is applied to each member:

type ToArray<T> = T extends any ? T[] : never;

type NumbersOrStrings = ToArray<number | string>;
// string[] | number[]

// Without distribution (using `extends any`), you’d get (number | string)[].

// ----------------------------------------
// Common Use Cases
// ----------------------------------------

// 1. Filtering Types
// Extract types that match a condition:

type OnlyString<T> = T extends string ? T : never;

type Result = OnlyString<'a' | 1 | 'b'>; // "a" | "b"

// 2. Utility Types
// Built-in TypeScript utilities like `Exclude`, `Extract`, and `NonNullable` use conditional types:

type TExclude<T, U> = T extends U ? never : T;
type TNonNullable<T> = T extends null | undefined ? never : T;

// ----------------------------------------
// Real-World Example: API Response Handler
// ----------------------------------------

type ApiResponse<T> = T extends { error: string }
  ? { code: 400; message: string }
  : T extends { data: unknown }
  ? { code: 200; data: T['data'] }
  : never;

function handleResponse<T>(res: ApiResponse<T>) {}

handleResponse<{ data: { id: string } }>({ code: 200, data: { id: '1' } }); // ✅
handleResponse<{ error: 'Bad request' }>({ code: 400, message: 'Bad request' }); // ✅
