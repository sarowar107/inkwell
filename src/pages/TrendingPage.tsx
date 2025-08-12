import { useMemo } from 'react';
import { motion } from 'framer-motion';
import BlogCard from '../components/BlogCard';
import { demoPosts } from '../constants/data';

const TrendingPage = () => {
  // For demo, we'll sort posts by likes to simulate "trending"
  const trendingPosts = useMemo(() => {
    return [...demoPosts].sort((a, b) => b.likes - a.likes);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="container mx-auto px-6 py-12"
    >
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-text mb-2">Trending Posts</h1>
        <p className="text-text-secondary">Discover what's popular in the community right now.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {trendingPosts.map((post, index) => (
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
    </motion.div>
  );
};

export default TrendingPage;
