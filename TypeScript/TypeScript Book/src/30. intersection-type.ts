{
  // Intersection Types

  // An Intersection Type is a type that represents a value that has all the properties of two or more types. Intersection Types are denoted using the `&` symbol between each type.

  type X = {
    a: string;
  };

  type Y = {
    b: string;
  };

  type Z = X & Y; // Intersection

  const z: Z = {
    a: 'a',
    b: 'b',
  };
}
