//  NOTE: custom Type: you can create your own type
var users;
users = [];
var user1;
user1 = { userName: 'alex', userId: 101 };
users.push(user1);
var user2;
user2 = { userName: 'Smith', userId: 102 };
users.push(user2);
var user3;
user3 = { userName: 'anisul', userId: 103 };
users.push(user3);
// console.log(users);
// Show userName and userId using for..of and for..in loop
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var element = users_1[_i];
    console.log(element['userName'], element['userId']);
}
var requestHandler = function (requestType) {
    console.log(requestType);
};
requestHandler('GET');
requestHandler('POST');
// requestHandler('PUT'); // ERROR HERE
