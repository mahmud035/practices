import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <nav className="flex justify-center gap-4 py-6">
        <Link
          to="/login"
          className="px-3 py-2 font-medium text-white rounded-md bg-cyan-500"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-3 py-2 font-medium text-white rounded-md bg-cyan-500"
        >
          Register
        </Link>
        <Link
          to="/dynamic-form-fields"
          className="px-3 py-2 font-medium text-white rounded-md bg-cyan-500"
        >
          Dynamic Form Fields
        </Link>
      </nav>
    </>
  );
}

export default App;
