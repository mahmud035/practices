"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Inheritance is an OOP (Object-Oriented Programming) concept where a child (subclass) inherits properties and methods from a parent (superclass).
 */
// ----------------------------------------
// 3. Inheritance (`extends`)
// ----------------------------------------
// Classes can extend other classes using the `extends` keyword, enabling code reuse and polymorphism.
class EmployeeCl {
    constructor(name, salary, department, id) {
        this.name = name;
        this.salary = salary;
        this.department = department;
        this.id = id;
    }
    showDetails() {
        console.log(`${this.name} works in ${this.department}`);
        // Accessing private member within the class is allowed
        console.log(`Salary: ${this.salary}`);
    }
}
class ManagerCl extends EmployeeCl {
    constructor(name, salary, department, id, teamSize) {
        // Call the parent class's constructor
        super(name, salary, department, id);
        this.teamSize = teamSize;
    }
    // Override method to include team size
    showDetails() {
        super.showDetails();
        console.log(`Manages a team of ${this.teamSize} people.`);
    }
}
const manager = new ManagerCl('Carol', 80000, 'IT', 102, 10);
manager.showDetails();
/*
Outputs:
Carol works in IT.
Salary: 80000
Manages a team of 10 people.
*/
/**
 * Explanation:

 * Inheritance:
   The `ManagerCl` class inherits from `EmployeeCl` using `extends`.

 * `super()`:
   The `super()` function calls the parent class constructor to initialize inherited properties.

 * Method Overriding:
   The `showDetails` method in ManagerCl first calls the parent method with `super.showDetails()` and then extends its functionality.
 */
