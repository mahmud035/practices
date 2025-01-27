"use strict";
/**
 * NOTE: type use korbo primitive type data er jonno(Ex: string, number, boolean, bigInt, symbol etc)
 *
 * NOTE: interface use korbo object type data er jonno(Ex: object, class)
 *  */
const userWithTypeAlias = {
    name: 'Type Alias',
    age: 100,
};
const userWithInterface = {
    name: 'Interface',
    age: 100,
};
const extendedUserWithInterface = {
    name: 'Extended Interface',
    age: 100,
    roll: 'Admin',
};
const extendedUserWithTypeAlias = {
    name: 'Extended Type using Intersection (&)',
    age: 100,
    roll: 'Admin',
};
const addNumbers = (num1, num2) => {
    return num1 + num2;
};
const addNumbers2 = (num1, num2) => {
    return num1 + num2;
};
const rollNumbers = [1, 2, 3, 4, 5]; // index
const rollNumbers2 = [1, 2, 3, 4, 5];
