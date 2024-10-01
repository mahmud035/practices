import React from 'react';

const ItemList = ({ artworks, onToggle }) => {
  return (
    <div>
      <ul>
        {artworks.map((artwork) => (
          <li key={artwork.id}>
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
    </div>
  );
};

export default ItemList;
