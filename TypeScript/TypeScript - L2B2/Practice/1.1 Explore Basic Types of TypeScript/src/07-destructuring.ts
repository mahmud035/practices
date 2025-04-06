export {};

/**
 * Destructuring in TypeScript allows you to 'unpack values' from arrays and objects in a clean and readable way.
 */

//* ----------------------------------------
//* 1. Array Destructuring
//* ----------------------------------------

// Extract values from arrays into variables with type annotations.

// ----------------------------------------
// Basic Array Destructuring
// ----------------------------------------

const numbers: number[] = [10, 20, 30];

const [first, second, third] = numbers;

console.log(first); // Output: 10
console.log(second); // Output: 20
console.log(third); // Output: 30

// ----------------------------------------
// Skipping Elements & Rest Operator
// ----------------------------------------

// You can skip elements using commas.

const colors: string[] = ['Red', 'Green', 'Blue', 'Yellow'];

const [primary, , secondary] = colors;

console.log(primary); // Output: Red
console.log(secondary); // Output: Blue (Green is skipped)

// Use rest operator to capture remaining elements

const fruits: string[] = ['Apple', 'Banana', 'Cherry', 'Mango'];

const [firstFruit, ...restFruits] = fruits;

console.log(firstFruit); // Output: Apple
console.log(restFruits); // Output: ["Banana", "Cherry", "Mango"]

// ----------------------------------------
// Destructuring with Tuples
// ----------------------------------------

type PersonTuple = [string, number, boolean];

const personData: PersonTuple = ['Alice', 30, true];

const [name, , isActive] = personData;
console.log(name.toUpperCase()); // "ALICE"

//* ----------------------------------------
//* 2. Object Destructuring
//* ----------------------------------------

// Extract properties from objects while maintaining type safety.

// ----------------------------------------
// Basic Object Destructuring
// ----------------------------------------

interface IUser {
  id: number;
  name: string;
  email: string;
  age?: number;
}

const user: IUser = {
  id: 1,
  name: 'John',
  email: 'john@example.com',
};

const { id, name: userName, email } = user;
console.log(email);

// ----------------------------------------
// Default Values for Optional Properties
// ----------------------------------------

const { age = 25 } = user; // Default if `age` is missing
console.log(age); // 25 (since `age` was optional)

// ----------------------------------------
// Rest Operator in Object Destructuring
// ----------------------------------------

const { id: userId, ...rest } = user;
console.log(rest); // { name: "John", email: "john@example.com" }
// TypeScript infers `rest` as `Omit<IUser, "id">`

//* ----------------------------------------
//* 3. Function Parameter Destructuring
//* ----------------------------------------

// Destructure objects or arrays directly in function parameters.

// ----------------------------------------
// Destructuring Object Parameters
// ----------------------------------------

function printUser({ name, email }: IUser) {
  console.log(`${name} (${email})`);
}

printUser(user); // "John (john@example.com)"

// ----------------------------------------
// Destructuring with Default Values
// ----------------------------------------

function createPost({
  title,
  content = 'No content',
}: {
  title: string;
  content?: string;
}) {
  console.log(`Title: ${title}, Content: ${content}`);
}

createPost({ title: 'Hello' }); // "Title: Hello, Content: No content"

// ----------------------------------------
// Destructuring Arrays in Parameters
// ----------------------------------------

function sum([a, b, c]: [number, number, number?]) {
  return a + b + (c ?? 0);
}

console.log(sum([1, 2])); // 3
console.log(sum([1, 2, 3])); // 6

//* ----------------------------------------
//* 4. Nested Destructuring
//* ----------------------------------------

// Extract deeply nested properties while maintaining type safety.

// ----------------------------------------
// Nested Object Destructuring
// ----------------------------------------

interface ICompany {
  name: string;
  address: {
    city: string;
    country: string;
  };
}

const company: ICompany = {
  name: 'Tech Corp',
  address: {
    city: 'San Francisco',
    country: 'USA',
  },
};

const {
  name: companyName,
  address: { city, country },
} = company;

console.log(`${companyName} is located in ${city}, ${country}`);

// ----------------------------------------
// Nested Array Destructuring
// ----------------------------------------

const matrix: number[][] = [
  [1, 2],
  [3, 4],
];

const [[a, b], [c, d]] = matrix;
console.log(a, b, c, d); // 1, 2, 3, 4

//* ----------------------------------------
//* 5. TypeScript-Specific Features
//* ----------------------------------------

// ----------------------------------------
// Destructuring with Generics
// ----------------------------------------

function getFirstAndLast<T>(arr: T[]): [T, T] {
  return [arr[0], arr[arr.length - 1]];
}

const [firstEl, lastEl] = getFirstAndLast([1, 2, 3, 4]);
console.log(firstEl, lastEl); // 1, 4 (TypeScript infers `number`)
