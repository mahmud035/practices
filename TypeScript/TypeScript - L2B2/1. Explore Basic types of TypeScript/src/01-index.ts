export {};

function greet(name: string): void {
  console.log(`Hello, ${name}`);
}

const userName: string = 'TypeScript Learner';
greet(userName); // Hello, TypeScript Learner!

/**
 ** TypeScript is:
 *  TypeScript is a strongly typed superset of JavaScript developed by Microsoft.
 *  It adds static typing, interfaces, and other features to JavaScript, making it more robust for large-scale applications.
 *  TypeScript code is compiled to plain JavaScript, ensuring compatibility with all JavaScript environments.
 *
 ** Key Benefits of TypeScript:
 *  Static Typing: Helps catch errors at compile-time instead of runtime.
 *  Improved Code Readability: Provides better tooling support and code suggestions.
 *  Object-Oriented Features: Supports interfaces, generics, and decorators.
 *  Scalability: Helps in building and maintaining large applications.
 *  Better IDE Support: Works well with VS Code, providing IntelliSense and autocompletion.
 */

//* ----------------------------------------
//* Key Features of TypeScript
//* ----------------------------------------

// ----------------------------------------
// 1. Static Typing
// ----------------------------------------

// Unlike JavaScript which is dynamically typed, TypeScript allows you to define types for variables, function parameters, and return values.

let name: string = 'John';
let age: number = 30;
let isStudent: boolean = false;

// ----------------------------------------
// 2. Type Inference
// ----------------------------------------

// TypeScript can often infer types even when you don't explicitly declare them.

let message = 'Hello'; // TypeScript infers this is a string
// message = 123;// Error: Type 'number' is not assignable to type 'string'

// ----------------------------------------
// 3. Interfaces
// ----------------------------------------

// Interfaces define the structure of objects:

interface IPerson {
  name: string;
  age: number;
  greet(): void;
}

const user: IPerson = {
  name: 'Alice',
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

interface IUser {
  name: string;
  age: number;
  email?: string; // Optional property
}

function registerUser(user: IUser): void {
  console.log(`Registering ${user.name}, age ${user.age}`);
  if (user.email) console.log(`Email: ${user.email}`);
}

const newUser: IUser = {
  name: 'Alice',
  age: 28,
  email: 'alice@example.com',
};

registerUser(newUser);

// ----------------------------------------
// 4. Classes
// ----------------------------------------

// TypeScript enhances JavaScript classes with type annotations and access modifiers:

class StudentCl {
  private id: number;
  public name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  display(): void {
    console.log(`Student ID: ${this.id}, Name: ${this.name}`);
  }
}

const alice = new StudentCl(1, 'Alice');
alice.display(); // Output: Student ID: 1, Name: Alice

// ----------------------------------------
// 5. Generics
// ----------------------------------------

// Generics provide a way to create reusable components:

function identity<T>(arg: T): T {
  return arg;
}

const output1 = identity<string>('myString');
const output2 = identity<number>(100);

console.log(name, age, isStudent, message, user, output1, output2);
