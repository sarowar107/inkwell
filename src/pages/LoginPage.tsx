import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import Input from '../components/Input';
import { PenSquare } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

const LoginPage = () => {
  const navigate = useNavigate();
  const login = useAuthStore(state => state.login);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      const user = login(email, password);
      if (user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/home');
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen w-full aurora-background flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full max-w-md bg-surface/80 backdrop-blur-lg border border-border rounded-2xl p-8 shadow-2xl"
      >
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-xl font-bold text-text hover:text-primary transition-colors mb-2">
            <PenSquare className="w-7 h-7 text-primary" />
            <span>Inkwell</span>
          </Link>
          <h1 className="text-2xl font-bold text-text">Welcome Back</h1>
          <p className="text-text-secondary">Sign in to continue your journey.</p>
        </div>

        <form className="space-y-6" onSubmit={handleLogin}>
          <Input id="email" name="email" label="Email Address" type="email" placeholder="you@example.com" />
          <Input id="password" name="password" label="Password" type="password" placeholder="••••••••" />
          
          {error && <p className="text-sm text-error bg-error/10 p-3 rounded-lg">{error}</p>}

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-600 text-primary focus:ring-primary bg-surface" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-text-secondary">Remember me</label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-primary hover:text-secondary">Forgot password?</a>
            </div>
          </div>

          <div>
            <Button type="submit" className="w-full">Sign In</Button>
          </div>
        </form>

        <p className="mt-8 text-center text-sm text-text-secondary">
          Not a member?{' '}
          <Link to="/signup" className="font-medium text-primary hover:text-secondary">
            Sign up now
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
