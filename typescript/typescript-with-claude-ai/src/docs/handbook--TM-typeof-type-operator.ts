//* The Basics: Extracting Types from Values

// The `typeof` operator in "type context" extracts the type of a value:

export const user = {
  _id: '123',
  name: 'mahmud',
  age: 25,
  email: 'mahmud@example.com',
};

// Extract the type from the value
export type User = typeof user;
// Type: { name: string; age: number; email: string }

// Now you can use this type
export function printUser(u: User) {
  console.log(u.name, u.email, u.age);
}

// NOTE: Why this matters: You define the "value once", and TypeScript "infers the type". No duplication, single source of truth.

//* `typeof` vs Runtime `typeof`

// "Critical distinction": TypeScript has "two different `typeof` operators":

const value = 'hello';

// 1. Runtime typeof (JavaScript)
console.log(typeof value); // "string"

// 2. Type-level typeof (TypeScript)
export type ValueType = typeof value; // string

// They're different!
if (typeof value === 'string') {
  // Runtime check
  // JavaScript code
}

export function processValue(v: typeof value) {
  console.log(v);
  // Type-level
  // TypeScript type
}

//* Extracting Types from Constants
// This is "extremely useful" for configuration objects:

// Define the config value
export const apiConfig = {
  baseURL: 'https://api.example.com',
  timeout: 5000,
  retryAttempts: 3,
  headers: {
    'Content-Type': 'application/json',
  },
} as const; // 'as const' makes it deeply readonly and literal

// Extract the type
export type ApiConfig = typeof apiConfig;
// Type: {
//   readonly baseURL: "https://api.example.com";
//   readonly timeout: 5000;
//   readonly retryAttempts: 3;
//   readonly headers: { readonly "Content-Type": "application/json" };
// }

// Use the type
export function createClient(config: ApiConfig) {
  console.log(config);
  // ...
}

//* Real-world MERN pattern (environment config):
// src/config/index.ts

export const config = {
  port: parseInt(process.env.PORT || '5000'),
  mongoUri: process.env.MONGO_URI!,
  jwtSecret: process.env.JWT_SECRET!,
  nodeEnv: process.env.NODE_ENV || 'development',
  cors: {
    origin: process.env.CORS_ORIGIN || '*',
    credentials: true,
  },
} as const; // 'as const' makes it deeply readonly and literal

// Extract type
export type Config = typeof config;

// Use elsewhere
export function setupServer(cfg: Config) {
  console.log(`Starting server on port ${cfg.port}`);
}

//* Extracting Function Types
// Extract types from "function signatures":

export function createJob(title: string, company: string, salary: number) {
  return {
    _id: Math.random().toString(),
    title,
    company,
    salary,
    createdAt: new Date(),
  };
}

// Extract the function type
export type CreateJobFn = typeof createJob;
// Type: (title: string, company: string, salary: number) => { _id: string; title: string; ... }

// Extract the return type
export type JobFromFactory = ReturnType<typeof createJob>;
// Type: { _id: string; title: string; company: string; salary: number; createdAt: Date }

// Extract parameter types
export type CreateJobParams = Parameters<typeof createJob>;
// Type: [title: string, company: string, salary: number]

//* Extracting Types from Arrays
//* Real-world pattern (route permissions):

// constants/roles.ts
export const USER_ROLES = ['user', 'admin', 'moderator'] as const;

// Extract union type
export type UserRole = (typeof USER_ROLES)[number];
// Type: "user" | "admin" | "moderator"

// Use in interface
interface IUser {
  _id: string;
  name: string;
  email: string;
  role: UserRole;
}

// Type-safe role check
function hasRole(user: IUser, role: UserRole): boolean {
  return user.role === role;
}

const user2: IUser = {
  _id: 'u2',
  name: 'Test User',
  email: 'test@example.com',
  role: 'admin',
};

// ✅ TypeScript knows these are valid
hasRole(user2, 'user');
hasRole(user2, 'admin');
hasRole(user2, 'moderator');

// ❌ TypeScript prevents invalid roles
// hasRole(user2, 'superadmin'); // Error: "superadmin" is not assignable to UserRole

// NOTE: Honestly though: In modern TypeScript, "union types are better than enums":

// ✅ Preferred: Simple union type
export const JOB_STATUS = {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED',
  ARCHIVED: 'ARCHIVED',
} as const;

export type JobStatus = (typeof JOB_STATUS)[keyof typeof JOB_STATUS];
// Type: "DRAFT" | "PUBLISHED" | "ARCHIVED"

//* Combining typeof with Other Type Operators

//* `typeof` + `keyof`

export const config2 = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
  retryAttempts: 3,
};

// Extract keys
export type ConfigKeys = keyof typeof config2;
// Type: "apiUrl" | "timeout" | "retryAttempts"

// Extract specific property type
export type ApiUrl = (typeof config2)['apiUrl'];
// Type: string

//* `typeof` + `ReturnType`

export function fetchUser() {
  return {
    id: '123',
    name: 'Mahmud',
    email: 'mahmud@example.com',
  };
}

// Extract return type
export type User2 = ReturnType<typeof fetchUser>;
// Type: { id: string; name: string; email: string }

//* `typeof` + `Parameters`

export function createJob2(title: string, company: string, salary: number) {
  console.log(title, company, salary);
  // ...
}

// Extract parameter types as tuple
export type CreateJobParams2 = Parameters<typeof createJob2>;
// Type: [title: string, company: string, salary: number]

// Extract individual params
export type TitleParam = CreateJobParams2[0]; // string
export type CompanyParam = CreateJobParams2[1]; // string
export type SalaryParam = CreateJobParams2[2]; // number
