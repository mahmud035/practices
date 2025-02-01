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
const cc = {
    color: 'red',
    radius: 42,
};
function draw(circle) {
    console.log(`Color was ${circle.color}`);
    console.log(`Radius was ${circle.radius}`);
}
draw({ color: 'blue', radius: 42 }); // OK
let boxA = { contents: 'hello' };
console.log(boxA.contents);
let boxB = { contents: 'world' };
console.log(boxB.contents);
function setContents(box, newContents) {
    box.contents = newContents;
}
