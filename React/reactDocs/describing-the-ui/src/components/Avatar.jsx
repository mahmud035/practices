import React from 'react';
import getImageUrl from '../utils/utils';

const Avatar = ({ person, size = 300 }) => {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
};

export default Avatar;
