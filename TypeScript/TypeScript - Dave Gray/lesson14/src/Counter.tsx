import { useReducer } from 'react';

type REDUCER_ACTION_TYPE = 'INCREMENT' | 'DECREMENT' | 'RESET';

interface ReducerAction {
  type: REDUCER_ACTION_TYPE;
  payload?: number;
}

const reducer = (state: number, action: ReducerAction): number => {
  switch (action.type) {
    case 'INCREMENT':
      return state + (action.payload || 1);
    case 'DECREMENT':
      return state - (action.payload || 1);
    case 'RESET':
      return 0;
    default:
      throw new Error('Unknown action type');
  }
};

// Example usage in a component
const Counter = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  const increment = () => dispatch({ type: 'INCREMENT', payload: 5 });
  const decrement = () => dispatch({ type: 'DECREMENT', payload: 3 });
  const reset = () => dispatch({ type: 'RESET' });

  return (
    <div>
      <p>Count: {count}</p>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
