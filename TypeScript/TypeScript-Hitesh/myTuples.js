// const user: (string | number)[] = [1, 'pavel']; // OK
// const user2: (string | number)[] = ['pavel', 1]; // OK
// Tuples - Array Order is IMPORTANT
// Example: 1
var tUser;
tUser = ['pavel', 1, true]; // OK
// user = [1, 'pavel', true]; // Error Here
// user = [true, 1, 'pavel']; // Error Here
// Example: 2
var rgb = [255, 255, 255];
var newUser = [112, 'pavel']; // OK
// const newUser2: User = ['pavel', 112]; // Error Here
