interface Person {
  name: string;
  age: number;
  email: string;
}

const persons: Person[] = [
  { name: 'John', age: 30, email: 'john@example.com' },
  { name: 'Alex', age: 40, email: 'alex@example.com' },
  { name: 'Smith', age: 20, email: 'smith@example.com' },
  { name: 'Mr.X', age: 25, email: 'mr.x@example.com' },
];

function findPerson(
  persons: Person[],
  email: string
): object | null | undefined {
  if (Array.isArray(persons)) {
    const person = persons.find((p) => p.email === email);

    if (person) {
      return person;
    }
  } else {
    return null;
  }
}

console.log(findPerson(persons, 'john@example.com'));
