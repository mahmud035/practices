import { createContext, useReducer } from 'react';
import {
  initialTasks,
  IState,
  ITaskAction,
  taskReducer,
} from '../reducers/TaskReducer';

interface ITaskContext {
  tasks: IState[];
  taskDispatch: React.ActionDispatch<[action: ITaskAction]>;
}

interface ITaskProviderProps {
  children: React.ReactNode;
}

const TaskContext = createContext<ITaskContext | null>(null);

export default function TaskProvider({ children }: ITaskProviderProps) {
  const [tasks, taskDispatch] = useReducer(taskReducer, initialTasks);

  const taskInfo = {
    tasks,
    taskDispatch,
  };

  return (
    <TaskContext.Provider value={taskInfo}>{children}</TaskContext.Provider>
  );
}

export { TaskContext };
