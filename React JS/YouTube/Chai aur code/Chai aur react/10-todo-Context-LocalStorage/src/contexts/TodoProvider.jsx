/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const TodoContext = createContext([]);

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  // console.log(todos);

  // const updateTodo = (id) => {
  //   const todo = todos.find((todo)=> todo.id)
  // }

  const deleteTodo = (id) => {};

  const todoInfo = {
    todos,
    setTodos,
    addTodo,
    deleteTodo,
  };

  return (
    <>
      <TodoContext.Provider value={todoInfo}>{children}</TodoContext.Provider>
    </>
  );
};

export default TodoProvider;
