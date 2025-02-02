// export {};

interface IPerson {
  name: string;
  age: number;
}

function greet(person: IPerson) {
  return `Hello ${person.name}`;
}

//* Property Modifiers
/**
 * Each property in an object type can specify a couple of things: the type, whether the property is optional, and whether the property can be written to.
 *
 * Here's an example demonstrating TypeScript property modifiers such as `optional properties`, `readonly properties`, and `index signatures` 👇:
 */

// Interface with property modifiers
interface IUser {
  readonly id: string; // Readonly property (cannot be modified)
  name: string;
  age?: number; // Optional property (marked with `?`)
  [key: string]: unknown; // Index signature (allows any string key with any value)
}

// Create a user object
const user: IUser = {
  id: 'u123',
  name: 'Alice',
  // 'age' is optional, so we can omit it
};

// 1️⃣ Readonly property example
// user.id = "u456"; // ❌ Error: Cannot assign to 'id' because it is read-only

// 2️⃣ Optional property example
console.log(user.age); // undefined (no error because property is optional)

// 3️⃣ Index signature example
user.customField = 'extra data'; // ✅ Valid (via index signature)
user.settings = { darkMode: true }; // ✅ Also valid

// ----------------------------------------
// Another example with explicit types
// ----------------------------------------

interface IConfig {
  readonly env: 'dev' | 'prod'; // Readonly literal (fixed) union type
  apiUrl: string;
  timeout?: number; // Optional number
  [setting: string]: boolean | string | number | undefined; // Index signature
}

const config: IConfig = {
  env: 'dev',
  apiUrl: 'https://api.example.com',
};

// config.env = "prod"; // ❌ Error: readonly property
config.timeout = 3000; // ✅ Valid (optional property)
config.debugMode = true; // ✅ Valid (via index signature)
config.retryCount = 3; // ✅ Valid

// ----------------------------------------
// Readonly arrays (bonus example)
// ----------------------------------------

interface IAppState {
  readonly routes: readonly string[]; // Readonly array of strings
}

const state: IAppState = {
  routes: ['/home', '/about'] as const, // Using 'as const' for literal types (fixed value types)
};

// state.routes.push("/contact"); // ❌ Error: push doesn't exist on readonly array
// state.routes[0] = "/"; // ❌ Error: index signature in readonly array

//* Excess Property Checks
/**
 * TypeScript `strictly checks extra properties` in object literals when assigning them directly.
 *
 * Solutions:
 * Assigning an object to a variable first `bypasses` this check.
 * Use `index signatures` if extra properties are intended.
 * Use `type assertions` carefully (can override safety).
 */

interface IUser2 {
  name: string;
  age: number;
}

const user2: IUser2 = {
  name: 'John',
  age: 30,
  // email: 'john@example.com', // ❌ Error: Object literal may only specify known properties
};

// Bypassing Excess Property Checks

// ✅ Assigning to an Intermediate Variable
// If the object is assigned to a variable first, TypeScript allows it.
const newUser = {
  name: 'Alice',
  age: 25,
  email: 'alice@example.com', // No error here
};

const user3: IUser2 = newUser; // ✅ Allowed (extra properties are ignored)
// Here, TypeScript uses `structural typing`, meaning it only checks that `newUser` has at least the required properties of `IUser2`.

// ✅ Using Index Signatures
// If the type is meant to allow extra properties, use an `index signature`.
interface IFlexibleUser {
  name: string;
  age: number;
  [key: string]: any; // Allows any additional properties
}

const user4: IFlexibleUser = {
  name: 'John',
  age: 30,
  email: 'john@example.com', // ✅ No error
};

/**
 * When Do Excess Property Checks Apply?
 * ✅ Direct object literals -> Checked strictly
 * ✅ Intermediate variable assignments -> More flexible (extra properties are ignored)
 * ✅ Function parameters (when passing object literals directly) -> Checked strictly
 */

function printUser(user: IUser2) {
  console.log(user.name, user.age);
}

printUser({
  name: 'Eve',
  age: 28,
  // email: 'eve@example.com', // ❌ Error: Excess property
});

// 🔹 Fix: Assign the object to a variable first.
const newUser2 = { name: 'Eve', age: 28, email: 'eve@example.com' };
printUser(newUser2); // ✅ No error

//* Extending Interface
/**
 * The `extends` keyword on an `interface` allows us to effectively copy members from other named types, and add whatever new members we want.
 *  This can be useful for cutting down the amount of type declaration boilerplate we have to write.
 */
interface IBasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

interface IAddressWithUnit extends IBasicAddress {
  unit: string;
}

// extend from multiple types
interface IColorful {
  color: string;
}
interface ICircle {
  radius: number;
}

interface IColorfulCircle extends IColorful, ICircle {}

const cc: IColorfulCircle = {
  color: 'red',
  radius: 42,
};

//* Intersection Types
/**
 * `interfaces` allowed us to build up new types from other types by extending them. TypeScript provides another construct called `intersection types` that is mainly used to combine existing object types.
 * An intersection type is defined using the `&` operator.
 */
type TColorful = {
  color: string;
};
type TCircle = {
  radius: number;
};

type TColorfulCircle = TColorful & TCircle;

function draw(circle: TColorfulCircle) {
  console.log(`Color was ${circle.color}`);
  console.log(`Radius was ${circle.radius}`);
}

draw({ color: 'blue', radius: 42 }); // ✅ OK
// draw({ color: 'red', raidus: 42 }); // ❌ Error Here (spelling mistake)

//* Generic Object Types
// interface and type alias both can be generic
interface IBox<T> {
  contents: T;
}

type TBox<T> = { contents: T };

const stringBox: IBox<string> = { contents: 'Alice' };
const stringArrayBox: IBox<string[]> = { contents: ['Alice', 'Bob'] };

const numberBox: IBox<number> = { contents: 42 };
const numberArrayBox: IBox<number[]> = { contents: [1, 2, 3] };

const tupleBox: IBox<(string | number | boolean)[]> = {
  contents: ['Alice', 30, false],
};

function setContents<T>(box: IBox<T>, newContents: T) {
  box.contents = newContents;
}

//* Tuple Types
/**
 * A `tuple type` is another sort of `Array` type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.
 */

type StringNumberPair = [string, number];

// Here, `StringNumberPair` is a tuple type of string and number.

// Another thing you may be interested in is that tuples can have optional properties by writing out a question mark (`?` after an element’s type). Optional tuple elements can only come at the end, and also affect the type of `length`.

type Either2dOr3d = [number, number, number?];

function setCoordinate(coord: Either2dOr3d) {
  const [x, y, z] = coord;
  return `Provided coordinates had ${coord.length} dimensions`;
}

// Tuples can also have rest elements, which have to be an array/tuple type.
type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];

const a: StringNumberBooleans = ['hello', 1];
const b: StringNumberBooleans = ['beautiful', 2, true];
const c: StringNumberBooleans = ['world', 3, true, false, true, false, true];

function readButtonInput(name: string, version: number, ...input: boolean[]) {
  return `${name} -  ${version} - ${input.length}`;
}

//* `readonly` Tuple Types
function doSomething(pair: readonly [string, number]) {
  // pair[0] = 'hello'; // ❌ Error: Cannot assign to '0' because it is a read-only property.
}
