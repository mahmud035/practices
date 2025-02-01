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
 * Here's an example demonstrating TypeScript property modifiers: `optional properties`, `readonly properties`, and `index signatures` 👇:
 */

// Interface with property modifiers
interface IUser {
  readonly id: string; // Readonly property (cannot be modified)
  name: string;
  age?: number; // Optional property (marked with `?`)
  [key: string]: any; // Index signature (allows any string key with any value)
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

//* Extending Interface
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
  unit: string;
}

interface Colorful {
  color: string;
}

interface Circle2 {
  radius: number;
}

interface ColorfulCircle extends Colorful, Circle2 {}

const cc: ColorfulCircle = {
  color: 'red',
  radius: 42,
};

//* Intersection Types
interface Colorful2 {
  color: string;
}

interface Circle3 {
  radius: number;
}

type ColorfulCircle2 = Colorful2 & Circle3;

function draw(circle: Colorful2 & Circle3) {
  console.log(`Color was ${circle.color}`);
  console.log(`Radius was ${circle.radius}`);
}

draw({ color: 'blue', radius: 42 }); // OK
// draw({ color: 'red', raidus: 42 }); // Error Here (spelling mistake)

//* Generic Object Types (interface and type alias both can be generic)
interface Box<Type> {
  contents: Type;
}

// type Box2<Type> = { contents: Type };
interface StringBox {
  contents: string;
}

let boxA: Box<string> = { contents: 'hello' };
console.log(boxA.contents);

let boxB: StringBox = { contents: 'world' };
console.log(boxB.contents);

function setContents<Type>(box: Box<Type>, newContents: Type) {
  box.contents = newContents;
}

//* Tuple Types
/**
 * A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.
 */

type StringNumberPair = [string, number];
