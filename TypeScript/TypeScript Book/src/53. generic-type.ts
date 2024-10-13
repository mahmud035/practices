{
  // Generics

  // IMPORTANT: Generics allow you to create reusable components and functions that can work with multiple types. With generics, you can parameterize types, functions, and interfaces, allowing them to operate on different types without explicitly specifying them beforehand.

  // Generics allow you to make code more flexible and reusable.

  {
    //* Generic Type

    // To define a generic type, you use angle brackets (`<>`) to specify the type parameters, for instance:

    function identity<T>(args: T): T {
      return args;
    }
    const a = identity('x');
    const b = identity(123);

    console.log(a, b);

    const getLen = <T>(data: ReadonlyArray<T>) => data.length;
    const len = getLen([1, 2, 3]);

    console.log(len);
  }

  {
    //* Generic Classes

    // Generics can be applied also to classes, in this way they can work with multiple types by using type parameters. This is useful to create reusable class definitions that can operate on different data types while maintaining type safety.

    class Container<T> {
      private item: T;

      constructor(item: T) {
        this.item = item;
      }

      getItem(): T {
        return this.item;
      }
    }

    // Create instances of the class
    const numberContainer = new Container<number>(123);
    console.log(numberContainer.getItem()); // 123

    const stringContainer = new Container<string>('hello');
    console.log(stringContainer.getItem()); // hello
  }

  {
    //* Generic Constraints

    // Generic parameters can be constrained using the `extends` keyword followed by a type or interface that the type parameter must satisfy.

    // In the following example type `T` must have containing a properly `length` in order to be valid:

    const printLen = <T extends { length: number }>(value: T): void => {
      console.log(value.length);
    };

    printLen('Hello'); // 5
    printLen([1, 2, 3]); // 3
    printLen({ length: 10 }); // 10
  }

  {
    //* Generic contextual narrowing

    // Contextual narrowing for generics is the mechanism in TypeScript that allows the compiler to narrow down the type of a generic parameter based on the context in which it is used, "it is useful when working with generic types in conditional statements":

    function process<T>(value: T): void {
      if (typeof value === 'string') {
        // Value is narrowed down to type 'string'
        console.log(value.length);
      } else if (typeof value === 'number') {
        // Value is narrowed down to type 'number'
        console.log(value.toFixed(2));
      }
    }

    process('hello'); // 5
    process(3.14159); // 3.14
  }
}
