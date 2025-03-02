import { useEffect, useState } from 'react';

interface ITodo {
  title: string;
}

export default function FetchTodoWithoutUse() {
  const [todo, setTodo] = useState<ITodo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!res.ok) throw new Error('Failed to fetch data');
        const data = await res.json();
        setTodo(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>{todo?.title}</h1>
    </div>
  );
}
