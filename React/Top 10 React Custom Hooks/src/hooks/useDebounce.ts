import { useEffect, useState } from 'react';

/**
 * A custom hook for debouncing rapidly changing values
 *
 * @template T - The type of the value to debounce
 * @param {T} value - The value to debounce
 * @param {number} delay - The debounce delay in milliseconds
 * @returns {T} The debounced value
 *
 * @example
 * export default function SearchComponent() {
 *   const [searchTerm, setSearchTerm] = useState('');
 *   const debouncedSearchTerm = useDebounce(searchTerm, 500);
 *
 *   return (
 *       <form>
 *           <input
 *               type="search"
 *               value={searchTerm}
 *               onChange={(e) => setSearchTerm(e.target.value)}
 *               placeholder="Search..."
 *           />
 *           <p>Debounced value: {debouncedSearchTerm}</p>
 *       </form>
 *   );
 * }
 */

export default function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return debouncedValue;
}

// NOTE: This hook will delay the setting of the search query and filter values by a specified time (e.g., 500ms) to avoid triggering unnecessary requests when the user is typing.

// We will use the useDebounce hook to debounce the searchQuery, minSalary, and maxSalary before passing them to the useGetJobsQuery hook.
