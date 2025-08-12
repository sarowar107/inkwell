import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, Settings, BookUser } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { motion, AnimatePresence } from 'framer-motion';

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { currentUser, logout } = useAuthStore();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate('/');
  };

  if (!currentUser) return null;

  const menuItems = [
    // FIX: Corrected path from '/home/my-posts' to '/my-posts'
    { to: '/my-posts', icon: BookUser, label: 'My Posts' },
    // FIX: Corrected path from '/home/profile' to '/profile'
    { to: '/profile', icon: Settings, label: 'Manage Profile' },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
        <img
          src={currentUser.avatarUrl}
          alt="User Avatar"
          className="w-10 h-10 rounded-full border-2 border-primary hover:scale-105 transition-transform"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute right-0 mt-2 w-56 origin-top-right bg-surface rounded-lg shadow-lg ring-1 ring-border ring-opacity-5 focus:outline-none"
          >
            <div className="py-1">
              <div className="px-4 py-3 border-b border-border">
                <p className="text-sm text-text-secondary">Signed in as</p>
                <p className="font-medium text-text truncate">{currentUser.name}</p>
              </div>
              <div className="py-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-2 text-sm text-text-secondary hover:bg-surface-light hover:text-text w-full transition-colors"
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="py-1 border-t border-border">
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 px-4 py-2 text-sm text-red-400 hover:bg-surface-light hover:text-red-300 w-full transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileDropdown;
