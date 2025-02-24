import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function HiddenSearchBar() {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState('white');

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setBgColor('#1a1a1a');

    if ((e.target as HTMLDivElement).classList.contains('container')) {
      setShowInput(false);
      setBgColor('#fff');
    }
  };

  return (
    <div
      className="container"
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
    >
      {showInput ? (
        <input type="search" placeholder="Search..." />
      ) : (
        <FaSearch onClick={() => setShowInput(true)} />
      )}
    </div>
  );
}
