'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useProjectBuilder } from '@/contexts/ProjectBuilderContext';
import { Heading, Body } from '@/components/Typography';
import { budgetRanges, timelineOptions } from '@/lib/projectBuilder';

export const Step4Details: React.FC = () => {
  const { formData, updateFormData } = useProjectBuilder();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <div className="mb-8">
        <Heading level="h3" className="mb-3">
          Project Details
        </Heading>
        <Body color="secondary">
          Help us understand your constraints and expectations.
        </Body>
      </div>

      {/* Budget */}
      <motion.div variants={itemVariants}>
        <label className="block mb-4 font-semibold text-foreground">
          Budget Range
        </label>
        <div className="space-y-3">
          {budgetRanges.map(range => (
            <motion.button
              key={range.id}
              onClick={() => updateFormData({ budget: range.id })}
              className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                formData.budget === range.id
                  ? 'border-brand bg-brand-muted'
                  : 'border-border bg-surface hover:border-border-strong hover:bg-surface-elevated'
              }`}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">{range.label}</span>
                {formData.budget === range.id && (
                  <span className="text-brand font-bold">✓</span>
                )}
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Timeline */}
      <motion.div variants={itemVariants}>
        <label className="block mb-4 font-semibold text-foreground">
          Timeline
        </label>
        <div className="space-y-3">
          {timelineOptions.map(option => (
            <motion.button
              key={option.id}
              onClick={() => updateFormData({ timeline: option.id })}
              className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                formData.timeline === option.id
                  ? 'border-brand bg-brand-muted'
                  : 'border-border bg-surface hover:border-border-strong hover:bg-surface-elevated'
              }`}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">{option.label}</span>
                {formData.timeline === option.id && (
                  <span className="text-brand font-bold">✓</span>
                )}
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Existing Systems */}
      <motion.div variants={itemVariants}>
        <label className="block mb-3 font-semibold text-foreground">
          Existing Systems or Integrations
        </label>
        <textarea
          value={formData.existingSystems}
          onChange={e => updateFormData({ existingSystems: e.target.value })}
          placeholder="E.g., Shopify, Stripe, Salesforce, custom APIs, etc. (optional)"
          rows={4}
          className="w-full rounded-lg bg-surface px-6 py-4 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand resize-none border border-border transition-all"
          aria-label="Existing systems"
        />
      </motion.div>
    </motion.div>
  );
};
