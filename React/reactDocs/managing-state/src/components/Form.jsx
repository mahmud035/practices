import React, { useState } from 'react';

const Form = () => {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  if (status === 'success') {
    return <h1>That's right!</h1>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus('submitting');

    try {
      await submitForm(answer);
      setStatus('success');
    } catch (error) {
      setStatus('typing');
      setError(error);
    }
  };

  const handleTextareaChange = (e) => {
    setAnswer(e.target.value);
  };

  return (
    <div>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea value={answer} onChange={handleTextareaChange} />
        <br />
        <button disabled={answer.length === 0 || status === 'submitting'}>
          Submit
        </button>

        {error !== null && <p>{error.message}</p>}
      </form>
    </div>
  );
};

export default Form;

const submitForm = (answer) => {
  // Pretend it's hitting the network
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima';
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve();
      }
    }, 1500);
  });
};
