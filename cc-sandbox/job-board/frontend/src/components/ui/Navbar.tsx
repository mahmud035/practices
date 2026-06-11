import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Button } from './Button';

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-medium transition-colors ${
    isActive ? 'text-primary' : 'text-text-muted hover:text-text'
  }`;

/**
 * App shell navigation. Links are derived entirely from `useAuth().user.role`
 * — never hardcoded — so the same component serves anonymous visitors,
 * employers, and job seekers.
 */
export function Navbar() {
  const { user, isLoading, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface-raised">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link to="/" className="text-lg font-bold text-text">
          Job<span className="text-primary">Board</span>
        </Link>

        <div className="flex items-center gap-5">
          <NavLink to="/" className={linkClass} end>
            Browse Jobs
          </NavLink>

          {!isLoading && user?.role === 'jobseeker' && (
            <NavLink to="/my-applications" className={linkClass}>
              My Applications
            </NavLink>
          )}

          {!isLoading && user?.role === 'employer' && (
            <NavLink to="/employer" className={linkClass}>
              Dashboard
            </NavLink>
          )}

          {!isLoading && !user && (
            <>
              <NavLink to="/login" className={linkClass}>
                Login
              </NavLink>
              <Button onClick={() => navigate('/register')}>Sign up</Button>
            </>
          )}

          {!isLoading && user && (
            <div className="flex items-center gap-3">
              <span className="hidden text-sm text-text-muted sm:inline">
                {user.name} · <span className="capitalize">{user.role}</span>
              </span>
              <Button variant="secondary" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
