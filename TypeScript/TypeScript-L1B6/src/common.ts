let language = 'Typescript';

// 09. Type Assertions(As), Null, Undefined, Any Type, Non-Null Assertion Operator (Postfix!), Optional Chaining(.)
// Literal Types (value as types)
// Literal Inference (as const)

interface User {
  name?: string;
  email: string;
}

// let user = {} as User;

// user = {
//   name: 'userName',
//   email: 'userEmail',
// };
// user?.email;

// interface Description {
//   John: string;
//   Smith: string;
// }

// let description: Description = {} as Description;

// const friends = ['John', 'Smith'] as const;

// const user = {
//   name: 'userName',
//   email: 'userEmail',
// } as const;

// friends.forEach((friend) => {
//   description[friend] = friend + ' on fire';
// });
