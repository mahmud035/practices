import React from 'react';

const ItemList2 = ({ artworks, onToggle }) => {
  return (
    <ul>
      {artworks.map((artwork) => (
        <li>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={(e) => {
                onToggle(artwork.id, e.target.checked);
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default ItemList2;
