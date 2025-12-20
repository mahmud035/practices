import { Boxes, LayoutDashboard, PackagePlus } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '../../lib/utils';

const nav = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/products', label: 'Products', icon: Boxes },
  { to: '/products/new', label: 'New Product', icon: PackagePlus },
];

export default function SideBar() {
  return (
    <aside className="hidden border-r bg-white lg:block">
      <div className="flex h-full flex-col">
        <div className="border-b px-6 py-5">
          <div className="text-lg font-semibold tracking-tight text-zinc-900">
            Admin Panel
          </div>
          <div className="text-sm text-zinc-500">Products & Media</div>
        </div>

        <nav className="flex-1 space-y-1 p-3">
          {nav.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition',
                    isActive
                      ? 'bg-zinc-900 text-white shadow-sm'
                      : 'text-zinc-700 hover:bg-zinc-100'
                  )
                }
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="border-t p-4 text-xs text-zinc-500">
          Tip: Use signed uploads for zero backend failures.
        </div>
      </div>
    </aside>
  );
}
