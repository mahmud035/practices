export {};

/**
 * The `instanceof` operator is used to check "whether an object is an instance of a specific class" or constructor function. It helps TypeScript narrow down types at runtime.

 * Why Use Type Guards?
    - ✅ Works with classes and custom objects
    - ✅ Prevents runtime errors by ensuring type safety
    - ✅ Allows TypeScript to infer correct types automatically
    
 * How `instanceof` Works?
    - Syntax: `object instanceof ClassName`

    - Returns `true` if `object` is an "instance" of `ClassName`
    - Returns `false` if `object` is "not" an instance of `ClassName`
 */

// ----------------------------------------a
// Basic `instanceof` Check
// ----------------------------------------

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof! Woof!');
  }
}

const dog = new Dog('Buddy');

console.log(dog instanceof Dog); // ✅ true
console.log(dog instanceof Animal); // ✅ true (since Dog extends Animal)
console.log(dog instanceof Object); // ✅ true (all objects are instances of Object)

/**
 * Explanation:

 * `dog instanceof Dog` → ✅ True, because `dog` is created from `Dog`.

 * `dog instanceof Animal` → ✅ True, because `Dog` inherits from `Animal`.

 * `dog instanceof Object` → ✅ True, because "everything in JavaScript is an object".
 */

// ----------------------------------------
// Using `instanceof` for Type Guards
// ----------------------------------------

// `instanceof` is commonly used in functions that handle different object types.

class Cat {
  meow() {
    console.log('Meow!');
  }
}

function makeSound(animal: Animal | Cat) {
  if (animal instanceof Cat) {
    animal.meow(); // ✅ Safe to call, TypeScript knows it's a Cat
  } else {
    console.log(`${animal.name} is making a generic animal sound.`);
  }
}

const myCat = new Cat();
const myAnimal = new Animal('Tiger');

makeSound(myCat); // Output: Meow!
makeSound(myAnimal); // Output: Tiger is making a generic animal sound.

/**
 * Explanation:

 * `animal instanceof Cat` → Ensures `animal` is a Cat before calling `meow()`.

 * If it’s not a Cat, we safely use the Animal class properties.
 */

// ----------------------------------------
// `instanceof` with Multiple Classes
// ----------------------------------------

// You can check for "multiple possible types" using `instanceof`.

class Car {
  drive() {
    console.log('Driving a car...');
  }
}

class Bike {
  ride() {
    console.log('Riding a bike...');
  }
}

function startVehicle(vehicle: Car | Bike) {
  if (vehicle instanceof Car) {
    vehicle.drive(); // ✅ Safe to call
  } else {
    vehicle.ride(); // ✅ Safe to call
  }
}

const myCar = new Car();
const myBike = new Bike();

startVehicle(myCar); // Output: Driving a car...
startVehicle(myBike); // Output: Riding a bike...

/**
 * Explanation:

 * Without `instanceof`, TypeScript wouldn't know whether to call `drive()` or `ride()` safely.
 */

// ----------------------------------------
// `instanceof` with Abstract Classes
// ----------------------------------------

// Since "abstract classes" can’t be instantiated directly, `instanceof` is useful to check subclasses.

abstract class Employee {
  constructor(public name: string) {}
}

class Manager extends Employee {
  manageTeam() {
    console.log(`${this.name} is managing the team.`);
  }
}

class Developer extends Employee {
  writeCode() {
    console.log(`${this.name} is writing code.`);
  }
}

function employeeRole(emp: Employee) {
  if (emp instanceof Manager) {
    emp.manageTeam(); // ✅ Safe to call
  } else if (emp instanceof Developer) {
    emp.writeCode(); // ✅ Safe to call
  }
}

const manager = new Manager('Alice');
const developer = new Developer('Bob');

employeeRole(manager); // Output: Alice is managing the team.
employeeRole(developer); // Output: Bob is writing code.

/**
 * Explanation:

 * `instanceof` helps distinguish between `Manager` and `Developer` at runtime.
 */
