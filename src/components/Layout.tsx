import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main className="pt-24">
        {children || <Outlet />}
      </main>
    </div>
  );
};

export default Layout;
