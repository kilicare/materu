'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heading, Body } from '@/components/Typography';
import { Section } from '@/components/Container';
import { ValueCard } from '@/components/ValueCard';
import { brandValues } from '@/lib/values';

export const WhyMateru: React.FC = () => {
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
    <Section bgColor="secondary" padding="xl">
      {/* Header */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-20 text-center"
      >
        <motion.div variants={itemVariants}>
          <Heading level="h2" className="mb-6">
            TECHNOLOGY SHOULD
          </Heading>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Heading level="h2" className="mb-10">
            MOVE PEOPLE FORWARD
          </Heading>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Body color="secondary" className="mx-auto max-w-3xl text-lg">
            We combine product thinking, design and engineering to create
            digital experiences that solve real problems. This is why companies
            trust MATERU.
          </Body>
        </motion.div>
      </motion.div>

      {/* Brand Values */}
      <div className="space-y-20 md:space-y-32">
        {brandValues.map((value, index) => (
          <ValueCard key={value.id} value={value} index={index} />
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-20 text-center"
      >
        <p className="text-lg text-text-secondary">
          Ready to build something that matters?{' '}
          <a href="/start-a-project" className="font-bold text-brand hover:text-foreground transition-colors">
            Let&apos;s talk →
          </a>
        </p>
      </motion.div>
    </Section>
  );
};
