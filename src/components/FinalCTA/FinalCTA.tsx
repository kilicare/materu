'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heading, Body } from '@/components/Typography';
import { Section } from '@/components/Container';
import { Button } from '@/components/Button';

export const FinalCTA: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Section bgColor="primary" padding="xl">
      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="relative z-10 text-center"
      >
        {/* Headline */}
        <motion.div variants={itemVariants} className="mb-8">
          <Heading level="h2">
            HAVE SOMETHING
            <br />
            IN MIND?
          </Heading>
        </motion.div>

        {/* Subheading */}
        <motion.div variants={itemVariants} className="mb-12">
          <Body color="secondary" className="mx-auto max-w-2xl text-xl">
            Let&apos;s turn your idea into a digital product that moves people
            forward. We&apos;re ready when you are.
          </Body>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-4 sm:flex-row sm:justify-center"
        >
          <Button variant="primary" size="lg" href="/start-a-project">
            Start a Project →
          </Button>

          <Button variant="secondary" size="lg" href="/contact">
            Schedule a Call
          </Button>
        </motion.div>

        {/* Additional CTA */}
        <motion.div
          variants={itemVariants}
          className="mt-12"
        >
          <p className="text-text-secondary">
            Or reach out directly:{' '}
            <a
              href="https://wa.me/255650745642"
              className="font-bold text-brand hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp →
            </a>
          </p>
        </motion.div>
      </motion.div>
    </Section>
  );
};
