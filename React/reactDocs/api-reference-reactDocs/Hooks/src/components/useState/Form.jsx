import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('Taylor');
  const [age, setAge] = useState(42);

  return (
    <div>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Type here"
        className="input input-bordered input-secondary w-full max-w-xs"
      />
      <br />
      <br />
      <button onClick={() => setAge(age + 1)} className="btn btn-accent">
        Increment age
      </button>
      <p>
        Hello, {name}. You are {age}.
      </p>
    </div>
  );
};

export default Form;
