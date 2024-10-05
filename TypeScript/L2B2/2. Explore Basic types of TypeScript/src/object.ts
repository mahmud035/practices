// NOTE: Object Type:

//* Normal way to define object type
const user2: {
  company: 'Programming Hero'; // IMPORTANT: literal types => types with fixed value
  name: string;
  age: number;
  isMarried: boolean;
  wife?: string; // Optional property
} = {
  company: 'Programming Hero',
  name: 'Montu Mia',
  age: 52,
  isMarried: true,
  wife: 'Bibi',
};

//* Using interface
interface User {
  readonly company: string; // make property just readonly
  name: string;
  age: number;
  isMarried: boolean;
  wife?: string; // Optional property
}

const user3: User = {
  company: 'Programming Hero',
  name: 'John',
  age: 34,
  isMarried: true,
  wife: 'Alexa',
};

//* Using type
type User2 = {
  readonly company: string; // make property just readonly
  name: string;
  age: number;
  isMarried: boolean;
  wife?: string; // Optional property
};

const user4: User2 = {
  company: 'Programming Hero',
  name: 'Smith',
  age: 40,
  isMarried: true,
  wife: 'Jeni',
};

console.log(user2);
console.log(user3);
console.log(user4);

// NOTE: Literals Type:

/**
 * IMPORTANT:
 * types with fixed value
 * যদি কোন type এর জন্য value কে fixed করে দেই, তাহলে শুধুমাত্র ঐ value টা ই বা value গুলোই Accept করবে।
 */

// 1. String Literals
type Status = 'success' | 'error' | 'pending';
const statusOfDataFetching: Status = 'success';

// 2. Number Literals
type EvenNumber = 2 | 4 | 6;
const num: EvenNumber = 6;

// 3. Boolean Literals
type YesOrNo = true | false;
const answer: YesOrNo = true;

// 4. Enum Numbers
enum Color {
  Red = 'RED',
  Green = 'GREEN',
  Blue = 'BLUE',
}
const chosenColor: Color = Color.Green;
