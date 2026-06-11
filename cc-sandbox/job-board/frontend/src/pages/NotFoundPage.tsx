import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export function NotFoundPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-20 text-center">
      <p className="text-4xl font-bold text-text">404</p>
      <p className="mt-2 text-text-muted">This page doesn't exist.</p>
      <Link to="/" className="mt-6 inline-block">
        <Button>Back to jobs</Button>
      </Link>
    </div>
  );
}
