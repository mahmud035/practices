interface IGreetProps {
  name: string;
}

export default function Greeting({ name }: IGreetProps) {
  const date = new Date().toISOString();

  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>{date}</p>
    </div>
  );
}
