"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Button;
function printId(id) {
    console.log(`ID: ${id}`);
}
printId(101); // ✅ Valid (number)
printId('ABC123'); // ✅ Valid (string)
function handleStatus(status) {
    if (status === 'success')
        console.log('Operation succeeded!');
    // TypeScript provides autocomplete for all possible values
}
handleStatus('pending');
handleStatus('success');
function getArea(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2; // TypeScript knows shape is Circle
        case 'square':
            return shape.sideLength ** 2; // TypeScript knows shape is Square
    }
}
getArea({ kind: 'circle', radius: 3 });
getArea({ kind: 'square', sideLength: 5 });
const emp = {
    name: 'Alice',
    age: 30,
    id: 101,
    department: 'Engineering',
};
const logger = {
    log: (msg) => console.log(msg),
    serialize: () => 'Serialized data',
};
function handleResponse(response) {
    if (response.status === 'success') {
        console.log(response.data.name); // ✅ Type-safe
    }
    else {
        console.error(response.message); // ✅ Type-safe
    }
}
handleResponse({
    status: 'success',
    data: { id: 101, name: 'Alice' },
});
function Button({ size, variant, onClick }) {
    // Component implementation
}
const user = {
    id: 1, // Required
    name: 'Alice', // Optional
    // email is optional
};
function handleEvent(event) {
    switch (event.type) {
        case 'click':
            console.log(event.x, event.y); // ✅ Type-safe
            break;
        case 'keypress':
            console.log(event.key); // ✅ Type-safe
            break;
    }
}
handleEvent({ type: 'click', x: 5, y: 10 });
console.log(emp, logger, user);
