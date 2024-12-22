import React from 'react';
import Task from './Task';

const TaskList = ({ todos, handleChangeTodo, handleDeleteTodo }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Task
              todo={todo}
              handleChangeTodo={handleChangeTodo}
              handleDeleteTodo={handleDeleteTodo}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
