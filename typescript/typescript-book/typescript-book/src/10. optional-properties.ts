{
  // Optional Properties

  // An object can specify Optional Properties by adding a question mark `?` to the end of the property name:

  {
    type X = {
      a: number;
      b?: number; // Optional
    };
  }

  // It is possible to specify a default value when a property is optional”

  {
    type X = {
      a: number;
      b?: number; // Optional
    };

    const x = ({ a, b = 100 }: X) => a + b;
  }
}
