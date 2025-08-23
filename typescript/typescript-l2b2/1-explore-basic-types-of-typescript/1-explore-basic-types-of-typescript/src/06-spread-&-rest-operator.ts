export {};

/**
 * TypeScript fully supports JavaScript's spread (...) and rest operators while adding type safety. These operators are powerful tools for working with arrays and objects.
 *
 * Both use the three dots (...) syntax, but they serve different purposes.
 */

//* ----------------------------------------
//* 1. Spread Operator (...)
//* ----------------------------------------

// The spread operator is used to expand elements of an array or properties of an object. It is commonly used for 'copying', 'merging', and 'passing elements' to functions.

// ----------------------------------------
// Array Spread
// ----------------------------------------

const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5, 6]; // [1, 2, 3, 4, 5, 6]

// Merging Arrays
const nums1: number[] = [1, 2, 3];
const nums2: number[] = [4, 5, 6];
const combined: number[] = [...nums1, ...nums2]; // [1, 2, 3, 4, 5, 6]

// With tuple types
const tuple1: [number, string] = [1, 'one'];
const tuple2: [boolean, number] = [true, 2];
const mixed = [...tuple1, ...tuple2]; // [number, string, boolean, number]

// ----------------------------------------
// Object Spread
// ----------------------------------------

const user = { name: 'Alice', age: 30 };
const updatedUser = { ...user, age: 31, city: 'New York' };

// With interfaces
interface IPerson {
  name: string;
  age: number;
}

interface IEmployee extends IPerson {
  department: string;
}

const person: IPerson = { name: 'Bob', age: 25 };
const employee: IEmployee = { ...person, department: 'Engineering' };

// ----------------------------------------
// Function Call Spread
// ----------------------------------------

function sum(a: number, b: number, c: number): number {
  return a + b + c;
}

const nums = [1, 2, 3] as const; // TypeScript needs const assertion here
const result = sum(...nums); // 6

//* ----------------------------------------
//* 2. Rest Operator (...)
//* ----------------------------------------

// The rest operator allows you to represent an indefinite number of arguments as an array.

// ----------------------------------------
// Rest Parameters in Functions
// ----------------------------------------

// Typed rest parameters
function logName(...names: string[]): void {
  names.forEach((name) => console.log(name));
}

logName('Alice', 'Bob', 'Charlie');

// With mixed parameters
function createUser(id: number, ...details: [string, number, string?]): void {
  console.log(`User ${id}:`, details.join(' - '));
}

createUser(1, 'Alice', 30);
createUser(2, 'Bob', 25, 'Admin');

// ----------------------------------------
// Array Destructuring with Rest
// ----------------------------------------

const numbers2 = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers2; // rest is [3, 4, 5]

// With tuple types
const tuple: [string, number, boolean, number] = ['hello', 1, true, 42];
const [str, num, ...restTuple] = tuple; // restTuple is [boolean, number]

// ----------------------------------------
// Object Destructuring with Rest
// ----------------------------------------

const newUser = {
  name: 'Alice',
  age: 30,
  city: 'New York',
  country: 'USA',
};

const { name, age, ...address } = newUser;
// address = { city: "New York", country: "USA" }

// With interfaces
interface IFullUser {
  name: string;
  age: number;
  city: string;
  country: string;
}

const { name: userName, ...userInfo } = newUser as IFullUser;

//* ----------------------------------------
//* 3. Practical Examples
//* ----------------------------------------

// ----------------------------------------
// Merging Objects with Type Safety
// ----------------------------------------

interface IConfig {
  apiUrl: string;
  timeout?: number;
  headers?: Record<string, string>;
}

const defaultConfig: IConfig = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
};

const customConfig: Partial<IConfig> = {
  timeout: 10000,
  headers: { Authorization: 'Bearer token' },
};

const finalConfig: IConfig = { ...defaultConfig, ...customConfig };
console.log(finalConfig);

//* ----------------------------------------
//* Common Patterns
//* ----------------------------------------

// ----------------------------------------
// Copying Arrays/Objects Safely
// ----------------------------------------

const original = [1, 2, 3];
const copy = [...original]; // New array with same elements

const obj = { a: 1, b: 2 };
const objCopy = { ...obj }; // New object with same properties

// ----------------------------------------
// Overriding Defaults
// ----------------------------------------

interface IOptions {
  color?: string;
  width?: number;
  height?: number;
}

const defaultOptions: IOptions = {
  color: 'red',
  width: 100,
};

function createElement(options: IOptions) {
  const finalOptions = { ...defaultOptions, ...options };
  // Use finalOptions...
}

console.log(
  moreNumbers,
  combined,
  mixed,
  updatedUser,
  employee,
  result,
  first,
  second,
  rest,
  str,
  num,
  restTuple,
  address,
  userInfo,
  copy,
  objCopy
);
