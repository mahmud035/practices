"use strict";
// Types by Inference
let helloWord = 'hello world';
const user = {
    id: 1,
    name: 'John',
};
//* Classes
// Since JavaScript supports classes and object-oriented programming, so does TypeScript. You can use an interface declaration with classes:
class UserAccount {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const user2 = new UserAccount(1, 'Murphy');
function getLength(arg) {
    return arg.length;
}
function wrapInArray(arg) {
    if (typeof arg === 'string')
        return [arg];
    return arg;
}
function logPoint(pt) {
    console.log(`X: ${pt.x}, Y: ${pt.y}`);
}
const point = { x: 12, y: 26 };
logPoint(point); // X: 12, Y: 26
const point2 = { x: 12, y: 26, z: 89 };
logPoint(point2); // X: 12, Y: 26
const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // X: 33, Y: 3
class VirtualPoint {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // X: 13, Y: 56
