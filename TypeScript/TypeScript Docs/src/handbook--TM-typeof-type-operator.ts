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
type UserType = typeof user;
// { name: string; age: number; }

// 2. Reuse Types for Functions/Classes
// Capture the type of a function or class constructor:

function greet(name: string) {
  return `Hello ${name}`;
}
type GreetFunction = typeof greet;
// (name: string) => string

class PersonCl {}
type PersonConstructor = typeof PersonCl;
// typeof PersonCl (constructor type, not instance type)

// 3. Combine with `keyof` for Dynamic Keys
// Extract keys from inferred object types:

const config = { darkMode: true, fontSize: 14 };
type ConfigKeys = keyof typeof config;
// "darkMode" | "fontSize"

// 4. Narrow Literal Types with `const`
// Preserve literal types for `const` variables:

const theme = 'dark' as const; // Type: "dark"
type ThemeType = typeof theme; // "dark" (not `string`)

let size = 14; // Type: number
type SizeType = typeof size; // number

// 5. Infer Complex Types (e.g., Arrays, Tuples)
// Derive types from arrays or tuples:

const colors = ['red', 'green'] as const;
type ColorsType = typeof colors;
// readonly ["red", "green"]

// ----------------------------------------
// Edge Cases & Notes
// ----------------------------------------

// 1. Primitive Values:
const num = 42;
type NumType = typeof num;
// number (not `42` unless `as const` is used)

// 2. Utility Types:
// Combine with `ReturnType` or `Parameters` for advanced inference:

type GreetReturn = ReturnType<typeof greet>; // string
type GreetParams = Parameters<typeof greet>; // [name: string]

// Example: Type-Safe Configuration
// Define a configuration object
const appConfig = {
  theme: 'dark',
  debug: false,
  features: ['auth', 'dashboard'],
} as const;

// Extract its type
type AppConfig = typeof appConfig;
/* 
{
  readonly theme: "dark";
  readonly debug: false;
  readonly features: readonly ["auth", "dashboard"];
} 
*/

// Use in a function
function validateConfig(config: AppConfig) {}
