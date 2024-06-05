import { Suspense, use, useState } from 'react';

// Simulate fetching a message
function fetchMessage() {
  return new Promise((resolve) => setTimeout(resolve, 1000, '⚛️'));
}

// MessageOutput component
const MessageOutput = ({ messagePromise }) => {
  const messageContent = use(messagePromise);
  return <p className="text-xl">Here is the message: {messageContent}</p>;
};

// MessageContainer component
const MessageContainer = ({ messagePromise }) => {
  return (
    <Suspense fallback={<p className="text-xl">⌛Downloading message...</p>}>
      <MessageOutput messagePromise={messagePromise} />
    </Suspense>
  );
};

// Message component
const Message = () => {
  const [messagePromise, setMessagePromise] = useState(null);

  const [show, setShow] = useState(false);

  function download() {
    setMessagePromise(fetchMessage());
    setShow(true);
  }

  if (show) {
    return <MessageContainer messagePromise={messagePromise} />;
  } else {
    return (
      <button
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        onClick={download}
      >
        Download message
      </button>
    );
  }
};

export { Message as UseExample3 };
