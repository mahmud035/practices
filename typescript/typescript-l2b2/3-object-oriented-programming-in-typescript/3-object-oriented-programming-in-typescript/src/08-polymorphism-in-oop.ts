export {};

/**
 * Polymorphism means "many forms." In TypeScript (and Object-Oriented Programming), polymorphism allows different classes to be treated as instances of the same parent class.
 
 * There are two main types of polymorphism in TypeScript:
    - 1️⃣ Method Overriding (Runtime Polymorphism)
    - 2️⃣ Method Overloading (Compile-time Polymorphism)
 */

// ----------------------------------------
// Method Overriding (Runtime Polymorphism)
// ----------------------------------------

/**
 * A "subclass provides a specific implementation" of a method that is already defined in its parent class.
 *
 * The method name and parameters remain "the same", but the behavior "changes".
 *
 * This is an example of "dynamic (runtime) polymorphism".
 */

// Example of Polymorphism in OOP
//* Parent Class
class PersonCl {
  takeNap(): void {
    console.log(`I am sleeping 8 hours per day`);
  }
}

//* Child Class
class StudentCl extends PersonCl {
  // Overriding parent class method
  takeNap(): void {
    console.log(`I am sleeping 10 hours per day`);
  }
}

//* Child Class
class DeveloperCl extends PersonCl {
  // Overriding parent class method
  takeNap(): void {
    console.log(`I am sleeping 5 hours per day`);
  }
}

function getNap(param: PersonCl) {
  param.takeNap();
}

const person = new PersonCl();
const student = new StudentCl();
const developer = new DeveloperCl();

getNap(person); // Output: I am sleeping 8 hours per day
getNap(student); // Output: I am sleeping 10 hours per day
getNap(developer); // Output: I am sleeping 5 hours per day

// ----------------------------------------
// Another Example of Runtime Polymorphism
// ----------------------------------------

//* Parent Class
class ShapeCl {
  getArea(): number {
    return 0;
  }
}

//* Child Class
class CircleCl extends ShapeCl {
  constructor(public radius: number) {
    super();
  }

  // Overriding parent class method
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

//* Child Class
class RectangleCl extends ShapeCl {
  constructor(public width: number, public height: number) {
    super();
  }

  // Overriding parent class method
  getArea(): number {
    return this.width * this.height;
  }
}

function getAreaOfShape(param: ShapeCl) {
  console.log(param.getArea());
}

const circle = new CircleCl(10);
const rectangle = new RectangleCl(10, 20);

getAreaOfShape(circle); // Output: 314.1592653589793
getAreaOfShape(rectangle); // Output: 200

// ----------------------------------------
// Method Overloading (Compile-time Polymorphism)
// ----------------------------------------

/**
 * "Same method name, but different parameters".
 *
 * In TypeScript, method overloading works by "defining multiple method signatures".
 *
 * The actual implementation should handle all cases.
 */

class Calculator {
  add(x: number, y: number): number; // Signature 1
  add(x: string, y: string): string; // Signature 2
  add(x: any, y: any): any {
    // Actual implementation
    return x + y;
  }
}

const calc = new Calculator();

console.log(calc.add(10, 20)); // ✅ Output: 30 (Numbers added)
console.log(calc.add('Hello, ', 'World!')); // ✅ Output: "Hello, World!" (Strings concatenated)

/**
 * Explanation:
 *
 * Multiple method "signatures" allow different input types.
 *
 * The "implementation method" handles both cases.
 *
 * This is "compile-time polymorphism" because the correct method is determined at compile time.
 */

// ----------------------------------------
// Polymorphism in Action: Real-World Example
// ----------------------------------------

// Let’s say we have an "e-commerce system" where different payment methods have different processing rules.

abstract class Payment {
  abstract processPayment(amount: number): void;
}

class CreditCard extends Payment {
  processPayment(amount: number): void {
    console.log(`Paid $${amount} using Credit Card 💳`);
  }
}

class Paypal extends Payment {
  processPayment(amount: number): void {
    console.log(`Paid $${amount} using PayPal 🏦`);
  }
}

class Crypto extends Payment {
  processPayment(amount: number): void {
    console.log(`Paid $${amount} using Cryptocurrency ₿`);
  }
}

// Using Polymorphism
const payments: Payment[] = [new CreditCard(), new Paypal(), new Crypto()];

payments.forEach((payment) => payment.processPayment(100));

/* 
Outputs:
Paid $100 using Credit Card 💳
Paid $100 using PayPal 🏦  
Paid $100 using Cryptocurrency ₿  
*/
