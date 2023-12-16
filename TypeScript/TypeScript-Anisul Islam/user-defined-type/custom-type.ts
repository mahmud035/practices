//  NOTE: custom Type: you can create your own type

type User = { userName: string; userId: number };

let users: User[];
users = [];

let user1: User;
user1 = { userName: 'alex', userId: 101 };
users.push(user1);

let user2: User;
user2 = { userName: 'Smith', userId: 102 };
users.push(user2);

let user3: User;
user3 = { userName: 'anisul', userId: 103 };
users.push(user3);

// console.log(users);

// Show userName and userId using for..of and for..in loop
for (const element of users) {
  console.log(element['userName'], element['userId']);
}

// for (const key in users) {
//   console.log(users[key]['userName'], users[key]['userId']);
// }

type RequestType = 'GET' | 'POST';

const requestHandler = (requestType: RequestType) => {
  console.log(requestType);
};

requestHandler('GET');
requestHandler('POST');
// requestHandler('PUT'); // ERROR HERE
