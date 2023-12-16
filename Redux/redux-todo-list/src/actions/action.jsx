export const addTodo = (data) => {
  return {
    type: 'addTodo',
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: 'deleteTodo',
    id: id,
  };
};

export const removeTodo = () => {
  return { type: 'removeTodo' };
};
