'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useProjectBuilder } from '@/contexts/ProjectBuilderContext';
import { Heading, Body } from '@/components/Typography';
import { projectCategories } from '@/lib/projectBuilder';

export const Step1Category: React.FC = () => {
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
      className="space-y-6"
    >
      <div className="mb-8">
        <Heading level="h3" className="mb-3">
          What are we building?
        </Heading>
        <Body color="secondary">
          Select the type of project that best matches your needs.
        </Body>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {projectCategories.map((category) => (
          <motion.button
            key={category.id}
            variants={itemVariants}
            onClick={() => {
              updateFormData({
                category: category.id,
                subcategory: '', // Reset subcategory
              });
            }}
            className={`p-6 rounded-2xl border-2 transition-all text-left hover:shadow-lg ${
              formData.category === category.id
                ? 'border-orange bg-orange/10'
                : 'border-gray/20 bg-bg-surface hover:border-orange/50'
            }`}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-4xl mb-3">{category.icon}</div>
            <h4 className="text-lg font-bold text-ivory mb-2">
              {category.name}
            </h4>
            <p className="text-sm text-gray">{category.description}</p>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};
