import React, { useState } from 'react';

const Counter = () => {
  const [score, setScore] = useState(0);

  const increment = () => {
    setScore((prevScore) => prevScore + 1);
  };

  return (
    <div>
      <br />
      <hr />
      <button onClick={increment}> +1</button>
      <button
        onClick={() => {
          increment();
          increment();
          increment();
          alert(score);
        }}
      >
        +3
      </button>

      <h1>Score: {score}</h1>
    </div>
  );
};

export default Counter;
