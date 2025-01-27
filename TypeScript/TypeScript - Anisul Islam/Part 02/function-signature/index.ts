// function-signature
let userInfo1: () => void;
let userInfo2: (name: string) => void;
let userInfo3: (name: string, age: number) => string;

userInfo1 = () => {
  console.log(`Anisul Islam is 32 years old`);
};

userInfo2 = (name: string) => {
  console.log(`${name} is 32 years old`);
};

userInfo3 = (name: string, age: number) => {
  return `${name} is ${age} years old`;
};

userInfo1();
userInfo2('Anisul Islam');
console.log(userInfo3('Anisul Islam', 32));
