import { useContext } from 'react';
import { TaskContext } from '../contexts/TasksContext';

export default function useTasks() {
  const taskInfo = useContext(TaskContext);
  if (!taskInfo) throw new Error('useTasks must be used within TaskProvider');
  return taskInfo;
}
