// NOTE: object Type: can store value as key value pair
var users;
users = [
    {
        userName: 'anisul',
        userId: 101,
    },
    {
        userName: 'john',
        userId: 102,
    },
];
var user3;
user3 = { userName: 'alex', userId: 103 };
users.push(user3);
console.log(users);
var user4;
user4 = { userName: 'Smith', userId: 104 };
users.push(user4);
console.log(users);
// Show userName and userId using for..of and for..in loop
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var element = users_1[_i];
    console.log(element['userName'], element['userId']);
}
for (var key in users) {
    console.log(users[key]['userName'], users[key]['userId']);
}
