import { motion } from 'framer-motion';
import { categories } from '../constants/data';

type CategoryFilterProps = {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

const CategoryFilter = ({ selectedCategory, setSelectedCategory }: CategoryFilterProps) => {
  const allCategories = ['All', ...categories];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
      className="flex flex-wrap items-center justify-center gap-3 mb-12"
    >
      {allCategories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 border
            ${selectedCategory === category
              ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20'
              : 'bg-surface text-text-secondary border-border hover:border-primary hover:text-text'
            }`}
        >
          {category}
        </button>
      ))}
    </motion.div>
  );
};

export default CategoryFilter;
