import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

// Page Imports
import HomePage from './pages/HomePage';
import NewPostPage from './pages/NewPostPage';
import MyPostsPage from './pages/MyPostsPage';
import TrendingPage from './pages/TrendingPage';
import FollowingPage from './pages/FollowingPage';
import FullPostPage from './pages/FullPostPage';
import ManageProfilePage from './pages/ManageProfilePage'; // Changed from ProfilePage
import AdminPage from './pages/AdminPage';

// Public Pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Protected user routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/new" element={<NewPostPage />} />
          <Route path="/my-posts" element={<MyPostsPage />} />
          <Route path="/trending" element={<TrendingPage />} />
          <Route path="/following" element={<FollowingPage />} />
          <Route path="/post/:id" element={<FullPostPage />} />
          {/* FIX: Route now points to the correct ManageProfilePage component */}
          <Route path="/profile" element={<ManageProfilePage />} />
        </Route>

        {/* Protected admin routes */}
        <Route element={<ProtectedRoute adminOnly={true} />}>
          <Route path="/admin" element={<AdminPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
