import { useState } from 'react';
import MyButton from './MyButton';
import MyButtonTwo from './MyButtonTwo';
import Profile from './Profile';
import ShoppingList from './ShoppingList';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Displaying Data</h1>
      <Profile />
      <br />
      <br />
      <br />

      <h1>Rendering List</h1>
      <ShoppingList />
      <br />

      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
      <br />

      <h1>Counters that update together</h1>
      <MyButtonTwo count={count} onClick={handleClick} />
      <MyButtonTwo count={count} onClick={handleClick} />
    </div>
  );
}
