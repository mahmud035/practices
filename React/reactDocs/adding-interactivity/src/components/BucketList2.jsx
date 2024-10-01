import React from 'react';
import { useState } from 'react';
import ItemList2 from './ItemList2';

let nextId = 3;
const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

const BucketList2 = () => {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);

  const handleToggleMyList = (artworkId, nextSeen) => {
    setMyList(
      myList.map((artwork) => {
        if (artwork.id === artworkId) {
          // Create a *new* object with changes
          return { ...artwork, seen: nextSeen };
        } else {
          // No change
          return artwork;
        }
      })
    );
  };

  const handleToggleYourList = (artworkId, nextSeen) => {
    setYourList(
      yourList.map((artwork) => {
        if (artwork.id === artworkId) {
          // Create a *new* object with changes
          return { ...artwork, seen: nextSeen };
        } else {
          //  No change
          return artwork;
        }
      })
    );
  };

  return (
    <div>
      <hr />
      <h2>Updating objects inside arrays</h2>
      <h1>Art Bucket List</h1>

      <h2>My list of art to see:</h2>
      <ItemList2 artworks={myList} onToggle={handleToggleMyList} />

      <h2>Your list of art to see:</h2>
      <ItemList2 artworks={yourList} onToggle={handleToggleYourList} />
    </div>
  );
};

export default BucketList2;
