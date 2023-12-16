//* asynchronous javascript

const fetchTodo = async () => {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
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
