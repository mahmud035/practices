import Sidebar from './Sidebar';

const DashboardLayout = ({ children }) => {
  return (
    <div className="container mx-auto flex items-center ">
      <Sidebar />
      {children}
    </div>
  );
};

export default DashboardLayout;
