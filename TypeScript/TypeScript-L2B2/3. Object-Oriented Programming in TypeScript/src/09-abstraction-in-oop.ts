export {};

// ----------------------------------------
// 4. Abstract Classes (Forcing Subclasses to Implement Methods)
// ----------------------------------------

// Abstract classes provide a base class that "cannot be instantiated directly". They can contain "abstract methods" (without implementation) that must be implemented in derived classes.

/**
 * An abstract class:
    - "Cannot be instantiated directly"
    - Contains "abstract methods" (methods without a body)
    - "Forces child classes" to implement abstract methods
 */

abstract class AnimalCl {
  // Abstract property
  abstract name: string;

  // Abstract method: no implementation here &
  // Must be implemented by subclasses
  abstract makeSound(): void;

  // Concrete method: can be used by subclasses
  sleep(): void {
    console.log('Sleeping... 😴');
  }
}

class DogCl extends AnimalCl {
  name = 'Dog';

  makeSound(): void {
    console.log('Dog barks 🐶');
  }
}

class CatCl extends AnimalCl {
  name = 'Cat';

  makeSound(): void {
    console.log('Cat meows 🐱');
  }
}

// const animal = new Animal(); // ❌ Error: Cannot create an instance of an abstract class

const dog = new DogCl();
dog.makeSound(); // ✅ Output: Dog barks 🐶
dog.sleep(); // ✅ Output: Sleeping... 😴

const cat = new CatCl();
cat.makeSound(); // ✅ Output: Cat meows 🐱

/**
 * Explanation:

 * Abstract Class:
   `AnimalCl` is declared with the `abstract` keyword, meaning you cannot create an instance of it directly.

 * Abstract Methods:
   The `makeSound` method is abstract and must be implemented in any concrete subclass like `DogCl` & `CatCl`.

 * Concrete Methods:
   Methods like `sleep` provide common functionality that all subclasses can use.
 */

// ----------------------------------------
// Real-World Example: Abstraction in Payment Systems
// ----------------------------------------

// Imagine you are building an online payment system where different payment methods have different ways of processing payments.

abstract class Payment {
  abstract processPayment(amount: number): void;

  sendReceipt(): void {
    console.log('Receipt sent to the customer.');
  }
}

class CreditCardPayment extends Payment {
  processPayment(amount: number): void {
    console.log(`Processing credit card payment of $${amount} 💳`);
  }
}

class PayPalPayment extends Payment {
  processPayment(amount: number): void {
    console.log(`Processing PayPal payment of $${amount} 🏦`);
  }
}

// Using abstraction
const payments: Payment[] = [new CreditCardPayment(), new PayPalPayment()];

payments.forEach((payment) => {
  payment.processPayment(100);
  payment.sendReceipt();
});

/* 
Outputs:
Processing credit card payment of $100 💳
Receipt sent to the customer.
Processing PayPal payment of $100 🏦 
Receipt sent to the customer.
*/

/**
 * Explanation:

 * The `processPayment()` method is "abstract" → each subclass must implement it differently.

 * The `sendReceipt()` method is "concrete" → it is inherited as-is.
 */

// ----------------------------------------
// Abstraction Using Interfaces
// ----------------------------------------

// Interfaces define method signatures without providing an implementation.

// Any class that implements an interface must define all its methods.

interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  getArea(): number {
    return this.width * this.height;
  }
}

// Using abstraction
const shapes: Shape[] = [new Circle(5), new Rectangle(4, 6)];

shapes.forEach((shape) => {
  console.log('Area:', shape.getArea());
});

/* 
Outputs:
Area: 78.53981633974483
Area: 24
*/
