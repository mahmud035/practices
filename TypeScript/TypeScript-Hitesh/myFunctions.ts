function addTwo(num: number): number {
  // return 'Hello'; // Error Here
  return num + 2;
}

console.log(addTwo(5));

function getUpper(value: string): string {
  return value.toUpperCase();
}

console.log(getUpper('10'));
console.log(getUpper('pavel'));

function signUpUser(name: string, email: string, isPaid: boolean): void {
  // console.log(`${name} ${email} ${isPaid}`);
}

console.log(signUpUser('pavel', 'pavel@gmail.com', false));

// provide default value
const loginUser = (
  name: string,
  email: string,
  isPaid: boolean = false
): void => {
  // console.log(`${name} ${email} ${isPaid}`);
};

console.log(loginUser('pavel', 'pavel@gmail.com'));

// return union type
function getValue(myValue: number): boolean | string {
  if (myValue > 5) {
    return true;
  }

  return '200 OK';
}

// Arrow function return type Syntax
const getHello = (s: string): string => {
  return '';
};

const heros = ['thor', 'spiderman', 'ironman'];
const numbers = [1, 2, 3];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

numbers.map((number): number => {
  return number;
});

function consoleError(errorMessage: string): void {
  console.log(errorMessage);
  // return 1; // Error Here
}

function handleError(errorMessage: string): never {
  throw new Error(errorMessage);
}
