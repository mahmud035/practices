import React, { useState } from 'react';

const Form3 = () => {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('Hi!');

  if (isSent) {
    return <h1>Your message is on its way!</h1>;
  }

  return (
    <div>
      <hr />
      <h2>State: As a Snapshot </h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsSent(true);
        }}
      >
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Form3;
