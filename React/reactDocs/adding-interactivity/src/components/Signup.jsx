import React from 'react';

const Signup = () => {
  return (
    <div>
      <hr />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert('Submitting');
        }}
      >
        <input type="text" /> &nbsp;
        <button>Send</button>
      </form>
    </div>
  );
};

export default Signup;
