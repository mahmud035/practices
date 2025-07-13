export {};

/**
 * Generics and interfaces combine to create flexible, reusable type definitions that maintain type safety. This powerful combination is widely used in TypeScript applications.
 
 * ✅ Why Use Generics in Interfaces?
 *  - Reusability → Define once, use with multiple types.
 *  - Type Safety → Ensures proper type usage.
 *  - Flexibility → Works with various data types dynamically.
 */

//* ----------------------------------------
//* 1. Basic Generic Interfaces
//* ----------------------------------------

// ----------------------------------------
// Simple Generic Interface
// ----------------------------------------

interface Box<T> {
  value: T;
}

const stringBox: Box<string> = { value: 'hello' };
const numberBox: Box<number> = { value: 42 };

// ----------------------------------------
// Multiple Type Parameters
// ----------------------------------------

interface Pair<K, V> {
  key: K;
  value: V;
}

const nameAndAge: Pair<string, number> = {
  key: 'Alice',
  value: 30,
};

//* ----------------------------------------
//* 2. Generic Interface Methods
//* ----------------------------------------

// ----------------------------------------
// Interface with Generic Methods
// ----------------------------------------

interface Transformer<T, U> {
  transform: (input: T) => U;
}

const stringToNumber: Transformer<string, number> = {
  transform: (str) => str.length,
};

console.log(stringToNumber.transform('hello')); // 5

// ----------------------------------------
// Generic Method in Regular Interface
// ----------------------------------------

interface Logger {
  log<T>(message: T): void;
}

const consoleLogger: Logger = {
  log: (message) => console.log(message),
};

consoleLogger.log<string>('Error occurred');
consoleLogger.log<number>(404);

//* ----------------------------------------
//* 3. Constrained Generic Interfaces
//* ----------------------------------------

// ----------------------------------------
// Interface with Type Constraints
// ----------------------------------------

interface Lengthwise {
  length: number;
}

interface SizedCollection<T extends Lengthwise> {
  items: T[];
  getLength(): number;
}

const stringsCollection: SizedCollection<string> = {
  items: ['a', 'bb', 'ccc'],
  getLength() {
    return this.items.reduce((sum, str) => sum + str.length, 0);
  },
};

// ----------------------------------------
// Keyof Constraint in Interface
// ----------------------------------------

interface PropertyAccessor<T, K extends keyof T> {
  get(obj: T): T[K];
}

const nameAccessor: PropertyAccessor<{ name: string; age: number }, 'name'> = {
  get: (obj) => obj.name,
};

//* ----------------------------------------
//* 4. Default Generic Parameters
//* ----------------------------------------

// ----------------------------------------
// Interface with Default Type
// ----------------------------------------

interface PaginatedResponse<T = any> {
  data: T[];
  page: number;
  totalPages: number;
}

interface User {
  id: number;
  name: string;
}

// Uses default any type
const response1: PaginatedResponse = {
  data: [1, 2, 3],
  page: 1,
  totalPages: 5,
};

// Explicit type
const response2: PaginatedResponse<User> = {
  data: [{ id: 1, name: 'Alice' }],
  page: 1,
  totalPages: 1,
};

//* ----------------------------------------
//* 6. Real-World Examples
//* ----------------------------------------

// ----------------------------------------
// API Response Wrapper
// ----------------------------------------

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: Date;
}

function fetchUser(): ApiResponse<User> {
  return {
    success: true,
    data: { id: 1, name: 'Alice' },
    timestamp: new Date(),
  };
}

console.log(
  stringBox,
  numberBox,
  nameAndAge,
  stringsCollection,
  nameAccessor,
  response1,
  response2
);
