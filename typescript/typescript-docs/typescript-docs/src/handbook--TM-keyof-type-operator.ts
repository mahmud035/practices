export {};

//* The `keyof` type operator
/**
 * The `keyof` type operator in TypeScript is a powerful tool that extracts the "union of keys" from an object type.
 *
 * It ensures type safety when working with object properties by restricting access to valid keys, preventing typos, and enabling precise type relationships.
 *
 * How It Works
 *
 * Syntax: `keyof T` (where `T` is an object type).
 * Result: A union type of all keys (property names) in `T`.
 */

interface IPerson {
  name: string;
  age: number;
  location: string;
}

type PersonKeys = keyof IPerson;
// Equivalent to: "name" | "age" | "location"

// ----------------------------------------
// Key Use Cases
// ----------------------------------------

// 1. Accessing Object Properties Safely
// Ensure a key exists in an object type:

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person: IPerson = { name: 'Alice', age: 30, location: 'NYC' };
getValue(person, 'age'); // ✅ OK (returns `number`)
// getValue(person, 'email'); // ❌ Error: "email" is not a key of `Person`

// 2. Mapping or Iterating Over Keys
// Create types derived from an object’s keys:

type OptionalPerson = {
  [K in keyof IPerson]?: IPerson[K]; // Make all properties optional
};
// Equivalent to: { name?: string; age?: number; location?: string; }

// 3. Combining with `typeof` for Runtime Objects
// Extract keys from a concrete object:

const config = { theme: 'dark', fontSize: 14 };
type ConfigKeys = keyof typeof config; // "theme" | "fontSize"

// 4. Utility Types (e.g., `Pick`, `Omit`)
// `keyof` is foundational for built-in utilities:

type PersonNameAndAge = Pick<IPerson, 'name' | 'age'>;
// { name: string; age: number; }

type WithoutAge = Omit<IPerson, 'age'>;
// { name: string; location: string; }

// Advanced Example: Type-Safe Event Handlers
type EventHandlers<T> = {
  [K in keyof T as `on${Capitalize<K & string>}`]: () => void;
};

interface UserActions {
  click: () => void;
  hover: () => void;
}

type UserEventHandlers = EventHandlers<UserActions>;
// { onClick: () => void; onHover: () => void; }
