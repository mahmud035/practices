import React, { useState } from 'react';

const Task = ({ todo, handleChangeTodo, handleDeleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;

  if (isEditing) {
    todoContent = (
      <>
        <input
          type="text"
          value={todo.title}
          onChange={(e) => {
            handleChangeTodo({
              ...todo,
              title: e.target.value,
            });
          }}
          className="input input-bordered input-success w-full max-w-xs"
        />

        <button
          onClick={() => {
            setIsEditing(false);
          }}
          className="btn btn-success ml-3"
        >
          Save
        </button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <button
          onClick={() => {
            setIsEditing(true);
          }}
          className="btn btn-info ml-3"
        >
          Edit
        </button>
      </>
    );
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={(e) => {
            handleChangeTodo({ ...todo, done: e.target.checked });
          }}
          className="checkbox mr-2"
        />
        {todoContent}
        <button
          onClick={() => handleDeleteTodo(todo.id)}
          className="btn btn-warning"
        >
          Delete
        </button>
      </label>
    </div>
  );
};

export default Task;
