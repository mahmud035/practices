import React from 'react';

const Cup = ({ guest }) => {
  return (
    <h2
      style={{
        backgroundColor: '#164e63',
        color: 'white',
        padding: '12px 10px',
        borderRadius: '10px',
      }}
    >
      Tea cup for guest #{guest}
    </h2>
  );
};

export default Cup;
