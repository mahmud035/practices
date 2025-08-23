// Use Case: 1
const superHeros: string[] = [];
const heroPower: number[] = [];

const superBoys: Array<string> = []; // Another Syntax for Array
const boysPower: Array<number> = [];

superHeros.push('Spiderman');
heroPower.push(2);

console.log(superHeros);
console.log(heroPower);

// Use Case: 2
type User = {
  name: string;
  isActive: boolean;
};

const allUsers: User[] = [];

allUsers.push({ name: 'pavel', isActive: true });
allUsers.push({ name: 'mahmud', isActive: false });
allUsers.push({ name: 'Sakil', isActive: true });

console.log(allUsers);

// Use Case: 3
const MLModels: number[][] = [[255, 255, 255], []];
console.log(MLModels);
