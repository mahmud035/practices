//* The Basics: Extracting Object Keys as a Type

import { Job } from './handbook--object-types';

// The `keyof` operator takes an "object type" and produces a "union of its keys":

interface IJob {
  _id: string;
  title: string;
  company: string;
  salary: number;
  isRemote: boolean;
}

// keyof IJob = "_id" | "title" | "company" | "salary" | "isRemote"
type JobKeys = keyof IJob;

export const key1: JobKeys = 'title'; // ✅
export const key2: JobKeys = 'salary'; // ✅
// const key3: JobKeys = 'invalid'; // ❌ Error: not a key of IJob

// NOTE: Why this matters: `keyof` ensures you "only use valid property names". No typos, no runtime errors.

//* Type-Safe Property Access
// Use `keyof` to crate "type-safe getters":

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const job: IJob = {
  _id: '123',
  title: 'Developer',
  company: 'Tech Corp',
  salary: 85000,
  isRemote: true,
};

const title = getProperty(job, 'title'); // Type: string
const salary = getProperty(job, 'salary'); // Type: number
const isRemote = getProperty(job, 'isRemote'); // Type: boolean

// ❌ TypeScript prevents invalid keys
// const invalid = getProperty(job, "notAKey"); // Error!

console.log(title, salary, isRemote);

//* Real-world MERN pattern (safe object updates):

function updateField<T, K extends keyof T>(obj: T, key: K, value: T[K]): T {
  return { ...obj, [key]: value };
}

// Usage
export const updatedJob = updateField(job, 'salary', 90000); // ✅ Type-safe

// const invalid = updateField(job, 'salary', '90000'); // ❌ Error: string not assignable to number

// const typo = updateField(job, 'sallary', 90000); // ❌ Error: 'sallary' is not a key

//* String and Number Index Signatures
// If a type has an "index signature", `keyof` returns the index type:

// String index signature
interface StringMap {
  [key: string]: string;
}

export type StringMapKeys = keyof StringMap; // string

// Number index signature
interface NumberArray {
  [index: number]: string;
}

export type NumberArrayKeys = keyof NumberArray; // number

// Both
interface MixedIndex {
  [key: string]: unknown;
  [key: number]: unknown;
}

export type MixedIndexKeys = keyof MixedIndex; // string | number

// Real-world use (form errors):
interface FormErrors {
  [field: string]: string;
}

function setError(
  errors: FormErrors,
  field: keyof FormErrors,
  message: string
) {
  errors[field] = message;
}

const errors: FormErrors = {};
setError(errors, 'email', 'Invalid email'); // ✅
setError(errors, 'password', 'Too short'); // ✅

// ⚠️ Note: With index signatures, `keyof` returns the "index type", not literal keys.

//* Practical MERN Patterns

//* 1. Type-Safe MongoDB Field Updates
interface IJob2 {
  _id: string;
  title: string;
  company: string;
  salary: number;
  isRemote: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Only allow updating specific fields
type UpdatableJobFields = 'title' | 'company' | 'salary' | 'isRemote';

const updateJob = async (
  id: string,
  field: UpdatableJobFields,
  value: IJob2[UpdatableJobFields]
): Promise<IJob2 | null> => {
  return Job.findByIdAndUpdate(
    id,
    { [field]: value, updatedAt: new Date() },
    { new: true }
  );
};

// Usage
await updateJob('123', 'salary', 90000); // ✅
await updateJob('123', 'title', 'Senior Developer'); // ✅

// await updateJob('123', '_id', '456'); // ❌ Error: '_id' is not updatable
// await updateJob('123', 'salary', '90000'); // ❌ Error: string not assignable to number

//* 2. Type-Safe Query Builder

class QueryBuilder<T> {
  private filters: Partial<T> = {};
  private sortField?: keyof T;
  private sortOrder: 'asc' | 'desc' = 'asc';

  where<K extends keyof T>(key: K, value: T[K]): this {
    this.filters[key] = value;
    return this;
  }

  sort(field: keyof T, order: 'asc' | 'desc' = 'asc'): this {
    this.sortField = field;
    this.sortOrder = order;
    return this;
  }

  getFilters(): Partial<T> {
    return this.filters;
  }

  getSortOptions(): Record<string, 1 | -1> | null {
    return this.sortField
      ? { [this.sortField as string]: this.sortOrder === 'asc' ? 1 : -1 }
      : null;
  }
}

// Usage
const jobQuery = new QueryBuilder<IJob>()
  .where('company', 'Tech Corp') // ✅ Type-safe
  .where('isRemote', true) // ✅
  .sort('salary', 'desc'); // ✅

const filters = jobQuery.getFilters();
const sortOptions = jobQuery.getSortOptions();

export const jobs = await Job.find(filters).sort(sortOptions);

// ❌ TypeScript prevents errors
// jobQuery.where('invalid', 'value'); // Error: 'invalid' is not a key of IJob
// jobQuery.where('salary', '85000'); // Error: string not assignable to number
// jobQuery.sort('notAField'); // Error: 'notAField' is not a key of IJob

//* 4. Type-Safe Form Field Handler (see -> JobForm.tsx)

//* Advanced Pattern: Mapped Types with keyof

// Combine `keyof` with "mapped types" for powerful transformations:

// Make all properties optional
type Partial<T> = {
  [K in keyof T]?: T[K];
};

// Make all properties required
export type Required<T> = {
  [K in keyof T]-?: T[K];
};

// Make all properties readonly
export type Readonly<T> = {
  readonly [K in keyof T]: T[K];
};
