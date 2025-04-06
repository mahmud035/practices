export {};

/**
 * Constraints in TypeScript allow us to limit the types that can be used with generics. Without constraints, generics accept any type, but sometimes we need to restrict them to a specific category (e.g., objects, arrays, or specific properties).
 
 * We use `extends` to restrict the generic type.
 
 * ✅ Why Use Constraints?
 *  - Prevents invalid types from being used.
 *  - Ensures the required properties or methods exist.
 *  - Maintains flexibility while enforcing structure.
 */

//* ----------------------------------------
//* 1. Basic Constraints (extends)
//* ----------------------------------------

// ----------------------------------------
// Simple Type Constraint
// ----------------------------------------

// ✅ The generic type `T` must have a `.length` property.

function logLength<T extends { length: number }>(arg: T): void {
  console.log(arg.length);
}

logLength('hello'); // 5 (string has .length)
logLength([1, 2, 3]); // 3 (array has .length)
// logLength(42); ❌ Error (number lacks .length)

// ----------------------------------------
// Interface Constraint
// ----------------------------------------

// ✅ Ensures that `T` must have `id` property.
interface Identifiable {
  id: number;
}

function printId<T extends Identifiable>(item: T): void {
  console.log(`ID: ${item.id}`);
}

printId({ id: 1, name: 'Alice' }); // ✅
// printId({ name: "Bob" }); ❌ Missing id

//* ----------------------------------------
//* 2. Keyof Constraint
//* ----------------------------------------

// ----------------------------------------
// Property Access Safety
// ----------------------------------------

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: 'Alice', age: 30 };
getProperty(user, 'name'); // ✅ Returns string
getProperty(user, 'age'); // ✅ Returns number
// getProperty(user, "email"); ❌ Invalid key

// ----------------------------------------
// Dynamic Property Assignment
// ----------------------------------------

function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
}

const person = { name: 'Bob', age: 25 };
setProperty(person, 'name', 'Robert'); // ✅
// setProperty(person, "age", "old"); ❌ Type mismatch

//* ----------------------------------------
//* 3. Constructor Constraints
//* ----------------------------------------

// ----------------------------------------
// Class Instance Constraint
// ----------------------------------------

interface Constructor<T> {
  new (...args: any[]): T;
}

function createInstance<T>(ctor: Constructor<T>, ...args: any[]) {
  return new ctor(...args);
}

class UserCl {
  constructor(public name: string) {}
}

const userOne = createInstance(UserCl, 'Alice'); // Type: UserCl

//* ----------------------------------------
//* 4. Multiple Constraints
//* ----------------------------------------

// ----------------------------------------
// Combining with Intersection Types
// ----------------------------------------

interface Named {
  name: string;
}

interface Aged {
  age: number;
}

function processPerson<T extends Named & Aged>(person: T): string {
  return `${person.name} (${person.age})`;
}

processPerson({ name: 'Alice', age: 30, id: 1 }); // ✅
// processPerson({ name: "Bob" }); ❌ Missing age

//* ----------------------------------------
//* 5. Real-World Examples
//* ----------------------------------------

// ----------------------------------------
// API Pagination
// ----------------------------------------

interface Paginatable<T> {
  items: T[];
  total: number;
}

function getPage<T>(data: Paginatable<T>, page: number, perPage: number): T[] {
  const start = (page - 1) * perPage;
  return data.items.slice(start, start + perPage);
}

const usersData: Paginatable<{ id: number; name: string }> = {
  items: [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ],
  total: 2,
};
const page1 = getPage(usersData, 1, 10);

console.log(userOne, page1);
