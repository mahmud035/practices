// 08. Explore Interfaces And
// Difference Between Type Alias And Interface

// interface Person {
//   name: string;
//   email: string;
// }

// let person: Person = {
//   name: 'John',
//   email: 'john@example.com',
// };

//? function signature Type Aliases
// interface Add {
//   (num1: number, num2: number, num3: number): number;
// }

// const add: Add = (num1, num2, num3 = 0) => {
//   return num1 + num2 + num3;
// };

//? Object Type Interface(Object er jonno Interface beshi babohar korbo)
// interface Address {
//   presentAddress: string;
//   permanentAddress: string;
// }

// interface Favorite {
//   type: 'food' | 'player' | 'singer' | 'person';
//   value: string;
// }

// interface Auth {
//   isLoggedIn: boolean;
// }

// interface Person extends Auth {
//   name: string;
//   age?: number;
//   email: string;
//   phone: string | string[];
//   address: Address;
//   favorites?: Favorite[];
// }

// const person: Person = {
//   name: 'John Smith',
//   age: 34,
//   email: 'john.smith@gmail.com',
//   phone: '567-7543',
//   address: {
//     presentAddress: 'Mexico',
//     permanentAddress: 'Mexico City',
//   },
//   favorites: [
//     {
//       type: 'food',
//       value: 'Egg',
//     },
//     {
//       type: 'player',
//       value: 'This is Haram',
//     },
//     {
//       type: 'singer',
//       value: 'Singing is Haram',
//     },
//     {
//       type: 'person',
//       value: 'John Doe',
//     },
//   ],
//   isLoggedIn: false,
// };
