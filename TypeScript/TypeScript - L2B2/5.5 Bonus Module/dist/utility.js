"use strict";
//* Readonly
const person = {
    name: 'John',
    email: 'john@example.com',
    contactNo: '34341312',
};
// type MyObj = Record<string, string>; // OK
const obj = {
    a: '1',
    b: '2',
    c: '3',
    // d: '4', // Error Here (for first MyObj using Record)
};
