import React, { useState } from 'react';

let initialCounter = [0, 0, 0];

const CounterList = () => {
  const [counters, setCounters] = useState(initialCounter);

  const handleIncrementClick = (index) => {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        // Increment the clicked counter
        return c + 1;
      } else {
        // The rest haven't changed
        return c;
      }
    });

    setCounters(nextCounters);
  };

  return (
    <div>
      <hr />
      <h2>Replacing items in an array</h2>
      <ul>
        {counters.map((counter, index) => (
          <li key={index}>
            {counter}{' '}
            <button
              onClick={() => {
                handleIncrementClick(index);
              }}
            >
              +1
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CounterList;
