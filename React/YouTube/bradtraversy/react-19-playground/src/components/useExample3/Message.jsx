import { Suspense, use, useState } from 'react';

// Simulate fetching a message
const fetchMessage = () => {
  return new Promise((resolve) => setTimeout(resolve, 1000, '⚛️'));
};

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

  const handleDownload = () => {
    setMessagePromise(fetchMessage());
    setShow(true);
  };

  if (show) {
    return <MessageContainer messagePromise={messagePromise} />;
  } else {
    return (
      <button
        onClick={handleDownload}
        className="px-4 py-2 font-bold text-white bg-blue-400 rounded hover:bg-blue-700"
      >
        Download message
      </button>
    );
  }
};

export { Message as UseExample3 };
