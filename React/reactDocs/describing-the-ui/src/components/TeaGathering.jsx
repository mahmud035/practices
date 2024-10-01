import React from 'react';
import Cup from './Cup';

const TeaGathering = () => {
  let cups = [];

  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }

  return cups;
};

export default TeaGathering;
