import React, { useEffect } from 'react';

/**
 * A custom hook for detecting clicks outside a specified element
 *
 * @param {React.RefObject<HTMLElement>} ref - A ref to attach to the target element
 * @param {() => void} callback - The function to call when clicking outside
 *
 * @example
 * export default function Dropdown() {
 *   const [isOpen, setIsOpen] = useState(false);
 *   const dropdownRef = useRef(null);
 *
 *   const closeDropdown = () => {
 *       setIsOpen(false);
 *     };
 *
 *   useOnClickOutside(dropdownRef, closeDropdown);
 *
 *   return (
 *       <div>
 *           <button onClick={() => setIsOpen((prev) => !prev)}>
 *               Toggle Dropdown
 *           </button>
 *
 *           {isOpen && (
 *               <div ref={dropdownRef}>
 *                   <p>Dropdown Content</p>
 *               </div>
 *           )}
 *       </div>
 *   );
 * }
 */

export default function useClickOutside<T extends HTMLElement>(
  ref: React.RefObject<T>,
  callback: (event: MouseEvent | TouchEvent) => void
): void {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;

      callback(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, callback]);
}

// NOTE: This hook is useful for closing modals, dropdowns, or any component that should close when clicking outside of it.
