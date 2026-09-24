'use client';

import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  hover = true,
  className,
  onClick,
}) => {
  return (
    <motion.div
      className={clsx(
        'hoverable rounded-3xl border border-white/[0.08] bg-bg-surface/90 backdrop-blur-sm p-6 md:p-8 shadow-sm transition-all duration-base',
        hover && 'hover:border-orange/50 hover:shadow-[0_20px_40px_-15px_rgba(255,90,54,0.15)]',
        className
      )}
      onClick={onClick}
      whileHover={hover ? { y: -6 } : undefined}
      whileTap={hover ? { y: 0 } : undefined}
      transition={{ duration: 0.24 }}
    >
      {children}
    </motion.div>
  );
};
