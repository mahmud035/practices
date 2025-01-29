import { useEffect, useState } from 'react';

/**
 * A custom hook for detecting key presses
 *
 * @param {string} targetKey - The key to detect (case-sensitive)
 * @returns {boolean} A boolean indicating if the key is currently pressed
 *
 * @example
 * const enterPressed = useKeyPress('Enter')
 */

export default function useKeyPress(targetKey: string): boolean {
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    const downHandler = ({ key }: KeyboardEvent) =>
      key === targetKey && setKeyPressed(true);

    const upHandler = ({ key }: KeyboardEvent) =>
      key === targetKey && setKeyPressed(false);

    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [targetKey]);

  return keyPressed;
}
