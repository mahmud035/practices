{
  // Type Manipulation

  {
    //* Creating Types from Types

    // IMPORTANT: Is it possible to create new types composing, manipulating or transforming existing types => YES! Possible.

    // 1. Intersection Types (`&`):

    // Allow you to combine multiple types into a single type:

    type A = { foo: number };
    type B = { bar: string };

    type C = A & B; // Intersection of A and B

    const obj: C = { foo: 42, bar: 'hello' };
    console.log(obj);

    // 2. Union Types (`|`):

    // Allow you to define a type that can be one of several types:

    type Result = string | number; // Union

    const value1: Result = 'hello';
    const value2: Result = 42;

    console.log({ value1, value2 });

    // 3. Mapped Types:

    // Allow you to transform the properties of an existing type to create a new type:

    type Mutable<T> = {
      readonly [P in keyof T]: T[P];
    };

    type Person = {
      name: string;
      age: number;
    };

    type ImmutablePerson = Mutable<Person>; // Properties become read-only

    const person: ImmutablePerson = {
      name: 'John',
      age: 36,
    };

    console.log(person.name);
    console.log(person.age);

    // 4. Conditional Types:

    // Allow you to create types based on some conditions:

    type ExtractParam<T> = T extends (param: infer P) => any ? P : never;
    type MyFunction = (name: string) => number;
    type ParamType = ExtractParam<MyFunction>; // string

    const sayHi = (name: ParamType): void => console.log(`Hi, ${name}`);
    sayHi('Alice'); // "Hi, Alice"
  }

  {
    //* Indexed Access Types

    // In TypeScript it is possible to access and manipulate the types of properties within another type using an index, `Type[Key]`.

    type Person = {
      name: string;
      age: number;
    };

    type AgeType = Person['age']; // number

    const age: AgeType = 36;
    console.log(age);
  }

  {
    //* Utility Types

    // Several built-in utility types can be used to manipulate types, below a list of the most common used:

    {
      //* Partial<T>
      // Constructs a type with all properties of T set to "optional".

      type Person = {
        name: string;
        age: number;
      };

      type A = Partial<Person>; // { name?: string | undefined; age?: number | undefined; }

      const person: A = {
        name: 'John',
        age: 36,
      };
      console.log(person);
    }

    {
      //* Required<T>
      // Constructs a type with all properties of T set to "required".

      type Person = {
        name?: string;
        age?: number;
      };

      type A = Required<Person>; // { name: string; age: number; }

      const person: A = {
        name: 'John',
        age: 36,
      };
      console.log(person);
    }

    {
      //* Readonly<T>
      // Constructs a type with all properties of T set to "readonly".

      type Person = {
        name: string;
        age: number;
      };

      type A = Readonly<Person>;

      const person: A = {
        name: 'John',
        age: 36,
      };
      console.log(person);
    }

    {
      //* Record<K, T>
      // Constructs a type with a set of properties K of type T.

      type Product = {
        name: string;
        price: number;
      };

      const products: Record<string, Product> = {
        apple: { name: 'Apple', price: 0.5 },
        banana: { name: 'Banana', price: 0.25 },
      };

      console.log(products.apple); // { name: 'Apple', price: 0.5 }
    }

    {
      //* Pick<T, K>
      // Constructs a type by picking the specified properties K from T.

      type Product = {
        id: number;
        name: string;
        price: number;
      };

      type Price = Pick<Product, 'price'>; // { price: number; }

      const price: Price = { price: 300 };
      console.log(price);
    }

    {
      //* Omit<T, K>
      // Constructs a type by omitting the specified properties K from T.

      type Product = {
        name: string;
        price: number;
      };

      type Name = Omit<Product, 'price'>; // { name: string; }

      const name: Name = { name: 'John' };
      console.log(name);
    }
  }
}
