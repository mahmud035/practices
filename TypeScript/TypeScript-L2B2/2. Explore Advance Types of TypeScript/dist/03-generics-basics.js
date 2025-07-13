"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generics enable you to create reusable, type-safe components that work with multiple types while maintaining type information. They're fundamental for building flexible yet strongly-typed code.
 
 * ✅ Why Use Generics?
 *  - Reusability → Write once, use with different types.
 *  - Type Safety → Preserves type information across operations.
 *  - Flexibility → Works with various data types dynamically.
 */
//* ----------------------------------------
//* 1. Basic Generic Functions
//* ----------------------------------------
// ----------------------------------------
// Identity Function (Simple Example)
// ----------------------------------------
function identity(arg) {
    return arg;
}
// Usage
const output1 = identity('hello'); // Explicit type
const output2 = identity(42); // Type inference (number)
// ----------------------------------------
// Working with Arrays
// ----------------------------------------
function getFirstElement(arr) {
    return arr[0];
}
const numbers = [1, 2, 3];
const firstNum = getFirstElement(numbers); // Type: number
const strings = ['a', 'b', 'c'];
const firstStr = getFirstElement(strings); // Type: string
const stringBox = { contents: 'hello' };
const numberBox = { contents: 42 };
console.log(numberBox.contents); // 'hello'
console.log(stringBox.contents); // 42
const nameAndAge = {
    first: 'first',
    second: 30,
};
//* ----------------------------------------
//* 3. Generic Classes
//* ----------------------------------------
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
}
// Usage
const numberStack = new Stack();
numberStack.push(1);
numberStack.push(2);
const num = numberStack.pop(); // Type: number | undefined
const stringStack = new Stack();
stringStack.push('hello');
// ✅ `T extends HasLength` ensures that `T` has a `.length` property.
function logLength(arg) {
    console.log(arg.length);
}
logLength('hello'); // 5 (strings have .length)
logLength([1, 2, 3]); // 3 (arrays have .length)
// logLength(42); ❌ Error (number lacks .length)
// ----------------------------------------
// Keyof Constraint
// ----------------------------------------
function getProperty(obj, key) {
    return obj[key];
}
const person = { name: 'Alice', age: 30 };
getProperty(person, 'name'); // ✅
// Uses default any type
const response1 = {
    data: [1, 2, 3],
    page: 1,
    totalPages: 5,
};
// Explicit type
const response2 = {
    data: [{ id: 1, name: 'Alice' }],
    page: 1,
    totalPages: 1,
};
//* ----------------------------------------
//* 6. Real-World Examples
//* ----------------------------------------
// ----------------------------------------
// API Wrapper
// ----------------------------------------
function fetchData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(url);
        return res.json();
    });
}
