{
  // Literal Types (Fixed value type)

  // A Literal Type is a single element set-from a collective type, it defines a very exact type that is a JavaScript primitive.

  // NOTE: Literal Types in TypeScript are numbers, strings & booleans.

  // Example of literals:

  const a = 'a'; // String literal type
  const b = 1; // Numeric literal type
  const c = true; // Boolean literal type

  // String, Numeric, and Boolean Literal Types are used in the union, type guard, and type aliases. In the following example you can see a type alias union, `O` can be the only value specified and not any other string:

  type O = 'a' | 'b' | 'c';
}
