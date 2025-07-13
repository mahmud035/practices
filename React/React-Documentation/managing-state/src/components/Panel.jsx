import React from 'react';

const Panel = ({ title, children, isActive, onShow }) => {
  return (
    <div>
      <section>
        <h3>{title}</h3>

        {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
      </section>
    </div>
  );
};

export default Panel;
