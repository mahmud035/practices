"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * "Encapsulation" is one of the four fundamental principles of Object-Oriented Programming (OOP), alongside Abstraction, Inheritance, and Polymorphism.
 *
 * 🔹 Encapsulation is the process of "restricting direct access to certain data and methods" in a class and only allowing controlled access through public methods.
 *
 * 🔹 In simple words:
 *  - It "hides the internal details" of an object from the outside world.
 *  - It "protects data" from accidental modification.
 *  - It allows controlled access via "getters and setters".
 *
 ** 📌 How to Implement Encapsulation in TypeScript?
 *  - Encapsulation is achieved using Access Modifiers:
 
     `public` (default): Members are accessible anywhere.

     `private`: Members are accessible only within the class where they are declared.
     
     `protected`: Members are accessible within the class and its subclasses.
 */
// ----------------------------------------
// 1️⃣ Using Private Properties for Encapsulation
// ----------------------------------------
// "Mark properties as" `private` so they cannot be accessed directly.
// "Use methods (getters/setters) to access and modify data".
class BankAccount {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    // Public method to get balance
    getBalance() {
        return this.balance;
    }
    // Public method to deposit money (encapsulating the logic)
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited $${amount}. New balance: $${this.balance}`);
        }
        else {
            console.log('Deposit amount must be positive.');
        }
    }
    // Public method to withdraw money
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
        }
        else {
            console.log('Invalid withdrawal amount.');
        }
    }
}
// Using encapsulation
const account = new BankAccount(1000);
console.log(account.getBalance()); // ✅ Allowed: Get balance
account.deposit(500); // ✅ Allowed: Deposits money
account.withdraw(200); // ✅ Allowed: Withdraws money
// console.log(account.balance); // ❌ Error: 'balance' is private
// account.balance = 5000; // ❌ Error: Cannot modify private property directly
/*
1000
Deposited $500. New balance: $1500
Withdrew $200. New balance: $1300
*/
/**
 * Explanation:
 *
 * `balance` is "private", so it "cannot" be accessed directly from outside.
 *
 * Methods `deposit()`, `withdraw()`, and `getBalance()` provide "controlled access" to modify and retrieve the data.
 */
// ----------------------------------------
// 2️⃣ Using Getters and Setters for Encapsulation
// ----------------------------------------
// TypeScript provides getters and setters to encapsulate properties and control access.
class Person {
    constructor(age) {
        this._age = age;
    }
    // Getter method (to retrieve the age)
    get age() {
        return this._age;
    }
    // Setter method (to set the age with validation)
    set age(newAge) {
        if (newAge > 0)
            this._age = newAge;
        else
            console.log('Age must be a positive number.');
    }
}
const person = new Person(25);
console.log(person.age); // ✅ Output: 25 (getter is used)
person.age = 30; // ✅ Setter is used to update age
console.log(person.age); // ✅ Output: 30
person.age = -5; // ❌ Invalid input (setter prevents negative age)
/**
 * Explanation:
 *
 * `age is a private property, so it cannot be accessed directly.
 *
 * Getter (`get age()`) allows controlled access to retrieve the value.
 *
 * Setter (`set age(value)`) ensures that only valid values are assigned.
 */
// ----------------------------------------
// 3️⃣ Using Protected for Encapsulation
// ----------------------------------------
// `protected` properties can be accessed within the class and its subclasses but not outside.
// Useful for "inheritance" when we want derived classes to access certain properties.
class Employee {
    constructor(salary) {
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}
class Manager extends Employee {
    constructor(salary) {
        super(salary);
    }
    displaySalary() {
        console.log(`Manager's salary is: $${this.getSalary()}`);
    }
}
const manager = new Manager(5000);
manager.displaySalary(); // ✅ Allowed
// console.log(manager.salary); // ❌ Error: 'salary' is protected
/**
 * Explanation:
 *
 * The `salary` property is `protected`, so it "cannot be accessed directly" outside the class.
 *
 * The "subclass" (`Manager`) can still access `salary` and `getSalary()`.
 *
 * "Encapsulation restricts unauthorized access" while allowing controlled inheritance.
 */
// ----------------------------------------
// Real-World Example: Encapsulation in an E-Commerce System
// ----------------------------------------
// Imagine you’re building an e-commerce system where customers have orders.
class Order {
    constructor(orderId) {
        this.items = [];
        this.orderId = orderId;
    }
    addItem(item) {
        this.items.push(item);
        console.log(`Added ${item} to order.`);
    }
    getOrderDetails() {
        return `Order ID: ${this.orderId}, Items: ${this.items.join(', ')}`;
    }
}
const order = new Order(12345);
order.addItem('Laptop');
order.addItem('Mouse');
console.log(order.getOrderDetails());
// console.log(order.orderId); // ❌ Error: 'orderId' is private
/*
Added Laptop to order.
Added Mouse to order.
Order ID: 12345, Items: Laptop, Mouse
*/
/**
 * Explanation:
 *
 * "Encapsulation ensures that the `orderId` cannot be modified externally."
 *
 * Users can only interact with "public methods" (`addItem()`, `getOrderDetails()`).
 */
