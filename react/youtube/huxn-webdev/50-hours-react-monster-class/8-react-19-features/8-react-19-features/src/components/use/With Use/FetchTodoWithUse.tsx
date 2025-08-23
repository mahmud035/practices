import { use } from 'react';

const fetchData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  return res.json();
};

export default function FetchTodoWithUse() {
  const data = use(fetchData()); // NOT Supported YET in Vite

  return <div>{data.title}</div>;
}
