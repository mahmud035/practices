import { useCallback, useState } from 'react';

/**
 * A custom hook for handling boolean state toggling
 *
 * @param initialState - The initial state value (default: false)
 * @returns {[boolean, () => void]} A tuple with the current state and a toggle function
 *
 * @example
 * const [isOn, toggleIsOn] = useToggle(false);
 * return <button onClick={toggleIsOn}>{isOn ? 'ON' : 'OFF'}</button>;
 */

export default function useToggle(
  initialState: boolean = false
): [boolean, () => void] {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => setState((prev) => !prev), []);

  return [state, toggle];
}
