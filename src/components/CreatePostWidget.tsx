import { Link } from 'react-router-dom';
import { PenSquare } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import Button from './Button';
import { motion } from 'framer-motion';

const CreatePostWidget = () => {
  const currentUser = useAuthStore(state => state.currentUser);

  if (!currentUser) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
      className="bg-surface border border-border rounded-xl p-4 mb-12 shadow-lg"
    >
      <div className="flex items-center gap-4">
        <img src={currentUser.avatarUrl} alt="User Avatar" className="w-12 h-12 rounded-full object-cover" />
        <Link to="/new" className="flex-grow">
          <div className="w-full text-left text-text-secondary bg-background border border-border hover:border-primary transition-colors cursor-pointer rounded-full py-3 px-5">
            {`What's on your mind, ${currentUser.name.split(' ')[0]}?`}
          </div>
        </Link>
        <Link to="/new" className="hidden sm:block">
          <Button>
            <PenSquare className="w-4 h-4 mr-2" />
            Create Post
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default CreatePostWidget;
