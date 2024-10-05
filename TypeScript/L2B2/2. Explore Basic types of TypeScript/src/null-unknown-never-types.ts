//* Null type
const searchName = (value: string | null): void => {
  if (value === null) {
    console.log('No value found');
  } else {
    console.log('Searching...');
  }
};

searchName('John');
searchName(null);

// km^h ==> ms^-1

//* Unknown type
const getMyCarSpeed = (speed: unknown): void => {
  if (typeof speed === 'number') {
    const convertedSpeed = (speed * 1000) / 3600;
    console.log(`My speed is ${convertedSpeed} ms^-1`);
  }

  if (typeof speed === 'string') {
    // const value = Number(speed.slice(0, 2));
    const value = Number(speed.split(' ')[0]);
    const convertedSpeed = (value * 1000) / 3600;

    console.log(`My speed is ${convertedSpeed} ms^-1`);
  }
};

getMyCarSpeed(10); // number
getMyCarSpeed('10 km/h'); // string

//* Never type
function throwError(message: string): never {
  throw new Error(message);
}

// throwError('Bhai bhai error hoyeche, kandi dimu ');
// throwError('Error is mortal');
