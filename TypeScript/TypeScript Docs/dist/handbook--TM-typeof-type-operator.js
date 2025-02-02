"use strict";
// export {};
//* The `typeof` type operator
/**
 * The `typeof` "type operator" in TypeScript is used to capture the type of a value or variable at compile time.
 *
 * Why Use typeof?
 *
 * DRY Principle: Avoid duplicating type definitions.
 * Maintainability: Auto-update types when values change.
 * Type Safety: Ensure consistency between values and their types.
 */
// ----------------------------------------
// Key Use Cases
// ----------------------------------------
// 1. Infer the Type of a Variable
// Derive a type from an existing variable or constant:
const user = { name: 'Alice', age: 30 };
// { name: string; age: number; }
// 2. Reuse Types for Functions/Classes
// Capture the type of a function or class constructor:
function greet(name) {
    return `Hello ${name}`;
}
// (name: string) => string
class PersonCl {
}
// typeof PersonCl (constructor type, not instance type)
// 3. Combine with `keyof` for Dynamic Keys
// Extract keys from inferred object types:
const config = { darkMode: true, fontSize: 14 };
// "darkMode" | "fontSize"
// 4. Narrow Literal Types with `const`
// Preserve literal types for `const` variables:
const theme = 'dark'; // Type: "dark"
let size = 14; // Type: number
// 5. Infer Complex Types (e.g., Arrays, Tuples)
// Derive types from arrays or tuples:
const colors = ['red', 'green'];
// readonly ["red", "green"]
// ----------------------------------------
// Edge Cases & Notes
// ----------------------------------------
// 1. Primitive Values:
const num = 42;
// Example: Type-Safe Configuration
// Define a configuration object
const appConfig = {
    theme: 'dark',
    debug: false,
    features: ['auth', 'dashboard'],
};
/*
{
  readonly theme: "dark";
  readonly debug: false;
  readonly features: readonly ["auth", "dashboard"];
}
*/
// Use in a function
function validateConfig(config) { }
