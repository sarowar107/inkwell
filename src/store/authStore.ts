import { create } from 'zustand';
import { demoPosts } from '../constants/data';

// In a real app, this would be an API call. For this demo, it's a mock.
const initialUsers = [
  {
    id: 'user-1',
    name: 'Alex Ray',
    email: 'alex@inkwell.com',
    password: 'password123', // In a real app, NEVER store plain text passwords.
    avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    role: 'user',
  },
	{
    id: 'user-2',
    name: 'Sarowar Islam',
    email: 'sarowar2204107@gmail.com',
    password: 'Sarowar321', // In a real app, NEVER store plain text passwords.
    avatarUrl: 'https://raw.githubusercontent.com/sarowar107/NewPortfolio/main/Photos/profile.png',
    role: 'user',
  },
  {
    id: 'admin-1',
    name: 'Admin',
    email: 'admin@inkwell.com',
    password: 'adminpassword',
    avatarUrl: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    role: 'admin',
  },
	 {
    id: 'admin-2',
    name: 'Admin',
    email: 'admin@inkwell.com',
    password: 'admin',
    avatarUrl: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    role: 'admin',
  },
];

export const useAuthStore = create((set, get) => ({
  users: initialUsers,
  posts: demoPosts,
  currentUser: null,
  isAuthenticated: false,
  isAdmin: false,

  signup: (name, email, password) => {
    const { users } = get();
    const userExists = users.some(user => user.email === email);
    if (userExists) {
      throw new Error('User with this email already exists.');
    }
    const newUser = {
      id: `user-${Date.now()}`,
      name,
      email,
      password,
      avatarUrl: `https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`, // Default avatar
      role: 'user',
    };
    set(state => ({ users: [...state.users, newUser] }));
    return newUser;
  },

  login: (email, password) => {
    const { users } = get();
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      set({ currentUser: user, isAuthenticated: true, isAdmin: user.role === 'admin' });
      return user;
    }
    throw new Error('Invalid email or password.');
  },

  logout: () => {
    set({ currentUser: null, isAuthenticated: false, isAdmin: false });
  },

  deleteUser: (userId) => {
    set(state => ({
      users: state.users.filter(user => user.id !== userId),
    }));
  },

  deletePost: (postId) => {
    set(state => ({
      posts: state.posts.filter(post => post.id !== postId),
    }));
  },
}));
