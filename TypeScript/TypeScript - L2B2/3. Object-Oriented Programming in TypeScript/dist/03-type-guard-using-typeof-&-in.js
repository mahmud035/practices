"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Type Guards are runtime checks that narrow down types within conditional blocks. They help TypeScript understand the exact type of a variable, ensuring safe property access and method calls.
 
 * Why Use Type Guards?
    - ✅ Prevent runtime errors by ensuring type safety
    - ✅ Improve code readability and maintainability
    - ✅ Allow TypeScript to infer the correct type
 */
// ----------------------------------------a
// Type Guards Using `typeof` Operator
// ----------------------------------------
function processInput(input) {
    if (typeof input === 'string') {
        console.log(`String input: ${input.toUpperCase()}`);
    }
    else {
        console.log(`Number input: ${input * 2}`);
    }
}
processInput('hello'); // Output: String input: HELLO
processInput(10); // Output: Number input: 20
function identifyVehicle(vehicle) {
    if ('wheels' in vehicle) {
        console.log(`This is a car from ${vehicle.brand}`);
    }
    else {
        console.log(`This is a boat from ${vehicle.brand}`);
    }
}
identifyVehicle({ brand: 'Toyota', wheels: 4 }); // Output: This is a car from Toyota
identifyVehicle({ brand: 'Yamaha', sails: 2 }); // Output: This is a boat from Yamaha
function identifyAnimal(animal) {
    if (typeof animal === 'string') {
        console.log(`This is just a string: ${animal}`);
    }
    else if ('bark' in animal) {
        console.log(`This is a dog named ${animal.name}`);
    }
    else {
        console.log(`This is a cat named ${animal.name}`);
    }
}
identifyAnimal('random text'); // Output: This is just a string: random text
identifyAnimal({ name: 'Rex', bark: () => console.log('Woof!') }); // Output: This is a dog named Rex
identifyAnimal({ name: 'Kitty', meow: () => console.log('Meow!') }); // Output: This is a cat named Kitty
/**
 * Explanation:

 * This example checks "if the input is a string first" and then determines if it's a `Dog` or `Cat` using `"bark" in animal`.
 */
