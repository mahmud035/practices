"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//* ----------------------------------------
//* 1. Object Types
//* ----------------------------------------
// TypeScript provides several ways to define the shape of objects:
// ----------------------------------------
// Explicit Object Type Annotation (NOT Recommended)
// ----------------------------------------
// Defining an object type explicitly
const user = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    // age is optional so we can omit it
};
const currentUser = {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    age: 30,
};
const laptop = {
    id: 101,
    name: 'MacBook Pro',
    price: 999,
    inStock: true,
};
const config1 = {
    apiUrl: 'https://api.example.com',
    timeout: 5000,
};
const config2 = {
    apiUrl: 'https://api.example.com', // timeout and retry are optional
};
// ----------------------------------------
// Working with Optional Properties
// ----------------------------------------
function printConfig(config) {
    var _a;
    console.log(`API URL: ${config.apiUrl}`);
    // Check if optional properties exist
    if (config.timeout)
        console.log(`Timeout: ${config.timeout}`);
    // Using optional chaining
    console.log(`Retry enabled: ${(_a = config === null || config === void 0 ? void 0 : config.retry) !== null && _a !== void 0 ? _a : 'not specified'}`);
}
printConfig(config1);
printConfig(config2);
let heading = 'North'; // OK
function rollDice() {
    return (Math.floor(Math.random() * 6) + 1);
}
rollDice();
let isVerified = true;
function processPayment(tx) {
    console.log(`Processing ${tx.amount} ${tx.currency} via ${tx.method}`);
    if (tx.fee)
        console.log(`Fee: ${tx.fee} ${tx.currency}`);
    // TypeScript knows tx.completed is boolean
    console.log(`Status: ${tx.completed ? 'Completed' : 'Pending'}`);
}
const myTx = {
    id: 'tx_123',
    amount: 99.99,
    currency: 'USD',
    method: 'credit',
    completed: true,
};
processPayment(myTx);
console.log(user, currentUser, laptop, isVerified, heading);
