//* The Basics: Types That Choose
// Conditional types let you make decisions at the type level using a ternary-like syntax:

// Syntax: T extends U ? X : Y
// If T is assignable to U, return X, otherwise return Y

type IsString<T> = T extends string ? true : false;

export type A = IsString<string>; // true
export type B = IsString<number>; // false
export type C = IsString<'hello'>; // true

// Why this matters: Types can adapt based on conditions, making your code flexible while maintaining type safety.
