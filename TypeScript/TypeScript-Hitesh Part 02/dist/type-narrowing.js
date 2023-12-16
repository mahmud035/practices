"use strict";
// Type Narrowing
function detectType(value) {
    if (typeof value === 'string') {
        return value.toLowerCase();
    }
    return value + 3;
}
function provideId(id) {
    if (!id) {
        console.log('Please provide ID');
        return;
    }
    return id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        // NOTE: typeof array is 'object'
        if (typeof strs === 'object') {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === 'string') {
            console.log(strs);
        }
    }
}
// The in operator narrowing
function isAdminAccount(account) {
    if ('isAdmin' in account) {
        return account.isAdmin;
    }
}
// Instanceof and Type Predicates
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return 'fish food';
    }
    else {
        pet;
        return 'bird food';
    }
}
function getTrueShape(shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2;
    }
    // return shape.side * shape.side;
}
// Exhaustiveness checking
function getArea(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.side * shape.side;
        case 'rectangle':
            return shape.length * shape.width;
        default:
            const _defaultforshape = shape;
            return _defaultforshape;
    }
}
