import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, FileText, Trash2, Shield } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import Button from '../components/Button';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('users');
  
  // FIX: Select state slices individually to prevent infinite re-renders.
  const users = useAuthStore(state => state.users);
  const posts = useAuthStore(state => state.posts);
  const deleteUser = useAuthStore(state => state.deleteUser);
  const deletePost = useAuthStore(state => state.deletePost);
  const currentUser = useAuthStore(state => state.currentUser);

  const handleDeleteUser = (userId: string) => {
    if (window.confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
      deleteUser(userId);
    }
  };

  const handleDeletePost = (postId: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      deletePost(postId);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-6 py-12"
    >
      <h1 className="text-4xl font-bold text-text mb-2">Admin Dashboard</h1>
      <p className="text-text-secondary mb-8">Manage users and posts across the platform.</p>

      <div className="flex border-b border-border mb-8">
        <button
          onClick={() => setActiveTab('users')}
          className={`flex items-center gap-2 px-4 py-3 font-semibold transition-colors ${activeTab === 'users' ? 'text-primary border-b-2 border-primary' : 'text-text-secondary hover:text-text'}`}
        >
          <Users size={18} /> Users ({users.length})
        </button>
        <button
          onClick={() => setActiveTab('posts')}
          className={`flex items-center gap-2 px-4 py-3 font-semibold transition-colors ${activeTab === 'posts' ? 'text-primary border-b-2 border-primary' : 'text-text-secondary hover:text-text'}`}
        >
          <FileText size={18} /> Posts ({posts.length})
        </button>
      </div>

      <div>
        {activeTab === 'users' && (
          <div className="bg-surface border border-border rounded-xl">
            <ul className="divide-y divide-border">
              {users.map(user => (
                <li key={user.id} className="p-4 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <img src={user.avatarUrl} alt={user.name} className="w-12 h-12 rounded-full" />
                    <div>
                      <p className="font-semibold text-text flex items-center gap-2">
                        {user.name}
                        {user.role === 'admin' && <Shield size={16} className="text-primary" />}
                      </p>
                      <p className="text-sm text-text-secondary">{user.email}</p>
                    </div>
                  </div>
                  {user.id !== currentUser?.id && (
                    <Button variant="danger" size="sm" onClick={() => handleDeleteUser(user.id)}>
                      <Trash2 size={16} />
                    </Button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'posts' && (
          <div className="bg-surface border border-border rounded-xl">
            <ul className="divide-y divide-border">
              {posts.map(post => (
                <li key={post.id} className="p-4 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <img src={post.imageUrl} alt={post.title} className="w-20 h-14 object-cover rounded-md" />
                    <div>
                      <p className="font-semibold text-text">{post.title}</p>
                      <p className="text-sm text-text-secondary">by {post.author}</p>
                    </div>
                  </div>
                  <Button variant="danger" size="sm" onClick={() => handleDeletePost(post.id)}>
                    <Trash2 size={16} />
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default AdminPage;
