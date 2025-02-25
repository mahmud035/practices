import { useReducer } from 'react';

type State = { count: number };

type REDUCER_ACTIONS_TYPE = 'INCREMENT' | 'DECREMENT' | 'RESET';

interface IReducerAction {
  type: REDUCER_ACTIONS_TYPE;
  payload?: number;
}

const counterReducer = (state: State, action: IReducerAction): State => {
  switch (action.type) {
    case 'INCREMENT': {
      return { count: state.count + (action.payload ?? 1) };
    }
    case 'DECREMENT': {
      return { count: state.count - (action.payload ?? 1) };
    }
    case 'RESET': {
      return { count: 0 };
    }
    default:
      throw new Error('Unknown action type');
  }
};

const initialState: State = { count: 0 };

// Example usage in a component
export default function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const increment = () => dispatch({ type: 'INCREMENT', payload: 5 });
  const decrement = () => dispatch({ type: 'DECREMENT', payload: 3 });
  const reset = () => dispatch({ type: 'RESET' });

  return (
    <div>
      <h2>Reducer</h2>
      <p>Count: {state.count}</p>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
