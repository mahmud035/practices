import React, { useState } from 'react';

let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye' },
  { id: 2, name: 'Louise Nevelson' },
];

const List2 = () => {
  const [artists, setArtists] = useState(initialArtists);

  const handleDelete = (artist) => {
    const remaining = artists.filter((a) => a.id !== artist.id);
    setArtists(remaining);
  };

  return (
    <div>
      <hr />
      <h1>Inspiring sculptures:</h1>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button onClick={() => handleDelete(artist)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List2;
