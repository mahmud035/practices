import React, { useState } from 'react';

const Form5 = () => {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com',
  });

  const handleChange = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <hr />
      <h2>Using a single event handler for multiple fields </h2>
      <label>
        First name:
        <input
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Last name:
        <input
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input name="email" value={person.email} onChange={handleChange} />
      </label>

      <p>
        {person.firstName} {person.lastName} {person.email}
      </p>
    </>
  );
};

export default Form5;
