//* Function Type Expressions
function greeter(fn: (a: string) => void) {
  fn('Hello, World');
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);

// The syntax (a: string) => void means “a function with one parameter, named a, of type string, that doesn’t have a return value”.

//* Call Signatures
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};

function doSomething2(fn: DescribableFunction) {
  console.log(`${fn.description} returned ${fn(6)}`);
}

function myFunc(someArg: number) {
  return someArg > 3;
}

myFunc.description = 'default description';

doSomething2(myFunc);

//* Generic Functions
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}
// s is of type 'string
const s = firstElement(['a', 'b', 'c']);
// n is of type 'number'
const n = firstElement([1, 2, 3]);
// u is of type undefined
const u = firstElement([]);

// Constraints
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
// longerString is of type 'alice' | 'bob'
const longerString = longest('Alice', 'Bob');
// Error! Numbers don't have a 'length' property
// const notOK = longest(10, 100)

// Specifying Type Arguments
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

const arr = combine<string | number>([1, 2, 3], ['hello']);

// IMP: Guidelines for Writing Good Generic Functions

// 1. Push Type Parameters Down
// Rule: When possible, use the type parameter itself rather than constraining it

function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}

function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}

// a: number (good)
const a = firstElement1([1, 2, 3]);
// b: any (bad)
const b = firstElement2([1, 2, 3]);

// 2. Use Fewer Type Parameters
// Rule: Always use as few type parameters as possible

function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}

// bad practice
function filter2<Type, Func extends (args: Type) => boolean>(
  arr: Type[],
  func: Func
) {
  return arr.filter(func);
}

// 3. Type Parameters Should Appear Twice
// Rule: If a type parameter only appears in one location, strongly reconsider if you actually need it

//* Optional Parameters in Callbacks
function myForEach(arr: any[], callback: (arr: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}
// NOTE: When writing a function type for a callback, never write an optional parameter unless you intend to call the function without passing that argument

//* Other Types to Know About

// void
// The inferred return type is void
function noop() {
  return;
}

// never
// Some functions never return a value: The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.

function fail(msg: string): never {
  throw new Error(msg);
}

// `never` also appears when TypeScript determines there’s nothing left in a union.
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
// Rest Parameters: A rest parameter appears after all other parameters, and uses the ... syntax:

function multiply(n: number, ...m: number[]) {
  // console.log(m);
  return m.map((x) => n * x);
}
// 'c' gets value [10, 20, 30, 40]
const c = multiply(10, 1, 2, 3, 4);

// Rest Arguments
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// arr1.push(...arr2);
const arr3 = [...arr1, ...arr2];

// Inferred as 2-length tuple
const args = [8, 5] as const;
const angle = Math.atan2(...args);

//* Parameter Destructuring

function sum({ a, b, c }: { a: number; b: number; c: number }) {
  console.log(a + b + c);
}
sum({ a: 10, b: 3, c: 9 });

//* Assignability of Functions
type voidFunc = () => void;

const f1: voidFunc = () => {
  return true;
};

const f2: voidFunc = () => true;

const f3: voidFunc = function () {
  return true;
};

const v1 = f1();
const v2 = f2();
const v3 = f3();
