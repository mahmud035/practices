import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserProfileProps {
  userId: number;
}

export default function UserProfile({ userId }: UserProfileProps) {
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>(
    'loading',
  );

  useEffect(() => {
    setStatus('loading');
    setUser(null);

    // Prevents a slow, stale request from overwriting state after the component has already moved on to a newer userId
    let cancelled = false;

    fetch(`/api/users/${userId}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch user');
        return res.json();
      })
      .then((data: User) => {
        if (!cancelled) {
          setUser(data);
          setStatus('success');
        }
      })
      .catch(() => {
        if (!cancelled) setStatus('error');
      });

    return () => {
      cancelled = true;
    };
  }, [userId]);

  if (status === 'loading') return <p>Loading user...</p>;
  if (status === 'error') return <p role="alert">Failed to load user</p>;

  return (
    <div>
      <h2>{user?.name}</h2>
      <p>{user?.email}</p>
    </div>
  );
}
