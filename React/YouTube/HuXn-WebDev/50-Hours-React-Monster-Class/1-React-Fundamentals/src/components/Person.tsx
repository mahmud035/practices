interface IPersonProps {
  name: string;
  age: number;
}

export default function Person({ name, age }: IPersonProps) {
  return (
    <>
      <h2>Person Name: {name}</h2>
      <p>Person Age: {age}</p>
    </>
  );
}
