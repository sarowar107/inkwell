import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BlogCard from '../components/BlogCard';
import CreatePostWidget from '../components/CreatePostWidget';
import CategoryFilter from '../components/CategoryFilter';
import { demoPosts } from '../constants/data';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'All') {
      return demoPosts;
    }
    return demoPosts.filter(post => post.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <CreatePostWidget />
      </div>

      <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default HomePage;
