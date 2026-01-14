import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true
}) => {
  return (
    <motion.div
      className={`bg-white rounded-2xl p-8 shadow-sm ${className}`}
      whileHover={hover ? { y: -8, shadow: '0 20px 40px rgba(0,0,0,0.1)' } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};
