"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Function to update an assignment with optional properties
const updateAssignment = (assign, propsToUpdate // Allows updating any subset of properties
) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate); // Merge and update
};
// Example assignment object
const assign1 = {
    studentId: 'u123',
    title: 'Final Project',
    grade: 0,
};
// Updating only the grade property
console.log(updateAssignment(assign1, { grade: 95 })); // { studentId: 'u123', title: 'Final Project', grade: 95 }
const assignGraded = updateAssignment(assign1, { grade: 95 });
//* Required - Converts all optional properties into required
//* Readonly - Prevents modification of object properties
const recordAssignment = (assign) => {
    // Simulate storing the assignment in a database
    return assign;
};
// Creating a readonly assignment object
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// NOTE: `assignVerified` cannot be passed to `recordAssignment` directly
// because `Readonly<T>` prevents modifications, while `Required<T>` requires all fields to be set
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true })); // ✅ Works because we explicitly provide `verified`
//* Record - Defines an object type where keys and values follow a specific structure
const hexColorMap = {
    red: 'FF0000',
    green: '00FF00',
    blue: '0000FF',
};
// Creating a record where student names are mapped to letter grades
const finalGrades = {
    Sara: 'B',
    Kelly: 'U',
};
const gradeData = {
    Sara: { assign1: 85, assign2: 93 },
    Kelly: { assign1: 76, assign2: 15 },
};
const score = {
    studentId: 'k123',
    grade: 85,
};
const preview = {
    studentId: 'k123',
    title: 'Final Project',
};
//* ReturnType - Extracts the return type of a function
// Function to create a new assignment
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign('Utility Types', 100);
console.log(tsAssign); // { title: 'Utility Types', points: 100 }
const assignArgs = ['Generics', 100];
// Using spread syntax to pass extracted parameters
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2); // { title: 'Generics', points: 100 }
// Async function that fetches user data
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok)
        throw new Error('Failed to fetch users');
    const data = yield res.json();
    return data;
});
// Fetching users and logging the result
fetchUsers().then((users) => console.log(users));
