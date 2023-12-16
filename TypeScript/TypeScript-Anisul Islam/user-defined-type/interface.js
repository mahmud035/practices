var users = [];
var user1 = { id: 1, name: 'Mr. Potato', age: 30 };
var user2 = { id: 2, name: 'Mr. Tomato', age: 40 };
users.push(user1);
users.push(user2);
var printUserInfo = function (user) {
    console.log("userId = ".concat(user.id, ", name = ").concat(user.name, ", age = ").concat(user.age));
};
users.forEach(function (user) { return printUserInfo(user); });
// NOTE: interface vs type
// both are nearly similar in most cases.
// However, Adding new filed after creation is possible for an interface but not possible for a type.
