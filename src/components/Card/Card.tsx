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
        'hoverable rounded-3xl border border-border bg-surface p-6 md:p-8 shadow-sm transition-all duration-base',
        hover && 'hover:border-border-strong hover:bg-surface-elevated hover:shadow-md',
        className
      )}
      onClick={onClick}
      whileHover={hover ? { y: -4 } : undefined}
      whileTap={hover ? { y: 0 } : undefined}
      transition={{ duration: 0.24 }}
    >
      {children}
    </motion.div>
  );
};
