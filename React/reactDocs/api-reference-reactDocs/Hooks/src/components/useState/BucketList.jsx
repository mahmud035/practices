import React from 'react';
import ItemList from './ItemList';
import { useImmer } from 'use-immer';

let nextId = 3;
const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

const BucketList = () => {
  const [list, updateList] = useImmer(initialList);
  // console.log(list);

  const handleToggle = (itemId, nextSeen) => {
    updateList((draft) => {
      const item = draft.find((item) => item.id === itemId);
      item.seen = nextSeen;
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Art Bucket List</h1>
      <h2 className="text-xl font-medium">My list of art to see:</h2>
      <ItemList list={list} handleToggle={handleToggle} />
    </div>
  );
};

export default BucketList;
