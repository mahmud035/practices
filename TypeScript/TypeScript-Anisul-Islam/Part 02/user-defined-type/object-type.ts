// NOTE: object Type: can store value as key value pair

let users: object[];

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

let user3: { userName: string; userId: number };
user3 = { userName: 'alex', userId: 103 };
users.push(user3);
console.log(users);

let user4: { userName: string; userId: number };
user4 = { userName: 'Smith', userId: 104 };
users.push(user4);
console.log(users);

// Show userName and userId using for..of and for..in loop
for (const element of users) {
  console.log(element['userName'], element['userId']);
}

for (const key in users) {
  console.log(users[key]['userName'], users[key]['userId']);
}
