export {};

//* Function Type Expressions
// The simplest way to describe a function is with a `function type expression`. These types are syntactically similar to arrow functions:

/**
 * The syntax `(str: string) => void` means “A function with one parameter, named `str`, of type `string`, that doesn’t have a return value”.
 */

type GreetFunction = (str: string) => void;

function greeter(fn: GreetFunction) {
  fn('TypeScript');
}

function printToConsole(str: string) {
  console.log(str);
}

greeter(printToConsole);

//* Call Signatures
/**
 * In JavaScript, functions can have properties in addition to being callable. However, the function type expression syntax doesn’t allow for declaring properties. If we want to describe something callable with properties, we can write a `call signature` in an object type:
 *
 * The syntax is slightly different compared to a function type expression - use `:` between the parameter list and the return type rather than `=>`.
 */

type TDescribableFunction = {
  description: string;
  (someArg: number): boolean; // `call signature`
};

function doSomething(fn: TDescribableFunction) {
  console.log(`${fn.description} returned ${fn(5)}`);
}

function myFunc(someArg: number) {
  return someArg > 3;
}

myFunc.description = 'default description';

doSomething(myFunc);

//* Construct Signatures
/**
 * JavaScript functions can also be invoked with the `new` operator. TypeScript refers to these as `constructors` because they usually create a new object. You can write a `construct signature` by adding the `new` keyword in front of a call signature:
 */

type SomeObject = {
  // Define the properties of SomeObject here
  value: string;
};

type TSomeConstructor = {
  new (str: string): SomeObject;
};

function func(ctor: TSomeConstructor) {
  return new ctor('hello');
}

//* Generic Functions
/**
 * In TypeScript, `generics` are used when we want to describe a correspondence between two values. We do this by declaring a `type parameter` in the function signature.
 *
 * Note that we didn’t have to specify `T` in this sample. The type was `inferred` - chosen automatically - by TypeScript.
 */

function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

const s = firstElement(['a', 'b']); // s is of type 'string
const n = firstElement([1, 2]); // n is of type 'number'
const u = firstElement([]); // u is of type undefined

// Inference
// We can use multiple type parameters as well. For example, a standalone version of `map` would look like this:

function map<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output
): Output[] {
  return arr.map(func);
}

// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(['1', '2', '3'], (n) => parseInt(n));

//* Generic Constraints
/**
 * We’ve written some generic functions that can work on `any` kind of value. Sometimes we want to relate two values, but can only operate on a certain subset of values. In this case, we can use a `generic constraints` to limit the kinds of types that a type parameter can accept.
 *
 * Let’s write a function that returns the longer of two values. To do this, we need a `length` property that’s a number. We `constrain` the type parameter to that type by writing an `extends` clause:
 */

function longest<T extends { length: number }>(a: T, b: T) {
  if (a.length >= b.length) return a;
  return b;
}

const longerArray = longest([1, 2], [1, 2, 3]); // ✅ longerArray is of type 'number[]' & (arrays have .length property)
const longerString = longest('Alice', 'Bob'); // ✅ longerString is of type 'Alice' | 'Bob' & (strings have .length property)

// const notOK = longest(10, 100); // 🔴 Error! Numbers don't have a 'length' property

//* Specifying Type Arguments
/**
 * TypeScript can usually infer the intended type arguments in a generic call, but not always. For example, let’s say you wrote a function to combine two arrays
 *
 * Then, you could manually specify `T`:
 * @example
 * combine<string | number>()
 */

function combine<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2);
}

const arr = combine<string | number>([1, 2, 3], ['hello']);

//* Guidelines for Writing Good Generic Functions
/**
 * Writing generic functions is fun, and it can be easy to get carried away with type parameters. Having too many type parameters or using constraints where they aren’t needed can make inference less successful, frustrating callers of your function.
 *
 * 1. Push Type Parameters Down
 * Rule: `When possible, use the type parameter itself rather than constraining it`.
 *
 * 2. Use Fewer Type Parameters
 * Rule: `Always use as few type parameters as possible`.
 *
 * 3. Type Parameters Should Appear Twice
 * Rule: `If a type parameter only appears in one location, strongly reconsider if you actually need it`.
 */

// 1. Push Type Parameters Down
// Rule: When possible, use the type parameter itself rather than constraining it.

// ✅ Good
function firstElement1<T>(arr: T[]) {
  return arr[0];
}

// 🔴 Bad
function firstElement2<T extends any[]>(arr: T) {
  return arr[0];
}

const a = firstElement1([1, 2, 3]); // ✅ a: number (Good)
const b = firstElement2([1, 2, 3]); // 🔴 b: any (Bad)

// 2. Use Fewer Type Parameters
// Rule: Always use as few type parameters as possible.

// ✅ Good
function filter1<T>(arr: T[], func: (arg: T) => boolean): T[] {
  return arr.filter(func);
}

// 🔴 Bad
function filter2<T, Func extends (args: T) => boolean>(arr: T[], func: Func) {
  return arr.filter(func);
}

// 3. Type Parameters Should Appear Twice
// Rule: If a type parameter only appears in one location, strongly reconsider if you actually need it.

//* Optional Parameters
function f(n?: number) {
  return n?.toFixed();
}
// All OK
f();
f(10);
f(undefined);

//* Optional Parameters in Callbacks
/**
 * Rule: When writing a function type for a callback, `never` write an optional parameter unless you intend to `call` the function without passing that argument.
 */

function myForEach(arr: any[], callback: (arr: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

//* Function Overloads
/**
 * Some JavaScript functions can be called in a variety of argument counts and types. For example, you might write a function to produce a `Date` that takes either a timestamp (one argument) or a month/day/year specification (three arguments).
 *
 * In TypeScript, we can specify a function that can be called in different ways by writing `overload signatures`. To do this, write some number of function signatures (usually two or more), followed by the body of the function:
 *
 * NOTE: `The signature of the implementation is not visible from the outside. When writing an overloaded function, you should always have two or more signatures above the implementation of the function 👇`.
 */

// ✅ overload signatures
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;

// ✅ implementation signatures
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}

const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
// const d3 = makeDate(1, 3); // 🔴 Error

//* Overload Signatures and the Implementation Signature
/**
 * NOTE: `The signature of the implementation is not visible from the outside. When writing an overloaded function, you should always have two or more signatures above the implementation of the function 👆`.
 */

//* Writing Good Overloads
/**
 * NOTE: Always prefer parameters with union types instead of overloads when possible 👇`.
 */

function len(x: string | any[]) {
  return x.length;
}

//* Other Types to Know About

//* `void`
/**
 * `void` represents the return value of functions which don’t return a value. It’s the inferred type any time a function doesn’t have any `return` statements, or doesn’t return any explicit value from those return statements.
 *
 * In JavaScript, a function that doesn’t return any value will implicitly return the value `undefined`. However, `void` and `undefined` are not the same thing in TypeScript.
 *
 * `void is not the same as undefined`
 */

// The inferred return type is void
function noop() {
  return;
}

//* `object`
/**
 * The special type `object` refers to any value that isn’t a primitive (`string`, `number`, `bigint`, `boolean`, `symbol`, `null`, or `undefined`). This is different from the empty object type `{ }`, and also different from the global type `Object`. It’s very likely you will never use `Object`.
 *
 * `object is not Object. Always use object!`
 *
 * Note that in JavaScript, function values are objects: They have properties, have `Object.prototype` in their prototype chain, are `instanceof Object`, you can call `Object.keys` on them, and so on. For this reason, function types are considered to be `objects` in TypeScript.
 */

//* `unknown`
/**
 * The `unknown` type represents any value.
 * This is similar to the `any` type, but `is safer because its not legal to do anything with an unknown value`:
 */

function f1(a: any) {
  a.b(); // OK
}
function f2(a: unknown) {
  // a.b(); // 'a' is of type 'unknown'.
}

/**
 * This is useful when describing function types because you can describe functions that accept any value without having `any` values in your function body.
 * Conversely, you can describe a function that returns a value of `unknown` type:
 */

function safeParse(str: string): unknown {
  return JSON.parse(str);
}

const someRandomString = '{"key": "value"}';
const obj = safeParse(someRandomString); // Need to be careful with 'obj'!

//* `never`
/**
 * Some functions never return a value:
 * The `never` type represents values which are never observed.
 * In a return type, this means that the function throws an exception or terminates execution of the program 👇.
 */

function fail(msg: string): never {
  throw new Error(msg);
}

/**
 * `never` also appears when TypeScript determines there’s nothing left in a union 👇.
 */

function fn(x: string | number) {
  if (typeof x === 'string') {
    // do something
  } else if (typeof x === 'number') {
    // do something else
  } else {
    // This block is unreachable, but TypeScript requires a return type
    throw new Error(`Unexpected type: ${typeof x}`);
  }
}

//* Rest Parameters and Arguments

//* Rest Parameters
/**
 * In addition to using optional parameters or overloads to make functions that can accept a variety of fixed argument counts, we can also define functions that take an unbounded number of arguments using rest parameters.
 *
 * A rest parameter appears after all other parameters, and uses the `...` syntax:
 */

function multiply(n: number, ...rest: number[]) {
  return rest.map((x) => n * x);
}

const c = multiply(10, 1, 2, 3, 4); // 'c' gets value [10, 20, 30, 40]

//* Rest Arguments
const args = [8, 5] as const; // Inferred as 2-length tuple
const angle = Math.atan2(...args); // OK

//* Parameter Destructuring
/**
 * You can use parameter destructuring to conveniently unpack objects provided as an argument into one or more local variables in the function body.
 *
 * The type annotation for the object goes after the destructuring syntax.
 */

type ABC = { a: number; b: number; c: number };

function sum({ a, b, c }: ABC) {
  console.log(a + b + c);
}

sum({ a: 10, b: 3, c: 9 });
