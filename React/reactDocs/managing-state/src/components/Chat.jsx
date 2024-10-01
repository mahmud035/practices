import React, { useState } from 'react';

const Chat = ({ contact }) => {
  const [text, setText] = useState('');

  return (
    <div>
      <section>
        <textarea
          value={text}
          placeholder={`Chat to ${contact.name}`}
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <button>Send to {contact.email}</button>
      </section>
    </div>
  );
};

export default Chat;
