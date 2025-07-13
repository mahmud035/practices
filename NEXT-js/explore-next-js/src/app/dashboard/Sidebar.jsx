import NavLink from '@/components/NavLink';
import Link from 'next/link';

const dashboardLinks = [
  {
    path: '/dashboard',
    title: 'Dashboard',
  },
  {
    path: '/dashboard/add-product',
    title: 'Add Product',
  },
  {
    path: '/dashboard/manage-products',
    title: 'Manage Products',
  },
  {
    path: '/',
    title: 'Home',
  },
];

const Sidebar = () => {
  return (
    <aside className="mr-10">
      <h1 className="text-3xl font-semibold pb-4">Dashboard</h1>
      <ul className="flex flex-col gap-2">
        {dashboardLinks.map(({ path, title }) => (
          <li key={path}>
            <NavLink exact activeClassName="text-red-500" href={path}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
