'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heading, Body } from '@/components/Typography';
import { Section } from '@/components/Container';
import { ProjectBuilder } from '@/components/ProjectBuilder';
import { ProjectBuilderProvider } from '@/contexts/ProjectBuilderContext';

export const dynamic = 'force-dynamic';

export default function StartProjectPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) {
    return null;
  }

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
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <ProjectBuilderProvider>
      {/* Hero */}
      <Section bgColor="transparent" hasBackgroundImage padding="xl" className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/startproject_background.jpg"
            alt="Start Project Background"
            fill
            priority
            quality={90}
            className="object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/50 to-ink/50" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16 relative z-10"
        >
          <motion.div variants={itemVariants}>
            <Heading level="h1" className="mb-6">
              START YOUR PROJECT
            </Heading>
          </motion.div>

          <motion.div variants={itemVariants} className="mx-auto max-w-3xl">
            <Body color="secondary" className="text-lg">
              Let&apos;s discuss your project. Answer a few quick questions and
              we&apos;ll be in touch within 24 hours to explore your idea together.
            </Body>
          </motion.div>
        </motion.div>
      </Section>

      {/* Form */}
      <Section bgColor="secondary" padding="xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ProjectBuilder />
        </motion.div>
      </Section>

      {/* CTA */}
      <Section bgColor="primary" padding="xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <Heading level="h2">Prefer a Quick Chat?</Heading>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <Body color="secondary" className="mx-auto max-w-2xl">
              We&apos;re available Monday—Friday, 9 AM—6 PM (East Africa Time).
            </Body>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="mailto:hello@materu.com"
              className="px-8 py-3 rounded-full bg-orange text-ivory font-semibold hover:bg-orange/90 transition-all"
            >
              Email Us
            </a>
            <a
              href="https://wa.me/255650745642"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border-2 border-orange text-orange font-semibold hover:bg-orange/10 transition-all"
            >
              WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </Section>
    </ProjectBuilderProvider>
  );
}
