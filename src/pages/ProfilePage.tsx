import { motion } from 'framer-motion';
import { User, Shield } from 'lucide-react';
import Button from '../components/Button';
import { useAuthStore } from '../store/authStore';

const ProfilePage = () => {
  const currentUser = useAuthStore(state => state.currentUser);

  if (!currentUser) {
    return null; // Or a loading spinner
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="container mx-auto px-6 py-12 max-w-2xl"
    >
      <div className="text-center mb-12">
        <img 
          src={currentUser.avatarUrl} 
          alt="User Avatar" 
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-primary shadow-lg"
        />
        <h1 className="text-4xl font-bold text-text">{currentUser.name}</h1>
        <p className="text-text-secondary">Member since Oct 2025</p>
      </div>

      <div className="bg-surface border border-border rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-text mb-6 flex items-center gap-3">
          <User />
          <span>Account Information</span>
        </h2>
        <form className="space-y-4">
          <div>
            <label className="text-sm text-text-secondary">Full Name</label>
            <input type="text" defaultValue={currentUser.name} className="w-full bg-background border border-border rounded-lg px-4 py-2.5 mt-1 text-text" />
          </div>
          <div>
            <label className="text-sm text-text-secondary">Email Address</label>
            <input type="email" defaultValue={currentUser.email} readOnly className="w-full bg-background border border-border rounded-lg px-4 py-2.5 mt-1 text-text cursor-not-allowed" />
          </div>
          <div className="pt-4">
            <Button>Update Profile</Button>
          </div>
        </form>

        <hr className="my-8 border-border" />

        <h2 className="text-2xl font-semibold text-text mb-6 flex items-center gap-3">
          <Shield />
          <span>Security</span>
        </h2>
        <div className="flex justify-between items-center">
          <p className="text-text">Change Password</p>
          <Button variant="secondary">Change</Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfilePage;
