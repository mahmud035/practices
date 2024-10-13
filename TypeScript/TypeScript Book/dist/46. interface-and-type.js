"use strict";
{
    const person = {
        name: 'John Doe',
        age: 36,
        greet() {
            console.log(`Hello ${this.name}`);
        },
    };
    console.log(person.name);
    console.log(person.age);
    person.greet();
    const name = {
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
