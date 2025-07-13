"use strict";
// MCQ: 5
function getArrayItem(arr, index, key) {
    const item = arr[index];
    return item[key];
}
const users = [
    { name: 'John', age: 30 },
    { name: 'Mary', age: 25 },
];
console.log(getArrayItem(users, 0, 'name'));
