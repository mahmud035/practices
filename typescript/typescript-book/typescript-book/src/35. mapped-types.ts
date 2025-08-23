{
  // Mapped Types

  // IMPORTANT: Mapped Types in TypeScript allow you to create new types based on an existing type by transforming each property using a mapping function. By mapping existing types, you can create new types that represent the same information in a different format. To create a mapped type, you access the properties of an existing type using the `keyof` operator and then alter them to produce a new type. In the following example:

  type MyType = {
    foo: string;
    bar: number;
  };

  type MyMappedType<T> = {
    [P in keyof T]: T[P][];
  };

  type MyNewTpe = MyMappedType<MyType>;

  const x: MyNewTpe = {
    foo: ['hello', 'world'],
    bar: [1, 2, 3],
  };

  // we define `MyMappedType` to map over T’s properties, creating a new type with each property as an array of its original type. Using this, we create `MyNewType` to represent the same info as `MyType`, but with each property as an array.
}
