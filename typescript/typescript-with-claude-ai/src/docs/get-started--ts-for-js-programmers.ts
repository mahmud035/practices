import axios from 'axios';
import z from 'zod';

//* The Core Concept: Types by Inference

// TypeScript infers types automatically

// TypeScript knows this is a string (when using `let`)
const username = 'mahmud035';

// TypeScript knows this is a number (when using `let`)
const age = 25;

// TypeScript knows this returns a string
function getGreeting(name: string) {
  return `Hello, ${name}`; // inferred as string
}

console.log(username, age, getGreeting(username));

//* Defining Types: Interfaces vs Types

// This is where TypeScript shines for MERN development. You'll use this constantly for API responses, props, and MongoDB documents.

// Interfaces (Use for objects/shapes)

// MongoDB User Document
interface IUser {
  _id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  createdAt: Date;
}

// React Component Props
export interface JobCardProps {
  title: string;
  company: string;
  salary?: number; // optional
  onApply: (jobId: string) => void;
}

// API Response
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

// Type Aliases (More flexible)

// Union types for status
export type JobStatus = 'open' | 'closed' | 'pending';

// Function types (function signature)
export type AsyncHandler = (req: Request, res: Response) => Promise<void>;

// Complex combinations
export type UserRole = 'admin' | 'user' | 'moderator';
export type AuthUser = IUser & { token: string };

// NOTE: Practical rule: Use interfaces for object shapes (props, API responses, DB models). Use type aliases for unions, primitives, and complex compositions.

//* Composing Types: Unions and Generics

// Unions (One of several types)
// This is "huge" for handling different states in React:

// Loading states in TanStack Query
export type QueryStatus = 'idle' | 'loading' | 'success' | 'error';

// API response that could be error or success (Discriminated union)
export type ApiResult<T> =
  | { success: true; data: T }
  | { success: false; error: string };

// React component accepting multiple types
export interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger';
  size: 'sm' | 'md' | 'lg';
}

// Generics (Reusable type logic)
// You'll see this "everywhere" in your tech stack:

// Axios response typing
export const fetchJobs = async (): Promise<ApiResponse<IJob[]>> => {
  const { data } = await axios.get<ApiResponse<IJob[]>>('/api/jobs');
  return data;
};

// TanStack Query with generics
// const { data, isLoading } = useQuery<IJob[], Error>({
//   queryKey: ['jobs'],
//   queryFn: fetchJobs,
// });

// Reusable pagination response
export interface PaginatedResponse<T> {
  data: T[];
  page: number;
  totalPages: number;
  total: number;
}

// NOTE: Why this matters: Generics let you write "one piece of logic" that works with multiple types. Your ApiResponse<T> works for jobs, users, applications, etc.

//* Structural Type System (Duck Typing)

// Here's something "critical": TypeScript doesn't care about names, it cares about "shape".

interface Point {
  x: number;
  y: number;
}

interface Coordinate {
  x: number;
  y: number;
}

// This works! TypeScript sees they have same shape
const point: Point = { x: 10, y: 10 };
export const coordinate: Coordinate = point; // ✅ No error

// Real-world impact: When working with MongoDB + Mongoose, your document interfaces can match multiple types as long as the structure fits:

interface MongoDoc {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

interface IJob extends MongoDoc {
  title: string;
  company: string;
}

interface IUser extends MongoDoc {
  name: string;
  email: string;
}

// Generic function works for both
export function getDocumentId<T extends MongoDoc>(doc: T): string {
  return doc._id; // ✅ Works for IJob, IUser, anything with _id
}

//* Practical MERN Stack Patterns You'll Use Daily

// 1. Express Route Handlers

// Typed route handler
// export const getJobs = async (req: Request, res: Response): Promise<void> => {
//   const jobs = await Job.find();
//   res.json({ success: true, data: jobs });
// };

// 2. React Component Props (see -> JobList.tsx)
// 3. Axios with Typed Responses (see -> api/jobs.ts)

// 4. Zod + TypeScript Integration
export const createJobSchema = z.object({
  title: z.string().min(5),
  company: z.string().min(10),
  salary: z.number().positive(),
});

// Infer TypeScript type from Zod schema
export type CreateJobInput = z.infer<typeof createJobSchema>;

// Now you have both validation AND types from one source
