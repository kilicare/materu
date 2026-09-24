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

      {/* Project Details */}
      <motion.div
        variants={itemVariants}
        className="rounded-2xl border border-gray/20 bg-bg-surface p-8"
      >
        <h4 className="text-lg font-bold text-orange mb-6">
          PROJECT DETAILS
        </h4>

        <div className="space-y-4">
          <div className="flex justify-between items-start pb-4 border-b border-gray/20">
            <span className="text-gray">Project Type</span>
            <span className="font-semibold text-ivory text-right">
              {categoryLabel} → {subcategoryLabel}
            </span>
          </div>

          <div className="flex justify-between items-start pb-4 border-b border-gray/20">
            <span className="text-gray">Budget</span>
            <span className="font-semibold text-ivory">{budgetLabel}</span>
          </div>

          <div className="flex justify-between items-start pb-4 border-b border-gray/20">
            <span className="text-gray">Timeline</span>
            <span className="font-semibold text-ivory">{timelineLabel}</span>
          </div>

          <div className="flex justify-between items-start">
            <span className="text-gray">Description</span>
            <span className="font-semibold text-ivory text-right max-w-xs">
              {formData.projectDescription.substring(0, 100)}
              {formData.projectDescription.length > 100 ? '...' : ''}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Contact Details */}
      <motion.div
        variants={itemVariants}
        className="rounded-2xl border border-gray/20 bg-bg-surface p-8"
      >
        <h4 className="text-lg font-bold text-orange mb-6">
          CONTACT INFORMATION
        </h4>

        <div className="space-y-4">
          <div className="flex justify-between items-start pb-4 border-b border-gray/20">
            <span className="text-gray">Name</span>
            <span className="font-semibold text-ivory">{formData.name}</span>
          </div>

          <div className="flex justify-between items-start pb-4 border-b border-gray/20">
            <span className="text-gray">Email</span>
            <span className="font-semibold text-ivory">{formData.email}</span>
          </div>

          <div className="flex justify-between items-start pb-4 border-b border-gray/20">
            <span className="text-gray">Phone</span>
            <span className="font-semibold text-ivory">{formData.phone}</span>
          </div>

          <div className="flex justify-between items-start pb-4 border-b border-gray/20">
            <span className="text-gray">Company</span>
            <span className="font-semibold text-ivory">
              {formData.company}
            </span>
          </div>

          <div className="flex justify-between items-start">
            <span className="text-gray">Role</span>
            <span className="font-semibold text-ivory">{formData.role}</span>
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

        <p className="text-center text-sm text-gray">
          We&apos;ll review your information and reach out within 24 hours.
        </p>
      </motion.div>
    </motion.div>
  );
};
