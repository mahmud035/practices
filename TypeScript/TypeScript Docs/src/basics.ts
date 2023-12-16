{
  let message = 'Hello World';
  message.toLowerCase();

  // message(); // Error Here

  const user = {
    name: 'Daniel',
    age: 26,
  };
  // user.location; // Error Here

  const announcement = 'Hello World!';

  //* How quickly can you spot the typos?
  // announcement.toLocaleLowercase(); // Error Here
  // announcement.toLocalLowerCase(); // Error Here

  //* We probably meant to write this...
  announcement.toLocaleLowerCase();

  function greet(person: string, date: Date): void {
    console.log(`Hello ${person}, today is ${date.toLocaleDateString()}!`);
  }

  greet('John', new Date());
}
