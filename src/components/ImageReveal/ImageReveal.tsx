'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ImageRevealProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  delay?: number;
  className?: string;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt,
  width,
  height,
  priority = false,
  delay = 0,
  className,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delay,
      },
    },
  };

  const maskVariants = {
    hidden: {
      clipPath: 'inset(0% 100% 0% 0%)',
      opacity: 0.4,
    },
    visible: {
      clipPath: 'inset(0% 0% 0% 0%)',
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: delay + 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`relative overflow-hidden rounded-2xl ${className || ''}`}
    >
      <motion.div
        variants={maskVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full h-full transform-gpu"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className="h-auto w-full object-cover"
          quality={75}
        />
      </motion.div>
    </motion.div>
  );
};
