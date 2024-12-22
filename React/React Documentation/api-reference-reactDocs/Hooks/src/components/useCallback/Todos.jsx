import React from 'react';

const Todos = ({ todos, addTodo }) => {
  console.log('child render');

  return (
    <>
      <h2 className="text-2xl font-bold">My Todos</h2>

      {todos.map((todo, index) => {
        return <p key={index}>{todo + index}</p>;
      })}

      <button onClick={addTodo} className="btn btn-sm btn-accent mt-2">
        Add Todo
      </button>
    </>
  );
};

export default Todos;
