import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type BlogCardProps = {
  post: {
    id: string;
    title: string;
    author: string;
    authorAvatar: string;
    date: string;
    imageUrl: string;
    excerpt: string;
    category: string;
  };
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      layout
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="bg-surface rounded-xl overflow-hidden border border-border group cursor-pointer flex flex-col"
    >
      <Link to={`/post/${post.id}`} className="flex flex-col flex-grow">
        <div className="relative overflow-hidden h-56">
          <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute top-3 right-3 bg-primary/80 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded-full">{post.category}</div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-text mb-2">{post.title}</h3>
          <p className="text-text-secondary mb-4 flex-grow">{post.excerpt}</p>
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
            <div className="flex items-center gap-3">
              <img src={post.authorAvatar} alt={post.author} className="w-8 h-8 rounded-full" />
              <div>
                <p className="text-sm font-medium text-text">{post.author}</p>
                <p className="text-xs text-text-secondary">{post.date}</p>
              </div>
            </div>
            <ArrowUpRight className="w-6 h-6 text-text-secondary group-hover:text-primary transition-colors" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
