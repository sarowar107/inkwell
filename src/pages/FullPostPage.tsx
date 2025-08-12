import { useParams, Link } from 'react-router-dom';
import { demoPosts } from '../constants/data';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User } from 'lucide-react';

const FullPostPage = () => {
  const { id } = useParams();
  const post = demoPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">Post not found</h1>
        <Link to="/home" className="text-primary hover:underline mt-4 inline-block">Go back home</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="container mx-auto px-6 py-12"
    >
      <div className="max-w-4xl mx-auto">
        <Link to="/home" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft size={18} />
          Back to all posts
        </Link>

        <article>
          <div className="mb-8">
            <p className="text-primary font-semibold">{post.category}</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-text mt-2 mb-4 leading-tight">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-text-secondary">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
            </div>
          </div>

          <img src={post.imageUrl} alt={post.title} className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-2xl mb-12" />

          <div
            className="prose prose-invert prose-lg max-w-none text-text-secondary prose-p:text-text-secondary prose-headings:text-text prose-strong:text-text prose-a:text-primary hover:prose-a:text-secondary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </motion.div>
  );
};

export default FullPostPage;
