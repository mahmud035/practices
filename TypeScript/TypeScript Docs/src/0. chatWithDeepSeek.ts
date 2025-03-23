export {};

// ================ Part-01 ================

//* Basic Types
// TypeScript provides basic types to represent common values:

// Primitive Types
const count: number = 42;
const fullName: string = 'John Doe';
const isDone: boolean = true;

// Arrays
const numbers: number[] = [1, 2, 3];
const names: Array<string> = ['Alice', 'Bob']; // Generic syntax
const mix: (number | string)[] = [1, 'Alice'];

// Tuples
const user: [string, number] = ['Alice', 30]; // Fixed-type array

// Any
let dynamicValue: any = 'This can be anything';
dynamicValue = 42; // No error

// Void (common for functions)
function logMessage(): void {
  console.info('This returns nothing');
}

console.log(count, fullName, isDone, numbers, names, mix, user, dynamicValue);

//* Type Inference
// TypeScript can automatically infer types:

let message = 'Hello World'; // TypeScript infers 'string'
// message = 123; // Error: Type 'number' not assignable to 'string'
console.log(message);

//* Functions with Type Annotations
// Add types to function parameters and return values:

// Basic function
function add(x: number, y: number): number {
  return x + y;
}

// Arrow function
const multiply1 = (a: number, b: number): number => a * b;

// Optional parameters
function greet(name: string, greeting?: string): string {
  return `${greeting || 'Hello'}, ${name}`;
}

add(1, 2);
multiply1(1, 2);
greet('Pavel', 'Hi');

//* Interfaces
// Define object shapes and contracts:

interface IPerson {
  firstName: string;
  lastName: string;
  age?: number; // Optional property
}

function getFullName(person: IPerson): string {
  return `${person.firstName} ${person.lastName}`;
}

const user1 = { firstName: 'John', lastName: 'Doe' };
console.log(getFullName(user1)); // "John Doe"

//* Type Aliases
// Alternative way to define types:

type TPoint = {
  x: number;
  y: number;
};

type ID = string | number; // Union type

function printCoordinates(pt: TPoint): void {
  console.log(`X: ${pt.x}, Y: ${pt.y}`);
}

//* Classes
// Object-oriented programming with TypeScript:

class Animal {
  // Properties with type annotations
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Method with return type
  speak(): string {
    return `${this.name} makes a noise`;
  }
}

// Inheritance
class Dog extends Animal {
  speak(): string {
    return `${this.name} barks`;
  }
}

const dog = new Dog('Rex');
console.log(dog.speak()); // "Rex barks"

// Practice Task
// interface IUser {
//   id: number;
//   username: string;
//   email: string;
//   age?: number; // Optional property
// }

// function createUser(user: IUser) {
//   return { id: user.id, name: user.username, email: user.email };
// }

// ================ Part-02 ================

//* Generics
// Reusable components that work with "multiple types" while preserving type information.

// Basic Generic Example:
function identity<T>(arg: T): T {
  return arg;
}

const output1 = identity<string>('Hello'); // Explicit type
const output2 = identity(42); // Type inferred as "number"

console.log(output1, output2);

// Generic Interface:
interface IBox<T> {
  value: T;
}

const numberBox: IBox<number> = { value: 42 };
const stringBox: IBox<string> = { value: 'TS' };

// Generic Constraints:
interface ILengthwise {
  length: number;
}

function logLength<T extends ILengthwise>(arg: T): void {
  console.log(arg.length);
}

logLength('hello'); // 5 (strings have .length)
logLength([1, 2, 3]); // 3 (arrays have .length)

//* Union and Intersection Types

// Union Types (|):
type Status = 'pending' | 'fulfilled' | 'rejected';
type ID2 = string | number;

function printID(id: ID2) {
  if (typeof id === 'string') return id.toUpperCase();
  return id.toFixed(2);
}

// Intersection Types (&):
interface IEmployee {
  name: string;
  role: string;
}

interface IManager {
  teamSize: number;
}

type TeamLead = IEmployee & IManager;

const lead: TeamLead = {
  name: 'Alice',
  role: 'Engineering',
  teamSize: 5,
};

//* Enums
// Named constants with numeric or string values:

enum Direction {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

enum StatusCode {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
}

// Usage:
const move = Direction.Up; // "Up"
const code = StatusCode.Success; // 200

//* Type Narrowing
// Techniques to refine types within conditional blocks:

// typeof checks
function padLeft(value: string | number) {
  if (typeof value === 'number') return ' '.repeat(value);
  return value;
}

// instanceof checks
class Car {
  drive() {
    console.log('Driving...');
  }
}

class Bike {
  ride() {
    console.log('Riding...');
  }
}

function useVehicle(vehicle: Car | Bike) {
  if (vehicle instanceof Car) {
    vehicle.drive();
  } else {
    vehicle.ride();
  }
}

//* Type Assertions
// Override TypeScript's inferred type (use cautiously):

// Angle-bracket syntax
const input = document.getElementById('input') as HTMLInputElement;

// 'as' syntax (preferred in TSX/JSX)
// const value = (someValue as string).toUpperCase();

// Practice Task
interface ISuccessResponse<T> {
  status: 'success';
  data: T;
}

interface IErrorResponse {
  status: 'error';
  errorMessage: string;
}

type TResponse<T> = ISuccessResponse<T> | IErrorResponse;

function handleResponse<T>(response: TResponse<T>) {
  if (response.status === 'success') {
    console.log(`Success: ${response.data}`);
  } else {
    console.log(`Error: ${response.errorMessage}`);
  }
}

// Example usage:
const successResponse: TResponse<number> = {
  status: 'success',
  data: 42,
};

const errorResponse: TResponse<string> = {
  status: 'error',
  errorMessage: 'Not found',
};

handleResponse(successResponse); // Success: 42
handleResponse(errorResponse); // Error: Not found

// ================ Part-03 🧠 ================

// Advanced Types

//* Utility Types
// Predefined generic types for common transformations:

interface IUser {
  id: number;
  name: string;
  email: string;
  age?: number;
}

// Partial<T>: All properties optional
type PartialUser = Partial<IUser>; // { id?: number; name?: string; ... }

// Readonly<T>: Immutable properties
type ReadonlyUser = Readonly<IUser>;

// Pick<T, K>: Select specific properties
type UserPreview = Pick<IUser, 'id' | 'name'>;

// Omit<T, K>: Remove specific properties
type UserWithoutEmail = Omit<IUser, 'email'>;

// Record<K, T>: Dictionary with key type K and value type T
type UserMap = Record<number, IUser>;

//* Mapped Types
// Create new types by iterating over keys:

type OptionalAll<T> = {
  [P in keyof T]?: T[P];
};

type ReadonlyUser2 = {
  readonly [P in keyof IUser]: IUser[P];
};

//* Async/Await with TypeScript
// Strongly-typed asynchronous code:

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchPost(id: number): Promise<IPost> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

// Usage
fetchPost(1)
  .then((post) => console.log(post.title))
  .catch((error) => console.error(error));

//* Type Guards & Discriminated Unions
// Advanced type narrowing techniques:

// Custom type guard
function isString(value: any): value is string {
  return typeof value === 'string';
}

// Discriminated union
type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; side: number };

function area(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.side ** 2;
  }
}

//* Conditional Types
// Types that depend on conditions:

type isString2<T> = T extends string ? 'Yes' : 'No';
type A = isString2<'hello'>; // "Yes"
type B = isString2<42>; // "No"

// Infer keyword
type ArrayElement<T> = T extends (infer U)[] ? U : never;
type NumArrayElement = ArrayElement<number[]>; // number

//* Type Predicates
// Custom logic for type narrowing:

interface ICat {
  meow(): void;
}
interface IDog {
  bark(): void;
}

function isCat(animal: ICat | IDog): animal is ICat {
  return 'meow' in animal;
}

function animalSound(animal: ICat | IDog) {
  if (isCat(animal)) {
    animal.meow();
  } else {
    animal.bark();
  }
}

// Practice Task

// 1. Nullable<T> Type
// Makes each property of T nullable:
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

// 2. DeepReadonly<T> Type
// Recursively makes all properties readonly, including nested objects (excluding functions):
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends Function
    ? T[K]
    : T[K] extends object
    ? DeepReadonly<T[K]>
    : T[K];
};

// ================ Part-04 🔥 ================

//* Template Literal Types
// Manipulate strings at the type level for pattern matching:

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type ApiEndPoint = `/api/v1/${string}`;

type Route = `${HttpMethod} ${ApiEndPoint}`;

// Valid routes:
const validRoute1: Route = 'GET /api/v1/users';
const validRoute2: Route = 'POST /api/v1/products';

// Invalid routes:
// const invalidRoute: Route = 'PATCH /api/v1/logs'; // Error!

// Dynamic transformation:
type CapitalizeKeys<T extends string> = `${Capitalize<T>}Key`;
type UserKey = CapitalizeKeys<'id' | 'email'>; // "IdKey" | "EmailKey"

//* Declaration Merging
// Extend existing interface definitions:

// Original interface
interface IWindow {
  title: string;
}

// Augment the interface
interface IWindow {
  isMaximized: boolean;
}

// Merged result:
const win: IWindow = {
  title: 'My App',
  isMaximized: false, // Valid due to merging
};

//* Recursive Types
// Define types that reference themselves:

type Json = string | number | boolean | null | Json[] | { [key: string]: Json };

const validJson: Json = {
  users: [{ name: 'Alice', scores: [95, 87] }, { config: { darkMode: true } }],
};

console.log(validJson);
