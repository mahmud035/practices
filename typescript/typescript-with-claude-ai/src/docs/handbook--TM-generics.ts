//* Generics

import axios from 'axios';
import type { FilterQuery, Model } from 'mongoose';
import type { IJob, IUser } from './handbook--everyday-types';
import { job, Job } from './handbook--object-types';

// The Problem: Code Duplication Without Generics
// Without generics, you either lose type safety or duplicate code:

// ✅ Generic function - works for any type
function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}

const firstStr = getFirst(['a', 'b']); // Type: string | undefined
const firstNum = getFirst([1, 2, 3]); // Type: number | undefined

console.log(firstNum, firstStr);

// Why this matters: Write once, use everywhere, keep type safety.

//* Generic Functions: Type Variables

// Generics use "type parameters" (like function parameters, but for type):

// `T` is a type parameter
function identity<T>(value: T): T {
  return value;
}

// TypeScript infer T from the argument
const num = identity(42); // T = number
const str = identity('hello'); // T = string

// Or explicitly specify T
const explicit = identity<string>('hello');

console.log(num, str, explicit);

//* Real-world MERN example (generic API fetch):

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

async function fetchData<T>(url: string): Promise<T> {
  const res = await axios.get<ApiResponse<T>>(url);
  return res.data.data;
}

// Usage - TypeScript infers or you specify
export const jobs = await fetchData<IJob[]>('/api/jobs');
// jobs: IJob[]

export const user = await fetchData<IUser>('/api/user');
// user: IUser

export const stats = await fetchData<{ total: number; active: number }>(
  '/api/stats'
);
// stats: { total: number; active: number }

//* Generic Types: Interfaces and Type Aliases

// You can make entire types generic:

// Generic interface
interface Container<T> {
  value: T;
  getValue(): T;
  setValue(value: T): void;
}

// Usage
export const stringContainer: Container<string> = {
  value: 'hello',
  getValue() {
    return this.value;
  },
  setValue(newValue) {
    this.value = newValue;
  },
};

export const jobContainer: Container<IJob> = {
  value: job,
  getValue() {
    return this.value;
  },
  setValue(v) {
    this.value = v;
  },
};

//* Real-world MERN patterns:

// 1. Generic API Response
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  errors?: string[];
}

// Works for any data type

// Example job objects
const job1: IJob = { ...job }; // Copy or define properties as needed
const job2: IJob = { ...job }; // Copy or define properties as needed

export const jobsResponse: ApiResponse<IJob[]> = {
  success: true,
  data: [job1, job2],
};

export const userResponse: ApiResponse<IUser> = {
  success: true,
  data: user,
  message: 'User retrieved',
};

export const errorResponse: ApiResponse<null> = {
  success: false,
  data: null,
  errors: ['Not found'],
};

// 2. Generic Paginated Response
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
  limit: number = 10,
  filter: FilterQuery<T> = {}
): Promise<PaginatedResponse<T>> => {
  const skip = (page - 1) * limit;

  const [data, total] = await Promise.all([
    model.find(filter).skip(skip).limit(limit),
    model.countDocuments(filter),
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

// Usage with any model
export const jobsPage = await paginate(Job, 1, 20, { isRemote: true });

//* Using Type Parameters in Generic Constraints

// You can reference one type parameter from another:

// K must be a key of T
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const job3: IJob = {
  _id: '123',
  title: 'Developer',
  company: 'Tech Corp',
  salary: 85000,
  isRemote: true,
  createdAt: new Date(),
};

const title = getProperty(job3, 'title'); // string
const salary = getProperty(job3, 'salary'); // number
// const invalid = getProperty(job3, 'invalid'); // ❌ Error: 'invalid' is not a key of IJob
console.log(title, salary);
