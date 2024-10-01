import React from 'react';

const Toolbar3 = () => {
  return (
    <>
      <hr />
      <h2>Event propagation</h2>

      <div onClick={() => alert('You clicked on the toolbar!')}>
        <button onClick={() => alert('Playing')}>Play Movie</button>
        <button onClick={() => alert('Uploading')}>Upload Image</button>
      </div>
    </>
  );
};

export default Toolbar3;
