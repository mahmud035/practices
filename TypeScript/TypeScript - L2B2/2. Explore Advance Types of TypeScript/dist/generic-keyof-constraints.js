"use strict";
/**
 * NOTE: The keyof operator takes an object type and produces a string or numeric literal(fixed values) union of its keys.
 * */
const a = 'age'; // OK
const b = 'age'; // OK
// Ex: real life example
function getProperty(obj, key) {
    // here Y = 'name' | 'age'
    return obj[key];
}
const properties = getProperty({ name: 'Mr. X', age: 100 }, 'age');
const properties2 = getProperty({ salary: 100000, profession: 'Developer' }, 'salary');
// WARN Error Here
// const properties3 = getProperty(
//   { husband: 'John', wife: 'Alexa' },
//   'je kono kichu other than husband or wife'
// );
