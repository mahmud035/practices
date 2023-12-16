import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('red');
  const [buttonText, setButtonText] = useState('Change to Blue');
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    if (color === 'red') {
      setColor('blue');
      setButtonText('Change to Red');
    } else {
      setColor('red');
      setButtonText('Change to Blue');
    }
  };

  const handleCheckbox = (e) => {
    if (e.target.checked) {
      setIsDisabled(true);
      setColor('gray');
    } else {
      setIsDisabled(false);
      setColor('red');
    }
  };

  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        onClick={handleClick}
        disabled={isDisabled ? true : false}
      >
        {buttonText}
      </button>

      <div>
        <input type="checkbox" id="checkbox" onClick={handleCheckbox} />
        <label htmlFor="checkbox">Change the button state</label>
      </div>
    </div>
  );
}

export default App;
