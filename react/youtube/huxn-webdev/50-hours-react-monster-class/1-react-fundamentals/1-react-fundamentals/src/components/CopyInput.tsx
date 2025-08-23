import { useState } from 'react';
import PopupContent from './PopupContent';

export default function CopyInput() {
  const [inputValue, setInputValue] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(inputValue).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleCopy}>{copied ? 'Copied' : 'Copy'}</button>
      </form>

      <PopupContent copied={copied} />
    </div>
  );
}
