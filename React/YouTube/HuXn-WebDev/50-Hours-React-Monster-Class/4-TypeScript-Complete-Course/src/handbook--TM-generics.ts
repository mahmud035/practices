export {};

//* Hello World of Generics
function identity<T>(arg: T): T {
  return arg;
}

const output = identity(101);
const output2 = identity('101');

//* Working with Generic Type Variables
/**
 * The generic function `loggingIdentity` takes a type parameter `T`, and an argument `arg` which is an array of `T`s, and returns an array of `T`s.
 */

function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length); // ✅ Array has a .length, so no more error
  return arg;
}

//* Generic Types
let myIdentity: <T>(arg: T) => T = identity;

let myIdentity2: <Input>(arg: Input) => Input = identity;

let myIdentity3: { <T>(arg: T): T } = identity;

interface IGenericIdentityFn {
  <T>(arg: T): T;
}

function identity2<T>(arg: T): T {
  return arg;
}

let myIdentity4: IGenericIdentityFn = identity2;

//* Generic Classes
/**
 * Generic classes in TypeScript are classes that are defined with one or more type parameters. This allows you to create reusable components that can work with different data types while still maintaining type safety. Instead of hardcoding a specific type, you can use a type parameter (commonly represented as `T`, `U`, etc.) to make your class flexible and generic.
 *
 * Why Use Generic Classes?
 *
 * Reusability: Write a class once and use it with different types.
 * Type Safety: Ensure that the class methods and properties interact with the correct types.
 * Flexibility: Allow classes to work with a variety of data types without sacrificing the benefits of static type checking.
 */

class GenericBox<T> {
  private content: T;

  constructor(value: T) {
    this.content = value;
  }

  getContent(): T {
    return this.content;
  }

  setContent(value: T): void {
    this.content = value;
  }
}

const numberBox = new GenericBox<number>(123);
console.log(numberBox.getContent()); // Outputs: 123

const stringBox = new GenericBox<string>('Hello, TypeScript!');
console.log(stringBox.getContent()); // Outputs: "Hello, TypeScript!"

// Multiple Type Parameters
// A generic class can also have multiple type parameters if needed.
class Pair<T, U> {
  first: T;
  second: U;

  constructor(first: T, second: U) {
    this.first = first;
    this.second = second;
  }

  getPair(): [T, U] {
    return [this.first, this.second];
  }
}

const pair = new Pair<number, string>(42, 'Answer');
console.log(pair.getPair()); // Outputs: [42, "Answer"]

//* Generic Constraints
/**
 * Sometimes you might want to limit what types can be used with a generic class.
 * This is done using `generic constraints`.
 *
 * Why Use Constraints?
 * Type Safety: Ensure required properties/methods exist.
 * Flexibility: Write reusable code that works with related types.
 * Inference: TypeScript can better infer return types (e.g., T[K]).
 *
 * `T extends Lengthwise`: This constraint ensures that whatever type is used for `T` must have a `length` property.
 */
interface ILengthwise {
  length: number;
}

class LengthContainer<T extends ILengthwise> {
  item: T;

  constructor(item: T) {
    this.item = item;
  }

  getLength(): number {
    return this.item.length;
  }
}

// Now, `T` must be a type that has a 'length' property
const stringContainer = new LengthContainer('Hello, Generics!');
console.log(stringContainer.getLength()); // Outputs: 16

//* Using Type Parameters in Generic Constraints
/**
 *
   You can declare a type parameter that is constrained by another   type parameter.
 *
   You can use one type parameter to constrain another, enabling dependencies between generics (e.g., `K extends keyof T`).
 */

//  Examples: 👇

//  1. Basic Constraint with an Interface
// Ensure a generic type has a required property:
interface IHasLength {
  length: number;
}

function logLength<T extends IHasLength>(arg: T): void {
  console.log(arg.length); // Safe to access .length
}

logLength('hello'); // ✅ OK (string has .length)
logLength([1, 2, 3]); // ✅ OK (array has .length)
// logLength(42); // ❌ Error: number has no .length

// 2. Using `keyof` to Constrain to Object Keys
// Ensure a key exists in an object:
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]; // Key is guaranteed to exist
}

const user = { name: 'Alice', age: 30 };
getValue(user, 'name'); // ✅ OK -> "Alice"
// getValue(user, 'email'); // ❌ Error: "email" is not a key of `user`

// 3. Multiple Constraints with Intersection Types
// Enforce a type satisfies multiple interfaces:
interface IIdentifiable {
  id: number;
}
interface ISerializable {
  serialize(): string;
}

function save<T extends IIdentifiable & ISerializable>(item: T): void {
  console.log(item.id, item.serialize());
}

const obj = { id: 1, serialize: () => 'data' };
save(obj); // ✅ OK -> data 1
