import { useContext } from 'react';
import { AuthContext } from './contexts/AuthProvider';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <h1 className="text-3xl font-bold">Hello: {user.name}</h1>
      <h3 className="text-xl font-bold">Email: {user.email}</h3>
    </>
  );
}

export default App;
