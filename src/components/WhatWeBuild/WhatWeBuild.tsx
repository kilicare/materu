'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heading, Body } from '@/components/Typography';
import { Section, Grid } from '@/components/Container';
import { SolutionCard } from '@/components/SolutionCard';
import { solutions, Solution } from '@/lib/solutions';

export const WhatWeBuild: React.FC = () => {
  const [selectedSolution, setSelectedSolution] = useState<Solution>(
    solutions[0]
  );

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
      {/* Header */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-16 text-center md:mb-20"
      >
        <motion.div variants={itemVariants}>
          <Heading level="h2" className="mb-6">
            WHAT DO YOU WANT TO BUILD?
          </Heading>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Body color="secondary" className="mx-auto max-w-2xl">
            Select the type of solution that best matches your needs. We&apos;ll
            guide you through the possibilities.
          </Body>
        </motion.div>
      </motion.div>

      {/* Solutions Grid */}
      <div className="grid gap-6 md:gap-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid columns={2} gap="lg" className="lg:grid-cols-4">
            {solutions.map((solution) => (
              <motion.div key={solution.id} variants={itemVariants}>
                <SolutionCard
                  solution={solution}
                  isSelected={selectedSolution.id === solution.id}
                  onSelect={setSelectedSolution}
                />
              </motion.div>
            ))}
          </Grid>
        </motion.div>
      </div>

      {/* Solution Details Preview - Architectural Blueprint */}
      <motion.div
        key={selectedSolution.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="mt-16 rounded-3xl border border-light-greige bg-warm-sand p-6 sm:p-8 md:mt-20 md:p-12 shadow-2xl text-[#1A1917] overflow-hidden"
      >
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          <div className="text-5xl">{selectedSolution.icon}</div>

          <div className="flex-1">
            <div className="flex items-center justify-between gap-4 mb-3">
              <h3 className="text-3xl font-bold text-[#1A1917]">
                {selectedSolution.title}
              </h3>
              <span className="hidden sm:inline-flex items-center px-3.5 py-1 rounded-full bg-light-greige text-xs font-mono font-bold uppercase tracking-wider text-[#4A453E]">
                Architecture Overview
              </span>
            </div>

            <p className="mb-8 text-lg text-[#57534E] leading-relaxed">
              {selectedSolution.description}
            </p>

            {/* Examples */}
            <div className="space-y-3">
              <p className="text-xs font-mono font-bold text-brand uppercase tracking-wider">
                Capabilities & Scope:
              </p>
              <div className="flex flex-wrap gap-3">
                {selectedSolution.examples.map((example, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="inline-block rounded-full bg-light-greige border border-[#D8D4CB] px-4 py-2 text-sm font-semibold text-[#2D2A26]"
                  >
                    {example}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.a
              href={selectedSolution.href}
              className="mt-8 inline-flex items-center gap-2 font-bold text-brand hover:text-[#1A1917] transition-colors"
              whileHover={{ x: 8 }}
            >
              Explore Full {selectedSolution.title} System →
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <p className="text-text-secondary">
          Not sure which one?{' '}
          <a href="/start-a-project" className="font-semibold text-brand hover:text-foreground transition-colors">
            Start a guided discovery →
          </a>
        </p>
      </motion.div>
    </Section>
  );
};
