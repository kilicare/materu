'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useProjectBuilder } from '@/contexts/ProjectBuilderContext';
import { Heading, Body } from '@/components/Typography';

export const Step3Description: React.FC = () => {
  const { formData, updateFormData } = useProjectBuilder();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="mb-8">
        <Heading level="h3" className="mb-3">
          Tell us about your project
        </Heading>
        <Body color="secondary">
          The more details you provide, the better we can help.
        </Body>
      </div>

      <div>
        <label className="block mb-3 font-semibold text-ivory">
          Project Description *
        </label>
        <textarea
          value={formData.projectDescription}
          onChange={e =>
            updateFormData({ projectDescription: e.target.value })
          }
          placeholder="Describe your project, goals, target users, and any specific requirements..."
          rows={8}
          className="w-full rounded-lg bg-bg-surface px-6 py-4 text-ivory placeholder-gray/50 focus:outline-none focus:ring-2 focus:ring-orange resize-none border border-gray/20"
          aria-label="Project description"
        />
        <p className="text-xs text-gray mt-2">
          {formData.projectDescription.length} characters
        </p>
      </div>

      <div className="p-6 rounded-lg bg-orange/10 border border-orange/20">
        <p className="text-sm text-gray">
          💡 <strong>Tip:</strong> Include information about your business,
          users, timeline expectations, and any existing systems or integrations
          needed.
        </p>
      </div>
    </motion.div>
  );
};
