import React, { useEffect, useState } from 'react';
import SingleTodo from '../SingleTodo/SingleTodo';
import './AllTodo.css';

const AllTodo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div>
      <div className="todo-container">
        {todos.map((todo, index) => (
          <SingleTodo key={index} todo={todo}></SingleTodo>
        ))}
      </div>
    </div>
  );
};

export default AllTodo;
