'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Solution } from '@/lib/solutions';

interface SolutionCardProps {
  solution: Solution;
  isSelected: boolean;
  onSelect: (solution: Solution) => void;
}

export const SolutionCard: React.FC<SolutionCardProps> = ({
  solution,
  isSelected,
  onSelect,
}) => {
  return (
    <motion.button
      onClick={() => onSelect(solution)}
      className="group relative w-full text-left"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.24 }}
    >
      <div
        className={`relative overflow-hidden rounded-3xl border transition-all duration-300 p-8 md:p-10 shadow-sm ${
          isSelected
            ? 'border-brand bg-surface shadow-[0_15px_35px_-10px_rgba(249,115,22,0.25)] ring-1 ring-brand/30'
            : 'border-border bg-surface/70 hover:border-brand/50 hover:bg-surface'
        }`}
      >
        {/* Icon */}
        <div className="mb-6 text-5xl">{solution.icon}</div>

        {/* Title */}
        <h3
          className={`mb-3 text-2xl font-bold transition-colors duration-base ${
            isSelected ? 'text-brand' : 'text-foreground group-hover:text-brand'
          }`}
        >
          {solution.title}
        </h3>

        {/* Short Description */}
        <p
          className={`text-sm transition-colors duration-base ${
            isSelected ? 'text-foreground' : 'text-text-secondary group-hover:text-foreground'
          }`}
        >
          {solution.shortDescription}
        </p>

        {/* Animated Arrow */}
        <motion.div
          className="mt-6 inline-flex items-center gap-2"
          animate={isSelected ? { x: 8 } : { x: 0 }}
          transition={{ duration: 0.24 }}
        >
          <span
            className={`text-sm font-semibold transition-colors duration-base ${
              isSelected ? 'text-brand' : 'text-text-secondary group-hover:text-brand'
            }`}
          >
            Explore
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            className="transition-all duration-base"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M2 8h12" />
            <path d="M10 6l2 2-2 2" />
          </svg>
        </motion.div>

        {/* Indicator Line */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-brand"
          initial={{ width: 0 }}
          animate={{ width: isSelected ? '100%' : 0 }}
          transition={{ duration: 0.24 }}
        />
      </div>
    </motion.button>
  );
};
