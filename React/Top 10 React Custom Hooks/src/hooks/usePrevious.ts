import { useEffect, useRef } from 'react';

/**
 * A custom hook for tracking previous value of a state or prop
 *
 * @template T - The type of the value to track
 * @param {T} value - The value to track
 * @returns {T | undefined} The previous value
 *
 * @example
 * const prevCount = usePrevious(count)
 */

export default function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
