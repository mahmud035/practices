import React from 'react';

const ItemList = ({ list, handleToggle }) => {
  return (
    <div>
      {list.map((item) => (
        <li key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.seen}
              onChange={(e) => {
                handleToggle(item.id, e.target.checked);
              }}
              className="checkbox  checkbox-accent mr-3"
            />
            {item.title}
          </label>
        </li>
      ))}
    </div>
  );
};

export default ItemList;
