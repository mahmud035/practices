import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment By 1</button>
    </div>
  );
}
