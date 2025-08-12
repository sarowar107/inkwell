import { twMerge } from 'tailwind-merge';
import { clsx, ClassValue } from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const Input = ({ label, id, className, ...props }: InputProps) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-text-secondary mb-2">
        {label}
      </label>
      <input
        id={id}
        className={twMerge(clsx(
          "w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-text placeholder-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all",
          className
        ))}
        {...props}
      />
    </div>
  );
};

export default Input;
