'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ProcessStepDetail } from '@/lib/process';

interface ProcessStepProps {
  step: ProcessStepDetail;
  isActive: boolean;
  index: number;
}

export const ProcessStepComponent: React.FC<ProcessStepProps> = ({
  step,
  isActive,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="flex flex-col items-center gap-6"
    >
      {/* Circle Badge */}
      <motion.div
        className={`relative flex h-20 w-20 items-center justify-center rounded-full border-2 transition-all duration-base ${
          isActive
            ? 'border-orange bg-orange/10 scale-110'
            : 'border-gray/30 bg-bg-surface hover:border-orange/50'
        }`}
        animate={isActive ? { scale: 1.1 } : { scale: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        <span className="text-4xl">{step.icon}</span>

        {/* Number */}
        <motion.div
          className={`absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full font-bold text-sm transition-all duration-base ${
            isActive ? 'bg-orange text-ivory' : 'bg-gray/20 text-gray'
          }`}
          animate={isActive ? { scale: 1.2, rotate: 0 } : { scale: 1, rotate: -10 }}
        >
          {step.number}
        </motion.div>
      </motion.div>

      {/* Title */}
      <h3
        className={`text-center text-xl font-bold transition-colors duration-base ${
          isActive ? 'text-orange' : 'text-ivory'
        }`}
      >
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-center text-sm text-gray max-w-xs">
        {step.description}
      </p>

      {/* Details (visible when active) */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={
          isActive
            ? { opacity: 1, height: 'auto' }
            : { opacity: 0, height: 0 }
        }
        transition={{ duration: 0.3 }}
        className="w-full overflow-hidden"
      >
        <div className="space-y-2 border-t border-orange/20 pt-4 mt-4">
          {step.details.map((detail: string, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-start gap-2 text-xs text-gray"
            >
              <span className="mt-1 text-orange">✓</span>
              <span>{detail}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
