// const user: (string | number)[] = [1, 'pavel']; // OK
// const user2: (string | number)[] = ['pavel', 1]; // OK

// Tuples - Array Order is IMPORTANT

// Example: 1
let tUser: [string, number, boolean];

tUser = ['pavel', 1, true]; // OK
// user = [1, 'pavel', true]; // Error Here
// user = [true, 1, 'pavel']; // Error Here

// Example: 2
let rgb: [number, number, number] = [255, 255, 255];

// Example: 3
type User = [number, string];

const newUser: User = [112, 'pavel']; // OK
// const newUser2: User = ['pavel', 112]; // Error Here
