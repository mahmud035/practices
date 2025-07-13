export {};

/**
 * Type aliases allow you to 'create custom names for existing types', making your code more readable and maintainable.
 
 * They can represent 'primitive types', 'object shapes', 'union types', 'tuples', 'and more'.

 * A type alias is created using the `type` keyword.

 * When to Use `type`?
    For union/intersection types.
    For mapped/conditional types.
    When you need a shortcut for complex types.

 * When to Use `interface`?
    For object shapes (better tooling support).
    When you need declaration merging.
    For class implementations.
 */

//* ----------------------------------------
//* 1. Basic Type Aliases
//* ----------------------------------------

// ----------------------------------------
// Primitive Type Aliases
// ----------------------------------------

type UserID = number | string;
type Username = string;
type IsActive = boolean;

const id: UserID = 1;
const name: Username = 'Alice';
const active: IsActive = true;

// ----------------------------------------
// Object Type Aliases
// ----------------------------------------

type Point = {
  x: number;
  y: number;
};

const p1: Point = { x: 10, y: 20 };

//* ----------------------------------------
//* 2. Union & Intersection Types
//* ----------------------------------------

// ----------------------------------------
// Union Types (|)
// ----------------------------------------

type Status = 'success' | 'error' | 'pending';
type ID = number | string;

let currentStatus: Status = 'success';
let userId: ID = 123; // Can also be "abc"

// ----------------------------------------
// Intersection Types (&)
// ----------------------------------------

type Person = {
  name: string;
  age: number;
};

type Employee = {
  id: number;
  department: string;
};

type EmployeeRecord = Person & Employee;

const emp: EmployeeRecord = {
  name: 'Alice',
  age: 30,
  id: 1,
  department: 'HR',
};

//* ----------------------------------------
//* 3. Tuple & Array Type Aliases
//* ----------------------------------------

// ----------------------------------------
// Tuple Types
// ----------------------------------------

type Coordinates = [number, number];
const location: Coordinates = [10, 20];

// ----------------------------------------
// Array Types
// ----------------------------------------

type NumbersArray = number[];
const nums: NumbersArray = [1, 2, 3];

//* ----------------------------------------
//* 4. Function Type Aliases
//* ----------------------------------------

type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (x, y) => x + y;
const multiply: MathOperation = (x, y) => x * y;

add(2, 3);
multiply(2, 3);

//* ----------------------------------------
//* 5. Generic Type Aliases
//* ----------------------------------------

type Pair<T, U> = {
  first: T;
  second: U;
};

const pair1: Pair<number, string> = { first: 1, second: 'one' };
const pair2: Pair<boolean, number> = { first: true, second: 2 };

//* ----------------------------------------
//* 6. Mapped & Conditional Types (Advanced)
//* ----------------------------------------

// ----------------------------------------
// Mapped Types
// ----------------------------------------

type Optional<T> = {
  [k in keyof T]?: T[k];
};

type TPerson = {
  name: string;
  age: number;
};

type OptionalPerson = Optional<TPerson>;

// ----------------------------------------
// Conditional Types
// ----------------------------------------

type CheckNumber<T> = T extends number ? 'Yes' : 'No';

type A = CheckNumber<10>; // "Yes"
type B = CheckNumber<'hello'>; // "No"

//* ----------------------------------------
//* 8. Practical Examples
//* ----------------------------------------

// ----------------------------------------
// API Response Type
// ----------------------------------------

type ApiResponse<T> = {
  data: T;
  status: 'success' | 'error';
  code: number;
};

type User = {
  id: number;
  name: string;
};

const response: ApiResponse<User> = {
  data: { id: 1, name: 'Alice' },
  status: 'success',
  code: 200,
};

// ----------------------------------------
// Redux / Reducer Action Types
// ----------------------------------------

type Todo = {
  id: number;
  text: string;
};

// Discriminated Unions
type Action =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'DELETE_TODO'; payload: number }
  | { type: 'TOGGLE_TODO'; payload: number };

function reducer(state: Todo[], action: Action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload }];
    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.payload);
    // ...
  }
}

console.log(
  id,
  name,
  active,
  p1,
  currentStatus,
  userId,
  emp,
  location,
  nums,
  pair1,
  pair2,
  response
);
