// export {};

//* Template Literal Types
/**
 * `Template Literal Types` in TypeScript (introduced in v4.1) allow you to "create complex string literal types by combining, transforming, or pattern-matching existing string literals."
 *
 * They use the same syntax as JavaScript template strings (backticks ` and ${}), but operate at the "type level" to generate precise string patterns or unions.
 *
 * Why Use Template Literal Types?
 *
 * Precision: Enforce exact string formats (e.g., IDs, CSS units).
 * Type Safety: Catch typos in dynamic strings (e.g., API endpoints, event names).
 * Reduced Boilerplate: Generate types programmatically instead of manually.
 *
 *
 * "Template Literal Types" unlock "type-level string manipulation", making TypeScript’s type system even more expressive and powerful. They’re ideal for scenarios where strings follow predictable patterns, such as URLs, IDs, or dynamic object keys. 🚀
 */

// ----------------------------------------
// Basic Syntax
// ----------------------------------------

type Greeting = `Hello ${string}`;
// Matches any string starting with "Hello " (e.g., "Hello Alice", "Hello 123").

type EventName = 'click' | 'hover';
type HandlerName = `on${Capitalize<EventName>}`;
// "onClick" | "onHover"

// ----------------------------------------
// Key Features & Use Cases
// ----------------------------------------

// 1. Combine String Literals
// Generate unions of all possible combinations:

type Vertical = 'top' | 'bottom';
type Horizontal = 'left' | 'right';
type Position = `${Vertical}-${Horizontal}`;
// "top-left" | "top-right" | "bottom-left" | "bottom-right"

// 2. Enforce String Patterns
// Constrain values to specific formats:

type CSSUnit = `${number}px` | `${number}rem` | `${number}%`;

const valid: CSSUnit = '24px'; // ✅
// const invalid: CSSUnit = "24ft"; // ❌

// 3. Dynamic Key Generation
// Create mapped types with transformed keys:

type Getter<T> = {
  [K in keyof T as `get${Capitalize<K & string>}`]: () => T[K];
};

interface IUser {
  id: string;
  age: number;
}

type UserGetters = Getter<IUser>;

/* 
{
  getId: () => string;
  getAge: () => number;
} 
*/

// 4. Pattern Matching & Inference
// Extract parts of a string using `infer`:

type ExtractId<T> = T extends `user-${infer Id}` ? Id : never;
type ID = ExtractId<'user-abc123'>; // "abc123"

// 5. Utility Types for String Manipulation
// Use built-in helpers like `Uppercase`, `Lowercase`, etc.:

type Shout<T extends string> = `${Uppercase<T>}!`;
type Greeting2 = Shout<'hello'>; // "HELLO!"
