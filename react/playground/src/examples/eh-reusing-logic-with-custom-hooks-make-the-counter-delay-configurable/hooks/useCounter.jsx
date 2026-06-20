import { useEffect, useState } from 'react';

export default function useCounter(delay) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, delay);

    return () => clearInterval(intervalId);
  }, [delay]);

  return count;
}
