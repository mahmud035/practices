import React, { useState } from 'react';

const Form4 = () => {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com',
  });

  function handleFirstNameChange(e) {
    setPerson({ ...person, firstName: e.target.value });
  }

  function handleLastNameChange(e) {
    setPerson({ ...person, lastName: e.target.value });
  }

  function handleEmailChange(e) {
    setPerson({ ...person, email: e.target.value });
  }

  return (
    <>
      <hr />
      <h2>Copying objects with the spread syntax </h2>
      <label>
        First name:
        <input value={person.firstName} onChange={handleFirstNameChange} />
      </label>
      <br />
      <label>
        Last name:
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <br />
      <label>
        Email:
        <input value={person.email} onChange={handleEmailChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
};

export default Form4;
