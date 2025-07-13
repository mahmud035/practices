"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The `static` keyword in TypeScript is used to "define properties and methods that belong to the class itself" rather than an instance of the class.
 */
// ----------------------------------------
// 5. Static Members
// ----------------------------------------
// Static properties and methods belong to the class itself rather than any instance. They are accessed directly on the class.
class CalculatorCl {
    static calculateArea(radius) {
        return this.PI * radius * radius;
    }
}
CalculatorCl.PI = 3.1416;
console.log(CalculatorCl.PI); // Outputs: 3.1416
console.log(CalculatorCl.calculateArea(5)); // Outputs: 78.54
/**
 * Explanation:

 * Static Property:
   `PI` is a static property that can be accessed using `CalculatorCl.PI` without creating an instance.

 * Static Method:
   `calculateArea` is a static method that also does not require an instance.
 */
// ========================================
class CounterCl {
    static increment() {
        CounterCl.counter += 1; // Access via class name
        return CounterCl.counter;
    }
    static decrement() {
        CounterCl.counter -= 1; // Access via class name
        return CounterCl.counter;
    }
}
CounterCl.counter = 0;
console.log(CounterCl.increment());
console.log(CounterCl.decrement());
// ----------------------------------------
// Static vs Instance Members
// ----------------------------------------
class Person {
    constructor(name) {
        this.name = name;
    }
    static describeSpecies() {
        return `All humans belong to species: ${Person.species}`;
    }
    introduce() {
        return `Hi, I'm ${this.name} and I'm a ${Person.species}`;
    }
}
Person.species = 'Homo sapiens'; // Static property
const p1 = new Person('Alice');
console.log(Person.species); // ✅ Output: Homo sapiens
console.log(p1.introduce()); // ✅ Output: Hi, I'm Alice and I'm a Homo sapiens
// console.log(p1.describeSpecies()); // ❌ Error: Static method cannot be accessed through an instance
console.log(Person.describeSpecies()); // ✅ Output: All humans belong to species: Homo sapiens
// ----------------------------------------
// Real-World Example: User Management
// ----------------------------------------
class User {
    constructor(name) {
        this.name = name;
        User.totalUsers++;
    }
    static getTotalUsers() {
        return User.totalUsers;
    }
}
User.totalUsers = 0;
const u1 = new User('Alice');
const u2 = new User('Bob');
console.log(User.getTotalUsers()); // ✅ Output: 2
/**
 * Explanation:

 * `totalUsers` "tracks all users", no matter how many instances are created.
 */
