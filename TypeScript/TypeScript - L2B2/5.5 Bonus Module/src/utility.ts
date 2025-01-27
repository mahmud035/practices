//* Pick<Type, Keys>
interface Person {
  name: string;
  email?: string;
  contactNo: string;
}

type Email = Pick<Person, 'email'>;
type Contact = Pick<Person, 'contactNo' | 'email'>;

//* Omit<Type, Keys>
type Name = Omit<Person, 'email' | 'contactNo'>;

//* Partial<Type>
// To make all the properties Optional types => use Partial type
type Optional = Partial<Person>;

//* Required<Type>
// To make all the properties Required => use Required type
type RequiredProps = Required<Person>;

//* Readonly
const person: Readonly<Person> = {
  name: 'John',
  email: 'john@example.com',
  contactNo: '34341312',
};

// person.name = 'Alex'; // Error Here

//* Record<Keys, Type>
// type MyObj = {
//   a: string;
//   b: string;
//   c: string;
// };

// using index signature
// type MyObj = {
//   [key: string]: string;
// };

//! Record ('a' | 'b' | 'c')
type MyObj = Record<'a' | 'b' | 'c', string>; // OK
// type MyObj = Record<string, string>; // OK

const obj: MyObj = {
  a: '1',
  b: '2',
  c: '3',
  // d: '4', // Error Here (for first MyObj using Record)
};

//* ================== Documentation ======================
//* Awaited<Type>
type A = Awaited<Promise<string>>;

type B = Awaited<Promise<Promise<number>>>;

type C = Awaited<boolean | Promise<number>>;

//* Exclude<UnionType, ExcludedMembers>
type T0 = Exclude<'a' | 'b' | 'c', 'a'>;

type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;

type T2 = Exclude<string | number | (() => void), Function>;

//* NonNullable<Type>
// Constructs a type by excluding null and undefined from Type.
type T3 = NonNullable<string | number | undefined>;

type T4 = NonNullable<string[] | null | undefined>;
