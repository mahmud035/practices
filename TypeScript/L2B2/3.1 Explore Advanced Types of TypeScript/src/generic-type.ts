{
  //* Generic Type

  type GenericArray<T> = Array<T>;

  // const rollNumbers: number[] = [1, 2, 3];
  // const rollNumbers: Array<number> = [1, 2, 3];
  const rollNumbers: GenericArray<number> = [1, 2, 3];

  // const mentors: string[] = ['Mr. X', 'Mr. Y', 'Mr. Z'];
  // const mentors: Array<string> = ['Mr. X', 'Mr. Y', 'Mr. Z'];
  const mentors: GenericArray<string> = ['Mr. X', 'Mr. Y', 'Mr. Z'];

  // const boolArray: boolean[] = [true, false, true];
  // const boolArray: Array<boolean> = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  type User = {
    name: string;
    age: number;
  };

  const user: GenericArray<User> = [
    {
      name: 'Mezba',
      age: 100,
    },
    {
      name: 'Jhankar Mahbub',
      age: 200,
    },
  ];

  //* Generic Tuple
  type GenericTuple<X, Y> = [X, Y];

  const Human: GenericTuple<string, string> = ['Mr. X', 'Mrs. Y'];

  const UserWithID: GenericTuple<number, { name: string; email: string }> = [
    123,
    {
      name: 'Persian',
      email: 'a@gmail.com',
    },
  ];
}
