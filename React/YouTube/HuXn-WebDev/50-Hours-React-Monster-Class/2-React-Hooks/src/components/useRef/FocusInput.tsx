import { useEffect, useRef } from 'react';

export default function Form() {
  const inputRef = useRef<HTMLInputElement>(null);

  // way-1
  const handleClick = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  // way-2
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
