const initialState = {
  list: [],
};

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'addTodo':
      const { id, data } = action.payload;

      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case 'deleteTodo':
      const newList = state.list.filter((element) => element.id !== action.id);

      return {
        ...state,
        list: newList,
      };

    default:
      return state;
  }
};

export default todoReducers;
