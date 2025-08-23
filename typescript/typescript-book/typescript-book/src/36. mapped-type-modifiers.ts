{
  // Mapped Type Modifiers

  // Mapped Type Modifiers in TypeScript enable the transformation of properties within an existing type:

  /* 
  👉 `readonly` or `+readonly`: This renders a property in the mapped type as read-only.

  👉 `-readonly`: This allows a property in the mapped type to be mutable.

  👉 `?`: This designates a property in the mapped type as optional.
  */

  // Ex:
  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P]; // All properties marked as read-only
  };

  type Mutable<T> = {
    -readonly [P in keyof T]: T[P]; // All properties marked as mutable
  };

  type MyPartial<T> = {
    [P in keyof T]?: T[P]; // All properties marked as optional
  };
}
