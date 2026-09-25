'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heading, Body } from '@/components/Typography';
import { Section } from '@/components/Container';
import { CaseStudyCard } from '@/components/CaseStudyCard';
import { caseStudies } from '@/lib/caseStudies';
import { Button } from '@/components/Button';

export default function WorkPage() {
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
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
      {/* Hero */}
      <Section bgColor="transparent" hasBackgroundImage padding="xl" className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/work_background.jpg"
            alt="Work Background"
            fill
            priority
            quality={90}
            className="object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/80" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-20 relative z-10"
        >
          <motion.div variants={itemVariants}>
            <Heading level="h1" className="mb-6">
              OUR WORK
            </Heading>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Body color="secondary" className="mx-auto max-w-2xl text-lg">
              A portfolio of projects that showcase our expertise and
              problem-solving approach. Each project tells a story of
              transformation.
            </Body>
          </motion.div>
        </motion.div>
      </Section>

      {/* Case Studies */}
      <Section bgColor="secondary" padding="xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-12"
        >
          {caseStudies.map((caseStudy) => (
            <motion.div key={caseStudy.id} variants={itemVariants}>
              <CaseStudyCard
                caseStudy={caseStudy}
                layout={caseStudy.layout || 'default'}
              />
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Final CTA */}
      <Section bgColor="primary" padding="xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <Heading level="h2">Next Project Could Be Yours</Heading>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <Body color="secondary" className="mx-auto max-w-2xl">
              We&apos;re ready to help you achieve similar results. Let&apos;s discuss
              your vision and make it happen.
            </Body>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button variant="primary" size="lg">
              Start a Project →
            </Button>
          </motion.div>
        </motion.div>
      </Section>
    </>
  );
}
