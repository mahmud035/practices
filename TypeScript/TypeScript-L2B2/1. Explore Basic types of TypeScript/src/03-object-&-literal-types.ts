export {};

//* ----------------------------------------
//* 1. Object Types
//* ----------------------------------------

// TypeScript provides several ways to define the shape of objects:

// ----------------------------------------
// Explicit Object Type Annotation (NOT Recommended)
// ----------------------------------------

// Defining an object type explicitly
const user: {
  id: number;
  name: string;
  email: string;
  age?: number; // Optional property
} = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  // age is optional so we can omit it
};

// ----------------------------------------
// ✅ Interface Approach (Recommended)
// ----------------------------------------

interface IUser {
  id: number;
  name: string;
  email: string;
  age?: number; // Optional property
}

const currentUser: IUser = {
  id: 2,
  name: 'Jane Smith',
  email: 'jane@example.com',
  age: 30,
};

// ----------------------------------------
// Type Alias Approach
// ----------------------------------------

type TProduct = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};

const laptop: TProduct = {
  id: 101,
  name: 'MacBook Pro',
  price: 999,
  inStock: true,
};

//* ----------------------------------------
//* 2. Optional Properties
//* ----------------------------------------

// Mark properties as optional with `?:`

interface IConfig {
  apiUrl: string;
  timeout?: number; // Optional
  retry?: boolean; // Optional
}

const config1: IConfig = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
};

const config2: IConfig = {
  apiUrl: 'https://api.example.com', // timeout and retry are optional
};

// ----------------------------------------
// Working with Optional Properties
// ----------------------------------------

function printConfig(config: IConfig) {
  console.log(`API URL: ${config.apiUrl}`);

  // Check if optional properties exist
  if (config.timeout) console.log(`Timeout: ${config.timeout}`);

  // Using optional chaining
  console.log(`Retry enabled: ${config?.retry ?? 'not specified'}`);
}

printConfig(config1);
printConfig(config2);

//* ----------------------------------------
//* 3. Literal Types (Fixed value types)
//* ----------------------------------------

// Literal types allow you to specify exact values that are allowed:

// ----------------------------------------
// String Literal Types
// ----------------------------------------

type Direction = 'North' | 'South' | 'East' | 'West';

let heading: Direction = 'North'; // OK
// heading = 'Up'; // Error: Type '"Up"' is not assignable to type 'Direction'.

// ----------------------------------------
// Numeric Literal Types
// ----------------------------------------

type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice(): DiceValue {
  return (Math.floor(Math.random() * 6) + 1) as DiceValue;
}

rollDice();

// ----------------------------------------
// Boolean Literal Types
// ----------------------------------------

type Truthy = true;

let isVerified: Truthy = true;
// isVerified = false; // Error: Type 'false' is not assignable to type 'true'

//* ----------------------------------------
//* Combining Object, Optional, and Literal Types
//* ----------------------------------------

// Here's a practical example combining all these concepts:

type PaymentMethod = 'credit' | 'debit' | 'paypal' | 'crypto';

interface ITransaction {
  id: string;
  amount: number;
  currency: 'USD' | 'EUR' | 'GBP'; // String literal
  method: PaymentMethod;
  fee?: number; // Optional
  completed: boolean;
}

function processPayment(tx: ITransaction): void {
  console.log(`Processing ${tx.amount} ${tx.currency} via ${tx.method}`);

  if (tx.fee) console.log(`Fee: ${tx.fee} ${tx.currency}`);

  // TypeScript knows tx.completed is boolean
  console.log(`Status: ${tx.completed ? 'Completed' : 'Pending'}`);
}

const myTx: ITransaction = {
  id: 'tx_123',
  amount: 99.99,
  currency: 'USD',
  method: 'credit',
  completed: true,
};

processPayment(myTx);

console.log(user, currentUser, laptop, isVerified, heading);
