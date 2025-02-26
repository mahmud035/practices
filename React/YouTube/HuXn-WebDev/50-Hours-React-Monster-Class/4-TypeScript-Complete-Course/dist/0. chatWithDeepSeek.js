// ================ Part-01 ================
//* Basic Types
// TypeScript provides basic types to represent common values:
// Primitive Types
const count = 42;
const fullName = 'John Doe';
const isDone = true;
// Arrays
const numbers = [1, 2, 3];
const names = ['Alice', 'Bob']; // Generic syntax
const mix = [1, 'Alice'];
// Tuples
const user = ['Alice', 30]; // Fixed-type array
// Any
let dynamicValue = 'This can be anything';
dynamicValue = 42; // No error
// Void (common for functions)
function logMessage() {
    console.info('This returns nothing');
}
logMessage();
console.log(count, fullName, isDone, numbers, names, mix, user, dynamicValue);
//* Type Inference
// TypeScript can automatically infer types:
let message = 'Hello World'; // TypeScript infers 'string'
// message = 123; // ❌ Error: Type 'number' not assignable to 'string'
console.log(message);
//* Functions with Type Annotations
// Add types to function parameters and return values:
// Basic function
function add(x, y) {
    return x + y;
}
// Arrow function
const multiply1 = (a, b) => a * b;
// Optional parameters
function greet(name, greeting) {
    return `${greeting || 'Hello'}, ${name}`;
}
add(1, 2);
multiply1(1, 2);
greet('Pavel', 'Hi');
function getFullName(person) {
    return `${person.firstName} ${person.lastName}`;
}
const user1 = { firstName: 'John', lastName: 'Doe' };
console.log(getFullName(user1)); // "John Doe"
function printCoordinates(pt) {
    console.log(`X: ${pt.x}, Y: ${pt.y}`);
}
//* Classes
// Object-oriented programming with TypeScript:
class Animal {
    constructor(name) {
        this.name = name;
    }
    // Method with return type
    speak() {
        return `${this.name} makes a noise`;
    }
}
// Inheritance
class Dog extends Animal {
    speak() {
        return `${this.name} barks`;
    }
}
const dog = new Dog('Rex');
console.log(dog.speak()); // "Rex barks"
// Practice Task
// interface IUser {
//   id: number;
//   username: string;
//   email: string;
//   age?: number; // Optional property
// }
// function createUser(user: IUser) {
//   return { id: user.id, name: user.username, email: user.email };
// }
// ================ Part-02 ================
//* Generics
// Reusable components that work with "multiple types" while preserving type information.
// Basic Generic Example:
function identity(arg) {
    return arg;
}
const output1 = identity('Hello'); // Explicit type
const output2 = identity(42); // Type inferred as 42
const numberBox = { value: 42 };
const stringBox = { value: 'TS' };
function logLength(arg) {
    console.log(arg.length);
}
logLength('hello'); // ✅ 5 (strings have .length)
logLength([1, 2, 3]); // ✅ 3 (arrays have .length)
function printID(id) {
    if (typeof id === 'string')
        return id.toUpperCase();
    return id.toFixed(2);
}
const lead = {
    name: 'Alice',
    role: 'Engineering',
    teamSize: 5,
};
//* Enums
// Named constants with numeric or string values:
var Direction;
(function (Direction) {
    Direction["Up"] = "Up";
    Direction["Down"] = "Down";
    Direction["Left"] = "Left";
    Direction["Right"] = "Right";
})(Direction || (Direction = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["ServerError"] = 500] = "ServerError";
})(StatusCode || (StatusCode = {}));
// Usage:
const move = Direction.Up; // "Up"
const code = StatusCode.Success; // 200
//* Type Narrowing
// Techniques to refine types within conditional blocks:
// typeof checks
function padLeft(value) {
    if (typeof value === 'number')
        return ' '.repeat(value);
    return value;
}
// instanceof checks
class Car {
    drive() {
        console.log('Driving...');
    }
}
class Bike {
    ride() {
        console.log('Riding...');
    }
}
function useVehicle(vehicle) {
    if (vehicle instanceof Car) {
        vehicle.drive();
    }
    else {
        vehicle.ride();
    }
}
//* Type Assertions
// Override TypeScript's inferred type (use cautiously):
// Angle-bracket syntax
const input = document.getElementById('input');
function handleResponse(response) {
    if (response.status === 'success') {
        console.log(`Success: ${response.data}`);
    }
    else {
        console.log(`Error: ${response.errorMessage}`);
    }
}
// Example usage:
const successResponse = {
    status: 'success',
    data: 42,
};
const errorResponse = {
    status: 'error',
    errorMessage: 'Not found',
};
handleResponse(successResponse); // Success: 42
handleResponse(errorResponse); // Error: Not found
async function fetchPost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.json();
}
// Usage
fetchPost(1)
    .then((post) => console.log(post.title))
    .catch((error) => console.error(error));
//* Type Guards & Discriminated Unions
// Advanced type narrowing techniques:
// Custom type guard
function isString(value) {
    return typeof value === 'string';
}
function area(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.side ** 2;
    }
}
function isCat(animal) {
    return 'meow' in animal;
}
function animalSound(animal) {
    if (isCat(animal)) {
        animal.meow();
    }
    else {
        animal.bark();
    }
}
// Valid routes:
const validRoute1 = 'GET /api/v1/users';
const validRoute2 = 'POST /api/v1/products';
// Merged result:
const win = {
    title: 'My App',
    isMaximized: false, // Valid due to merging
};
const validJson = {
    users: [{ name: 'Alice', scores: [95, 87] }, { config: { darkMode: true } }],
};
export {};
