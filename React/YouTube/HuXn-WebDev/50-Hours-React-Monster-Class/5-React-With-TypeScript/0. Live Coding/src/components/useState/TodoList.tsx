interface ITodos {
  todo: string;
  topics: string;
  time: string;
}

const todos: ITodos[] = [
  {
    todo: 'Focused Learning + Practice & Projects',
    topics: 'Level-1-Batch-10',
    time: '6:15 AM - 4:15 PM',
  },
  {
    todo: 'Review and Problem Solving',
    topics: 'Codewars - 1 Hour',
    time: '4:15 PM - 6:00 PM',
  },
  {
    todo: 'Soft Skills Development.',
    topics: 'Smart English Book',
    time: '6:15 PM - 6:45 PM',
  },
  {
    todo: 'Soft Skills Development',
    topics: 'LinkedIn Profile Update',
    time: '6:45 PM - 7:15 PM',
  },
];

export default function TodoList() {
  return (
    <>
      <h1>Todo List</h1>

      <div style={{ display: 'flex', gap: '3rem' }}>
        {todos.map((todo) => (
          <div key={todo.time}>
            <p>Task: {todo.todo}</p>
            <p>Topics: {todo.topics}</p>
            <p>Slot: {todo.time}</p>
          </div>
        ))}
      </div>
    </>
  );
}
