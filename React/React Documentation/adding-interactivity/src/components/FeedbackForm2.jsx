import React from 'react';

const FeedbackForm2 = () => {
  const handleClick = (e) => {
    const input = window.prompt('What is your name?');
    alert(`Hello, ${input}!`);
  };

  return (
    <div>
      <hr />
      <h2>State: Challenge 4</h2>
      <button onClick={handleClick}>Greet</button>
    </div>
  );
};

export default FeedbackForm2;
