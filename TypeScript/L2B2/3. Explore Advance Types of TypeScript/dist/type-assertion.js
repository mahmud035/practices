"use strict";
let emni;
emni = 'Next level web development';
emni.length;
function kgToGram(param) {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000;
        return `The converted result is ${value} gram`;
    }
    if (typeof param === 'number') {
        const value = param * 1000;
        return value;
    }
}
// type-assertion
const resultToBeNumber = kgToGram(100);
const resultToBeString = kgToGram('100');
try {
}
catch (error) {
    console.log(error.message);
}
