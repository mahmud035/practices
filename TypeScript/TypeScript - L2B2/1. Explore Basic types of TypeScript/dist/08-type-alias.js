"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const id = 1;
const name = 'Alice';
const active = true;
const p1 = { x: 10, y: 20 };
let currentStatus = 'success';
let userId = 123; // Can also be "abc"
const emp = {
    name: 'Alice',
    age: 30,
    id: 1,
    department: 'HR',
};
const location = [10, 20];
const nums = [1, 2, 3];
const add = (x, y) => x + y;
const multiply = (x, y) => x * y;
add(2, 3);
multiply(2, 3);
const pair1 = { first: 1, second: 'one' };
const pair2 = { first: true, second: 2 };
const response = {
    data: { id: 1, name: 'Alice' },
    status: 'success',
    code: 200,
};
function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { id: Date.now(), text: action.payload }];
        case 'DELETE_TODO':
            return state.filter((todo) => todo.id !== action.payload);
        // ...
    }
}
console.log(id, name, active, p1, currentStatus, userId, emp, location, nums, pair1, pair2, response);
