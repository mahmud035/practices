//* Ex: 1 Generic Arrow Function
const createArray = <Type>(param: Type): Type[] => {
  return [param];
};

interface Name {
  name: string;
}

const result1 = createArray<string>('Bangladesh'); // string[]
const result2 = createArray<number>(12); // number[]
const result3 = createArray<boolean>(true); // boolean[]
const result4 = createArray<Name>({ name: 'John' }); // object[]

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

//* Ex:2 Generic Arrow Function with Tuple return type
const createArray2 = <X, Y>(param1: X, param2: Y): [X, Y] => {
  return [param1, param2];
};

interface Name2 {
  name: string;
  age: 28;
}

type TArray = string[];

const result5 = createArray2<string, number>('John', 100);
const result6 = createArray2<boolean, Name2>(true, { name: 'John, ', age: 28 });
const result7 = createArray2<number, TArray>(200, ['John Doe', 'Alex Morgan']);

console.log(result5);
console.log(result6);
console.log(result7);

//* Ex:3 Spread Operator with Generic Function
const crush = 'Kate';

const myInfo = {
  name: 'Persian',
  age: 100,
  salary: 100000,
};

const newData = { ...myInfo, crush };
console.log(newData);

// Same kaj with Function
const addMeInMyCrushMind = <Type>(myInfo: Type) => {
  const crush = 'Kate';
  const newData = { ...myInfo, crush };
  return newData;
};

const result8 = addMeInMyCrushMind(myInfo);
console.log(result8);
