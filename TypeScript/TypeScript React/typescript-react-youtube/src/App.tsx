import './App.css';
import Count from './components/Count';
import Person from './components/Person';
import User from './components/User';

export default function App() {
  return (
    <div>
      <Person name="John" age={20} isMarried={false} />
      <Count />
      <User />
    </div>
  );
}
