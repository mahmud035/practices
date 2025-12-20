import { Outlet } from 'react-router-dom';
import { Topbar } from './Topbar';
import SideBar from './SIdeBar';

export function AdminLayout() {
  return (
    <div className="min-h-full bg-zinc-50">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[280px_1fr]">
        <SideBar />
        <div className="flex min-h-screen flex-col">
          <Topbar />
          <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6 lg:px-8">
            <Outlet />
          </main>
          <footer className="border-t bg-white">
            <div className="mx-auto max-w-7xl px-4 py-4 text-sm text-zinc-500 sm:px-6 lg:px-8">
              Admin Dashboard • Built for reliability & speed
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
