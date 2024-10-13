{
  // Interface and Type

  // Example `interface`:
  interface IPerson {
    name: string;
    age: number;
    greet(): void;
  }

  const person: IPerson = {
    name: 'John Doe',
    age: 36,
    greet() {
      console.log(`Hello ${this.name}`);
    },
  };

  console.log(person.name);
  console.log(person.age);
  person.greet();

  // Example of `type`:
  type TName = {
    firstName: string;
    lastName: string;
    fullName(arg1: string, arg2: string): string;
  };

  const name: TName = {
    firstName: 'Steve',
    lastName: 'Smith',
    fullName(arg1, arg2) {
      return `Hello, ${arg1} ${arg2}`;
    },
  };

  console.log(name.firstName);
  console.log(name.lastName);
  console.log(name.fullName('Steve', 'Smith'));
}
