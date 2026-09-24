'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heading, Body, Label } from '@/components/Typography';
import { ProcessStepDetail } from '@/lib/process';

interface ProcessDetailStepProps {
  step: ProcessStepDetail;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

export const ProcessDetailStep: React.FC<ProcessDetailStepProps> = ({
  step,
  index,
  isExpanded,
  onToggle,
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
      },
    },
  };

  const contentVariants = {
    collapsed: {
      height: 0,
      opacity: 0,
    },
    expanded: {
      height: 'auto',
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="mb-8 overflow-hidden rounded-2xl border border-gray/20 bg-bg-surface"
    >
      {/* Header */}
      <motion.button
        onClick={onToggle}
        className="w-full p-8 text-left hover:bg-bg-surface-hover transition-colors"
        whileHover={{ x: 4 }}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            {/* Step Number */}
            <div className="mb-3 flex items-center gap-4">
              <motion.div
                className={`flex h-12 w-12 items-center justify-center rounded-full font-bold transition-all ${
                  isExpanded
                    ? 'bg-orange text-ivory scale-110'
                    : 'bg-gray/20 text-orange'
                }`}
                animate={isExpanded ? { scale: 1.1 } : { scale: 1 }}
              >
                {step.number}
              </motion.div>
              <div>
                <Label className="uppercase text-orange">{step.duration}</Label>
              </div>
            </div>

            {/* Title & Description */}
            <h3 className="mb-3 text-3xl font-bold text-ivory">
              {step.title}
            </h3>
            <p className="text-gray">{step.description}</p>
          </div>

          {/* Chevron */}
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-orange"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </motion.div>
        </div>
      </motion.button>

      {/* Expandable Content */}
      <motion.div
        variants={contentVariants}
        animate={isExpanded ? 'expanded' : 'collapsed'}
        className="overflow-hidden border-t border-gray/20"
      >
        <div className="px-8 py-8 space-y-12">
          {/* Long Description */}
          <div>
            <Heading level="h4" className="mb-4">
              What We Do
            </Heading>
            <Body color="secondary">{step.longDescription}</Body>
          </div>

          {/* Activities Grid */}
          <div>
            <Heading level="h4" className="mb-6">
              Key Activities
            </Heading>
            <div className="grid gap-6 md:grid-cols-2">
              {step.activities.map((activity, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isExpanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-lg bg-ink/30 p-6 border border-orange/10"
                >
                  <h5 className="mb-2 font-bold text-orange">{activity.title}</h5>
                  <p className="text-sm text-gray">{activity.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Deliverables & Details */}
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <Heading level="h4" className="mb-6">
                Deliverables
              </Heading>
              <ul className="space-y-3">
                {step.deliverables.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isExpanded ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-3 text-gray"
                  >
                    <span className="text-orange">✓</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <Heading level="h4" className="mb-6">
                Details
              </Heading>
              <ul className="space-y-3">
                {step.details.map((detail, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isExpanded ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-3 text-gray"
                  >
                    <span className="text-orange">→</span>
                    <span>{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};