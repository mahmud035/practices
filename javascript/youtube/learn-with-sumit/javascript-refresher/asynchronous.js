'use strict';

//* asynchronous javascript

const fetchTodo = async () => {
  try {
    const url = `https://jsonplaceholder.typicode.com/todos/1`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const showTodo = async () => {
  try {
    const todo = await fetchTodo();
    console.log(todo);
  } catch (error) {
    console.log(error);
  }
};
showTodo();
