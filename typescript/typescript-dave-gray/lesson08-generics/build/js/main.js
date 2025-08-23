"use strict";
/*
  Generic Identity Function:
  - Returns input of any type as-is
  - Preserves type information through generics
*/
const echo = (arg) => arg;
/*
  Type Guard for Plain Objects:
  - Checks if value is a non-null object (not array)
  - Uses typeof and Array.isArray for type narrowing
*/
const isObj = (arg) => {
    return typeof arg === 'object' && !Array.isArray(arg) && arg !== null;
};
// Testing `isObj` function with different data types
console.log(isObj(true)); // false
console.log(isObj('John')); // false
console.log(isObj([1, 2, 3])); // false (arrays are not considered objects here)
console.log(isObj({ name: 'John' })); // true
console.log(isObj(null)); // false
/*
  Truthiness Checker with Type Handling:
  - Returns object with value and boolean check
  - Special cases for empty arrays and empty objects
  - Uses type assertions for object key checking
*/
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false }; // Empty array is considered false
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false }; // Empty object is considered false
    }
    return { arg, is: !!arg }; // Convert to boolean
};
// Testing `isTrue` function with different values
console.log(isTrue(false)); // { arg: false, is: false }
console.log(isTrue(0)); // { arg: 0, is: false }
console.log(isTrue(true)); // { arg: true, is: true }
console.log(isTrue(1)); // { arg: 1, is: true }
console.log(isTrue('Dave')); // { arg: 'Dave', is: true }
console.log(isTrue('')); // { arg: '', is: false }
console.log(isTrue(null)); // { arg: null, is: false }
console.log(isTrue(undefined)); // { arg: undefined, is: false }
console.log(isTrue({})); // { arg: {}, is: false }
console.log(isTrue({ name: 'Dave' })); // { arg: { name: 'Dave' }, is: true }
console.log(isTrue([])); // { arg: [], is: false }
console.log(isTrue([1, 2, 3])); // { arg: [1, 2, 3], is: true }
console.log(isTrue(NaN)); // { arg: NaN, is: false }
console.log(isTrue(-0)); // { arg: -0, is: false }
// A function that returns whether a value is "truthy" or "falsy" in a structured format
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
// A function that processes a user object, ensuring it has an `id` property
const processUser = (user) => {
    // Processing logic can be added here
    return user;
};
console.log(processUser({ id: 1, name: 'Dave' })); // ✅ Valid
// console.log(processUser({ name: 'Dave'})) // ❌ Error: missing `id` property
/*
  Generic Property Accessor:
  - Uses dual generics for type-safe property access
  - K extends keyof T ensures valid property keys
  - Returns array of specified property values
*/
const getUsersProperty = (users, key) => {
    return users.map((user) => user[key]); // Type-safe mapping
};
// Sample user data
const usersArray = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496',
            },
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets',
        },
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618',
            },
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains',
        },
    },
];
// Extracting specific properties from user objects
console.log(getUsersProperty(usersArray, 'email')); // ['Sincere@april.biz', 'Shanna@melissa.tv']
console.log(getUsersProperty(usersArray, 'username')); // ['Bret', 'Antonette']
/*
  Generic State Management Class:
  - Encapsulates state with type safety
  - Getter/setter maintains type consistency
  - Initial type determines allowed state values
*/
class StateObject {
    constructor(value) {
        this.data = value;
    }
    // Getter to retrieve the stored state
    get state() {
        return this.data;
    }
    // Setter to update the stored state
    set state(value) {
        this.data = value;
    }
}
// Creating a `StateObject` instance with a string
const store = new StateObject('John');
console.log(store.state); // 'John'
store.state = 'Dave'; // ✅ Allowed
// store.state = 12; // ❌ Error: type mismatch (expected string)
// Creating a `StateObject` instance that can store an array of multiple types
const myState = new StateObject([10, 20]);
myState.state = ['Dave', 42, true]; // ✅ Valid mixed-type array
console.log(myState.state); // ['Dave', 42, true]
