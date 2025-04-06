export {};

//* Mapped Types
/**
 * `Mapped Types` in TypeScript are a powerful feature that allows you to "programmatically create new object types by transforming the properties of an existing type."
 *
 * Think of them as a way to "map over" the keys of a type and apply transformations to its properties
 *
 * Similar to how `Array.map()` works for values, but at the "type level."
 *
 ** Basic Syntax
 *
 * type NewType = {
    [Key in ExistingKeyUnion]: NewValueType;
  };

 * `Key in ExistingKeyUnion`: Iterates over each key in a union of keys (often derived via `keyof`).

 * `NewValueType`: Defines the type for each property in the resulting type.
  
 * Why Use Mapped Types?
 *
 * Reduce Redundancy: Avoid manually rewriting similar types.
 * Type Safety: Enforce consistent transformations across properties.
 * Dynamic Logic: Create types that adapt to your data structures.
 * 
 * 
 * Mapped Types unlock type-level transformations, letting you write DRY, flexible, and robust code. Combined with `keyof`, `typeof`, and conditional types, they form the backbone of TypeScript’s type manipulation capabilities. 🚀
 */

// ----------------------------------------
// Examples
// ----------------------------------------

// 1. Create a Read-Only Version of a Type
interface Person {
  name: string;
  age: number;
}

type ReadonlyPerson = {
  readonly [K in keyof Person]: Person[K];
};

/* 
Result:
{
  readonly name: string;
  readonly age: number;
} 
*/

// 2. Make All Properties Optional
type OptionalPerson = {
  [K in keyof Person]?: Person[K];
};

/* 
Result:
{
  name?: string | undefined;
  age?: number | undefined;
} 
*/

// 3. Built-In Utility Types
// Many TypeScript utility types (e.g., `Partial<T>`, `Readonly<T>`, `Pick<T, K>`) are implemented using mapped types:

// How `Partial<T>` works internally:
type TPartial<T> = {
  [K in keyof T]?: T[K];
};

// ----------------------------------------
// Advanced Patterns
// ----------------------------------------

// 1. Transform Property Types
// Convert all properties to boolean:

type Flags<T> = {
  [K in keyof T]: boolean;
};

type PersonFlags = Flags<Person>;
// { name: boolean; age: boolean }

// 2. Add/Remove Modifiers
// Use `+` or `-` to add/remove modifiers like `readonly` or `?`:

// Remove optional (`?`) modifiers:
type TRequired<T> = {
  [K in keyof T]-?: T[K];
};

// Remove `readonly` modifiers:
type TWritable<T> = {
  -readonly [K in keyof T]: T[K];
};

// 3. Filter Keys with `as` Clauses (TS 4.1+)
// Create a type with only string properties:

type StringProperties<T> = {
  [K in keyof T as T[K] extends string ? K : never]: T[K];
};

interface User {
  id: string;
  age: number;
}

type UserSettings = StringProperties<User>; // { id: string }

// 4. Rename Keys
// Use template literal types to transform keys:

type Getters<T> = {
  [K in keyof T as `get${Capitalize<K & string>}`]: () => T[K];
};

type PersonGetters = Getters<Person>;
/* 
{
  getName: () => string;
  getAge: () => number;
} 
*/

// ----------------------------------------
// Use Cases
// ----------------------------------------

// 1. Type-Safe Object Transformations
function freeze<T>(obj: T): Readonly<T> {
  return Object.freeze(obj);
}

const frozenPerson = freeze({ name: 'Alice', age: 30 });
// frozenPerson.age = 31; // ❌ Error: Cannot assign to read-only property.

// 2. Dynamic API Response Shapes
type ApiResponse<T> = {
  [K in keyof T]: T[K] | null; // Allow null for all properties
};

type UserResponse = ApiResponse<User>;
// { id: string | null; age: number | null }

// 3. Derive Types from Configuration Objects
const config = { theme: 'dark', fontSize: 14 } as const;

type ConfigType = {
  [K in keyof typeof config]: (typeof config)[K];
};
// { readonly theme: "dark"; readonly fontSize: 14 }

// -----------------------------------------
// Real-World Example: Observable Properties
// -----------------------------------------

type Observable<T> = {
  [K in keyof T as `on${Capitalize<K & string>}Change`]: (
    callback: (value: T[K]) => void
  ) => void;
} & T;

interface ISettings {
  theme: string;
  volume: number;
}

type ObservableSettings = Observable<ISettings>;

/* 
{
  onThemeChange: (callback: (value: string) => void) => void;
  onVolumeChange: (callback: (value: number) => void) => void;
  theme: string;
  volume: number;
} 
*/
