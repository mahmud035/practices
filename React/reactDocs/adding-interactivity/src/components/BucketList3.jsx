import React from 'react';
import { useImmer } from 'use-immer';
import ItemList2 from './ItemList2';

let nextId = 3;
const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

const BucketList3 = () => {
  const [myList, updateMyList] = useImmer(initialList);
  const [yourArtworks, setYourArtworks] = useImmer(initialList);

  const handleToggleMyList = (id, nextSeen) => {
    updateMyList((draft) => {
      const artwork = draft.find((a) => a.id === id);
      artwork.seen = nextSeen;
    });
  };

  const handleToggleYourList = (artworkId, nextSeen) => {
    setYourArtworks((draft) => {
      const artwork = draft.find((a) => a.id === artworkId);
      artwork.seen = nextSeen;
    });
  };

  return (
    <div>
      <hr />
      <h2>Write concise update logic with Immer </h2>
      <h1>Art Bucket List</h1>

      <h2>My list of art to see:</h2>
      <ItemList2 artworks={myList} onToggle={handleToggleMyList} />

      <h2>Your list of art to see:</h2>
      <ItemList2 artworks={yourArtworks} onToggle={handleToggleYourList} />
    </div>
  );
};

export default BucketList3;
