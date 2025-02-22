import { useRef } from 'react';
import '../../styles/CatFriends.css';

export default function CatFriends() {
  const listRef = useRef<HTMLUListElement>(null);

  const scrollToIndex = (index: number) => {
    const listNode = listRef.current;
    if (!listNode) return;
    const imgNode = listNode.querySelectorAll('li > img')[index]; // This line assumes a particular DOM structure:
    imgNode.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  return (
    <>
      <nav>
        <button onClick={() => scrollToIndex(0)}>Neo</button>
        <button onClick={() => scrollToIndex(1)}>Millie</button>
        <button onClick={() => scrollToIndex(2)}>Bella</button>
      </nav>
      <div>
        <ul ref={listRef}>
          <li>
            <img src="https://placecats.com/neo/300/200" alt="Neo" />
          </li>
          <li>
            <img src="https://placecats.com/millie/200/200" alt="Millie" />
          </li>
          <li>
            <img src="https://placecats.com/bella/199/200" alt="Bella" />
          </li>
        </ul>
      </div>
    </>
  );
}
