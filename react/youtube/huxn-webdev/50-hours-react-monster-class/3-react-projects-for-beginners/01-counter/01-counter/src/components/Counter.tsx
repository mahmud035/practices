import { useState } from 'react';
import '../styles/index.css';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  return (
    <div className="container">
      <h1 className="number">{count}</h1>

      <div className="btns-container">
        <button className="decrement" onClick={decrement}>
          -
        </button>
        <button className="increment" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}
