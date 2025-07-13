// Use Case: 1
let score: number | string = 33;

score = 44; // OK
score = '55'; // OK
// score = true; // Error Here

// Use Case: 1.5
type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let pavel: User | Admin = { name: 'pavel', id: 334 };

pavel = { username: 'pavel', id: 334 };

// Use Case: 2
function getDBId(id: number | string) {
  // making some API calls
  console.log(`DB id is: ${id}`);
}

getDBId(3);
getDBId('3');

// Use Case: 2.5
// Narrowing (Union)
function getDBId2(id: number | string) {
  // id.toLowerCase(); // Error Here

  if (typeof id === 'string') {
    id.toLowerCase();
  }
}

getDBId2(3);
getDBId2('3');

// Use Case: 3
// Array (Single type data)
const data: number[] = [1, 2, 3];
const data2: string[] = ['1', '2', '3'];

// Mixed multiple types data
const data3: (number | string | boolean)[] = [1, '2', 3, true];

// Use Case: 4
let seatAllotment: 'aisle' | 'middle' | 'window';

seatAllotment = 'aisle';
// seatAllotment = 'crew'; // Error Here
