import {
  ChangeEvent,
  createContext,
  ReactElement,
  useCallback,
  useContext,
  useReducer,
} from 'react';

// Define the shape of our state
type StateType = {
  count: number;
  text: string;
};

// Define the structure of our actions
type ReducerAction = {
  type: 'INCREMENT' | 'DECREMENT' | 'NEW_INPUT'; // Action type
  payload?: string; // Optional payload, used for the NEW_INPUT action
};

// Initial state for our reducer
const initState: StateType = { count: 0, text: '' };

// Reducer function to manage state transitions based on dispatched actions
const reducer = (state: StateType, action: ReducerAction): StateType => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'NEW_INPUT':
      return { ...state, text: action.payload ?? '' };
    default:
      throw new Error('Invalid action type');
  }
};

// Custom hook that encapsulates our reducer logic and provides callback functions
const useCounterContext = (initState: StateType) => {
  // useReducer hook to manage state based on the reducer function and initial state
  const [state, dispatch] = useReducer(reducer, initState);

  // Memoized callback to dispatch the INCREMENT action
  const increment = useCallback(() => dispatch({ type: 'INCREMENT' }), []);

  // Memoized callback to dispatch the DECREMENT action
  const decrement = useCallback(() => dispatch({ type: 'DECREMENT' }), []);

  // Memoized callback to dispatch the NEW_INPUT action with the current input value
  const handleTextInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'NEW_INPUT',
      payload: e.target.value,
    });
  }, []);

  // Return the state and the action dispatchers
  return { state, increment, decrement, handleTextInput };
};

// Define the type for the context value using the return type of our custom hook
type UseCounterContextType = ReturnType<typeof useCounterContext>;

// Initial context state used when creating the context
const initContextState: UseCounterContextType = {
  state: initState,
  // Dummy functions to satisfy the type signature; these will be overridden by the provider
  increment: () => {},
  decrement: () => {},
  handleTextInput: (e: ChangeEvent<HTMLInputElement>) => {},
};

// Create a React context for the counter with the initial context state
export const CounterContext =
  createContext<UseCounterContextType>(initContextState);

// Define type for component children
type ChildrenType = {
  children?: ReactElement | ReactElement[] | undefined;
};

// Provider component that wraps its children with the CounterContext
export const CounterProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <CounterContext.Provider value={useCounterContext(initState)}>
      {children}
    </CounterContext.Provider>
  );
};

// Custom hook to expose counter-specific functionality from the context
type UseCounterHookType = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useCounter = (): UseCounterHookType => {
  // Extract count and action dispatchers from the context
  const {
    state: { count },
    increment,
    decrement,
  } = useContext(CounterContext);
  // Return only the values needed for count manipulation
  return { count, increment, decrement };
};

// Custom hook to expose text-specific functionality from the context
type UseCounterTextHookType = {
  text: string;
  handleTextInput: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const useCounterText = (): UseCounterTextHookType => {
  // Extract text and its updater from the context
  const {
    state: { text },
    handleTextInput,
  } = useContext(CounterContext);
  // Return only the values needed for text management
  return { text, handleTextInput };
};
