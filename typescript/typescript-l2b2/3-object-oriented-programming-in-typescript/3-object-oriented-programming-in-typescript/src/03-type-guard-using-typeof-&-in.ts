export {};

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

function processInput(input: string | number) {
  if (typeof input === 'string') {
    console.log(`String input: ${input.toUpperCase()}`);
  } else {
    console.log(`Number input: ${input * 2}`);
  }
}

processInput('hello'); // Output: String input: HELLO
processInput(10); // Output: Number input: 20

/**
 * Explanation:

 * `typeof input === "string"` → Ensures TypeScript treats input as a string.

 * `typeof input === "number"` → Ensures input is a number before multiplying.
 */

// ----------------------------------------
// Type Guards Using `in` Operator
// ----------------------------------------

// The `in` operator checks if a property exists in an object.

type Car = { brand: string; wheels: number };
type Boat = { brand: string; sails: number };

function identifyVehicle(vehicle: Car | Boat) {
  if ('wheels' in vehicle) {
    console.log(`This is a car from ${vehicle.brand}`);
  } else {
    console.log(`This is a boat from ${vehicle.brand}`);
  }
}

identifyVehicle({ brand: 'Toyota', wheels: 4 }); // Output: This is a car from Toyota
identifyVehicle({ brand: 'Yamaha', sails: 2 }); // Output: This is a boat from Yamaha

/**
 * Explanation:

 * `"wheels" in vehicle` → Checks if the `vehicle` object has a `wheels` property.

 * If `wheels` exists → TypeScript infers that it's a `Car`.

 * If `wheels` is missing → TypeScript infers that it's a `Boat`.
 */

// ----------------------------------------
// Combining `typeof` and `in` for Robust Type Guards
// ----------------------------------------

// You can combine `typeof` and `in` for better type safety.

type Dog = { name: string; bark: () => void };
type Cat = { name: string; meow: () => void };

function identifyAnimal(animal: Dog | Cat | string) {
  if (typeof animal === 'string') {
    console.log(`This is just a string: ${animal}`);
  } else if ('bark' in animal) {
    console.log(`This is a dog named ${animal.name}`);
  } else {
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
