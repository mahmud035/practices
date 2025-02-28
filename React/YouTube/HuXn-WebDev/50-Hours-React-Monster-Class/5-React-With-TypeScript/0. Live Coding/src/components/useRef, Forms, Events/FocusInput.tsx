import { useRef } from 'react';

export default function FocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        placeholder="Click the button to focus me"
      />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}
