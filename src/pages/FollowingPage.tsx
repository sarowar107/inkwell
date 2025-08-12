import { motion } from 'framer-motion';
import BlogCard from '../components/BlogCard';
import { demoPosts } from '../constants/data';

const FollowingPage = () => {
  // For demo, we'll just show a subset of posts from "followed" authors
  const followedPosts = demoPosts.filter(p => ['Jane Doe', 'Alex Rivera'].includes(p.author.name));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="container mx-auto px-6 py-12"
    >
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-text mb-2">From Your Network</h1>
        <p className="text-text-secondary">Catch up on the latest from your favorite writers.</p>
      </div>
      {followedPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {followedPosts.map((post, index) => (
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
          <h2 className="text-2xl font-bold text-text">Nothing new to see here</h2>
          <p className="text-text-secondary mt-2">You're not following anyone yet, or they haven't posted.</p>
        </div>
      )}
    </motion.div>
  );
};

export default FollowingPage;
