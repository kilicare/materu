'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useProjectBuilder } from '@/contexts/ProjectBuilderContext';
import { Heading, Body } from '@/components/Typography';
import { Button } from '@/components/Button';
import {
  projectCategories,
  budgetRanges,
  timelineOptions,
} from '@/lib/projectBuilder';

interface Step6ConfirmationProps {
  onSubmit: () => Promise<void>;
  isSubmitting: boolean;
}

export const Step6Confirmation: React.FC<Step6ConfirmationProps> = ({
  onSubmit,
  isSubmitting,
}) => {
  const { formData } = useProjectBuilder();

  // Get labels for selections
  const categoryLabel =
    projectCategories.find(c => c.id === formData.category)?.name ||
    'Unknown';

  const subcategoryLabel =
    projectCategories
      .find(c => c.id === formData.category)
      ?.subcategories.find(s => s.id === formData.subcategory)?.name ||
    'Unknown';

  const budgetLabel =
    budgetRanges.find(b => b.id === formData.budget)?.label || 'Not specified';

  const timelineLabel =
    timelineOptions.find(t => t.id === formData.timeline)?.label ||
    'Not specified';

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
          Confirm Your Information
        </Heading>
        <Body color="secondary">
          Review your project details before we proceed.
        </Body>
      </div>

      {/* Project Details - Architectural Spec Sheet */}
      <motion.div
        variants={itemVariants}
        className="rounded-3xl border border-light-greige bg-warm-ivory p-8 md:p-10 shadow-xl text-[#1A1917]"
      >
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-light-greige">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand">
              Project Specification
            </span>
            <h4 className="text-xl font-bold text-[#1A1917] mt-1">
              Estimated Scope & Parameters
            </h4>
          </div>
          <span className="px-3 py-1 rounded-full bg-light-greige text-xs font-mono font-bold text-[#4A453E]">
            Verified
          </span>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-start pb-4 border-b border-light-greige">
            <span className="text-sm font-medium text-[#6B655C]">Project Type</span>
            <span className="font-bold text-[#1A1917] text-right">
              {categoryLabel} → {subcategoryLabel}
            </span>
          </div>

          <div className="flex justify-between items-start pb-4 border-b border-light-greige">
            <span className="text-sm font-medium text-[#6B655C]">Budget Allocation</span>
            <span className="font-bold text-brand">{budgetLabel}</span>
          </div>

          <div className="flex justify-between items-start pb-4 border-b border-light-greige">
            <span className="text-sm font-medium text-[#6B655C]">Target Timeline</span>
            <span className="font-bold text-[#1A1917]">{timelineLabel}</span>
          </div>

          <div className="flex justify-between items-start">
            <span className="text-sm font-medium text-[#6B655C]">Project Goals</span>
            <span className="font-medium text-[#1A1917] text-right max-w-xs">
              {formData.projectDescription.substring(0, 100)}
              {formData.projectDescription.length > 100 ? '...' : ''}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Contact Details */}
      <motion.div
        variants={itemVariants}
        className="rounded-2xl border border-border bg-surface p-8"
      >
        <h4 className="text-sm font-bold uppercase tracking-wider text-brand mb-6">
          Contact Information
        </h4>

        <div className="space-y-4">
          <div className="flex justify-between items-start pb-4 border-b border-border">
            <span className="text-text-secondary">Name</span>
            <span className="font-semibold text-foreground">{formData.name}</span>
          </div>

          <div className="flex justify-between items-start pb-4 border-b border-border">
            <span className="text-text-secondary">Email</span>
            <span className="font-semibold text-foreground">{formData.email}</span>
          </div>

          <div className="flex justify-between items-start pb-4 border-b border-border">
            <span className="text-text-secondary">Phone</span>
            <span className="font-semibold text-foreground">{formData.phone}</span>
          </div>

          <div className="flex justify-between items-start pb-4 border-b border-border">
            <span className="text-text-secondary">Company</span>
            <span className="font-semibold text-foreground">
              {formData.company}
            </span>
          </div>

          <div className="flex justify-between items-start">
            <span className="text-text-secondary">Role</span>
            <span className="font-semibold text-foreground">{formData.role}</span>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div variants={itemVariants} className="space-y-4 pt-4">
        <Button
          variant="primary"
          size="lg"
          fullWidth
          onClick={async () => {
            await onSubmit();
          }}
          disabled={isSubmitting}
          isLoading={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Project Request →'}
        </Button>

        <p className="text-center text-sm text-text-secondary">
          We&apos;ll review your information and reach out within 24 hours.
        </p>
      </motion.div>
    </motion.div>
  );
};
