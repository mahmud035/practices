import { useEffect, useState } from 'react';

/**
 * A custom hook for syncing state with localStorage
 *
 * @template T - The type of the stored value
 * @param {string} key - The localStorage key to use
 * @param {T} initialValue - The initial value if no stored value exists
 * @returns {[T, (value: T) => void]} A tuple with the stored value and a setter function
 *
 * @example
 * const [name, setName] = useLocalStorage('name', '')
 */

export default function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
