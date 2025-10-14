//* Primitives: The Building Blocks
// These are your bread and butter types:

// string
const jobTitle: string = 'Senior Developer';
const company: string = 'Tech Corp';

// number (integers and floats, no distinction)
const salary: number = 85000;
const rating: number = 4.5;

// boolean
const isActive: boolean = true;
const isRemote: boolean = false;

console.log(jobTitle, company, salary, rating, isActive, isRemote);

// Real-world MERN usage:

// MongoDB document
export interface IJob {
  _id: string; // string
  title: string; // string
  company: string; // string
  salary: number; // number
  isRemote: boolean; // boolean
  createdAt: Date; // Date (built on primitives)
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  avatar?: string; // Optional
  bio?: string; // Optional
}
//* Arrays: Two Syntaxes, Same Result

// Style 1: Type[]
const jobIds: string[] = ['abc123', 'def456'];
const salaries: number[] = [75000, 85000, 95000];

// Style 2: Array<Type>
const jobIds2: Array<string> = ['abc123', 'def456'];
const salaries2: Array<number> = [75000, 85000, 95000];

// Which to use?

// - Use `Type[]` – It's cleaner and more common
// - Use `Array<Type>` for complex generics

console.log(jobIds, jobIds2, salaries, salaries2);

//* Functions: Parameters and Return Types

// Always Type Parameters

// ❌ Bad - implicit any
// function badGreet(name) {
//   return `Hello, ${name}`;
// }

// ✅ Good - explicit parameter types
export function greet(name: string): string {
  return `Hello, ${name}`;
}

// ✅ Return type often inferred (but explicit is clearer)
export function calculateSalary(base: number, bonus: number) {
  return base + bonus; // Inferred as number
}

//* Anonymous Functions: Context Matters

// TypeScript infers types from context:

const jobs: IJob[] = [
  {
    _id: '1',
    title: 'Dev',
    company: 'A',
    salary: 80000,
    isRemote: true,
    createdAt: new Date(),
  },
  {
    _id: '2',
    title: 'Designer',
    company: 'B',
    salary: 70000,
    isRemote: false,
    createdAt: new Date(),
  },
];

// TypeScript knows 'job' is IJob from context
jobs.forEach((job) => {
  console.log(job.title); // ✅ TypeScript knows about .title
});

// Same with map
export const titles = jobs.map((job) => job.title); // string[]

//* Object Types: The Heart of TypeScript

export function printJob(job: IJob) {
  console.log(`${job.title} at ${job.company}`);
}

// Valid - optional fields can be omitted
export const user: IUser = {
  _id: '123',
  name: 'Mahmud',
  email: 'mahmud@example.com',
  // No avatar or bio
};

// Accessing optional properties
export function displayUser(user: IUser) {
  console.log(user.name);

  // ✅ Safe optional chaining
  console.log(user.avatar?.toUpperCase());

  // ✅ Or with check
  if (user.bio) {
    console.log(user.bio);
  }
}

//* Union Types: "This OR That"
// Union types are critical for handling multiple possibilities:

// API response can be success or error
export type ApiResponse<T> =
  | { success: true; data: T }
  | { success: false; error: string };

// User ID can be string or number (MongoDB vs SQL)
export type UserId = string | number;

// Status can be one of these strings
export type JobStatus = 'draft' | 'published' | 'archived';

//* Literal Types: Exact Values
// Literals let you specify exact values:

// Only these exact strings
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

// Only these numbers
export type StatusCode = 200 | 201 | 400 | 401 | 404 | 500;

// Only this boolean
export const isProduction = true;

// Real-world patterns:

// API methods
export interface ApiConfig {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
  data?: unknown;
}

// Component variants
export interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger';
  size: 'sm' | 'md' | 'lg';
}

// Database operations
export type DbOperation = 'create' | 'read' | 'update' | 'delete';

// Combining literals with unions:

// Exact job statuses
type JobStatus2 = 'draft' | 'published' | 'archived' | 'deleted';

// React Query mutation states
export type MutationStatus = 'idle' | 'loading' | 'success' | 'error';

export interface IJob2 {
  _id: string;
  title: string;
  status: JobStatus2; // Can only be one of 4 values
}
