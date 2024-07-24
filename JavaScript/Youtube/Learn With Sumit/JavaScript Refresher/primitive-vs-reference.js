'use strict';

/**
 * IMPORTANT:
 * Primitive type: (string, number, boolean) ==> "works with just value"
 * Reference type: (array, object, function etc) ==> "works with memory reference"
 */

//* Primitive Type
// let x = 5;
// let y = 6;
// x = y;
// y = 7;

// console.log(x); // 6
// console.log(y); // 7

//* Reference type
let a = ['JS', 'Python'];
let b = ['HTML', 'CSS'];
b = a;

console.log(a); // ['JS', 'Python']
console.log(b); // ['JS', 'Python']

a.push('Go');

console.log(a); //  ['JS', 'Python', 'Go']
console.log(b); //  ['JS', 'Python', 'Go']
