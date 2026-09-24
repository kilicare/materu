'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useProjectBuilder } from '@/contexts/ProjectBuilderContext';
import { Heading, Body } from '@/components/Typography';
import { projectCategories } from '@/lib/projectBuilder';

export const Step2Subcategory: React.FC = () => {
  const { formData, updateFormData } = useProjectBuilder();

  const selectedCategory = projectCategories.find(
    cat => cat.id === formData.category
  );

  const subcategories = selectedCategory?.subcategories || [];

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
          Tell us more about your {selectedCategory?.name.toLowerCase()}
        </Heading>
        <Body color="secondary">
          What specifically do you need?
        </Body>
      </div>

      <div className="space-y-3">
        {subcategories.map((sub) => (
          <motion.button
            key={sub.id}
            variants={itemVariants}
            onClick={() => updateFormData({ subcategory: sub.id })}
            className={`w-full p-6 rounded-2xl border-2 transition-all text-left hover:shadow-lg ${
              formData.subcategory === sub.id
                ? 'border-orange bg-orange/10'
                : 'border-gray/20 bg-bg-surface hover:border-orange/50'
            }`}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-lg font-bold text-ivory mb-1">
                  {sub.name}
                </h4>
                <p className="text-sm text-gray">{sub.description}</p>
              </div>
              <div className="text-xl ml-4">
                {formData.subcategory === sub.id ? '✓' : '→'}
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};
