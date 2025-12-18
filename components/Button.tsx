import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: React.ReactNode;
  className?: string;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  href, 
  icon, 
  className = '',
  isLoading = false,
  disabled,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-bold rounded-lg transition-all duration-300 transform active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-600/20 hover:-translate-y-1 focus:ring-blue-600",
    secondary: "bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl hover:-translate-y-1 focus:ring-slate-900",
    outline: "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm hover:shadow-md focus:ring-slate-200",
    ghost: "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100 shadow-none"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-base"
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${isLoading || disabled ? 'opacity-70 cursor-not-allowed transform-none hover:translate-y-0' : ''}`;

  if (href && !disabled && !isLoading) {
    return (
      <a href={href} className={combinedStyles} {...(props as any)}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button className={combinedStyles} disabled={isLoading || disabled} {...props}>
      {isLoading ? (
         <span className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
      ) : (
        <>
          {children}
          {icon}
        </>
      )}
    </button>
  );
};

export default Button;