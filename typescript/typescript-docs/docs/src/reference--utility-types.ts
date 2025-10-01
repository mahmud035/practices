export {};

//* Utility Types (ChatGPT & DeepSeek) 👇
/**
 * Utility types in TypeScript are pre-defined generic types provided by the language to simplify common type transformations and manipulations.
 *
 * What are Utility Types?
 *
 * Predefined generic types in TypeScript that:
 * Manipulate existing types
 * Create new types from existing ones
 * Reduce boilerplate code
 * Enhance type safety
 */

//* ----------------------------------------
//* Core Utility Types
//* ----------------------------------------

// ----------------------------------------
// 1. Partial<T>
// ----------------------------------------

/**
 * Makes all properties in `T` optional.
 *
 * Purpose:
 * - Creates a type where all properties of the original type `T` become optional. This is useful when you want to construct objects incrementally or when only a subset of properties is needed.
 */

interface IUser {
  id: number;
  name: string;
  email: string;
}

const updateUser = (user: Partial<IUser>) => {
  // Now you can update one or more properties without providing the whole object
};

updateUser({ name: 'Alice' }); // ✅ Ok

/**
 * Explanation:
  
 * In the above example, `Partial<IUser>` transforms the `IUser` interface into a type with all properties optional (`id?: number; name?: string; email?: string`).
 */

// ----------------------------------------
// 2. Required<T>
// ----------------------------------------

/**
 * Makes all properties in `T` required.
 *
 * Purpose:
 * - The opposite of `Partial<T>`, this utility type converts all optional properties in type `T` into required properties. This is useful when you need to guarantee that an object contains every property.
 */

interface ISettings {
  theme?: string;
  language?: string;
}

const defaultSettings: Required<ISettings> = {
  theme: 'dark',
  language: 'en',
};

/**
 * Explanation:
  
 * `Required<ISettings>` ensures that both `theme` and `language` are present, even though they were optional in the original type.
 */

// ----------------------------------------
// 3. Readonly<T>
// ----------------------------------------

/**
 * Makes all properties in `T` read-only.
 *
 * Purpose:
 * - Marks all properties of type `T` as read-only, meaning that once an object is created, its properties cannot be reassigned.
 */

interface IConfig {
  apiUrl: string;
  timeout: number;
}

const config: Readonly<IConfig> = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
};

// config.timeout = 10000; // ❌ Error: Cannot assign to 'timeout' because it is a read-only property

/**
 * Explanation:
  
 * `Readonly<IConfig>` ensures that no property of `config` can be changed after its initialization.
 */

// ----------------------------------------
// 4. Pick<T, K>
// ----------------------------------------

/**
 * Select subset of properties from `T`.
 *
 * Purpose:
 * - Constructs a new type by selecting a subset of properties `K` from type `T`. This is especially useful when you need only a few properties from a larger type.
 */

interface IPerson {
  name: string;
  age: number;
  address: string;
}

type PersonNameAndAge = Pick<IPerson, 'name' | 'age'>;

const person: PersonNameAndAge = {
  name: 'Alice',
  age: 30,
};

/**
 * Explanation:
  
 * `Pick<IPerson, "name" | "age">` creates a new type that only contains the `name` and `age` properties of `IPerson`.
 */

// ----------------------------------------
// 5. Omit<T, K>
// ----------------------------------------

/**
 * Remove properties from `T`.
 *
 * Purpose:
 * - The inverse of `Pick<T, K>`, `Omit<T, K>` creates a type by removing the properties specified in `K` from type `T`.
 */

interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
}

type ProductWithoutDescription = Omit<IProduct, 'description'>;

const product: ProductWithoutDescription = {
  id: 1,
  name: 'Laptop',
  price: 999,
};

/**
 * Explanation:
  
 * `Omit<Product, "description">` results in a type that excludes the `description` property.
 */

// ----------------------------------------
// 6. Record<K, T>
// ----------------------------------------

/**
 * Creates an object type with specified keys and value type.
 *
 * Purpose:
 * - Creates an object type whose keys are of type `K` (typically a union of literal types) and whose values are of type `T`. This is useful for creating maps or dictionaries with a fixed set of keys.
 */

type Role = 'admin' | 'user' | 'guest';

interface IPermissions {
  canEdit: boolean;
  canDelete: boolean;
}

const rolePermissions: Record<Role, IPermissions> = {
  admin: { canEdit: true, canDelete: true },
  user: { canEdit: true, canDelete: false },
  guest: { canEdit: false, canDelete: false },
};

/**
 * Explanation:
  
 * `Record<Role, IPermissions>` ensures that every role in the `Role` union has an associated `IPermissions` object.
 */

// ----------------------------------------
// 7. Exclude<T, U>
// ----------------------------------------

/**
 * Remove types from `T` that are assignable to `U`.
 *
 * Purpose:
 * - Constructs a type by excluding from union type `T` all members that are assignable to `U`.
 */

type T = Exclude<'a' | 'b' | 'c', 'a'>; // "b" | "c"

type AllNumbers = number | string | boolean;
type JustNumbers = Exclude<AllNumbers, string | boolean>; // number

/**
 * Explanation:
  
 * `Exclude<AllNumbers, string | boolean>` removes `string` and `boolean` from the union, leaving only `number`.
 */

// ----------------------------------------
// 8. Extract<T, U>
// ----------------------------------------

/**
 * Keep types from `T` that are assignable to `U`.
 *
 * Purpose:
 * - The opposite of `Exclude<T, U>`, `Extract<T, U>` constructs a type by extracting from `T` all members that are assignable to `U`.
 */

type T1 = Extract<'a' | 1 | true, string | number>; // "a" | 1

type AllTypes = number | string | boolean;
type OnlyStrings = Extract<AllTypes, string>; // string

/**
 * Explanation:
  
 * `Extract<AllTypes, string>` extracts the `string` type from the union.
 */

// ----------------------------------------
// 9. NonNullable<T>
// ----------------------------------------

/**
 * Remove `null` and `undefined` from `T`.
 *
 * Purpose:
 * - Constructs a type by excluding `null` and `undefined` from type `T`.
 */

type T2 = NonNullable<string | null | undefined>; // string

type MaybeNumber = number | null | undefined;
type DefinitelyNumber = NonNullable<MaybeNumber>; // number

/**
 * Explanation:
  
 * `NonNullable<MaybeNumber>` removes `null` and `undefined` from the union, leaving only `number`.
 */

// ----------------------------------------
// 10. ReturnType<T>
// ----------------------------------------

/**
 * Get return type of a function type `T`.
 *
 * Purpose:
 * - Extracts the return type of a function type `T`. This is useful when you want to derive a type from a function’s output.
 */

type FnReturn = ReturnType<() => number>; // number

function getUser() {
  return {
    id: 1,
    name: 'Alice',
  };
}

type User = ReturnType<typeof getUser>;
// User is { id: number; name: string; }

/**
 * Explanation:
  
 * `ReturnType<typeof getUser>` extracts the return type of the `getUser` function.
 */

//* ----------------------------------------
//* Advanced Utility Types
//* ----------------------------------------

// ----------------------------------------------
// 11. Parameters<T> and ConstructorParameters<T>
// ----------------------------------------------

/**
 * Parameters<T> : Get tuple of function parameters' types.
 * ConstructorParameters<T> : Get tuple of constructor parameters' types.
 *
 * Purpose:
 * - `Parameters<T>` extracts a tuple type of the parameters of a function type `T`.
 * - `ConstructorParameters<T>` extracts a tuple type of the parameters of a constructor function type `T`.
 */

function sum(a: number, b: number): number {
  return a + b;
}

type SumParameters = Parameters<typeof sum>; // [number, number]

class Point {
  constructor(public x: number, public y: number) {}
}

type PointConstructorParameters = ConstructorParameters<typeof Point>;
// [number, number]

/**
 * Explanation:
  
 * `Parameters<typeof sum>` extracts the tuple `[number, number]` representing the parameters of the `sum` function.
 * `ConstructorParameters<typeof Point>` extracts the tuple `[number, number]` representing the constructor parameters of the `Point` class.
 */

// ----------------------------------------
// 12. InstanceType<T>
// ----------------------------------------

/**
 * Get instance type of a class constructor.
 *
 * Purpose:
 * - Extracts the instance type of a constructor function type `T`. This can be helpful when working with classes and constructors.
 */

class UserAccount {
  constructor(public id: number, public name: string) {}
}

type AccountInstance = InstanceType<typeof UserAccount>;
// UserAccount

/**
 * Explanation:
  
 * `InstanceType<typeof UserAccount>` extracts the instance type of the `UserAccount` class.
 */

// ----------------------------------------
// 13. ThisParameterType<T>
// ----------------------------------------

/**
 * Extract `this` parameter type from function.
 */

function print(this: { value: string }) {
  console.log(this.value);
}

type PrintThis = ThisParameterType<typeof print>; // { value: string }

/**
 * Explanation:
  
 * `ThisParameterType<typeof print>` extracts the type of `this` parameter from the `print` function.
 */

//* ----------------------------------------
//* String Manipulation Types (TS 4.1+)
//* ----------------------------------------

// ----------------------------------------
// 14. Uppercase<StringType>
// ----------------------------------------

/**
 * Converts a string to uppercase.
 */

type UpperCaseString = Uppercase<'hello'>; // "HELLO"

// ----------------------------------------
// 15. Lowercase<StringType>
// ----------------------------------------

/**
 * Converts a string to lowercase.
 */

type LowerCaseString = Lowercase<'HELLO'>; // "hello"

// ----------------------------------------
// 16. Capitalize<StringType>
// ----------------------------------------

/**
 * Capitalizes the first letter of a string.
 */

type CapitalizedString = Capitalize<'hello'>; // "Hello"

// ----------------------------------------
// 17. Uncapitalize<StringType>
// ----------------------------------------

/**
 * Uncapitalizes the first letter of a string.
 */

type UncapitalizedString = Uncapitalize<'Hello'>; // "hello"

//* ----------------------------------------
//* Best Practices
//* ----------------------------------------

/**
 * 1. Leverage Built-ins First: Use standard utilities before creating custom ones
 * 2. Use in Combination: Combine utility types to create complex types
 * 3. Use with Generics: Utility types work well with generics for reusability
 * 4. Type Documentation: Use utilities to create self-documenting types
 * 5. Runtime Validation: Combine with type guards for end-to-end safety
 */

// Combine Utilities
type APIResponse = Readonly<Partial<IUser>>;

// Use with Generics:
function updateEntity<T>(payload: Partial<T>) {}

// -----------------------------------------------------------------------

//* Utility Types (TypeScript Documentation) 👇

// Awaited<Type>
// Unwrap promise types recursively.

type A = Awaited<Promise<string>>; // string

type B = Awaited<Promise<Promise<number>>>; // number

type C = Awaited<boolean | Promise<number>>; // number | boolean

// Record<Keys, Type>
// Constructs an object type whose property keys are `Keys` and whose property values are `Type`. This utility can be used to map the properties of a type to another type.

type CatName = 'miffy' | 'boris' | 'mordred';

interface ICatInfo {
  age: number;
  breed: string;
}

const cats: Record<CatName, ICatInfo> = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' },
};

console.log(cats);
