"use strict";
// Generics Basics
const score = [];
const names = [];
function identifyOne(value) {
    return value;
}
function identifyTwo(value) {
    return value;
}
function identifyThree(value) {
    return value;
}
identifyThree('pavel');
identifyThree(true);
function identifyFour(value) {
    return value;
}
function printUserInfo(userId, UserAge) {
    console.log(`ID: ${userId}, Age: ${UserAge}`);
}
// with arrow function
const printUserInfo2 = (userId, UserAge) => {
    console.log(`ID: ${userId}, Age: ${UserAge}`);
};
printUserInfo('101', 32);
printUserInfo(101, '32');
printUserInfo2(101, 32);
printUserInfo2('101', '32');
// identifyFour<Bootle>({})
function getSearchProducts(products) {
    // do some database operations
    const myIndex = 3;
    return products[3];
}
// Generic with Arrow Function
const getMoreSearchProducts = (products) => {
    // do some database operations
    const myIndex = 3;
    return products[3];
};
