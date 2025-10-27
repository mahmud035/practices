import { useEffect, useState } from 'react';

interface Status {
  message: string;
  version: number;
  mongodb: string;
}

export default function App() {
  const [status, setStatus] = useState<Status | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  useEffect(() => {
    fetch(`${apiUrl}/todos`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [apiUrl]);

  return (
    <div style={{ padding: '2rem', fontFamily: 'monospace' }}>
      <h1>🚀 MERN Multi-Container Application</h1>

      {loading && <p>Loading...</p>}

      {error && (
        <div style={{ color: 'red', padding: '1rem', border: '1px solid red' }}>
          Error: {error}
        </div>
      )}

      {status && (
        <div
          style={{
            padding: '1rem',
            border: '1px solid #ddd',
            borderRadius: '8px',
          }}
        >
          <h2>✅ Backend Connected</h2>
          <p>
            <strong>Message:</strong> {status.message}
          </p>
          <p>
            <strong>Version:</strong> {status.version}
          </p>
          <p>
            <strong>MongoDB:</strong> {status.mongodb}
          </p>
        </div>
      )}
    </div>
  );
}
