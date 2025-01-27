{
  //* 1. Basic Type alias
  // IMPORTANT:
  type Crush = {
    name: string;
    age?: number; // optional parameter
    profession: string;
    address: string;
  };

  const crush1: Crush = {
    name: 'Moina Pakhi',
    age: 22,
    profession: 'Web Developer',
    address: 'Uganda',
  };

  const crush2: Crush = {
    name: 'Tia Pakhi',
    profession: 'Web Designer',
    address: 'Uganda',
  };

  type CrushMarriedType = boolean;
  const isCrushMarried: CrushMarriedType = false;

  type CourseNameType = string;
  const courseName: CourseNameType = 'Next Level Web Development';

  //* 2. Union Type Alias (combining multiple types)
  type Result = number | string;

  //* 3. Intersection Type Alias (combining multiple types into one)
  type Person = {
    name: string;
    age: number;
  };

  type Address = {
    city: string;
    street: string;
  };

  type Contact = Person & Address;

  // IMPORTANT:
  //* 4. Mapped Type Alias (transforming existing types)
  type Optional<T> = {
    [P in keyof T]?: T[P];
  };

  // IMPORTANT:
  //* 5. Function Type Alias (describing function signatures)
  type OperationType = (x: number, y: number) => number;

  const calculate = (
    num1: number, // 10
    num2: number, // 20
    operation: OperationType // (x, y) => x + y || (10, 20) => 10 + 20
  ): number => {
    return operation(num1, num2);
  };

  console.log(calculate(10, 20, (x, y) => x + y));
  console.log(calculate(20, 10, (x, y) => x - y));
  console.log(calculate(20, 10, (x, y) => x * y));

  // IMPORTANT:
  //* 6. Type Alias for Generics (creating reusable type templates)
  type Pair<T, U> = {
    first: T;
    second: U;
  };
}
