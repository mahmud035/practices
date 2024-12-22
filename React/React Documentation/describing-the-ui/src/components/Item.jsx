import React from 'react';

const Item = ({ isPacked, name }) => {
  return (
    <li>
      {name} {isPacked && '⚡'}
    </li>
  );
};

export default Item;
