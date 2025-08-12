import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PenSquare, Users, FileText, Feather, TrendingUp, MessageSquareQuote } from 'lucide-react';
import Button from '../components/Button';
import { demoPosts } from '../constants/data';

const StatCard = ({ icon, value, label, delay }: { icon: React.ReactNode, value: string, label: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-surface/50 backdrop-blur-sm border border-border p-6 rounded-xl text-center"
  >
    <div className="text-primary mx-auto w-fit mb-3">{icon}</div>
    <p className="text-4xl font-bold text-text">{value}</p>
    <p className="text-text-secondary">{label}</p>
  </motion.div>
);

const FeatureCard = ({ icon, title, children, delay }: { icon: React.ReactNode, title: string, children: React.ReactNode, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="bg-surface border border-border rounded-2xl p-8"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="bg-primary/10 p-3 rounded-full text-primary">{icon}</div>
      <h3 className="text-xl font-bold text-text">{title}</h3>
    </div>
    <p className="text-text-secondary">{children}</p>
  </motion.div>
);

const TestimonialCard = ({ quote, name, role, avatar, delay }: { quote: string, name: string, role: string, avatar: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-surface border border-border rounded-2xl p-8 space-y-6"
  >
    <MessageSquareQuote className="w-8 h-8 text-primary" />
    <blockquote className="text-text text-lg leading-relaxed">"{quote}"</blockquote>
    <div className="flex items-center gap-4">
      <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <p className="font-semibold text-text">{name}</p>
        <p className="text-sm text-text-secondary">{role}</p>
      </div>
    </div>
  </motion.div>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full bg-background text-text overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen w-full aurora-background flex flex-col items-center justify-center p-6 text-center relative">
        {/* FEATURE: Sign In button added to top right */}
        <div className="absolute top-6 right-6 z-10 flex items-center gap-4">
          {/* <p className="text-text-secondary hidden sm:block">Already have an account?</p> */}
          <Link to="/login">
            <Button variant="secondary">Sign In</Button>
          </Link>
        </div>

        <motion.main
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-3 text-2xl font-bold text-text mb-4">
            <PenSquare className="w-8 h-8 text-primary" />
            <span>Inkwell</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-6 leading-tight">
            Where Great Ideas <br /> Find Their Voice.
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10">
            Join a vibrant community of writers, thinkers, and creators. Share your stories, connect with your audience, and grow your influence.
          </p>
          <Link to="/signup">
            <Button className="px-10 py-4 text-lg animate-glow">
              Join Now & Start Writing
            </Button>
          </Link>
        </motion.main>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
          <StatCard icon={<Users size={32} />} value="10k+" label="Active Users" delay={0.1} />
          <StatCard icon={<FileText size={32} />} value="50k+" label="Blogs Published" delay={0.3} />
          <StatCard icon={<PenSquare size={32} />} value="1M+" label="Ideas Shared" delay={0.5} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-surface/30">
        <div className="container mx-auto text-center max-w-5xl">
          <h2 className="text-4xl font-bold mb-4">Why Choose Inkwell?</h2>
          <p className="text-text-secondary mb-12 max-w-2xl mx-auto">We provide the tools and the community to help your ideas flourish.</p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <FeatureCard icon={<Feather size={24} />} title="Powerful Editor" delay={0.2}>
              A clean, intuitive, and powerful editor that lets you focus on what matters most: your writing.
            </FeatureCard>
            <FeatureCard icon={<Users size={24} />} title="Community Engagement" delay={0.4}>
              Connect with readers and fellow writers. Get feedback, build your following, and join the conversation.
            </FeatureCard>
            <FeatureCard icon={<TrendingUp size={24} />} title="Grow Your Audience" delay={0.6}>
              Leverage our platform to reach a wider audience. Our discovery tools help your best work get noticed.
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-20 px-6 container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">From the Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demoPosts.slice(0, 3).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-surface border border-border rounded-xl overflow-hidden group"
            >
              <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-6">
                <p className="text-sm font-semibold text-primary mb-2">{post.category}</p>
                <h3 className="text-xl font-bold text-text mb-3">{post.title}</h3>
                <p className="text-text-secondary text-sm">{post.excerpt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-surface/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-12">Loved by Creators</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="Inkwell gave my writing a home. The community is incredibly supportive and my readership has grown tenfold."
              name="Jane Doe"
              role="AI Researcher & Writer"
              avatar="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              delay={0.2}
            />
            <TestimonialCard
              quote="The editor is a dream to use. It gets out of the way and lets me focus on crafting the perfect story."
              name="John Smith"
              role="UX Designer & Storyteller"
              avatar="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 text-center">
        <div className="container mx-auto">
          <h2 className="text-5xl font-extrabold text-text mb-6">Ready to Share Your Story?</h2>
          <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto">Join thousands of creators and start your writing journey today. It's free to get started.</p>
          <Link to="/signup">
            <Button size="lg" className="px-12 py-5 text-xl animate-glow">
              Sign Up for Free
            </Button>
          </Link>
        </div>
      </section>

      <footer className="text-center py-8 border-t border-border">
        <p className="text-text-secondary">&copy; 2025 Inkwell. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
