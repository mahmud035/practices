/**
 * TypeScript Utility Types: Examples and Use Cases
 *
 * - `Partial<T>`: Makes all properties optional.
 * - `Required<T>`: Converts optional properties into required.
 * - `Readonly<T>`: Makes properties immutable.
 * - `Record<K, T>`: Creates an object type with fixed keys and values.
 * - `Pick<T, K>`: Selects specific properties from a type.
 * - `Omit<T, K>`: Excludes specific properties from a type.
 * - `Exclude<T, U>`: Removes specific values from a union type.
 * - `Extract<T, U>`: Keeps only specific values from a union type.
 * - `NonNullable<T>`: Removes `null` and `undefined` from a type.
 * - `ReturnType<T>`: Extracts the return type of a function.
 * - `Parameters<T>`: Extracts the parameter types of a function.
 * - `Awaited<T>`: Extracts the resolved type of a promise.
 */

//* Partial - Makes all properties in an object optional

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean; // Optional property
}

// Function to update an assignment with optional properties
const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment> // Allows updating any subset of properties
): Assignment => {
  return { ...assign, ...propsToUpdate }; // Merge and update
};

// Example assignment object
const assign1: Assignment = {
  studentId: 'u123',
  title: 'Final Project',
  grade: 0,
};

// Updating only the grade property
console.log(updateAssignment(assign1, { grade: 95 })); // { studentId: 'u123', title: 'Final Project', grade: 95 }
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });

//* Required - Converts all optional properties into required
//* Readonly - Prevents modification of object properties

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // Simulate storing the assignment in a database
  return assign;
};

// Creating a readonly assignment object
const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};

// NOTE: `assignVerified` cannot be passed to `recordAssignment` directly
// because `Readonly<T>` prevents modifications, while `Required<T>` requires all fields to be set

recordAssignment({ ...assignGraded, verified: true }); // ✅ Works because we explicitly provide `verified`

//* Record - Defines an object type where keys and values follow a specific structure

const hexColorMap: Record<string, string> = {
  red: 'FF0000',
  green: '00FF00',
  blue: '0000FF',
};

// Defining specific allowed keys and values
type Students = 'Sara' | 'Kelly';
type LetterGrades = 'A' | 'B' | 'C' | 'D' | 'U';

// Creating a record where student names are mapped to letter grades
const finalGrades: Record<Students, LetterGrades> = {
  Sara: 'B',
  Kelly: 'U',
};

// Nested record where students have multiple grades
interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 85, assign2: 93 },
  Kelly: { assign1: 76, assign2: 15 },
};

// Pick and Omit - Selecting or removing specific properties from a type

//* Pick - Creates a new type with only the specified properties
type AssignResult = Pick<Assignment, 'studentId' | 'grade'>;

const score: AssignResult = {
  studentId: 'k123',
  grade: 85,
};

//* Omit - Creates a new type excluding the specified properties
type AssignPreview = Omit<Assignment, 'grade' | 'verified'>;

const preview: AssignPreview = {
  studentId: 'k123',
  title: 'Final Project',
};

// Exclude and Extract - Manipulating union types

//* Exclude - Removes specified values from a union type
type AdjustedGrade = Exclude<LetterGrades, 'U'>; // Removes 'U' from LetterGrades

//* Extract - Keeps only the specified values from a union type
type HighGrades = Extract<LetterGrades, 'A' | 'B'>; // Keeps only 'A' and 'B'

//* NonNullable - Removes `null` and `undefined` from a type

type AllPossibleGrades = 'Dave' | 'John' | null | undefined;
type NamesOnly = NonNullable<AllPossibleGrades>; // Removes null and undefined

//* ReturnType - Extracts the return type of a function

// Function to create a new assignment
const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

// Using ReturnType to infer the function's return type
type NewAssign = ReturnType<typeof createNewAssign>; // { title: string, points: number }

const tsAssign: NewAssign = createNewAssign('Utility Types', 100);
console.log(tsAssign); // { title: 'Utility Types', points: 100 }

//* Parameters - Extracts parameter types from a function

type AssignParams = Parameters<typeof createNewAssign>; // [title: string, points: number]

const assignArgs: AssignParams = ['Generics', 100];

// Using spread syntax to pass extracted parameters
const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2); // { title: 'Generics', points: 100 }

//* Awaited - Helps infer the return type of a promise

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

// Async function that fetches user data
const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) throw new Error('Failed to fetch users');
  const data = await res.json();
  return data;
};

// Using Awaited and ReturnType to infer the resolved type of `fetchUsers`
type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

// Fetching users and logging the result
fetchUsers().then((users) => console.log(users));
