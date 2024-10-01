import React, { useState } from 'react';
import AddTodo from './AddTodo';
import TaskList from './TaskList';

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

const TaskApp = () => {
  const [todos, setTodos] = useState(initialTodos);

  const handleAddTodo = (title) => {
    todos.push({
      id: nextId++,
      title: title,
      done: false,
    });
  };

  const handleChangeTodo = (nextTodo) => {
    const todo = todos.find((t) => t.id === nextTodo.id);
    todo.title = nextTodo.title;
    todo.done = nextTodo.done;
  };

  const handleDeleteTodo = (todoId) => {
    const index = todos.findIndex((t) => t.id === todoId);
    todos.splice(index, 1);
  };

  return (
    <div>
      <hr />
      <h3>Challenge 3 of 4: Fix the mutations using non-mutative methods </h3>

      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
};

export default TaskApp;
