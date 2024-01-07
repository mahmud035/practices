import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncreaseValue = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleDecreaseValue = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  console.log(counter);

  return (
    <div>
      <h1>Counter value: {counter}</h1>
      <button onClick={handleIncreaseValue}>Increase value</button> &nbsp;
      <button onClick={handleDecreaseValue}>Decrease value</button>
    </div>
  );
}

export default App;
