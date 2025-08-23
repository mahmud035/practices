import { useState } from 'react';
import useTasks from '../hooks/useTasks';

export default function AddTask() {
  const [text, setText] = useState('');
  const { taskDispatch } = useTasks();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    taskDispatch({ type: 'ADD_TASK', payload: { text } });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add New Task"
      />
      <button type="submit">Add</button>
    </form>
  );
}
