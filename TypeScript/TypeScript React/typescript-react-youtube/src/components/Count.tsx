import { useState } from 'react';

export default function Count() {
  const [count, setCount] = useState<number>(0);

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrease = () => {
    if (count === 0) return alert('Count cannot be less than 0');
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}
