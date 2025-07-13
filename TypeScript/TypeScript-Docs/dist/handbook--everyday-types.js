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
// No type annotation needed -- 'myName' inferred as type 'string'
let myName = 'Alice';
console.log(count, fullName, isDone, numbers, names, mix, user, dynamicValue, myName);
//* Functions
// Add types to function parameters and return values:
// Parameter Type Annotations
function greet(name) {
    console.log(`Hello ${name.toLowerCase()}`);
}
// Return Type Annotations
function getFavoriteNumber() {
    return 26;
}
greet('Pavel');
getFavoriteNumber();
// Anonymous Functions
// No type annotations here, but TypeScript can spot the bug
const users = ['Alice', 'Bob', 'Eve'];
// Contextual typing for function - parameter s inferred to have type string
users.forEach((name) => console.log(name.toLowerCase()));
//* Object Types
// the parameter's type annotation is an object type
function printCoord(pt) {
    console.log(`The coordinate's x value is ${pt.x}`);
    console.log(`The coordinate's y value is ${pt.y}`);
}
printCoord({ x: 3, y: 7 });
// Optional Properties
function printName(obj) {
    var _a;
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toLowerCase());
}
printName({ first: 'Bob' }); // OK
printName({ first: 'Alice', last: 'Bob' }); // OK
//* Union Types
// A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members.
// TypeScript will only allow an operation if it is valid for every member of the union. For example, if you have the union `string | number`, you can’t use methods that are only available on string:
// Solution => Narrowing
function printId(id) {
    // console.log(id.toUpperCase()); // Error Here
    // Narrowing
    if (typeof id === 'string') {
        console.log(id.toUpperCase()); // id is of type 'string'
    }
    else {
        console.log(id); // Here, id is of type 'number'
    }
}
printId(101); // OK
printId('101'); // OK
// printId({myID: 101}); // Error Here
function welcomePeople(x) {
    // Narrowing
    if (Array.isArray(x)) {
        console.log(`Hello ${x.join(' and ')}`); // Here: 'x' is string[]
    }
    else {
        console.log(`Welcome long traveler ${x}`); // Here: 'x' is string
    }
}
welcomePeople(['Alice', 'Bob']);
welcomePeople('Alice');
// Sometimes you’ll have a union where all the members have something in common. For example, both arrays and strings have a `slice` method. If every member in a union has a property in common, you can use that property without narrowing:
// Return type is inferred as number[] | string
function getFirstThree(x) {
    return x.slice(0, 3);
}
getFirstThree([1, 2, 3, 4, 5]);
getFirstThree('Pavel');
function printCoord2(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord2({ x: 100, y: 100 });
function printCoord3(pt) {
    console.log(`The coordinate's x value is ${pt.x}`);
    console.log(`The coordinate's y value is ${pt.y}`);
}
printCoord3({ x: 100, y: 100 });
const win = {
    title: 'My App',
    isMaximized: false, // Valid due to merging
};
// 2. A type cannot be changed after being created
//* Type Assertions
// Override TypeScript's inferred type (use cautiously):
// Angle-bracket syntax
const input = document.getElementById('input');
// 'as' syntax (preferred in TSX/JSX)
// const value = (someValue as string).toUpperCase();
//* Literal Types
// Fixed value types
const constantString = 'Hello World';
// Because `constantString` can only represent 1 possible string, it
// has a literal type representation
// But by combining literals into unions, you can express a much more useful concept - for example, functions that only accept a certain set of known values:
function printText(str, alignment) {
    return `${str} - ${alignment}`;
}
printText('Turn', 'left'); // OK
printText('Turn', 'center'); // OK
// printText('D day', 'justify'); // Error Here
// Numeric literal types work the same way:
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
function configure(x) {
    // ...
}
configure({ width: 100 }); // OK
configure('auto'); // OK
// configure('automatic'); // Error Here
//* Literal Inference
// TypeScript's Literal Inference refers to how the compiler automatically deduces whether a variable's type should be a specific literal type (fixed value type) (e.g., "red", 42, or true) or a broader primitive type (e.g., string, number, or boolean). This behavior depends on how the variable is declared and initialized.
const obj = { counter: 0 };
if (true) {
    obj.counter = 1;
}
function handleRequest(url, method) { }
// Use `as const` to convert the entire object to be literal type:
const req = { url: 'https://example.com', method: 'GET' };
handleRequest(req.url, req.method);
// The `as const` suffix acts like const but for the type system, ensuring that all properties are assigned the literal type instead of a more general version like `string` or `number`.
//* null and undefined
function doSomething(x) {
    // Narrowing
    if (x === null) {
        // do something
    }
    else {
        console.log(x.toUpperCase());
    }
}
//* Non-null Assertion Operator (Postfix!)
/**
 * TypeScript also has a special syntax for removing null and undefined from a type without doing any explicit checking. Writing ! after any expression is effectively a type assertion that the value isn’t `null` or `undefined`:
 *
 * It’s important to only use `!` when you know that the value can’t be `null` or `undefined`.
 */
function liveDangerously(x) {
    console.log(x.toFixed()); // No Error
}
export {};
