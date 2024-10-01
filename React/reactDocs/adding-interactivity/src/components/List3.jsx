import React, { useState } from 'react';

let nextId = 3;
const initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye' },
  { id: 2, name: 'Louise Nevelson' },
];

const List3 = () => {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState(initialArtists);

  const handleClick = () => {
    const insertAt = 1; // Could be any index
    const nextArtists = [
      // Items before the insertion point:
      ...artists.slice(0, insertAt),

      // New item:
      { id: nextId++, name: name },

      // Items after the insertion point:
      ...artists.slice(insertAt),
    ];

    setArtists(nextArtists);
    setName('');
  };

  return (
    <div>
      <hr />
      <h2>Inserting into an array: Inspiring sculptors:</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} />{' '}
      <button onClick={handleClick}>Insert</button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default List3;
