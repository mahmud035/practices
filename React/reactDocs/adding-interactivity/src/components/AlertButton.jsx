import React from 'react';

const AlertButton = ({ message, children }) => {
  return <button onClick={() => alert(message)}>{children}</button>;
};

export default AlertButton;
