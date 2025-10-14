import axios from 'axios';
import 'express';
import type { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { model, Schema, type Model } from 'mongoose';
import type { IUser } from './handbook--everyday-types';

interface AuthUser {
  role: string;
  [key: string]: unknown;
}

declare module 'express' {
  interface Request {
    user?: AuthUser;
  }
}

//* Function Type Expressions: Typing Function Variables
// Functions are first-class citizens in JavaScript. TypeScript lets you type them precisely:

// Function type expression
type GreetFunction = (name: string) => string;

export const greet: GreetFunction = (name) => {
  return `Hello, ${name}`;
};

// More complex example
type AsyncHandler = (req: Request, res: Response) => Promise<void>;

export const getJobs: AsyncHandler = async (_, res) => {
  const jobs = await Job.find();
  res.json({ success: true, data: jobs });
};

// Real-world Express middleware pattern:

// Middleware type
type Middleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => void | Promise<void>;

// Auth middleware
export const requireAuth: Middleware = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    if (
      typeof decoded === 'object' &&
      decoded !== null &&
      'role' in decoded &&
      typeof (decoded as { role?: unknown }).role === 'string'
    ) {
      req.user = decoded as AuthUser;
    }
    next();
  } catch (error) {
    res.status(401).json({ error: `Invalid token ${error}` });
  }
};

//* Construct Signatures: Typing Constructors

// For things you call with `new`:
type Constructor<T> = {
  new (s: string): T;
};

function createInstance<T>(ctor: Constructor<T>, value: string): T {
  return new ctor(value);
}

class UserCl {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const user = createInstance(UserCl, 'Mahmud');
console.log(user);

//* In MERN, you'll mainly see this with Mongoose models:

interface IJob {
  title: string;
  company: string;
  salary: number;
}

// Mongoose model is both a constructor and has static methods
interface IJobModel extends Model<IJob> {
  findByCompany(company: string): Promise<IJob[]>;
}

const jobSchema = new Schema<IJob>({
  title: String,
  company: String,
  salary: Number,
});

// Static method
jobSchema.statics.findByCompany = function (company: string) {
  return this.find({ company });
};

const Job = model<IJob, IJobModel>('Job', jobSchema);

// Usage
const jobs = await Job.findByCompany('Tech Corp'); // IJob[]
console.log(jobs);

//* Generic Functions: Reusable Type Logic
// Generics are critical for writing reusable code:

// Without generics - limited
export function getFirstString(arr: string[]): string | undefined {
  return arr[0];
}

export function getFirstNumber(arr: number[]): number | undefined {
  return arr[0];
}

// With generics - works for any type
export function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}

// TypeScript infers the type
export const firstJob = getFirst(jobs); // IJob | undefined
export const firstId = getFirst(['a', 'b', 'c', 'd']); // string | undefined

//* Real-world MERN patterns:

// 1. Generic API Response Type

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

// Works for any data type
export const fetchData = async <T>(url: string): Promise<ApiResponse<T>> => {
  const res = await axios.get<ApiResponse<T>>(url);
  return res.data;
};

// Usage
export const jobsResponse = await fetchData<IJob[]>('/api/jobs');
// jobsResponse.data is IJob[]

export const userResponse = await fetchData<IUser>('/api/user');
// userResponse.data is IUser

// 2. Generic React Hook (see -> useFetch hook)
// 3. Generic Pagination Helper
interface PaginatedResponse<T> {
  data: T[];
  page: number;
  totalPages: number;
  total: number;
}

async function paginate<T>(
  model: Model<T>,
  page: number = 1,
  limit: number = 10
): Promise<PaginatedResponse<T>> {
  const skip = (page - 1) * limit;

  const [data, total] = await Promise.all([
    model.find().skip(skip).limit(limit),
    model.countDocuments(),
  ]);

  return {
    data,
    page,
    totalPages: Math.ceil(total / limit),
    total,
  };
}

// Usage
const jobsPage = await paginate(Job, 1, 10); // jobsPage.data is IJob[]
console.log(jobsPage);

//* Constraints: Limiting Generic Types
// Sometimes you need generics to have certain properties:

// Constraints T to have an id property
function getById<T extends { id: string }>(
  items: T[],
  id: string
): T | undefined {
  return items.find((item) => item.id === id);
}

interface User {
  id: string;
  name: string;
}

interface Job {
  id: string;
  title: string;
}

const users2: User[] = [{ id: '1', name: 'Mahmud' }];
const jobs2: Job[] = [{ id: '1', title: 'Developer' }];

const user2 = getById(users2, '1'); // User | undefined
const job2 = getById(jobs2, '1'); // Job | undefined
console.log(user2, job2);

//* Real-world MongoDB pattern:

// All MongoDB documents have _id
interface MongoDocument {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

// Generic function that works with any MongoDB document
export function formatDocument<T extends MongoDocument>(doc: T) {
  return {
    ...doc,
    id: doc._id, // We know _id exists
    createdAt: doc.createdAt.toISOString(),
    updatedAt: doc.updatedAt.toISOString(),
  };
}

// Usage with any model
// const formattedJob = formatDocument(job); // job must have _id
// const formattedUser = formatDocument(user); // user must have _id

// Guidelines for Writing Good Generic Functions

// 1. Push Type Parameters Down

// ❌ Bad - overly generic
export function firstElement1<T>(arr: T[]) {
  return arr[0]; // T | undefined
}

// ✅ Good - more specific return type
export function firstElement2<T>(arr: T[]): T | undefined {
  return arr[0];
}

// 2. Use Fewer Type Parameters

// ❌ Bad - unnecessary complexity
export function filter1<T, U extends T>(
  arr: T[],
  fn: (item: T) => item is U
): U[] {
  return arr.filter(fn) as U[];
}

// ✅ Good - simpler
export function filter2<T>(arr: T[], fn: (item: T) => boolean): T[] {
  return arr.filter(fn);
}

// 3. Type Parameters Should Appear Twice

// ❌ Bad - T only appears in return, should just be explicit
export function greet2<T extends string>(): T {
  return 'hello' as T;
}

// ✅ Good - T appears in both parameter and return
export function identity<T>(value: T): T {
  return value;
}

//* Optional Parameters

// Optional parameter
function greet3(name?: string) {
  if (name) {
    return `Hello, ${name}`;
  }
  return 'Hello, stranger';
}

greet3(); // "Hello, stranger"
greet3('Mahmud'); // "Hello, Mahmud"

// With default value (better)
function greet4(name: string = 'stranger') {
  return `Hello, ${name}`;
}

greet4(); // "Hello, stranger"

//* Real-world Express/MongoDB pattern:

export const getJobs2 = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const sort = req.query.sort as string | undefined;
  const skip = (page - 1) * limit;

  const query = Job.find();

  // Optional sorting
  if (sort) query.sort(sort);

  const jobs = await query.skip(skip).limit(limit);

  res.json({ success: true, data: jobs });
};

//* Function Overloads: Multiple Call Signatures
// Overloads let you define "different ways to call" the same function:

// Overload signatures
function makeDate(timestamp: number): Date;
function makeDate(year: number, month: number, day: number): Date;

// Implementation signature (not callable directly)
function makeDate(yearOrTimestamp: number, month?: number, day?: number): Date {
  if (month !== undefined && day !== undefined) {
    return new Date(yearOrTimestamp, month, day);
  }
  return new Date(yearOrTimestamp);
}

// Usage
const date1 = makeDate(1234567890); // ✅ Overload 1
const date2 = makeDate(2024, 0, 1); // ✅ Overload 2
// const date3 = makeDate(2024, 0); // ❌ Error - no matching overload

console.log(date1, date2);

// ⚠️ Warning: Overloads can be complex. Often, separate functions are clearer:

// Instead of overloads, sometimes clearer to split
export async function getJobById(id: string): Promise<IJob | null> {
  return Job.findById(id);
}

export async function getJobByQuery(
  query: Partial<IJob>
): Promise<IJob | null> {
  return Job.findOne(query);
}

//* Real-world Mongoose schema methods:

interface IJob2 {
  title: string;
  salary: number;
  isHighPaying(this: IJob2): boolean;
}

const jobSchema2 = new Schema<IJob2>({
  title: String,
  salary: Number,
});

// Instance method with typed 'this'
jobSchema2.methods.isHighPaying = function (this: IJob2): boolean {
  return this.salary > 100000;
};

const Job2 = model<IJob2>('Job2', jobSchema2);

// Usage
const job3 = await Job2.findById('123');
if (job3?.isHighPaying()) {
  console.log('High paying job!');
}

//* Parameter Destructuring with Types
interface JobInfo {
  title: string;
  company: string;
  salary: number;
}

export function printJob({ title, company, salary }: JobInfo) {
  console.log(`${title} at ${company}: $${salary}`);
}

//* Practical MERN Patterns

// 1. Typed Express Route Handlers

// Generic async handler wrapper
type AsyncHandler2 = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;

const asyncHandler = (fn: AsyncHandler2): AsyncHandler2 => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

// Usage
export const getJobs4 = asyncHandler(async (_, res) => {
  const jobs = await Job.find();
  res.json({ success: true, data: jobs });
});

//* 3. Higher-Order Function for Authorization

type RoleHandler = (req: Request, res: Response) => Promise<void>;

function requireRole(role: string, handler: RoleHandler): RoleHandler {
  return async (req, res) => {
    const user = req.user;

    if (!user || user.role !== role) {
      res.status(403).json({ error: 'Forbidden' });
      return;
    }

    await handler(req, res);
  };
}

// Usage
export const deleteJob = requireRole('admin', async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});
