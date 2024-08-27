import { useEffect, useState } from 'react';

export default function PostFeed() {
  const [data, setData] = useState({
    userId: 1,
    id: 1,
    title: '',
    completed: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/10');
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>PostFeed</h1>
      <div className="main">{data.title}</div>
    </>
  );
}
