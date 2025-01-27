"use strict";
// No type annotation needed -- 'myName' inferred as type 'string'
let myName = 'Alice';
// Parameter Type Annotations
function greet(name) {
    console.log(`Hello ${name.toUpperCase()}`);
}
greet('Pavel');
// greet(11) //Error Here
// Return Type Annotations
function getFavoriteNumber() {
    return 26;
}
// Anonymous Functions
// No type annotations here, but TypeScript can spot the bug
const names = ['Alice', 'Bob', 'Eve'];
// Contextual typing for function
names.forEach((name) => console.log(name.toUpperCase()));
// Object Types
// the parameter's type annotation is an object type
function printCoord(pt) {
    console.log(`The coordinate's x value is ${pt.x}`);
    console.log(`The coordinate's y value is ${pt.y}`);
}
printCoord({ x: 3, y: 7 });
// Optional Properties
function printName(obj) {
    var _a;
    if (obj.last !== undefined) {
        // OK
        console.log(obj.last.toUpperCase());
    }
    // A safe alternative using modern JavaScript syntax:
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
printName({ first: 'Bob' }); // OK
printName({ first: 'Alice', last: 'Bob' }); // OK
// Union Types
function printId(id) {
    // console.log(id.toUpperCase()); // Error Here
    // Narrowing
    if (typeof id === 'string') {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    }
    else {
        // Here, id is of type 'number'
        console.log(id);
    }
}
printId(101); // OK
printId('101'); // OK
// printId({myID: 101}); // Error Here
function welcomePeople(x) {
    if (Array.isArray(x)) {
        // Here: 'x' is string[]
        console.log(`Hello ${x.join(' and ')}`);
    }
    else {
        // Here: 'x' is string
        console.log(`Welcome long traveler ${x}`);
    }
}
// Exactly the same as the earlier example
function printCoord2(pt) {
    console.log(`The coordinate's x value is ${pt.x}`);
    console.log(`The coordinate's y value is ${pt.y}`);
}
printCoord2({ x: 200, y: 200 });
function printCoord3(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord3({ x: 300, y: 300 });
// Literal Types
let changingString = 'Hello World';
changingString = 'Pavel';
// Because `changingString` can represent any possible string, that
// is how TypeScript describes it in the type system
const constantString = 'Hello World';
// Because `constantString` can only represent 1 possible string, it
// has a literal type representation
function printText(s, alignment) {
    // ...
}
printText('Hello, world', 'left'); // OK
printText('D day', 'center'); // OK
// printText('D day', 'justify'); // Error Here
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
function configure(x) {
    // ...
}
configure({ width: 100 }); // OK
configure('auto'); // OK
// configure('automatic'); // Error Here
// Literal Inference
const obj = { counter: 0 };
if (true) {
    obj.counter = 1;
}
// null and undefined
function doSomething(x) {
    if (x === null) {
        // do something
    }
    else {
        console.log(x.toUpperCase());
    }
}
// Non-null Assertion Operator (Postfix!)
/**
 * TypeScript also has a special syntax for removing null and undefined from a   type without doing any explicit checking. Writing ! after any expression is   effectively a type assertion that the value isn’t null or undefined
 * */
function liveDangerously(x) {
    // No Error
    console.log(x.toFixed());
}
