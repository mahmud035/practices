import InfiniteQueries from './components/InfiniteQueries';
// import Pagination from './components/Pagination';
import PaginationWithPageNumbers from './components/PaginationWithPageNumbers';
import TodoPage from './pages/TodoPage';

export default function App() {
  return (
    <div className="max-w-xl p-4 mx-auto">
      <TodoPage />
      {/* <Pagination /> */}
      <PaginationWithPageNumbers />
      <InfiniteQueries />
    </div>
  );
}
