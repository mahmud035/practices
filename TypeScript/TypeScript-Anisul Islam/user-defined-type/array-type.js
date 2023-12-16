// NOTE: Array Type- similar data
// let user = ['anis', 'rabu', 'pinky'];
var users;
// let users: Array<string>;
users = ['anis', 'rabu', 'pinky'];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var element = users_1[_i];
    console.log(element);
}
users.forEach(function (user) { return console.log(user); });
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
var persons = ['anis', 20, true, 'islam'];
console.log(persons);
