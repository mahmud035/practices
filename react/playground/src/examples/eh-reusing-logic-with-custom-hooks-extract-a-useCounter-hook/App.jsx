import useCounter from './hooks/useCounter.jsx';
import './style.css';

export default function Counter() {
  const count = useCounter();

  return <h1>Seconds passed: {count}</h1>;
}
