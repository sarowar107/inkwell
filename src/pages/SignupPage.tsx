import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import Input from '../components/Input';
import { PenSquare } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

const SignupPage = () => {
  const navigate = useNavigate();
  const signup = useAuthStore(state => state.signup);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!name || !email || !password) {
      setError('All fields are required.');
      return;
    }

    try {
      signup(name, email, password);
      setSuccess('Account created successfully! Redirecting to login...');
      setTimeout(() => navigate('/login'), 2000);
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
          <h1 className="text-2xl font-bold text-text">Create Your Account</h1>
          <p className="text-text-secondary">Join our community of creators.</p>
        </div>

        <form className="space-y-6" onSubmit={handleSignup}>
          <Input id="name" name="name" label="Full Name" type="text" placeholder="Alex Ray" />
          <Input id="email" name="email" label="Email Address" type="email" placeholder="you@example.com" />
          <Input id="password" name="password" label="Password" type="password" placeholder="••••••••" />
          
          {error && <p className="text-sm text-error bg-error/10 p-3 rounded-lg">{error}</p>}
          {success && <p className="text-sm text-success bg-success/10 p-3 rounded-lg">{success}</p>}

          <div>
            <Button type="submit" className="w-full" disabled={!!success}>
              {success ? 'Redirecting...' : 'Create Account'}
            </Button>
          </div>
        </form>

        <p className="mt-8 text-center text-sm text-text-secondary">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-primary hover:text-secondary">
            Sign In
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignupPage;
