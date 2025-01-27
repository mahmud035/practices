// NOTE: Array Type- similar data

// let user = ['anis', 'rabu', 'pinky'];

let users: string[];
// let users: Array<string>;
users = ['anis', 'rabu', 'pinky'];

for (const element of users) {
  console.log(element);
}

users.forEach((user) => console.log(user));

users.sort();
console.log(users);

users.push('limon');
console.log(users);

users.pop();
console.log(users);

users.unshift('milton');
console.log(users);

users.shift();
console.log(users);

// NOTE: multi-types Array
let persons: (string | number | boolean)[] = ['anis', 20, true, 'islam'];
console.log(persons);
