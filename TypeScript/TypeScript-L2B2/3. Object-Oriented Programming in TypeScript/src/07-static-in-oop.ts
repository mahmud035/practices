export {};

/**
 * The `static` keyword in TypeScript is used to "define properties and methods that belong to the class itself" rather than an instance of the class.
 */

// ----------------------------------------
// 5. Static Members
// ----------------------------------------

// Static properties and methods belong to the class itself rather than any instance. They are accessed directly on the class.

class CalculatorCl {
  static PI = 3.1416;

  static calculateArea(radius: number): number {
    return this.PI * radius * radius;
  }
}

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
  static counter: number = 0;

  static increment(): number {
    CounterCl.counter += 1; // Access via class name
    return CounterCl.counter;
  }

  static decrement(): number {
    CounterCl.counter -= 1; // Access via class name
    return CounterCl.counter;
  }
}

console.log(CounterCl.increment());
console.log(CounterCl.decrement());

// ----------------------------------------
// Static vs Instance Members
// ----------------------------------------

class Person {
  static species = 'Homo sapiens'; // Static property
  name: string; // Instance property

  constructor(name: string) {
    this.name = name;
  }

  static describeSpecies(): string {
    return `All humans belong to species: ${Person.species}`;
  }

  introduce(): string {
    return `Hi, I'm ${this.name} and I'm a ${Person.species}`;
  }
}

const p1 = new Person('Alice');
console.log(Person.species); // ✅ Output: Homo sapiens
console.log(p1.introduce()); // ✅ Output: Hi, I'm Alice and I'm a Homo sapiens

// console.log(p1.describeSpecies()); // ❌ Error: Static method cannot be accessed through an instance
console.log(Person.describeSpecies()); // ✅ Output: All humans belong to species: Homo sapiens

// ----------------------------------------
// Real-World Example: User Management
// ----------------------------------------

class User {
  static totalUsers = 0;

  constructor(public name: string) {
    User.totalUsers++;
  }

  static getTotalUsers(): number {
    return User.totalUsers;
  }
}

const u1 = new User('Alice');
const u2 = new User('Bob');

console.log(User.getTotalUsers()); // ✅ Output: 2

/**
 * Explanation:

 * `totalUsers` "tracks all users", no matter how many instances are created.
 */
