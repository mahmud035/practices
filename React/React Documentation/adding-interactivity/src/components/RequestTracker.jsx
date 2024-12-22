import React, { useState } from 'react';

const RequestTracker = () => {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  const handleClick = async () => {
    setPending((prevPending) => prevPending + 1);
    await delay(3000);
    setPending((prevPending) => prevPending - 1);
    setCompleted((prevCompleted) => prevCompleted + 1);
  };

  return (
    <>
      <hr />
      <h2>Queueing a Series of State Update: Challenge </h2>

      <h3>Pending: {pending}</h3>
      <h3>Completed: {completed}</h3>
      <button onClick={handleClick}>Buy</button>
    </>
  );
};

export default RequestTracker;

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
