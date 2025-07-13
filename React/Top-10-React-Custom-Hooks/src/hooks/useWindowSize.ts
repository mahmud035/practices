/**
 * A custom hook for tracking window dimensions
 *
 * @returns {{
 *  width: number,
 *  height: number
 * }} An object containing window width and height
 *
 * @example
 * const { width, height } = useWindowSize()
 */

import { useEffect, useState } from 'react';

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
