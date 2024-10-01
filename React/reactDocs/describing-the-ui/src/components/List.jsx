import React from 'react';
import { people } from '../utils/data';
import ListSection from './ListSection';

const List = () => {
  const chemists = people.filter((person) => person.profession === 'chemist');

  const everyoneElse = people.filter(
    (person) => person.profession !== 'chemist'
  );

  return (
    <article>
      <h1>Scientist</h1>

      <ListSection title="Chemist" people={chemists} />

      <ListSection title="Everyone Else" people={everyoneElse} />
    </article>
  );
};

export default List;
