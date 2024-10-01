import React, { useState } from 'react';
import { sculptureList } from '../utils/data';

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const handlePrevClick = () => {
    setIndex(index - 1);
  };

  const handleNextClick = () => {
    setIndex(index + 1);
  };

  const handleMoreClick = () => {
    setShowMore(!showMore);
  };

  // Accessing each array element.
  let sculpture = sculptureList[index];

  return (
    <div style={{ paddingTop: '30px' }}>
      <hr />
      <button onClick={handlePrevClick} disabled={index === 0 ? true : false}>
        Prev
      </button>{' '}
      <button
        onClick={handleNextClick}
        disabled={index === sculptureList.length - 1 ? true : false}
      >
        Next
      </button>
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>} <br /> <br />
      <img src={sculpture.url} alt={sculpture.alt} />
    </div>
  );
};

export default Gallery;
