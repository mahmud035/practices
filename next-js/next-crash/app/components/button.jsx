'use client';

const Button = () => {
  return (
    <div className="mt-5">
      <button
        onClick={() => console.log('I have clicked here')}
        className="bg-green-500 rounded px-3 py-1.5"
      >
        Click here
      </button>
    </div>
  );
};

export default Button;
