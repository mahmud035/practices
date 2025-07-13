"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Constraints in TypeScript allow us to limit the types that can be used with generics. Without constraints, generics accept any type, but sometimes we need to restrict them to a specific category (e.g., objects, arrays, or specific properties).
 
 * We use `extends` to restrict the generic type.
 
 * ✅ Why Use Constraints?
 *  - Prevents invalid types from being used.
 *  - Ensures the required properties or methods exist.
 *  - Maintains flexibility while enforcing structure.
 */
//* ----------------------------------------
//* 1. Basic Constraints (extends)
//* ----------------------------------------
// ----------------------------------------
// Simple Type Constraint
// ----------------------------------------
// ✅ The generic type `T` must have a `.length` property.
function logLength(arg) {
    console.log(arg.length);
}
logLength('hello'); // 5 (string has .length)
logLength([1, 2, 3]); // 3 (array has .length)
function printId(item) {
    console.log(`ID: ${item.id}`);
}
printId({ id: 1, name: 'Alice' }); // ✅
// printId({ name: "Bob" }); ❌ Missing id
//* ----------------------------------------
//* 2. Keyof Constraint
//* ----------------------------------------
// ----------------------------------------
// Property Access Safety
// ----------------------------------------
function getProperty(obj, key) {
    return obj[key];
}
const user = { name: 'Alice', age: 30 };
getProperty(user, 'name'); // ✅ Returns string
getProperty(user, 'age'); // ✅ Returns number
// getProperty(user, "email"); ❌ Invalid key
// ----------------------------------------
// Dynamic Property Assignment
// ----------------------------------------
function setProperty(obj, key, value) {
    obj[key] = value;
}
const person = { name: 'Bob', age: 25 };
setProperty(person, 'name', 'Robert'); // ✅
function createInstance(ctor, ...args) {
    return new ctor(...args);
}
class UserCl {
    constructor(name) {
        this.name = name;
    }
}
const userOne = createInstance(UserCl, 'Alice'); // Type: UserCl
function processPerson(person) {
    return `${person.name} (${person.age})`;
}
processPerson({ name: 'Alice', age: 30, id: 1 }); // ✅
function getPage(data, page, perPage) {
    const start = (page - 1) * perPage;
    return data.items.slice(start, start + perPage);
}
const usersData = {
    items: [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
    ],
    total: 2,
};
const page1 = getPage(usersData, 1, 10);
console.log(userOne, page1);
