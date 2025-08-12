import { motion } from 'framer-motion';
import BlogCard from '../components/BlogCard';
import { demoPosts } from '../constants/data';
import { useAuthStore } from '../store/authStore';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

const MyPostsPage = () => {
  const currentUser = useAuthStore(state => state.currentUser);
  
  const myPosts = demoPosts.filter(p => currentUser && p.author === currentUser.name);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="container mx-auto px-6 py-12"
    >
      <div className="flex justify-between items-center max-w-4xl mx-auto mb-12">
        <div>
          <h1 className="text-4xl font-bold text-text mb-2">My Posts</h1>
          <p className="text-text-secondary">Manage your published articles and drafts.</p>
        </div>
        <Link to="/new">
          <Button>
            <Plus size={18} className="-ml-1 mr-2" />
            New Post
          </Button>
        </Link>
      </div>
      {myPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {myPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-surface rounded-xl border border-border max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-text">You haven't written anything yet</h2>
          <p className="text-text-secondary mt-2">Time to share your first idea!</p>
          <Link to="/new" className="mt-6 inline-block">
            <Button size="lg">Create Your First Post</Button>
          </Link>
        </div>
      )}
    </motion.div>
  );
};

export default MyPostsPage;
