{
  //* Union and Intersection Type (module video)
  type NoobDeveloper = {
    name: string;
  };

  // type JuniorDeveloper = {
  //   name: string;
  //   expertise: string;
  //   experience: number;
  // };

  type JuniorDeveloper = NoobDeveloper & {
    expertise: string;
    experience: number;
  };

  type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience: number;
    level: 'junior' | 'mid' | 'senior';
  };

  const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: 'John',
    expertise: 'Javascript',
    experience: 1,
  };

  const seniorDeveloper: NextLevelDeveloper = {
    name: 'Alex',
    expertise: 'Typescript',
    experience: 2,
    leadershipExperience: 1,
    level: 'junior',
  };

  // =======================
  // =======================

  //* Union Types
  // Defining a variable with a union type
  let myVar: number | string;
  myVar = 42; // Valid, as it's a number
  myVar = 'Hello'; // Valid, as it's a string
  // myVar = true;  // Invalid, as it's not a number or a string

  // Function parameter with a union type
  function printValue(value: number | string) {
    console.log(value);
  }

  printValue(123); // Valid
  printValue('Hello'); // Valid
  // printValue(true);  // Invalid

  // Union types with other types
  type Status = 'success' | 'error' | 'pending';

  function processStatus(status: Status) {
    // Logic for handling different status values
  }

  processStatus('success'); // Valid
  processStatus('error'); // Valid
  processStatus('pending'); // Valid
  // processStatus("other");   // Invalid, as it's not one of the specified values

  //* Intersection Types
  type Person = {
    name: string;
    age: number;
  };

  type Employee = {
    employeeId: number;
    jobTitle: string;
  };

  type PersonEmployee = Person & Employee;

  const john: PersonEmployee = {
    name: 'John',
    age: 30,
    employeeId: 12345,
    jobTitle: 'Developer',
  };

  //* Enum Types
  enum Level {
    junior = 'junior',
    mid = 'mid',
    senior = 'senior',
  }

  enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT',
  }

  enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = 'YES',
  }
}
