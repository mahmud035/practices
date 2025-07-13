export {};

/**
 * Ternary: Clean alternative to if-else for value assignments.
 * Optional Chaining: Prevents Cannot read property of undefined errors.
 * Nullish Coalescing: Better than || when 0, "", false are valid values.
 * Combine Them: For robust, concise, and type-safe code.
 */

//* ----------------------------------------
//* 1. Ternary Operator (? :)
//* ----------------------------------------

// A shorthand for if-else that returns a value based on a condition.

// ----------------------------------------
// Basic Usage
// ----------------------------------------

const age = 20;
const message = age >= 18 ? 'Adult' : 'Minor';
console.log(message); // "Adult"

// ----------------------------------------
// With Type Inference
// ----------------------------------------

interface User {
  name: string;
  isAdmin?: boolean;
}

const user: User = { name: 'Alice' };

// TypeScript infers the correct return type
const role = user.isAdmin ? 'Administrator' : 'User';
console.log(role); // "User" (since isAdmin is undefined)

// ----------------------------------------
// Nested Ternary (Avoid When Possible)
// ----------------------------------------

const score = 85;
const grade = score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : 'D';

console.log(grade); // "B"

//* ----------------------------------------
//* 2. Optional Chaining (?.)
//* ----------------------------------------

// Safely access nested properties without causing errors if an intermediate value is `null` or `undefined`.

// ----------------------------------------
// Object Property Access
// ----------------------------------------

interface Person {
  name: string;
  address?: {
    street?: string;
    city?: string;
  };
}

const person: Person = { name: 'Bob' };

// Without optional chaining (verbose)
const city = person.address && person.address.city;

// With optional chaining (cleaner)
const street = person.address?.street; // undefined (no error)
console.log(street); // undefined

// ----------------------------------------
// Array Index Access
// ----------------------------------------

const persons: Person[] = [{ name: 'Alice' }, { name: 'Bob' }];

const firstPersonCity = persons[0]?.address?.city; // undefined

// ----------------------------------------
// Function Call Safety
// ----------------------------------------

type ApiResponse = {
  data?: {
    getUser?: () => string;
  };
};

const response: ApiResponse = {};
const userName = response.data?.getUser; // undefined (no runtime error)

//* ----------------------------------------
//* 3. Nullish Coalescing (??)
//* ----------------------------------------

// Provides a fallback value only when the left-hand side is `null` or `undefined` (not just falsy).

// ----------------------------------------
// Basic Usage
// ----------------------------------------

const input = '';
const value = input ?? 'default'; // "" (since empty string is not nullish)
console.log(value); // ''

const nullValue = null;
const result = nullValue ?? 'fallback'; // "fallback"

// ----------------------------------------
// vs Logical OR (||)
// ----------------------------------------

const count = 0;
console.log(count || 10); // 10 (0 is falsy)
console.log(count ?? 10); // 0 (only null/undefined triggers fallback)

// ----------------------------------------
// Practical Example (API Config)
// ----------------------------------------

interface Config {
  apiUrl?: string;
  timeout?: number;
}

const config: Config = { timeout: 0 };

const apiUrl = config.apiUrl ?? 'https://default.api';
const timeout = config.timeout ?? 5000; // 0 (since 0 is not nullish)

//* ----------------------------------------
//* Combining All Three Operators
//* ----------------------------------------

// These operators work beautifully together:

interface Order {
  id: number;
  customer?: {
    name?: string;
    email?: string;
  };
  discountCode?: string | null;
}

const order: Order = { id: 1, discountCode: null };

// 1. Optional chaining to safely access nested properties
// 2. Nullish coalescing for fallback values
// 3. Ternary for conditional logic
const customerName = order.customer?.name ?? 'Guest';
const discountMessage =
  order.discountCode !== null
    ? `Discount: ${order.discountCode}`
    : `No discount`;

console.log(customerName); // "Guest"
console.log(discountMessage); // "No discount"

console.log(city, firstPersonCity, userName, result, apiUrl, timeout);
