import { useState } from 'react';

const ExampleOne = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <main
        style={{
          padding: '20px',
        }}
      >
        <div>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}> + </button>{' '}
          <button onClick={() => setCount(count - 1)}> - </button>
        </div>

        <div>
          <h3>Lists</h3>
          <input type="text" /> <button>Add Item</button>
        </div>
      </main>
    </div>
  );
};

export default ExampleOne;
