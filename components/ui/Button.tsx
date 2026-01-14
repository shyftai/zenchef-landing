import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  href,
  className = '',
  ...props
}) => {
  const baseStyles = 'px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-block text-center';

  const variants = {
    primary: 'bg-zenchef-blue text-white hover:bg-zenchef-blue-dark hover:shadow-lg uppercase text-sm tracking-wide',
    secondary: 'bg-zenchef-gray text-white hover:bg-zenchef-charcoal hover:shadow-lg',
    outline: 'border-2 border-zenchef-blue text-zenchef-blue hover:bg-zenchef-blue hover:text-white'
  };

  const Component = href ? motion.a : motion.button;
  const componentProps = href ? { href } : {};

  return (
    <Component
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...componentProps}
      {...(props as any)}
    >
      {children}
    </Component>
  );
};
