import type { Request, Response } from 'express';
import { Model, model, Schema, type Document } from 'mongoose';
import z from 'zod';

//* Interfaces: Defining Object Shapes

// Interfaces are your "go-to" for object structures:

interface IJob {
  _id: string;
  title: string;
  company: string;
  salary: number;
  isRemote: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Clean and reusable
export function printJob(job: IJob) {
  console.log(job.title);
}

export function updateJob(job: IJob) {
  console.log(job.isRemote);
}

//* Real-world MERN pattern (MongoDB document):

// Base interface for the document
interface IJob2 {
  title: string;
  company: string;
  salary: number;
  location: {
    city: string;
    country: string;
  };
  requirements: string[];
  isRemote: boolean;
  postedAt: Date;
}

// Extend with Mongoose Document methods
interface IJobDocument extends IJob2, Document {}

// Mongoose schema
const jobSchema = new Schema<IJobDocument>({
  title: { type: String, required: true },
  company: { type: String, required: true },
  salary: { type: Number, required: true },
  location: {
    city: String,
    country: String,
  },
  requirements: [String],
  isRemote: { type: Boolean, default: false },
  postedAt: { type: Date, default: Date.now() },
});

export const Job = model<IJobDocument>('Job', jobSchema);

//* Property Modifiers: Optional, Readonly, Index Signatures

// 1. Optional Properties (`?`)

interface IUser {
  _id: string;
  name: string;
  email: string;
  avatar?: string; // Optional - might not exist
  bio?: string; // Optional
  phoneNumber?: string; // Optional
}

const user: IUser = {
  _id: '123',
  name: 'Mahmud',
  email: 'mahmud@example.com',
  createdAt: new Date(),
  updatedAt: new Date(),
  // No avatar, bio, or phoneNumber - that's fine
};

// Accessing optional properties
function displayUser(user: IUser) {
  console.log(user.name); // ✅ Always exists
  console.log(user.avatar?.toUpperCase()); // ✅ Safe optional chaining

  if (user.bio) {
    console.log(user.bio); // ✅ TypeScript knows bio exists here
  }
}

displayUser(user);

// 2. `readonly` Properties
// Prevents modification after creation:

interface Config {
  readonly apiUrl: string;
  readonly timeout: number;
}

export const config: Config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
};

// config.timeout = 10000; // ❌ Error: Cannot assign to 'timeout' because it is readonly

//* Real-world use (immutable configuration):

interface DBConfig {
  readonly host: string;
  readonly port: number;
  readonly database: string;
}

export const dbConfig: DBConfig = {
  host: process.env.DB_HOST!,
  port: parseInt(process.env.DB_PORT!),
  database: process.env.DB_NAME!,
};

// Can't accidentally modify
// dbConfig.host = "new-host"; // ❌ Error

// 3. Index Signatures: Dynamic Keys

// When you "don't know property names" ahead of time:

interface StringMap {
  [key: string]: string;
}

const translations: StringMap = {
  hello: 'হ্যালো',
  goodbye: 'বিদায়',
  thanks: 'ধন্যবাদ',
};

console.log(translations.hello); // "হ্যালো"
console.log(translations.anything); // undefined (but type-safe as string)

//* Real-world use cases:

// 1. Form errors
interface FormErrors {
  [field: string]: string;
}

export const errors: FormErrors = {
  email: 'Invalid email format',
  password: 'Password too short',
  // Can add any string key
};

// 2. API query parameters
interface QueryParams {
  [key: string]: string | number | boolean;
}

function buildQuery(params: QueryParams): string {
  return Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
}

export const query = buildQuery({
  page: 1,
  limit: 10,
  search: 'developer',
  isRemote: true,
});

// 3. Environment variable
interface EnvVars {
  [key: string]: string | undefined;
}

const env: EnvVars = process.env;
console.log(env.DATABASE_URL);

// Mixing index signatures with known properties:
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  [key: string]: unknown; // Allow additional properties
}

export const response: ApiResponse<IJob2[]> = {
  success: true,
  data: [],
  message: 'Jobs fetched',
  timestamp: Date.now(), // ✅ Allowed by index signature
  requestId: 'abc123', // ✅ Also allowed
};

//* Extending Types: Composition

//* Interface Extension
interface BasicJob {
  title: string;
  company: string;
}

interface FullJob extends BasicJob {
  _id: string;
  salary: number;
  isRemote: boolean;
  createdAt: Date;
}

export const job: FullJob = {
  _id: '123',
  title: 'Developer',
  company: 'Tech Corp',
  salary: 85000,
  isRemote: true,
  createdAt: new Date(),
};

//* Real-world MERN pattern (base document interface):

// Base interface for all MongoDB documents
interface MongoDocument {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

// Specific documents extend the base
interface IJob extends MongoDocument {
  title: string;
  company: string;
  salary: number;
}

interface IUser extends MongoDocument {
  name: string;
  email: string;
}

export interface IApplication extends MongoDocument {
  jobId: string;
  userId: string;
  status: 'pending' | 'accepted' | 'rejected';
}

// Multiple inheritance:
interface Timestamped {
  createdAt: Date;
  updatedAt: Date;
}

interface Authorable {
  authorId: string;
  authorName: string;
}

interface BlogPost extends Timestamped, Authorable {
  title: string;
  content: string;
  tags: string[];
}

export const post: BlogPost = {
  title: 'TypeScript Guide',
  content: '...',
  tags: ['typescript', 'programming'],
  createdAt: new Date(),
  updatedAt: new Date(),
  authorId: '123',
  authorName: 'Mahmud',
};

//* Intersection Types (`&`):

// Types can use "intersections" for composition:

type Timestamped2 = {
  createdAt: Date;
  updatedAt: Date;
};

type Authorable2 = {
  authorId: string;
  authorName: string;
};

// Combine with intersection
type BlogPost2 = {
  title: string;
  content: string;
} & Timestamped2 &
  Authorable2;

export const post2: BlogPost2 = {
  title: 'TypeScript Guide',
  content: '...',
  createdAt: new Date(),
  updatedAt: new Date(),
  authorId: '123',
  authorName: 'Mahmud',
};

/*
 When to use which:

 - Interface extends: More conventional, better for OOP-style hierarchies
 - Type intersections: More flexible, required for complex compositions
*/

//* Generic Object Types: Reusable Containers

// Generic container
interface Box<T> {
  value: T;
}

export const stringBox: Box<string> = { value: 'hello' };
export const numberBox: Box<number> = { value: 42 };

//* Real-world MERN patterns:

// 1. API Response Wrapper

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  errors?: string[];
}

// Works for any data type
const jobsResponse: ApiResponse<IJob[]> = {
  success: true,
  data: [
    {
      _id: '1',
      title: 'Frontend Developer',
      company: 'Tech Corp',
      salary: 80000,
      isRemote: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: '2',
      title: 'Backend Developer',
      company: 'Dev Solutions',
      salary: 90000,
      isRemote: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
};

const userResponse: ApiResponse<IUser> = {
  success: true,
  data: user,
};

const errorResponse: ApiResponse<null> = {
  success: false,
  data: null,
  message: 'Not found',
  errors: ['Job not found'],
};

console.log(jobsResponse, userResponse, errorResponse);

// 2. Paginated Response
interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    totalPages: number;
    total: number;
  };
}

// Generic pagination function
const paginate = async <T>(
  model: Model<T>,
  page: number = 1,
  limit: number = 10
): Promise<PaginatedResponse<T>> => {
  const skip = (page - 1) * limit;
  const [data, total] = await Promise.all([
    model.find().skip(skip).limit(limit),
    model.countDocuments(),
  ]);

  return {
    data,
    pagination: {
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      total,
    },
  };
};

// Usage
export const jobs = await paginate(Job, 1, 20);

//* Practical MERN Patterns

//* 4. Zod Schema + TypeScript Interface

// Zod schema (runtime validation)
export const createJobSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  company: z.string().min(1, 'Company is required'),
  salary: z.number().positive('Salary must be positive'),
  location: z.object({
    city: z.string(),
    country: z.string(),
  }),
  requirements: z.array(z.string()),
  isRemote: z.boolean().default(false),
});

// Infer TypeScript type form Zod
export type CreateJobInput = z.infer<typeof createJobSchema>;

// Use in Express
export const createJob = async (
  req: Request<CreateJobInput>,
  res: Response
) => {
  // req.body is already validated and types
  const job = await Job.create(req.body);
  res.json({ success: true, data: job });
};
