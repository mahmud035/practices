{
  /**
   * IMPORTANT: কখন type আর কখন interface ব্যবহার করবো ?

   * NOTE: সবকিছুর type define করার জন্য type keyword টা ব্যবহার করতে পারি।
   *
   * NOTE: object এর type define করার জন্য type অথবা interface যে কোন একটা keyword ব্যবহার করতে পারি। 
   * 
   * class এর সাথে interface ব্যবহার করবো।
   */

  //* Defining & Extending type Using "type" keyword
  type User1 = {
    name: string;
    age: number;
  };

  type UserWithRoll1 = User1 & { role: string };

  const user1: UserWithRoll1 = {
    name: 'Persian',
    age: 100,
    role: 'manager',
  };

  //* Defining & Extending type Using "interface" keyword
  interface User2 {
    name: string;
    age: number;
  }

  interface UserWithRoll2 extends User2 {
    role: string;
  }

  const user2: UserWithRoll2 = {
    name: 'Persian',
    age: 100,
    role: 'manager',
  };

  //* Using "type With Array" (Recommended)
  // js --> object, array --> object, function --> object

  type Roll1 = number[];

  const rollNumber1: Roll1 = [1, 2, 3];

  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber2: Roll2 = [1, 2, 3];

  //* Using "type With function" (Recommended)
  type Add1 = (num1: number, num2: number) => number;

  const add1: Add1 = (num1, num2) => num1 + num2;

  interface Add2 {
    (num1: number, number: number): number;
  }

  const add2: Add2 = (num1, num2) => num1 + num2;
}
