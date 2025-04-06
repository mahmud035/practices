"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stringBox = { value: 'hello' };
const numberBox = { value: 42 };
const nameAndAge = {
    key: 'Alice',
    value: 30,
};
const stringToNumber = {
    transform: (str) => str.length,
};
console.log(stringToNumber.transform('hello')); // 5
const consoleLogger = {
    log: (message) => console.log(message),
};
consoleLogger.log('Error occurred');
consoleLogger.log(404);
const stringsCollection = {
    items: ['a', 'bb', 'ccc'],
    getLength() {
        return this.items.reduce((sum, str) => sum + str.length, 0);
    },
};
const nameAccessor = {
    get: (obj) => obj.name,
};
// Uses default any type
const response1 = {
    data: [1, 2, 3],
    page: 1,
    totalPages: 5,
};
// Explicit type
const response2 = {
    data: [{ id: 1, name: 'Alice' }],
    page: 1,
    totalPages: 1,
};
function fetchUser() {
    return {
        success: true,
        data: { id: 1, name: 'Alice' },
        timestamp: new Date(),
    };
}
console.log(stringBox, numberBox, nameAndAge, stringsCollection, nameAccessor, response1, response2);
