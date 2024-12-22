import React, { useState } from 'react';

const Scoreboard = () => {
  const [player, setPlayer] = useState({
    firstName: 'Ranjani',
    lastName: 'Shettar',
    score: 10,
  });

  function handlePlusClick(e) {
    setPlayer({
      ...player,
      score: player.score + 1,
    });
  }

  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPlayer({
      ...player,
      lastName: e.target.value,
    });
  }
  return (
    <div>
      <hr />
      <>
        <label>
          Score: <b>{player.score}</b>
        </label>{' '}
        <button onClick={handlePlusClick}>+1</button>
        <br />
        <br />
        <label>
          First name:
          <input value={player.firstName} onChange={handleFirstNameChange} />
        </label>
        <br />
        <label>
          Last name:
          <input value={player.lastName} onChange={handleLastNameChange} />
        </label>
      </>
    </div>
  );
};

export default Scoreboard;
