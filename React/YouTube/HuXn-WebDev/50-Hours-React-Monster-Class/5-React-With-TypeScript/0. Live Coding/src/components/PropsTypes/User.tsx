interface IUser {
  name: string;
  age: number;
  isStudent: boolean;
}

export default function User({ name, age, isStudent }: IUser) {
  return (
    <article>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h3>Is student: {isStudent ? 'Yes' : 'No'}</h3>
    </article>
  );
}
