{
  function padLeft(padding: number | string, input: string): string {
    // throw new Error('Not implemented yet!');
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
  function getUsersOnlineMessage(numUsersOnline: number) {
    if (numUsersOnline) {
      return `There are ${numUsersOnline} users online now!`;
    }
    return `Nobody's here. :(`;
  }

  // both of these result in 'true'
  Boolean('hello'); // type: boolean, value: true

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
    if (container.value != null) {
      console.log(container.value);

      // Now we can safely multiply 'container.value'.
      container.value *= factor;
    }
  }

  //* The in operator narrowing

  // JavaScript has an operator for determining if an object has a property with a name: the in operator.

  type Fish = { swim: () => void };
  type Bird = { fly: () => void };
  type Human = { swim?: () => void; fly?: () => void };

  function move(animal: Fish | Bird) {
    if ('swim' in animal) {
      return animal.swim();
    }

    return animal.fly();
  }

  //* instanceof narrowing
  // useful for most values that can be constructed with 'new'

  function longValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString()); // x is a Date
    } else {
      console.log(x.toUpperCase()); // x is a string
    }
  }

  //* Assignments
  // when we assign to any variable, TypeScript looks at the right side of the assignment and narrows the left side appropriately.
  let x = Math.random() < 0.5 ? 10 : 'hello world';

  x = 1;
  console.log(x);

  x = 'goodbye';
  console.log(x);

  // x = true; // Error Here

  //* Control flow analysis

  function padLeft2(padding: number | string, input: string) {
    if (typeof padding === 'number') {
      return ' '.repeat(padding) + input;
    }
    return padding + input;
  }

  /**
   * padLeft returns from within its first if block. TypeScript was able to analyze this code and see that the rest of the body (return padding + input;) is unreachable in the case where padding is a number. As a result, it was able to remove number from the type of padding (narrowing from string | number to string) for the rest of the function.
   *
   * This analysis of code based on reachability is called control flow analysis, and TypeScript uses this flow analysis to narrow types as it encounters type guards and assignments. When a variable is analyzed, control flow can split off and re-merge over and over again, and that variable can be observed to have a different type at each point.
   */

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
   * sometimes you want more direct control over how types change throughout your code.
   *
   * To define a user-defined type guard, we simply need to define a function whose return type is a type predicate:
   */

  function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
  }

  /**
   * pet is Fish is our type predicate in this example. A predicate takes the form "parameterName is Type", where parameterName must be the name of a parameter from the current function signature.
   * */

  //* Discriminated unions
  /** When every type in a union contains a common property with literal types, TypeScript considers that to be a discriminated union, and can narrow out the members of the union.
   *
   * In this case, kind was that common property (which is what’s considered a discriminant property of Shape). Checking whether the kind property was "circle" got rid of every type in Shape that didn’t have a kind property with the type "circle". That narrowed shape down to the type Circle.
   */

  interface Circle {
    kind: 'circle';
    radius: number;
  }

  interface Square {
    kind: 'square';
    sideLength: number;
  }

  type Shape = Circle | Square;

  function handleShape(shape: Shape) {
    // oops!
    // if (shape.kind === 'rect') {
    // }
  }

  function getArea(shape: Shape) {
    // if (shape.kind === 'circle') {
    //   return Math.PI * shape.radius ** 2;
    // }

    switch (shape.kind) {
      case 'circle':
        return Math.PI * shape.radius ** 2; // here: shape is circle
      case 'square':
        return shape.sideLength ** 2; // here: shape is square
    }
  }

  /**
   * The important thing here was the encoding of Shape. Communicating the right information to TypeScript - that Circle and Square were really two separate types with specific kind fields - was crucial. Doing that lets us write type-safe TypeScript code that looks no different than the JavaScript we would’ve written otherwise. From there, the type system was able to do the “right” thing and figure out the types in each branch of our switch statement. */

  //* Exhaustiveness checking

  interface Triangle {
    kind: 'triangle';
    sideLength: number;
  }

  type Shape2 = Circle | Square | Triangle;

  function getArea2(shape: Shape2) {
    switch (shape.kind) {
      case 'circle':
        return Math.PI * shape.radius ** 2;
      case 'square':
        return shape.sideLength ** 2;

      default:
        const _exhaustiveCheck = shape;
        return _exhaustiveCheck;
    }
  }
}
