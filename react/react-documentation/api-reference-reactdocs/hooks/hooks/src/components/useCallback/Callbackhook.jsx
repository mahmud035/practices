import React, { useState } from 'react';
import Todos from './Todos';

const Callbackhook = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const addTodo = () => {
    setTodos((prevTodos) => [...prevTodos, `new Entry`]);
  };

  return (
    <div className="flex flex-col items-center ">
      <Todos todos={todos} addTodo={addTodo} />
      <hr className="my-3" />
      <div className="flex gap-4 font-semibold">
        <div>Count: {count}</div>
        <button onClick={increment} className="btn btn-sm btn-primary ">
          +
        </button>
      </div>
    </div>
  );
};

export default Callbackhook;
