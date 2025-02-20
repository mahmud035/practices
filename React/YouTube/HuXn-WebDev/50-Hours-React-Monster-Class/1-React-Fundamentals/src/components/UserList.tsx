export default function UserList() {
  const users = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 35 },
    { id: 3, name: 'John', age: 29 },
  ];

  return (
    <>
      {users.map((user) => (
        <div key={user.id} style={{ display: 'flex', gap: '1rem' }}>
          <p>{user.name}</p>
          <p>{user.age}</p>
        </div>
      ))}
    </>
  );
}
