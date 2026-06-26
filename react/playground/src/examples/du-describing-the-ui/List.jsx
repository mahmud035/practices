import { people } from './data';
import { getImageUrlTwo } from './utils';

export default function List() {
  const listItems = people.map((person) => (
    <li key={person.id}>
      <img src={getImageUrlTwo(person)} alt={person.name} />

      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  ));

  return (
    <article>
      <h3>Scientists</h3>
      <ul className="rendering-list">{listItems}</ul>
    </article>
  );
}
