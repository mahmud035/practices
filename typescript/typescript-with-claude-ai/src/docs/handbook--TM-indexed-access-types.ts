//* The Basics: Accessing Property Types
// You can "look up a specific property's type" using bracket notation:

interface IJob {
  _id: string;
  title: string;
  company: string;
  salary: number;
  isRemote: boolean;
  location: {
    city: string;
    country: string;
  };
}

// Access specific property types
export type JobTitle = IJob['title']; // string
export type JobSalary = IJob['salary']; // number
export type JobLocation = IJob['location']; // { city: string; country: string }

export type LocationCity = IJob['location']['city']; // string (nested access)

// NOTE: Why this matters: Instead of redefining types, you "extract them directly" from existing types. Single source of truth.

//* Accessing Multiple Properties at Once
// Use a union of keys to get multiple property types:

export type JobStringFields = IJob['title' | 'company' | '_id'];
// Type: string (union of string | string | string = string)

export type JobData = IJob['title' | 'salary'];
// Type: string | number

//* Real-world pattern (extracting specific field types):

interface IUser {
  _id: string;
  name: string;
  email: string;
  age: number;
  isActive: boolean;
  createdAt: Date;
}

// Get all string fields
export type UserStringFields = IUser['_id' | 'name' | 'email'];
// Type: string

// Get all primitive fields (string | number | boolean)
export type UserPrimitives = IUser[
  | '_id'
  | 'name'
  | 'email'
  | 'age'
  | 'isActive'];
// Type: string | number | boolean

//* Using `keyof` with Indexed Access
// Combine `keyof` with indexed access to get all property types:

interface IJob2 {
  _id: string;
  title: string;
  salary: number;
  isRemote: boolean;
}

// ✅ Get all property types as a union
export type JobValues = IJob2[keyof IJob2];
// Type: string | number | boolean

// This is equivalent to:
export type JobValuesManual =
  | IJob2['_id']
  | IJob2['title']
  | IJob2['salary']
  | IJob2['isRemote'];
