import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    // setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <button onClick={handleClick} className="btn btn-primary btn-sm">
        You pressed me {count} times
      </button>
    </div>
  );
};

export default Counter;
