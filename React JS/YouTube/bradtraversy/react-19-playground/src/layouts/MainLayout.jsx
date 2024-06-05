import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function MainLayout() {
  return (
    <>
      <Header />
      <div className="max-w-4xl p-4 mx-auto">
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
