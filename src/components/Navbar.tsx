import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { PenSquare, Search, X, Menu, Shield } from 'lucide-react';
import ProfileDropdown from './ProfileDropdown';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuthStore } from '../store/authStore';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // FIX: Add state for search input
  const isAdmin = useAuthStore(state => state.isAdmin);

  const navLinks = [
    { href: '/trending', label: 'Trending' },
    { href: '/following', label: 'Following' },
    { href: '/my-posts', label: 'My Posts' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center backdrop-blur-lg bg-surface/80 border-b border-border">
        <div className="flex items-center gap-8">
          <Link to="/home" className="flex items-center gap-2 text-xl font-bold text-text hover:text-primary transition-colors">
            <PenSquare className="w-7 h-7 text-primary" />
            <span className="hidden sm:inline">Inkwell</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `text-text-secondary hover:text-text transition-colors ${isActive ? 'text-primary font-semibold' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            {isAdmin && (
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  `flex items-center gap-1.5 text-text-secondary hover:text-text transition-colors ${isActive ? 'text-primary font-semibold' : ''}`
                }
              >
                <Shield size={16} /> Admin
              </NavLink>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex relative items-center">
            <Search className="absolute left-3 w-5 h-5 text-text-secondary" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-background border border-border rounded-full pl-10 pr-4 py-2 w-64 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
              value={searchQuery} // FIX: Controlled component value
              onChange={(e) => setSearchQuery(e.target.value)} // FIX: Controlled component onChange
            />
          </div>
          <ProfileDropdown />
          <div className="md:hidden">
            <button
              className="text-text"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-b border-border"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-text-secondary hover:text-text transition-colors ${isActive ? 'text-primary font-semibold' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
               {isAdmin && (
                <NavLink
                  to="/admin"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 text-text-secondary hover:text-text transition-colors ${isActive ? 'text-primary font-semibold' : ''}`
                  }
                >
                  <Shield size={16} /> Admin
                </NavLink>
              )}
              <div className="relative items-center flex lg:hidden mt-2">
                <Search className="absolute left-3 w-5 h-5 text-text-secondary" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-background border border-border rounded-full pl-10 pr-4 py-2 w-full focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                  value={searchQuery} // FIX: Controlled component value
                  onChange={(e) => setSearchQuery(e.target.value)} // FIX: Controlled component onChange
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
