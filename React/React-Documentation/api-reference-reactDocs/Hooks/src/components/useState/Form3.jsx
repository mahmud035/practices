import React, { useState } from 'react';

const Form3 = () => {
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image:
        'https://images.pexels.com/photos/15685649/pexels-photo-15685649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  });

  return (
    <div className="form-control">
      <label className="input-group mb-3">
        <span>Name</span>
        <input
          type="text"
          value={person.name}
          onChange={(e) => {
            setPerson({
              ...person,
              name: e.target.value,
            });
          }}
          className="input input-bordered"
        />
      </label>
      <label className="input-group mb-3">
        <span>Title</span>
        <input
          type="text"
          value={person.artwork.title}
          onChange={(e) => {
            setPerson({
              ...person,
              artwork: {
                ...person.artwork,
                title: e.target.value,
              },
            });
          }}
          className="input input-bordered"
        />
      </label>
      <label className="input-group">
        <span>City</span>
        <input
          type="text"
          value={person.artwork.city}
          onChange={(e) => {
            setPerson({
              ...person,
              artwork: {
                ...person.artwork,
                city: e.target.value,
              },
            });
          }}
          className="input input-bordered"
        />
      </label>

      <label className="input-group">
        <span>Image</span>
        <input
          type="text"
          value={person.artwork.image}
          onChange={(e) => {
            setPerson({
              ...person,
              artwork: {
                ...person.artwork,
                image: e.target.value,
              },
            });
          }}
          className="input input-bordered"
        />
      </label>

      <p>
        <i>{person.artwork.title}</i>
        {' by '} {person.name} <br />
        located in {person.artwork.city}
      </p>

      <img src={person.artwork.image} className="w-96" alt="" />
    </div>
  );
};

export default Form3;
