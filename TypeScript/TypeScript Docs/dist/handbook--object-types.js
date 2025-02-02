"use strict";
// export {};
function greet(person) {
    return `Hello ${person.name}`;
}
// Create a user object
const user = {
    id: 'u123',
    name: 'Alice',
    // 'age' is optional, so we can omit it
};
// 1️⃣ Readonly property example
// user.id = "u456"; // ❌ Error: Cannot assign to 'id' because it is read-only
// 2️⃣ Optional property example
console.log(user.age); // undefined (no error because property is optional)
// 3️⃣ Index signature example
user.customField = 'extra data'; // ✅ Valid (via index signature)
user.settings = { darkMode: true }; // ✅ Also valid
const config = {
    env: 'dev',
    apiUrl: 'https://api.example.com',
};
// config.env = "prod"; // ❌ Error: readonly property
config.timeout = 3000; // ✅ Valid (optional property)
config.debugMode = true; // ✅ Valid (via index signature)
config.retryCount = 3; // ✅ Valid
const state = {
    routes: ['/home', '/about'], // Using 'as const' for literal types (fixed value types)
};
const user2 = {
    name: 'John',
    age: 30,
    // email: 'john@example.com', // ❌ Error: Object literal may only specify known properties
};
// Bypassing Excess Property Checks
// ✅ Assigning to an Intermediate Variable
// If the object is assigned to a variable first, TypeScript allows it.
const newUser = {
    name: 'Alice',
    age: 25,
    email: 'alice@example.com', // No error here
};
const user3 = newUser; // ✅ Allowed (extra properties are ignored)
const user4 = {
    name: 'John',
    age: 30,
    email: 'john@example.com', // ✅ No error
};
/**
 * When Do Excess Property Checks Apply?
 * ✅ Direct object literals -> Checked strictly
 * ✅ Intermediate variable assignments -> More flexible (extra properties are ignored)
 * ✅ Function parameters (when passing object literals directly) -> Checked strictly
 */
function printUser(user) {
    console.log(user.name, user.age);
}
printUser({
    name: 'Eve',
    age: 28,
    // email: 'eve@example.com', // ❌ Error: Excess property
});
// 🔹 Fix: Assign the object to a variable first.
const newUser2 = { name: 'Eve', age: 28, email: 'eve@example.com' };
printUser(newUser2); // ✅ No error
const cc = {
    color: 'red',
    radius: 42,
};
function draw(circle) {
    console.log(`Color was ${circle.color}`);
    console.log(`Radius was ${circle.radius}`);
}
draw({ color: 'blue', radius: 42 }); // ✅ OK
const stringBox = { contents: 'Alice' };
const stringArrayBox = { contents: ['Alice', 'Bob'] };
const numberBox = { contents: 42 };
const numberArrayBox = { contents: [1, 2, 3] };
const tupleBox = {
    contents: ['Alice', 30, false],
};
function setContents(box, newContents) {
    box.contents = newContents;
}
function setCoordinate(coord) {
    const [x, y, z] = coord;
    return `Provided coordinates had ${coord.length} dimensions`;
}
const a = ['hello', 1];
const b = ['beautiful', 2, true];
const c = ['world', 3, true, false, true, false, true];
function readButtonInput(name, version, ...input) {
    return `${name} -  ${version} - ${input.length}`;
}
//* `readonly` Tuple Types
function doSomething(pair) {
    // pair[0] = 'hello'; // ❌ Error: Cannot assign to '0' because it is a read-only property.
}
