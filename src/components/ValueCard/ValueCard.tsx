'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BrandValue } from '@/lib/values';

interface ValueCardProps {
  value: BrandValue;
  index: number;
}

export const ValueCard: React.FC<ValueCardProps> = ({ value, index }) => {
  const isLeft = value.position === 'left';

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={`grid gap-8 md:gap-12 items-center md:grid-cols-2`}
    >
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.1 }}
        className={isLeft ? 'md:col-span-1' : 'md:col-span-1 md:order-2'}
      >
        {/* Icon */}
        <motion.div
          className="mb-6 text-6xl"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          {value.icon}
        </motion.div>

        {/* Title */}
        <h3 className="mb-4 text-3xl font-bold text-ivory md:text-4xl">
          {value.title}
        </h3>

        {/* Short Description */}
        <p className="mb-4 text-lg text-gray font-medium">
          {value.description}
        </p>

        {/* Long Description */}
        <p className="text-base text-gray leading-relaxed">
          {value.longDescription}
        </p>
      </motion.div>

      {/* Visual Element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
        className={isLeft ? 'md:col-span-1 md:order-2' : 'md:col-span-1'}
      >
        <div className="relative h-80 w-full overflow-hidden rounded-3xl bg-gradient-to-br from-bg-secondary to-bg-secondary/50 border border-white/[0.08] shadow-lg flex items-center justify-center">
          {/* Decorative circles */}
          <motion.div
            className="absolute h-40 w-40 rounded-full bg-orange/20"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Center element */}
          <motion.div
            className="relative z-10 flex items-center justify-center"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <div className="text-8xl opacity-60">{value.icon}</div>
          </motion.div>

          {/* Accent line */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
