import React from 'react';
import Button from './Button';

const Toolbar = ({ onPlayMovie, onUploadImage }) => {
  return (
    <div>
      <Button onClick={onPlayMovie}> Play Movie</Button>{' '}
      <Button onClick={onUploadImage}>Upload Image</Button>
    </div>
  );
};

export default Toolbar;
