import React, { useState } from 'react';

const Form = () => {
  const [to, setTo] = useState('Alice');
  const [message, setMessage] = useState('Hello');

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      alert(`You said ${message} to ${to}`);
    }, 5000);
  };

  return (
    <div>
      <br />
      <hr />
      <form onSubmit={handleSubmit}>
        <label>
          To: {''}
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            <option value="Alice">Alice</option>
            <option value="Bob">Bob</option>
          </select>
        </label>
        <br />
        <br />
        <textarea
          cols="20"
          rows="3"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <br />
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Form;
