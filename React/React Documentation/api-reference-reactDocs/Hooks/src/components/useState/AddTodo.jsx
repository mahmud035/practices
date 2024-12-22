import React, { useState } from 'react';

const AddTodo = ({ handleAddTodo }) => {
  const [title, setTitle] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Add todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input input-bordered input-success w-full max-w-xs"
      />
      <button
        onClick={() => {
          setTitle('');
          handleAddTodo(title);
        }}
        className="btn btn-success ml-3"
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
