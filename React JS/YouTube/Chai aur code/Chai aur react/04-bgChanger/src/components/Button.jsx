/* eslint-disable react/prop-types */

const Button = ({ name, bgColor, handleChangeBgColor }) => {
  return (
    <button
      onClick={() => handleChangeBgColor(bgColor)}
      className={`outline-none px-4 py-1 rounded-full text-white shadow-lg 
      ${bgColor} 
      ${bgColor === 'bg-white' && 'text-black'}`}
    >
      {name}
    </button>
  );
};

export default Button;
