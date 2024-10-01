import React, { useState } from 'react';

const Form6 = () => {
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image:
        'https://images.pexels.com/photos/1933317/pexels-photo-1933317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  });

  const handleChange = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
      artwork: {
        ...person.artwork,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <>
      <hr />
      <h2>Updating a nested object </h2>
      <h3>(**using a single event handler)</h3>
      <label>
        Name:
        <input name="name" value={person.name} onChange={handleChange} />
      </label>
      <br />

      <label>
        Title:
        <input
          name="title"
          value={person.artwork.title}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        City:
        <input
          name="city"
          value={person.artwork.city}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Image:
        <input
          name="image"
          value={person.artwork.image}
          onChange={handleChange}
        />
      </label>
      <br />

      <p>
        {person.artwork.title} by {person.name} <br /> (located in{' '}
        {person.artwork.city})
      </p>
      <img
        style={{ width: '400px' }}
        src={person.artwork.image}
        alt={person.artwork.title}
      />
    </>
  );
};

export default Form6;
