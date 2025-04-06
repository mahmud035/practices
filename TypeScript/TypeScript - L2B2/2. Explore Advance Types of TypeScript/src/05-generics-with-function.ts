export {};

/**
 * Generics in functions allow you to create flexible, type-safe utilities that work with multiple types while preserving type information. This is one of the most powerful applications of TypeScript generics.
 
 * ✅ Why Use Generics in Functions?
 *  - Reusability → Write one function for different types.
 *  - Type Safety → Ensures proper type usage.
 *  - Flexibility → Works with various data types dynamically.
 */

//* ----------------------------------------
//* 1. Basic Generic Functions
//* ----------------------------------------

// ----------------------------------------
// Simple Identity Function
// ----------------------------------------

// A generic function uses a type placeholder (`T`), which is replaced when the function is called.
// ✅ The function works with any type while maintaining type safety.

function identity<T>(value: T): T {
  return value;
}

// Usage
console.log(identity<string>('Hello')); // ✅ "Hello"
console.log(identity<number>(42)); // ✅ 42
console.log(identity<boolean>(true)); // ✅ true

// ----------------------------------------
// Generic Array Processing
// ----------------------------------------

// We can use generics to write functions that work with arrays.

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement<string>(['apple', 'banana', 'mango']); // ✅ "apple"
getFirstElement<number>([10, 20, 30]); // ✅ 10

//* ----------------------------------------
//* 2. Multiple Type Parameters
//* ----------------------------------------

// ----------------------------------------
// Function with Two Generic Types
// ----------------------------------------

// We can use multiple generic parameters for more flexibility.
// ✅ Allows different types for each argument.

function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

pair<string, number>('Alice', 25); // ✅ ["Alice", 25]
pair<boolean, string>(true, 'Yes'); // ✅ [true, "Yes"]

// ----------------------------------------
// Key-Value Mapper
// ----------------------------------------

function mapObject<K extends string | number, V, R>(
  obj: Record<K, V>,
  transform: (value: V) => R
): Record<K, R> {
  const result = {} as Record<K, R>;
  for (const key in obj) {
    result[key] = transform(obj[key]);
  }
  return result;
}

const mapped = mapObject({ a: 1, b: 2 }, (num) => num.toString());
// Type: { a: string; b: string }

//* ----------------------------------------
//* 3. Constrained Generic Functions
//* ----------------------------------------

// We can restrict the generic type using `extends` to ensure it meets certain conditions.

// ----------------------------------------
// Length Constraint
// ----------------------------------------

function longest<T extends { length: number }>(a: T, b: T): T {
  return a.length >= b.length ? a : b;
}

const longerArray = longest([1, 2], [1, 2, 3]);
const longerString = longest('alice', 'bob');
// longest(10, 100); ❌ Error (numbers don't have .length)

// ----------------------------------------
// Keyof Constraint
// ----------------------------------------

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: 'Alice', age: 30 };
const name = getProperty(person, 'name');
const age = getProperty(person, 'age');
// getProperty(person, "email"); ❌ Error (invalid key)

//* ----------------------------------------
//* 4. Generic Function Types
//* ----------------------------------------

type Transformer<T, U> = (input: T) => U;

const stringToNumber: Transformer<string, number> = (str) => str.length;

// ----------------------------------------
// Generic Interface for Functions
// ----------------------------------------

interface Processor<T, U> {
  (input: T): U;
  description: string;
}

const lengthProcessor: Processor<string, number> = (str) => str.length;
lengthProcessor.description = 'Converts string to its length';

//* ----------------------------------------
//* 5. Default Type Parameters
//* ----------------------------------------

// ----------------------------------------
// Function with Default Generic Type
// ----------------------------------------

function createArray<T = string>(length: number, value: T): T[] {
  return Array(length).fill(value);
}

const strs = createArray(3, 'x'); // Type: string[]
const numbs = createArray<number>(3, 0); // Type: number[]

//* ----------------------------------------
//* 6. Real-World Examples
//* ----------------------------------------

// ----------------------------------------
// API Fetch Wrapper
// ----------------------------------------

async function fetchData<T>(url: string): Promise<T> {
  const res = await fetch(url);
  return res.json();
}

// Usage
type User = { id: number; name: string };
// const user = await fetchData<User>('/api/user/1');

console.log(
  mapped,
  longerArray,
  longerString,
  name,
  age,
  stringToNumber,
  strs,
  numbs
);
