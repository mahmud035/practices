export {};

/**
 * TypeScript provides union (|) and intersection (&) types to combine multiple types in different ways.
 
 * These are powerful features for modeling complex data structures.
 */

//* ----------------------------------------
//* 1. Union Types (|)
//* ----------------------------------------

// A union type allows a value to be one of several types.

// ----------------------------------------
// Basic Union Types
// ----------------------------------------

type ID = number | string;

function printId(id: ID) {
  console.log(`ID: ${id}`);
}

printId(101); // ✅ Valid (number)
printId('ABC123'); // ✅ Valid (string)
// printId(true);     // ❌ Error (boolean not allowed)

// ----------------------------------------
// Union of Literal Types
// ----------------------------------------

type Status = 'success' | 'error' | 'pending';

function handleStatus(status: Status) {
  if (status === 'success') console.log('Operation succeeded!');
  // TypeScript provides autocomplete for all possible values
}

handleStatus('pending');
handleStatus('success');

// ----------------------------------------
// Type Narrowing with Unions
// ----------------------------------------

// TypeScript can narrow the type within code blocks:

interface Circle {
  kind: 'circle';
  radius: number;
}

interface Square {
  kind: 'square';
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2; // TypeScript knows shape is Circle
    case 'square':
      return shape.sideLength ** 2; // TypeScript knows shape is Square
  }
}

getArea({ kind: 'circle', radius: 3 });
getArea({ kind: 'square', sideLength: 5 });

//* ----------------------------------------
//* 2. Intersection Types (&)
//* ----------------------------------------

// An intersection type combines multiple types into one (must satisfy all types).

// ----------------------------------------
// Object Combination
// ----------------------------------------

interface Person {
  name: string;
  age: number;
}

interface Employee {
  id: number;
  department: string;
}

type EmployeeRecord = Person & Employee;

const emp: EmployeeRecord = {
  name: 'Alice',
  age: 30,
  id: 101,
  department: 'Engineering',
};

// ----------------------------------------
// Function Intersection
// ----------------------------------------

type Loggable = {
  log: (msg: string) => void;
};

type Serializable = {
  serialize: () => string;
};

type Logger = Loggable & Serializable;

const logger: Logger = {
  log: (msg) => console.log(msg),
  serialize: () => 'Serialized data',
};

//* ----------------------------------------
//* 4. Practical Examples
//* ----------------------------------------

// ----------------------------------------
// API Response Handling
// ----------------------------------------

interface SuccessResponse {
  status: 'success';
  data: { id: number; name: string };
}

interface ErrorResponse {
  status: 'error';
  message: string;
}

type ApiResponse = SuccessResponse | ErrorResponse;

function handleResponse(response: ApiResponse) {
  if (response.status === 'success') {
    console.log(response.data.name); // ✅ Type-safe
  } else {
    console.error(response.message); // ✅ Type-safe
  }
}

handleResponse({
  status: 'success',
  data: { id: 101, name: 'Alice' },
});

// ----------------------------------------
// React Props with Union Types
// ----------------------------------------

interface IButtonProps {
  size: 'small' | 'medium' | 'large';
  variant: 'primary' | 'secondary' | 'outline';
  onClick: () => void;
}

export default function Button({ size, variant, onClick }: IButtonProps) {
  // Component implementation
}

// ----------------------------------------
// Combining Utility Types
// ----------------------------------------

type PartialUser = Partial<{
  name: string;
  email: string;
}>;

type RequiredId = {
  id: number;
};

type UserInput = PartialUser & RequiredId;

const user: UserInput = {
  id: 1, // Required
  name: 'Alice', // Optional
  // email is optional
};

//* ----------------------------------------
//* 5. Advanced Techniques
//* ----------------------------------------

// ----------------------------------------
// Discriminated Unions
// ----------------------------------------

// A pattern where each type in a union has a common property (discriminant):

type Event =
  | { type: 'click'; x: number; y: number }
  | { type: 'keypress'; key: string }
  | { type: 'focus'; element: HTMLElement };

function handleEvent(event: Event) {
  switch (event.type) {
    case 'click':
      console.log(event.x, event.y); // ✅ Type-safe
      break;
    case 'keypress':
      console.log(event.key); // ✅ Type-safe
      break;
  }
}

handleEvent({ type: 'click', x: 5, y: 10 });

console.log(emp, logger, user);
