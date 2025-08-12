import { motion } from 'framer-motion';
import Button from '../components/Button';
import Input from '../components/Input';
import { useAuthStore } from '../store/authStore';

const Section = ({ title, description, children }: { title: string, description: string, children: React.ReactNode }) => (
  <div className="bg-surface border border-border rounded-xl p-8">
    <h2 className="text-xl font-bold text-text">{title}</h2>
    <p className="text-text-secondary mt-1 mb-6">{description}</p>
    {children}
  </div>
);

const ManageProfilePage = () => {
  // FIX: Use the authenticated user from the store instead of static data
  const currentUser = useAuthStore(state => state.currentUser);

  // Guard clause in case the component renders before user is available
  if (!currentUser) {
    return (
      <div className="container mx-auto px-6 py-12 text-center">
        <p className="text-text-secondary">Loading profile...</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="container mx-auto px-6 py-12 max-w-4xl"
    >
      <h1 className="text-4xl font-bold mb-8 text-text">Manage Profile</h1>
      <div className="space-y-8">
        <Section title="Profile Information" description="Update your personal details.">
          <div className="flex items-center gap-6">
            <img src={currentUser.avatarUrl} alt="User Avatar" className="w-24 h-24 rounded-full object-cover" />
            <div className="flex-grow space-y-4">
              <Input id="name" label="Full Name" type="text" defaultValue={currentUser.name} />
              <Button variant="secondary">Change Picture</Button>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <Button>Save Changes</Button>
          </div>
        </Section>

        <Section title="Change Password" description="Choose a strong, new password.">
          <div className="space-y-4">
            <Input id="currentPassword" label="Current Password" type="password" />
            <Input id="newPassword" label="New Password" type="password" />
            <Input id="confirmPassword" label="Confirm New Password" type="password" />
          </div>
          <div className="mt-6 flex justify-end">
            <Button>Update Password</Button>
          </div>
        </Section>

        <Section title="Delete Account" description="Permanently delete your account and all of your content.">
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
            <p className="text-red-300 font-semibold">This action is irreversible.</p>
            <p className="text-red-400/80 text-sm">Please be certain before proceeding.</p>
          </div>
          <div className="mt-6 flex justify-end">
            <Button variant="danger">Delete My Account</Button>
          </div>
        </Section>
      </div>
    </motion.div>
  );
};

export default ManageProfilePage;
