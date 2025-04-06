export {};

/**
 * Interface → Defines object structure, used for OOP-style programming.
 * Type Alias → More flexible, can define primitive types, unions, and intersections.
 
 ** Best Practices:
 *  - Default to `interface` for object shapes unless you need type features
 *  - Be consistent within a project
 
 ** Use `type` for:
    - Union/intersection types
    - Tuples
    - Mapped types
    
 ** Use `interface` for:
    - Class implementations
    - Declaration merging
    - Library/public API definitions
 */

//* ----------------------------------------
//* 1. Core Definitions
//* ----------------------------------------

// ----------------------------------------
// Interface
// ----------------------------------------

interface IUser {
  id: number;
  name: string;
  email?: string; // Optional property
}

// ----------------------------------------
// Type Alias
// ----------------------------------------

type TUser = {
  id: number;
  name: string;
  email?: string;
};

//* ----------------------------------------
//* 2. Key Similarities
//* ----------------------------------------

/**
 * Both can define:
 *  - Object shapes
 *  - Optional properties (`?`)
 *  - Readonly properties (`readonly`)
 *  - Function types
 *  - Extend other types
 */

// Both work
interface IPoint {
  x: number;
  y: number;
}

type TPoint = {
  x: number;
  y: number;
};

//* ----------------------------------------
//* 4. When to Use Each
//* ----------------------------------------

//* ----------------------------------------
//* Use `interface` When:
//* ----------------------------------------

// 1. Defining object shapes (especially for public APIs)

interface APIResponse {
  data: unknown;
  status: number;
}

// 2. Taking advantage of declaration merging

interface User {
  name: string;
}
interface User {
  age: number;
}
// Merges to { name: string; age: number }

// 3. Working with classes (implements)

class Admin implements User {
  name = 'Alice';
  age = 30;
}

//* ----------------------------------------
//* Use `type` When:
//* ----------------------------------------

// 1. Creating union/intersection types

type ID = number | string;
type AdminUser = User & { permissions: string[] };

// 2. Defining tuples or mapped types

type Coordinates = [number, number];
type PartialUser = {
  [K in keyof User]?: User[K];
};

// 3. Need concise one-off types

type ClickHandler = (event: MouseEvent) => void;

//* ----------------------------------------
//* 5. Advanced Patterns
//* ----------------------------------------

// ----------------------------------------
// Interface Extension
// ----------------------------------------

interface IAnimal {
  name: string;
}

interface IBear extends IAnimal {
  honey: boolean;
}

// ----------------------------------------
// Type Intersection
// ----------------------------------------

type TAnimal = {
  name: string;
};

type TBear = TAnimal & {
  honey: boolean;
};

// ----------------------------------------
// Declaration Merging (Interface Only)
// ----------------------------------------

interface Window {
  myLib: any;
}
// Later...
interface Window {
  version: string;
}
// Now Window has both myLib and version
