import React, { useState } from 'react';

const StateChallenge2 = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleReset(e) {
    setFirstName('');
    setLastName('');
  }
  return (
    <>
      <hr />
      <h2>State Challenge: 2</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder="First name"
          value={firstName}
          onChange={handleFirstNameChange}
        />{' '}
        <input
          placeholder="Last name"
          value={lastName}
          onChange={handleLastNameChange}
        />
        <h1>
          Hi, {firstName} {lastName}
        </h1>
        <button onClick={handleReset}>Reset</button>
      </form>
    </>
  );
};

export default StateChallenge2;
