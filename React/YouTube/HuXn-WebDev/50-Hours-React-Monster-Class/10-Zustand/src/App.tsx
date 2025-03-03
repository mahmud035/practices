import Counter from './components/Counter';
import TicTacToe from './components/TicTacToe/TicTacToe';
import TodoApp from './components/TodoApp';
import User from './components/User';

export default function App() {
  return (
    <div>
      <TicTacToe />
      <Counter />
      <User />
      <TodoApp />
    </div>
  );
}
