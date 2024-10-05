"use strict";
{
    //* OOP - Inheritance
    //* Parent Class
    class Person {
        // parameter properties
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numOfHours) {
            console.log(`${this.name} will sleep for ${numOfHours} hours`);
        }
    }
    //* Child Class
    class Student extends Person {
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    const student1 = new Student('John', 28, 'Dhaka');
    console.log(student1);
    student1.getSleep(7); // Access Parent Class Method
    //* Child Class
    class Teacher extends Person {
        constructor(name, age, address, designation // child class own property
        ) {
            super(name, age, address);
            this.designation = designation;
        }
        takeClasses(numOfClass) {
            console.log(`${this.name} will take ${numOfClass} classes`);
        }
    }
    const teacher1 = new Teacher('Mr. X', 40, 'Khulna', 'Professor');
    console.log(teacher1);
    teacher1.getSleep(6); // Access Parent Class Method
    teacher1.takeClasses(4); // Access Own Method
}
