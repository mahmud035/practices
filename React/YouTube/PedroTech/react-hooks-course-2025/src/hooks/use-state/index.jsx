import { useState } from 'react';

export const StateExample = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrease = () => {
    if (count === 0) return alert('Cannot decrease below 0');
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <p>Count: {count} </p>
      <button onClick={handleIncrease}>Increase Counter</button>
      <button onClick={handleDecrease}>Decrease Counter</button>
    </div>
  );
};
