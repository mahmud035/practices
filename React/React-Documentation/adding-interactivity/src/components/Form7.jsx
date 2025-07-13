import React from 'react';
import { useImmer } from 'use-immer';

const Form7 = () => {
  const [person, setPerson] = useImmer({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image:
        'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  });

  function handleNameChange(e) {
    setPerson((draft) => {
      draft.name = e.target.value;
    });
  }

  function handleTitleChange(e) {
    setPerson((draft) => {
      draft.artwork.title = e.target.value;
    });
  }

  function handleCityChange(e) {
    setPerson((draft) => {
      draft.artwork.city = e.target.value;
    });
  }

  function handleImageChange(e) {
    setPerson((draft) => {
      draft.artwork.image = e.target.value;
    });
  }

  return (
    <>
      <hr />
      <h2>Using **Immer for Updating a nested object </h2>
      <label>
        Name:
        <input value={person.name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Title:
        <input value={person.artwork.title} onChange={handleTitleChange} />
      </label>
      <br />
      <label>
        City:
        <input value={person.artwork.city} onChange={handleCityChange} />
      </label>
      <br />
      <label>
        Image:
        <input value={person.artwork.image} onChange={handleImageChange} />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img
        style={{ width: '400px' }}
        src={person.artwork.image}
        alt={person.artwork.title}
      />
    </>
  );
};

export default Form7;
