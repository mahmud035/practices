import React from 'react';
import AlertButton from './AlertButton';

const Toolbar2 = () => {
  return (
    <div>
      <hr />
      <AlertButton message="Hello World">Say Hello</AlertButton>
      <AlertButton message="Uploading">Upload Image</AlertButton>
    </div>
  );
};

export default Toolbar2;
