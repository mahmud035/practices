/*
  Index Signatures:
  - Allow objects to have dynamic property keys with specific value types
  - Can be combined with explicit property definitions
  - Readonly modifier prevents property modification
*/
interface TransactionObj {
  Pizza: number;
  Books: number;
  Job: number;
  readonly [key: string]: number; // Index signature - allows any string key with number value
}

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
};

const key = 'Pizza';

console.log(todaysTransactions.Pizza); // Dot notation access
console.log(todaysTransactions['Pizza']); // Bracket notation access
console.log(todaysTransactions[key]); // ✅ -10. Dynamic property access

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction]; // Access via index signature
  }
  return total;
};

console.log(todaysNet(todaysTransactions)); // ✅ 35
console.log(todaysTransactions['Dave']); // Returns `undefined` but no TS error due to index signature

/*
  Keyof Operator:
  - Type-safe way to work with object keys
  - Helps handle dynamic property access
*/
interface Person {
  name: string;
  age: number;
  location: string;
}

type PersonKeys = keyof Person;
// Equivalent to: "name" | "age" | "location"

interface Student {
  name: string;
  GPA: number;
  classes?: number[]; // Optional property
  // [key: string]: string | number | number[] | undefined; // Alternative index signature
}

const student: Student = {
  name: 'Doug',
  GPA: 3.5,
  classes: [100, 200],
};

// console.log(student.test); // ❌ Error without index signature

// ✅ Type-safe iteration with `keyof` assertion
for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`); // Assertion needed without index signature
}

Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]); // Type assertion for array method
});

// Function using `keyof` for type safety
const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, 'name'); // ✅ Student name: Doug

/*
  Record Utility Type:
  - Creates mapped type with specific key set
  - Alternative to index signatures when keys are known
*/
type Streams = 'salary' | 'bonus' | 'sideHustle'; // Union type of literal strings
type Incomes = Record<Streams, number>; // Record type maps keys to value type

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sideHustle: 250,
};

// Type-safe iteration with Record type
for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]); // Still needs assertion in for-in loop
}
