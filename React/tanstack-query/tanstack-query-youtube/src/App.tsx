import Pagination from './components/Pagination';
import TodoPage from './pages/TodoPage';

export default function App() {
  return (
    <div className="max-w-xl p-4 mx-auto">
      <TodoPage />
      <Pagination />
    </div>
  );
}
