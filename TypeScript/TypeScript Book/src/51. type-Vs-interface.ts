{
  // Differences between Type and Interface

  //* Extending other types/interfaces:

  // Both types and interfaces can extend other types/interfaces, but the syntax is different. With interfaces, you use the `extends` keyword to inherit properties and methods from other interfaces. However, an interface cannot extend a complex type like a union type.

  interface A {
    x: string;
    y: number;
  }

  interface B extends A {
    z: string;
  }

  const car: B = {
    x: 'x',
    y: 123,
    z: 'z',
  };

  console.log(car);

  // For types, you use the `&`operator to combine multiple types into a single type (`intersection`).

  type C = {
    x: string;
    y: number;
  };

  type D = C & {
    z: string;
  };

  const car2: D = {
    x: 'x',
    y: 123,
    z: 'z',
  };

  console.log(car2);

  //* Union and Intersection Types:

  // NOTE: Types are more flexible when it comes to defining Union and Intersection Types. With the type keyword, you can easily create union types using the `|` operator and intersection types using the `&` operator.

  type Department = 'dep-x' | 'dep-y'; // Union

  type Person = {
    name: string;
    age: number;
  };

  type Employee = {
    id: number;
    department: Department;
  };

  type EmployeeType = Person & Employee; // Intersection

  const employee: EmployeeType = {
    name: 'John Doe',
    age: 36,
    id: 1,
    department: 'dep-x',
  };

  console.log(employee);
}
