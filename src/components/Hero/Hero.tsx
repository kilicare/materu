'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/Button';

const heroWords = ['DIGITAL', 'PRODUCTS', 'FOR A', 'BIGGER', 'TOMORROW'];

export const Hero: React.FC = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const ctaContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center pt-16 md:pt-0 overflow-hidden w-full max-w-full">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero_background.jpg"
          alt="Hero Background"
          fill
          priority
          quality={90}
          className="object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] md:min-h-screen px-4 py-16 text-center w-full max-w-full">
        {/* Hero Typography - Single Semantic H1 */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center space-y-2 sm:space-y-4 md:space-y-6 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-foreground leading-none tracking-tight"
        >
          {heroWords.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="block"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
          className="mt-8 md:mt-12 max-w-2xl"
        >
          <p className="text-base sm:text-lg md:text-xl text-text-secondary font-medium leading-relaxed">
            We design and build digital products, platforms and systems for
            ambitious businesses.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={ctaContainerVariants}
          initial="hidden"
          animate="visible"
          className="mt-8 md:mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center w-full sm:w-auto px-4 sm:px-0"
        >
          <Button variant="primary" size="lg" href="/start-a-project">
            Start a Project →
          </Button>
          <Button variant="secondary" size="lg" href="/work">
            Explore MATERU ↓
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: showScrollIndicator ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs font-semibold text-text-muted uppercase tracking-wide">
              Scroll
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="text-brand"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="19 6 10 15 1 6" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
