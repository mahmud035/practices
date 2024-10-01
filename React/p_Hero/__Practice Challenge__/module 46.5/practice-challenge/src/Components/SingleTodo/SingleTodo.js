import React from 'react';
import './SingleTodo.css';

const SingleTodo = ({ todo }) => {
  console.log(todo);
  const { id, completed, title } = todo;
  return (
    <div className="todo">
      <h2>{id}</h2>
      <h3>{title}</h3>
      <h4>Completed: {completed ? 'Yes' : 'No'}</h4>
    </div>
  );
};

export default SingleTodo;
