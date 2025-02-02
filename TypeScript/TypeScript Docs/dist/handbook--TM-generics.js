//* Hello World of Generics
function identity(arg) {
    return arg;
}
const output = identity(101);
const output2 = identity('101');
//* Working with Generic Type Variables
/**
 * The generic function `loggingIdentity` takes a type parameter `T`, and an argument `arg` which is an array of `T`s, and returns an array of `T`s.
 */
function loggingIdentity(arg) {
    console.log(arg.length); // ✅ Array has a .length, so no more error
    return arg;
}
//* Generic Types
let myIdentity = identity;
let myIdentity2 = identity;
let myIdentity3 = identity;
function identity2(arg) {
    return arg;
}
let myIdentity4 = identity2;
//* Generic Classes
/**
 * Generic classes in TypeScript are classes that are defined with one or more type parameters. This allows you to create reusable components that can work with different data types while still maintaining type safety. Instead of hardcoding a specific type, you can use a type parameter (commonly represented as `T`, `U`, etc.) to make your class flexible and generic.
 *
 * Why Use Generic Classes?
 *
 * Reusability: Write a class once and use it with different types.
 * Type Safety: Ensure that the class methods and properties interact with the correct types.
 * Flexibility: Allow classes to work with a variety of data types without sacrificing the benefits of static type checking.
 */
class GenericBox {
    constructor(value) {
        this.content = value;
    }
    getContent() {
        return this.content;
    }
    setContent(value) {
        this.content = value;
    }
}
const numberBox = new GenericBox(123);
console.log(numberBox.getContent()); // Outputs: 123
const stringBox = new GenericBox('Hello, TypeScript!');
console.log(stringBox.getContent()); // Outputs: "Hello, TypeScript!"
// Multiple Type Parameters
// A generic class can also have multiple type parameters if needed.
class Pair {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    getPair() {
        return [this.first, this.second];
    }
}
const pair = new Pair(42, 'Answer');
console.log(pair.getPair()); // Outputs: [42, "Answer"]
class LengthContainer {
    constructor(item) {
        this.item = item;
    }
    getLength() {
        return this.item.length;
    }
}
// Now, `T` must be a type that has a 'length' property
const stringContainer = new LengthContainer('Hello, Generics!');
console.log(stringContainer.getLength()); // Outputs: 16
function logLength(arg) {
    console.log(arg.length); // Safe to access .length
}
logLength('hello'); // ✅ OK (string has .length)
logLength([1, 2, 3]); // ✅ OK (array has .length)
// logLength(42); // ❌ Error: number has no .length
// 2. Using `keyof` to Constrain to Object Keys
// Ensure a key exists in an object:
function getValue(obj, key) {
    return obj[key]; // Key is guaranteed to exist
}
const user = { name: 'Alice', age: 30 };
getValue(user, 'name'); // ✅ OK -> "Alice"
function save(item) {
    console.log(item.id, item.serialize());
}
const obj = { id: 1, serialize: () => 'data' };
save(obj); // ✅ OK -> data 1
export {};
