import { useRef, useState } from 'react';
import useClickOutside from '../hooks/useClickOutside';

export default function ClickOutsideExample() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useClickOutside(dropdownRef, closeDropdown);

  return (
    <div className="p-4 border rounded-lg">
      <h1 className="text-2xl font-medium pb-2">useClickOutside</h1>

      <div>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="bg-purple-500 text-white px-4 py-2 rounded"
        >
          Toggle Dropdown
        </button>

        {isOpen && (
          <div
            ref={dropdownRef}
            className="mt-2 p-4 bg-gray-100 rounded-lg border-2 border-purple-500"
          >
            <p>Dropdown Content</p>
          </div>
        )}
      </div>
    </div>
  );
}
