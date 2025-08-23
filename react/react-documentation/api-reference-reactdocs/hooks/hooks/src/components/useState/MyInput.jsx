import React, { useState } from 'react';

const MyInput = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input
        value={text}
        onChange={handleChange}
        type="text"
        className="input input-bordered input-secondary w-full max-w-xs"
      />
      <p>You typed: {text}</p>
      <button className="btn btn-sm btn-primary">Reset</button>
    </div>
  );
};

export default MyInput;
