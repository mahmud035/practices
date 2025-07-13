"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
class AnimalCl {
    // Concrete method: can be used by subclasses
    sleep() {
        console.log('Sleeping... 😴');
    }
}
class DogCl extends AnimalCl {
    constructor() {
        super(...arguments);
        this.name = 'Dog';
    }
    makeSound() {
        console.log('Dog barks 🐶');
    }
}
class CatCl extends AnimalCl {
    constructor() {
        super(...arguments);
        this.name = 'Cat';
    }
    makeSound() {
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
class Payment {
    sendReceipt() {
        console.log('Receipt sent to the customer.');
    }
}
class CreditCardPayment extends Payment {
    processPayment(amount) {
        console.log(`Processing credit card payment of $${amount} 💳`);
    }
}
class PayPalPayment extends Payment {
    processPayment(amount) {
        console.log(`Processing PayPal payment of $${amount} 🏦`);
    }
}
// Using abstraction
const payments = [new CreditCardPayment(), new PayPalPayment()];
payments.forEach((payment) => {
    payment.processPayment(100);
    payment.sendReceipt();
});
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
// Using abstraction
const shapes = [new Circle(5), new Rectangle(4, 6)];
shapes.forEach((shape) => {
    console.log('Area:', shape.getArea());
});
/*
Outputs:
Area: 78.53981633974483
Area: 24
*/
