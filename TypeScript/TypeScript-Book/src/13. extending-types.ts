{
  // Extending Types

  // It is possible to extend an `interface` (copy members from another interface):

  interface X {
    a: string;
  }

  interface Y extends X {
    b: string;
  }

  // It is also possible to extend from "multiple interfaces":

  interface A {
    a: string;
  }

  interface B {
    b: string;
  }

  interface C extends A, B {
    c: string;
  }

  // NOTE: The `extends` keyword works only on "interfaces" and "classes", for types use an intersection:

  type P = {
    p: string;
  };

  type Q = {
    q: string;
  };

  type R = P & Q;

  // It is possible to extend a type using an inference but not vice versa:

  interface D extends P {
    d: string;
  }
}
