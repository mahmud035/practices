import React from 'react';

const Clock = ({ color, showTime }) => {
  return (
    <div>
      <h1 style={{ color: color }}>Time: {showTime}</h1>
    </div>
  );
};

export default Clock;
