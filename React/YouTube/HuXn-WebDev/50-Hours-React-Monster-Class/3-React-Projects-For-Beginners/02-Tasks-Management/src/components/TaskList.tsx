import useTasks from '../hooks/useTasks';
import '../styles/index.css';
import Task from './Task';

export default function TaskList() {
  const { tasks } = useTasks();

  return (
    <>
      <ul className="tasks-list">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </>
  );
}
