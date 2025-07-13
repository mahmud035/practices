import React from 'react';
import getImageUrl from '../utils/utils';

const ListSection = ({ title, people }) => {
  return (
    <div>
      <h2>{title}</h2>

      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <img className="avatar" src={getImageUrl(person)} alt="" />
            <p></p>
            <strong>{person.name} </strong>
            {`known for ${person.accomplishment}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListSection;
