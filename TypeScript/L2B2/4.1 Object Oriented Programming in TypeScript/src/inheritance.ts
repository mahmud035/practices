{
  //* OOP - Inheritance

  //* Parent Class
  class Person {
    // parameter properties
    constructor(
      public name: string,
      public age: number,
      public address: string
    ) {}

    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours} hours`);
    }
  }

  //* Child Class
  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  const student1 = new Student('John', 28, 'Dhaka');
  console.log(student1);

  student1.getSleep(7); // Access Parent Class Method

  //* Child Class
  class Teacher extends Person {
    constructor(
      name: string,
      age: number,
      address: string,
      public designation: string // child class own property
    ) {
      super(name, age, address);
    }

    takeClasses(numOfClass: number) {
      console.log(`${this.name} will take ${numOfClass} classes`);
    }
  }

  const teacher1 = new Teacher('Mr. X', 40, 'Khulna', 'Professor');
  console.log(teacher1);

  teacher1.getSleep(6); // Access Parent Class Method
  teacher1.takeClasses(4); // Access Own Method
}
