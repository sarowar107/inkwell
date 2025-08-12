import { motion } from 'framer-motion';
import { UploadCloud } from 'lucide-react';
import Button from '../components/Button';
import Input from '../components/Input';
import { categories } from '../constants/data';

const NewPostPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="container mx-auto px-6 py-12 max-w-3xl"
    >
      <h1 className="text-4xl font-bold mb-2 text-text">Create New Post</h1>
      <p className="text-text-secondary mb-8">Share your thoughts with the world.</p>
      
      <form className="space-y-6">
        <Input id="title" label="Post Title" type="text" placeholder="e.g., The Future of Web Development" />
        
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-2">Cover Image</label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-border px-6 py-10 hover:border-primary transition-colors">
            <div className="text-center">
              <UploadCloud className="mx-auto h-12 w-12 text-text-secondary" aria-hidden="true" />
              <div className="mt-4 flex text-sm leading-6 text-text-secondary">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-surface font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-background hover:text-secondary"
                >
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-text-secondary/80">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-text-secondary mb-2">Category</label>
          <select
            id="category"
            className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-text focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          >
            <option>Select a category</option>
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-text-secondary mb-2">
            Content
          </label>
          <textarea
            id="content"
            rows={10}
            className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-text placeholder-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            placeholder="Write your masterpiece here..."
          ></textarea>
        </div>
        <div className="flex justify-end gap-4">
          <Button type="button" variant="secondary">Save Draft</Button>
          <Button type="submit">Publish</Button>
        </div>
      </form>
    </motion.div>
  );
};

export default NewPostPage;
