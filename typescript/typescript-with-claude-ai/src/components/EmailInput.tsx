import { useRef } from 'react';

export default function EmailInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    // Type assertion not needed - ref is already typed
    inputRef.current?.focus();
  };

  return <input ref={inputRef} type="email" />;
}
