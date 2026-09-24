'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heading, Body } from '@/components/Typography';
import { Section } from '@/components/Container';
import { ProcessStepComponent } from '@/components/ProcessStep';
import { processSteps } from '@/lib/process';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Find the process section
      const processSection = document.getElementById('process-section');
      if (!processSection) return;

      const rect = processSection.getBoundingClientRect();
      const sectionHeight = processSection.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate progress as user scrolls through section
      let progress =
        (windowHeight - rect.top) / (sectionHeight + windowHeight);
      progress = Math.max(0, Math.min(1, progress));

      setScrollProgress(progress);

      // Calculate which step should be active
      const stepIndex = Math.floor(progress * processSteps.length);
      setActiveStep(Math.min(stepIndex, processSteps.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <Section bgColor="primary" padding="xl" id="process-section">
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
            OUR PROCESS
          </Heading>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Body color="secondary" className="mx-auto max-w-2xl text-lg">
            A clear, collaborative approach from discovery to launch and beyond.
          </Body>
        </motion.div>
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        className="mb-16 h-1 w-full overflow-hidden rounded-full bg-bg-surface md:mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-orange to-orange/50"
          animate={{ width: `${scrollProgress * 100}%` }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* Steps Grid - Desktop */}
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4">
        {processSteps.map((step, index) => (
          <ProcessStepComponent
            key={step.id}
            step={step}
            isActive={activeStep === index}
            index={index}
          />
        ))}
      </div>

      {/* Steps Stack - Mobile */}
      <div className="md:hidden space-y-8">
        {processSteps.map((step, index) => (
          <ProcessStepComponent
            key={step.id}
            step={step}
            isActive={activeStep === index}
            index={index}
          />
        ))}
      </div>

      {/* Bottom Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <p className="text-gray">
          Ready to start the journey?{' '}
          <a href="/start-a-project" className="font-bold text-orange hover:text-ivory transition-colors">
            Let&apos;s build together →
          </a>
        </p>
      </motion.div>
    </Section>
  );
};
