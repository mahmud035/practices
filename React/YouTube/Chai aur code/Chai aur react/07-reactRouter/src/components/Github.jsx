import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Github = () => {
  const [user, setUser] = useState({});
  const { username } = useParams();

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [username]);

  return (
    <div className="bg-gray-600 text-white text-3xl p-4 m-4 text-center rounded">
      <h1>Hello: {user.name}</h1>
      <div className="flex justify-center">
        <img
          src={user.avatar_url}
          alt="Git picture"
          className="mt-12 rounded-full"
        />
      </div>
    </div>
  );
};

export default Github;
