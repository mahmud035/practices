export {};

/**
 * Generics enable you to create reusable, type-safe components that work with multiple types while maintaining type information. They're fundamental for building flexible yet strongly-typed code.
 
 * ✅ Why Use Generics?
 *  - Reusability → Write once, use with different types.
 *  - Type Safety → Preserves type information across operations.
 *  - Flexibility → Works with various data types dynamically.
 */

//* ----------------------------------------
//* 1. Basic Generic Functions
//* ----------------------------------------

// ----------------------------------------
// Identity Function (Simple Example)
// ----------------------------------------

function identity<T>(arg: T): T {
  return arg;
}

// Usage
const output1 = identity<string>('hello'); // Explicit type
const output2 = identity(42); // Type inference (number)

// ----------------------------------------
// Working with Arrays
// ----------------------------------------

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const numbers = [1, 2, 3];
const firstNum = getFirstElement(numbers); // Type: number

const strings = ['a', 'b', 'c'];
const firstStr = getFirstElement(strings); // Type: string

//* ----------------------------------------
//* 2. Generic Interfaces & Types
//* ----------------------------------------

// ----------------------------------------
// Generic Interface
// ----------------------------------------

interface Box<T> {
  contents: T;
}

const stringBox: Box<string> = { contents: 'hello' };
const numberBox: Box<number> = { contents: 42 };

console.log(numberBox.contents); // 'hello'
console.log(stringBox.contents); // 42

// ----------------------------------------
// Generic Type Alias
// ----------------------------------------

type Pair<T, U> = {
  first: T;
  second: U;
};

const nameAndAge: Pair<string, number> = {
  first: 'first',
  second: 30,
};

//* ----------------------------------------
//* 3. Generic Classes
//* ----------------------------------------

class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}

// Usage
const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
const num = numberStack.pop(); // Type: number | undefined

const stringStack = new Stack<string>();
stringStack.push('hello');

//* ----------------------------------------
//* 4. Constraints with `extends`
//* ----------------------------------------

// Sometimes, we want to restrict generics to certain types using `extends`.
// Limit generics to certain shapes using constraints.

// ----------------------------------------
// Basic Constraint
// ----------------------------------------

interface HasLength {
  length: number;
}

// ✅ `T extends HasLength` ensures that `T` has a `.length` property.

function logLength<T extends HasLength>(arg: T): void {
  console.log(arg.length);
}

logLength('hello'); // 5 (strings have .length)
logLength([1, 2, 3]); // 3 (arrays have .length)
// logLength(42); ❌ Error (number lacks .length)

// ----------------------------------------
// Keyof Constraint
// ----------------------------------------

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const person = { name: 'Alice', age: 30 };
getProperty(person, 'name'); // ✅
// getProperty(person, "email"); ❌ Error (invalid key)

//* ----------------------------------------
//* 5. Default Generic Parameters
//* ----------------------------------------

interface User {
  id: number;
  name: string;
}

interface PaginatedResponse<T = any> {
  data: T[];
  page: number;
  totalPages: number;
}

// Uses default any type
const response1: PaginatedResponse = {
  data: [1, 2, 3],
  page: 1,
  totalPages: 5,
};

// Explicit type
const response2: PaginatedResponse<User> = {
  data: [{ id: 1, name: 'Alice' }],
  page: 1,
  totalPages: 1,
};

//* ----------------------------------------
//* 6. Real-World Examples
//* ----------------------------------------

// ----------------------------------------
// API Wrapper
// ----------------------------------------

async function fetchData<T>(url: string): Promise<T> {
  const res = await fetch(url);
  return res.json();
}

// Usage
type TUser = {
  id: number;
  name: string;
};

// const user = await fetchData<TUser>('/api/user/1');

//* ----------------------------------------
//* 7. Advanced Patterns
//* ----------------------------------------

// ----------------------------------------
// Conditional Types
// ----------------------------------------

type NonNullable<T> = T extends null | undefined ? never : T;
type StringOrNumber<T> = T extends string ? string : number;

type A = NonNullable<string | null>; // string
type B = StringOrNumber<'hello'>; // string
type C = StringOrNumber<boolean>; // number

// ----------------------------------------
// Mapped Types
// ----------------------------------------

type Readonly<T> = {
  readonly [K in keyof T]: T[K];
};

type Optional<T> = {
  [K in keyof T]?: T[K];
};
