import React from 'react';
import Button2 from './Button2';

const Toolbar4 = () => {
  return (
    <div>
      <h2>Stopping propagation</h2>
      <div onClick={() => alert('You clicked on the toolbar button')}>
        <Button2 onClick={() => alert('Playing')}>Play Movie</Button2>
        <Button2 onClick={() => alert('Uploading')}>Upload Image</Button2>
      </div>
    </div>
  );
};

export default Toolbar4;
