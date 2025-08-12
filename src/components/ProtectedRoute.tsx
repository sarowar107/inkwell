import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import Layout from './Layout';

const ProtectedRoute = ({ adminOnly = false }: { adminOnly?: boolean }) => {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  const isAdmin = useAuthStore(state => state.isAdmin);

  if (!isAuthenticated) {
    // If the user is not authenticated, redirect them to the login page.
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && !isAdmin) {
    // If this is an admin-only route and the user is not an admin, redirect them.
    return <Navigate to="/home" replace />;
  }

  // If the user is authenticated and authorized, render the main application Layout.
  // The Layout contains the Navbar and an Outlet, which will render the specific
  // page the user navigated to (e.g., TrendingPage, ManageProfilePage).
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default ProtectedRoute;
