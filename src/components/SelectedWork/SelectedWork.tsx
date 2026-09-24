'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heading, Body } from '@/components/Typography';
import { Section } from '@/components/Container';
import { Button } from '@/components/Button';
import { CaseStudyCard } from '@/components/CaseStudyCard';
import { caseStudies } from '@/lib/caseStudies';

export const SelectedWork: React.FC = () => {
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

  // Featured cases first
  const featuredCases = caseStudies.filter(cs => cs.featured);
  const otherCases = caseStudies.filter(cs => !cs.featured);

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
            SELECTED WORK
          </Heading>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Body color="secondary" className="mx-auto max-w-2xl">
            A curated selection of projects that showcase our expertise and
            problem-solving approach.
          </Body>
        </motion.div>
      </motion.div>

      {/* Featured Cases */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-12 space-y-8 md:mb-16"
      >
        {featuredCases.map((caseStudy) => (
          <motion.div key={caseStudy.id} variants={itemVariants}>
            <CaseStudyCard
              caseStudy={caseStudy}
              layout={caseStudy.layout || 'default'}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Other Cases - Grid */}
      {otherCases.length > 0 && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            {otherCases.map((caseStudy) => (
              <motion.div key={caseStudy.id} variants={itemVariants}>
                <CaseStudyCard caseStudy={caseStudy} layout="default" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Button variant="primary" size="lg" href="/work">
          Explore All Work →
        </Button>
      </motion.div>
    </Section>
  );
};
