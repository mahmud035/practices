export {};

//* Indexed Access Types
/**
 * "Indexed Access Types" in TypeScript allow you to "dynamically access the type of a property" within another type using a key (or keys).
 *
 * Think of it as "looking up" a type by referencing a property name or index, similar to how you access object properties in JavaScript but at the type level.
 *
 * This is a foundational feature for creating flexible, reusable type logic.
 *
 * Syntax:
 * Use square brackets `[]` with a key (or union of keys) to extract the corresponding type(s):
 *
 * @example
 * type TypeName = SomeType['key']
 *
 * Why Use Indexed Access Types?
 *
 * DRY Code: Avoid duplicating type definitions.
 * Type Safety: Ensure keys and values are correctly correlated.
 * Dynamic Logic: Build complex types (e.g., utility types like Pick<T, K>, Omit<T, K>).
 */

// ----------------------------------------
// Key Use Cases
// ----------------------------------------

// 1. Access a Single Property’s Type
// Extract the type of a specific property:

interface IPerson {
  name: string;
  age: number;
  address: {
    city: string;
  };
}

type AgeType = IPerson['age']; // number
type AddressType = IPerson['address']; // { city: string }

// 2. Access Multiple Properties with Union Keys
// Get a union of types for multiple properties:

type NameOrAge = IPerson['name' | 'age']; // string | number

// 3. Use `keyof` to Access All Property Types
// Extract a union of all property types in a type:

type AllValues = IPerson[keyof IPerson];
// string | number | { city: string }

// 4. Work with Arrays and Tuples
// Access element types by index:

type StringArray = string[];
type ElementType = StringArray[number]; // string

type Tuple = [string, number];
type TupleElement = Tuple[0]; // string
type AllTupleElements = Tuple[number]; // string | number

// 5. Generic Type Safety
// Enforce relationships between parameters and return types in functions:

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]; // Return type matches the property's type
}

const person: IPerson = { name: 'Alice', age: 30, address: { city: 'NYC' } };
const age: number = getProperty(person, 'age'); // ✅
const city: string = getProperty(person, 'address')['city']; // ✅

// ----------------------------------------
// Advanced Scenarios
// ----------------------------------------

// 1. Nested Property Access
// Access deeply nested types:

type CityType = IPerson['address']['city']; // string

// 2. Dynamic Keys with Mapped Types
// Build utility types like `Nullable<T>`:

type Nullable<T> = { [K in keyof T]: T[K] | null };

// Makes all properties of `T` nullable:
type NullablePerson = Nullable<IPerson>;
/* 
{
  name: string | null;
  age: number | null;
  address: { city: string } | null;
} 
*/

// 3. Index Signatures
// Extract types from objects with dynamic keys:

interface IDictionary {
  [key: string]: number;
}
type ValueType = IDictionary[string]; // number
