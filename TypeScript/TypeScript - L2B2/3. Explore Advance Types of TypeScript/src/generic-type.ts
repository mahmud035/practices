// const rollNumbers3: number[] = [1, 2, 3];
// const rollNumbers4: string[] = ['1', '2', '3'];

// Ex: 1 (generic array)
type GenericArray<Type> = Array<Type>;

const rollNumbers3: GenericArray<number> = [1, 2, 3];
const rollNumbers4: GenericArray<string> = ['1', '2', '3'];

type NameRollType = { name: string; roll: number };

const userNameAndRollNumbers: GenericArray<NameRollType> = [
  { name: 'John', roll: 1 },
  { name: 'Alex', roll: 2 },
];

// Ex: 2 (generic tuple)
type GenericTuple<X, Y> = [X, Y];

type RelationWithSalaryType = { name: string; salary: number };
interface RelationWithSalaryInterface {
  name: string;
  salary: number;
}

const relation: GenericTuple<string, string> = ['John', 'Kate'];
console.log(relation);

const relationWithSalary: GenericTuple<RelationWithSalaryInterface, string> = [
  {
    name: 'John',
    salary: 100000,
  },
  'Kate',
];
console.log(relationWithSalary);

const relationWithSalary2: GenericTuple<RelationWithSalaryInterface, string> = [
  {
    name: 'John',
    salary: 100000,
  },
  'Kate',
];
console.log(relationWithSalary2);
