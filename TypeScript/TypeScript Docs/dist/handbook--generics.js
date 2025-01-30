//* Hello World of Generics
function identity(arg) {
    return arg;
}
let output = identity(101);
let output2 = identity('101');
//* Working with Generic Type Variables
// “the generic function loggingIdentity takes a type parameter Type, and an argument arg which is an array of Types, and returns an array of Types.”
function loggingIdentity(arg) {
    console.log(arg.length); // Array has a .length, so no more error
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
export {};
