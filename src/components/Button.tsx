import { twMerge } from 'tailwind-merge';
import { clsx, ClassValue } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  children: React.ReactNode;
}

const Button = ({ className, variant = 'primary', children, ...props }: ButtonProps) => {
  const baseClasses = "px-6 py-2.5 font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/30 transform hover:-translate-y-0.5",
    secondary: "bg-surface border border-border text-text-secondary hover:border-primary hover:text-text",
    danger: "bg-red-500/20 border border-red-500 text-red-400 hover:bg-red-500/30 hover:text-red-300",
  };

  return (
    <button className={twMerge(clsx(baseClasses, variantClasses[variant], className))} {...props}>
      {children}
    </button>
  );
};

export default Button;
