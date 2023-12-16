interface User {
  id: number;
  name: string;
  age: number;
}

let users: User[] = [];

let user1: User = { id: 1, name: 'Mr. Potato', age: 30 };
let user2: User = { id: 2, name: 'Mr. Tomato', age: 40 };

users.push(user1);
users.push(user2);

const printUserInfo = (user: User) => {
  console.log(`userId = ${user.id}, name = ${user.name}, age = ${user.age}`);
};

users.forEach((user) => printUserInfo(user));

// NOTE: interface vs type

// both are nearly similar in most cases.
// However, Adding new filed after creation is possible for an interface but not possible for a type.
