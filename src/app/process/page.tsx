'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heading, Body } from '@/components/Typography';
import { Section } from '@/components/Container';
import { Button } from '@/components/Button';
import { ProcessDetailStep } from '@/components/ProcessDetailStep';
import { processSteps } from '@/lib/process';

export default function ProcessPage() {
  const [expandedStep, setExpandedStep] = useState<string | null>('discover');

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
      },
    },
  };

  return (
    <>
      {/* Hero Section */}
      <Section bgColor="transparent" hasBackgroundImage padding="xl" className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/process_background.jpg"
            alt="Process Background"
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
          className="text-center mb-16 relative z-10"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <Heading level="h1">OUR PROCESS</Heading>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-10 mx-auto max-w-3xl">
            <Body color="secondary" className="text-lg">
              A clear, collaborative approach from discovery to launch and
              beyond. We believe in transparency at every step and keep you
              informed throughout the journey.
            </Body>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-text-secondary italic">
              &ldquo;Your success is our success. We&apos;re invested in getting it right.&rdquo;
            </p>
          </motion.div>
        </motion.div>
      </Section>

      {/* Process Steps */}
      <Section bgColor="secondary" padding="xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <Heading level="h2" className="mb-6">
              SIX STAGES OF SUCCESS
            </Heading>
            <Body color="secondary">
              Click any stage to learn more about what happens and what you&apos;ll
              receive.
            </Body>
          </motion.div>

          {/* Steps */}
          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <ProcessDetailStep
                key={step.id}
                step={step}
                index={index}
                isExpanded={expandedStep === step.id}
                onToggle={() =>
                  setExpandedStep(expandedStep === step.id ? null : step.id)
                }
              />
            ))}
          </div>
        </motion.div>

        {/* Timeline Visualization */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20 pt-20 border-t border-border"
        >
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <Heading level="h3">TIMELINE</Heading>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Background line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-brand to-brand/30" />

            {/* Timeline items */}
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`md:grid md:grid-cols-2 md:gap-12 items-center ${
                    index % 2 === 1 ? 'md:direction-rtl' : ''
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`${
                      index % 2 === 1 ? 'md:order-2' : 'md:order-1'
                    } mb-6 md:mb-0`}
                  >
                    <div className="rounded-2xl bg-surface p-6 border border-border shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-4xl">{step.icon}</span>
                        <div>
                          <p className="text-sm text-brand font-bold">
                            {step.duration}
                          </p>
                          <h4 className="font-bold text-foreground">{step.title}</h4>
                        </div>
                      </div>
                      <p className="text-sm text-text-secondary">{step.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot (visible on desktop) */}
                  <div className={`hidden md:flex md:order-${index % 2 === 1 ? 1 : 2} justify-center`}>
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand text-white font-bold text-lg border-4 border-surface relative z-10 shadow-md">
                      {step.number}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Why This Process */}
      <Section bgColor="primary" padding="xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <Heading level="h2" className="mb-6">
              WHY THIS PROCESS?
            </Heading>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto"
          >
            {[
              {
                icon: '🎯',
                title: 'Clarity',
                description: 'You know exactly what&apos;s happening and why at every step.',
              },
              {
                icon: '🤝',
                title: 'Collaboration',
                description: 'You&apos;re not just a client—you&apos;re a partner in the process.',
              },
              {
                icon: '✅',
                title: 'Quality',
                description: 'Every phase builds on the last, ensuring the best results.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="mb-4 text-5xl">{item.icon}</div>
                <h4 className="mb-3 font-bold text-ivory">{item.title}</h4>
                <p className="text-sm text-gray">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* CTA */}
      <Section bgColor="secondary" padding="xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <Heading level="h2">Ready to Start Your Project?</Heading>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <Body color="secondary" className="mx-auto max-w-2xl">
              Let&apos;s discuss your project and get started on this journey together.
              We&apos;re excited to help you build something amazing.
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