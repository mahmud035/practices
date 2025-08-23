import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import './styles/index.css';

export default function App() {
  return (
    <div className="container">
      <h2>Task Management</h2>
      <AddTask />
      <TaskList />
    </div>
  );
}
