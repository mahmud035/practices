"use strict";
//* Parent Class
class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hours) {
        return `${this.name} will sleep for ${hours} hours`;
    }
}
//* Child Class
class Student extends Person {
    constructor(name, age, address) {
        super(name, age, address);
    }
}
const student1 = new Student('John', 30, 'Dhaka');
console.log(student1);
// console.log(student1.makeSleep(7)); // Access Method
//* Child Class
class Teacher extends Person {
    constructor(name, age, address, designation // child class own property
    ) {
        super(name, age, address);
        this.designation = designation;
    }
    takeClasses(numOfClass) {
        return `${this.name} will take ${numOfClass} classes`;
    }
}
const teacher1 = new Teacher('Mr. X', 40, 'Khulna', 'Professor');
console.log(teacher1);
// console.log(teacher1.makeSleep(6)); // Access Method
// console.log(teacher1.takeClasses(4)); // Access Method
