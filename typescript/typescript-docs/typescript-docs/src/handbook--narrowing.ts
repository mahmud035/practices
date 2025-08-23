export {};

//* `typeof` type guards
function padLeft(padding: number | string, input: string): string {
  if (typeof padding === 'number') {
    return ' '.repeat(padding) + input;
  }
  return padding + input;
}

function printAll(strs: string | string[] | null) {
  // NOTE: typeof array and typeof null is 'object'

  if (strs && typeof strs === 'object' && strs !== null) {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === 'string') {
    console.log(strs);
  } else {
    // do nothing
  }
}

//* Truthiness narrowing
// Falsy values: false, 0, '' (empty string), null, NaN, undefined

function getUsersOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    return `There are ${numUsersOnline} users online now!`;
  }
  return `Nobody's here! :(`;
}

// You can always coerce values to booleans by running them through the Boolean function, or by using the "shorter double-Boolean negation". *The latter has the advantage that TypeScript infers a narrow literal boolean type `true`.

// both of these result in 'true'
Boolean('hello'); // type: boolean, value: true
// !!'world'; // type: true, value: true

function multiplyAll(
  values: number[] | undefined,
  factor?: number
): number[] | undefined {
  if (!values) {
    return values;
  } else {
    return values.map((x) => x * factor!);
  }
}

//* Equality narrowing
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    const upper = x.toUpperCase();
    const lower = y.toLowerCase();
    console.log(upper, lower);
  } else {
    console.log(x);
    console.log(y);
  }
}

/**
 * JavaScript’s looser equality checks with == and != also get narrowed correctly. If you’re unfamiliar, checking whether something == null actually not only checks whether it is specifically the value null - it also checks whether it’s potentially undefined. The same applies to == undefined: it checks whether a value is either null or undefined.
 */

interface Container {
  value: number | null | undefined;
}

function multiplyValue(container: Container, factor: number) {
  // Remove both 'null' and 'undefined' from the type.
  if (container.value) {
    console.log(container.value);

    // Now we can safely multiply 'container.value'.
    container.value *= factor;
  }
}

//* The `in` operator narrowing
// JavaScript has an operator for determining if an object or its prototype chain has a property with a name: the `in` operator. TypeScript takes this into account as a way to narrow down potential types.

type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };

function move(animal: Fish | Bird) {
  if ('swim' in animal) return animal.swim();

  return animal.fly();
}

//* `instanceof` narrowing
// JavaScript has an operator for checking whether or not a value is an “instance” of another value.
// Useful for most values that can be constructed with `new`.
// `instanceof` is also a type guard.

function longValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toDateString()); // x is a Date
  } else {
    console.log(x.toLowerCase()); // x is a string
  }
}
longValue(new Date());
longValue('JOHN');

//* Assignments
// When we assign to any variable, TypeScript looks at the right side of the assignment and narrows the left side appropriately.

let x = Math.random() < 0.5 ? 10 : 'hello world';

x = 1;
console.log(x);

x = 'goodbye';
console.log(x);

// x = true; // Error Here

//* Control flow analysis
/**
 * How it works?
 
 * `padLeft` returns from within its first `if` block. TypeScript was able to analyze this code and see that the rest of the body (`return padding + input;`) is unreachable in the case where `padding` is a `number`. As a result, it was able to remove `number` from the type of `padding` (narrowing from `string | number` to `string`) for the rest of the function.
 
 * This analysis of code based on reachability is called `control flow analysis`, and TypeScript uses this flow analysis to narrow types as it encounters type guards and assignments. When a variable is analyzed, control flow can split off and re-merge over and over again, and that variable can be observed to have a different type at each point.
 */

function padLeft2(padding: number | string, input: string) {
  if (typeof padding === 'number') {
    return ' '.repeat(padding) + input;
  }
  return padding + input;
}

function example2() {
  let x: string | number | boolean;

  x = Math.random() < 0.5;

  console.log(x); // x is boolean

  if (Math.random() < 0.5) {
    x = 'hello';
    console.log(x); // x is string
  } else {
    x = 100;
    console.log(x); // x is number
  }

  return x; // x is string | number
}

//* Using type predicates
/**
 * Sometimes you want more direct control over how types change throughout your code.
 *
 * To define a `user-defined` type guard, we simply need to define a function whose return type is a `type predicate`:
 *
 * `pet is Fish` is our type predicate in this example. A predicate takes the form `parameterName is Type`, where `parameterName` must be the name of a parameter from the current function signature.
 *
 * Any time `isFish` is called with some variable, TypeScript will `narrow` that variable to that specific type if the original type is compatible.
 */

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

//* Discriminated union
/**
 * When every type in a union contains a common property with literal types, TypeScript considers that to be a `discriminated union`, and can narrow out the members of the union.
 *
 * In this case, `kind` was that common property (which is what’s considered a `discriminant` property of `Shape`). Checking whether the `kind` property was `circle` got rid of every type in `Shape` that didn’t have a `kind` property with the type `circle`.
 */

type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; side: number };

function getArea(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2; // here: shape is circle
    case 'square':
      return shape.side ** 2; // here: shape is square
  }
}

// Discriminated unions are useful for more than just talking about circles and squares. They’re good for representing any sort of messaging scheme in JavaScript, like when sending messages over the network (client/server communication), or encoding mutations in a state management framework.

//* Exhaustiveness checking
type Shape2 =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; side: number }
  | {
      kind: 'triangle';
      sideLength: number;
    };

function getArea2(shape: Shape2) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.side ** 2;
    case 'triangle':
      return shape.sideLength * 0.5;

    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
