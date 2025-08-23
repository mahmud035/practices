//* 04. Array And Tuples In Typescript

// let players: string[];
// let players: (string | number | boolean)[];
let players: [string, string, number, boolean, string];
// let players: string[] | number[] | boolean[];

players = ['Messi', 'Rolando', 89, true, 'Pavel'];
// players = [45, 34];
// players = [true, false];

players[0] = 'Pavel';

// players[2] = 777;

// players[0] = false;

// players[0] = {};

// players = 33;
// players = false;

// players.push('Neymar');

// players.push(123);
// players.push(true);

const newPlayers = players.map((player, index) => index + 1 + '. ' + player);
// console.log(newPlayers);
