//* ==================>>=======================>>===================>
// IMPORTANT:
//! NEED TO REMEMBER
// 'Empty object' এর ক্ষেত্রে এইভাবে 'type define করা যায়'।
// এটার মানে হলো 'object এর key গুলো always string হবে' এবং 'value গুলো যে কোন কিছু হতে পারে'। একারণে 'unknown' ব্যবহার করা হয়েছে।

const emptyObj: Record<string, unknown> = {}; // Recommended

// const emptyObj: object = {}; // Same as above
// const emptyObj: {} = {}; // Same as above

//* ==================>>=======================>>===================>

// IMPORTANT: Utility types (Makes life easy)

type Person = {
  name: string;
  age: number;
  email?: string;
  contactNo: string;
};

//* Pick
type NameAge = Pick<Person, 'name' | 'age'>;

//* Omit
type ContactInfo = Omit<Person, 'name' | 'age'>;

//* Required
type PersonRequired = Required<Person>;

//* Partial
type PersonPartial = Partial<Person>;

//* Readonly
type PersonReadonly = Readonly<Person>;

const person1: PersonReadonly = {
  name: 'Mr. X',
  age: 200,
  contactNo: '01900',
};

// person1.name = 'Mr. Y'; // Error: Cannot assign to 'name' because it it a read-only property
console.log(person1);

//* Record
// type MyObj = {
//   a: string;
//   b: string;
// };

// Syntax:   Record<Keys, Type>
type MyObj = Record<string, string>;

const obj1: MyObj = {
  a: 'aa',
  b: 'bb',
  c: 'cc',
  d: 'dd',
};

//* ==================>>=======================>>===================>
// IMPORTANT:
//! NEED TO REMEMBER
// 'Empty object' এর ক্ষেত্রে এইভাবে 'type define করা যায়'।
// এটার মানে হলো 'object এর key গুলো always string হবে' এবং 'value গুলো যে কোন কিছু হতে পারে'। একারণে 'unknown' ব্যবহার করা হয়েছে।

const emptyObj2: Record<string, unknown> = {};

//* ==================>>=======================>>===================>
