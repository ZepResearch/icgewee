import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const GradientButton = ({
  children,
  variant = 'default',
  size = 'md',
  withArrow = false,
  className,
  ...props
}) => {
  const sizeClasses = {
    sm: 'py-1.5 px-3 text-sm',
    md: 'py-2 px-5 text-base',
    lg: 'py-3 px-6 text-lg'
  };

  const variantClasses = {
    default: 'bg-conference-yellow text-conference-dark font-bold',
    outline: 'bg-transparent border border-conference-yellow text-conference-yellow'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        'rounded-full flex items-center justify-center transition-all',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {withArrow && (
        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      )}
    </motion.button>
  );
};

export default GradientButton;