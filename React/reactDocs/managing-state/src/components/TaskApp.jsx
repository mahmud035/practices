import React, { useReducer } from 'react';
import { taskReducer } from '../reducers/TasksReducer';

let nextId = 3;
const initialState = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];

const TaskApp = () => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return <div></div>;
};

export default TaskApp;
