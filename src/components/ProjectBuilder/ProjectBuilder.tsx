'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useProjectBuilder } from '@/contexts/ProjectBuilderContext';
import { Step1Category } from './Step1Category';
import { Step2Subcategory } from './Step2Subcategory';
import { Step3Description } from './Step3Description';
import { Step4Details } from './Step4Details';
import { Step5Contact } from './Step5Contact';
import { Step6Confirmation } from './Step6Confirmation';
import { Button } from '@/components/Button';

interface ProjectBuilderProps {
  onSuccess?: () => void;
}

export const ProjectBuilder: React.FC<ProjectBuilderProps> = ({
  onSuccess,
}) => {
  const router = useRouter();
  const { formData, setCurrentStep, saveToLocalStorage } =
    useProjectBuilder();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const steps = [
    { number: 1, title: 'Project Type' },
    { number: 2, title: 'Specifics' },
    { number: 3, title: 'Description' },
    { number: 4, title: 'Details' },
    { number: 5, title: 'Contact' },
    { number: 6, title: 'Confirm' },
  ];

  const canProceedToNext = (): boolean => {
    switch (formData.currentStep) {
      case 1:
        return !!formData.category;
      case 2:
        return !!formData.subcategory;
      case 3:
        return formData.projectDescription.trim().length >= 10;
      case 4:
        return !!formData.budget && !!formData.timeline;
      case 5:
        return (
          !!formData.name &&
          !!formData.email &&
          !!formData.phone &&
          !!formData.company &&
          !!formData.role
        );
      case 6:
        return true;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (canProceedToNext()) {
      saveToLocalStorage();
      if (formData.currentStep < steps.length) {
        setCurrentStep(formData.currentStep + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (formData.currentStep > 1) {
      setCurrentStep(formData.currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/project-builder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          category: formData.category,
          subcategory: formData.subcategory,
          projectDescription: formData.projectDescription,
          budget: formData.budget,
          timeline: formData.timeline,
          existingSystems: formData.existingSystems,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          role: formData.role,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit project request');
      }

      // Clear localStorage
      localStorage.removeItem('projectBuilderFormData');

      // Move to success page
      onSuccess?.();
      setCurrentStep(7); // Success state
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'An error occurred. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success state
  if (formData.currentStep === 7) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <div className="text-6xl mb-6">✓</div>
        <h2 className="text-3xl font-bold text-orange mb-4">
          Project Request Submitted!
        </h2>
        <p className="text-gray mb-8 max-w-2xl mx-auto">
          Thanks for sharing your project details. We&apos;ve received your request
          and will review it carefully. You can expect to hear from us within
          24 hours.
        </p>
        <p className="text-sm text-gray mb-8">
          A confirmation email has been sent to <strong>{formData.email}</strong>
        </p>
        <Button
          variant="secondary"
          onClick={() => {
            router.push('/');
          }}
        >
          Back to Home →
        </Button>
      </motion.div>
    );
  }

  const renderStepComponent = () => {
    switch (formData.currentStep) {
      case 1:
        return <Step1Category key="step1" />;
      case 2:
        return <Step2Subcategory key="step2" />;
      case 3:
        return <Step3Description key="step3" />;
      case 4:
        return <Step4Details key="step4" />;
      case 5:
        return <Step5Contact key="step5" />;
      case 6:
        return <Step6Confirmation onSubmit={handleSubmit} isSubmitting={isSubmitting} key="step6" />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        {/* Step Indicators */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
          {steps.map((step, index) => (
            <motion.button
              key={step.number}
              onClick={() => {
                if (index < formData.currentStep) {
                  setCurrentStep(index + 1);
                }
              }}
              className={`flex-shrink-0 flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all ${
                formData.currentStep === step.number
                  ? 'bg-brand text-brand-foreground scale-105 shadow-sm'
                  : index < formData.currentStep
                  ? 'bg-surface-elevated border border-brand/30 text-brand cursor-pointer hover:bg-surface-hover'
                  : 'bg-surface border border-border text-muted-foreground'
              }`}
              disabled={index >= formData.currentStep}
              whileHover={index < formData.currentStep ? { scale: 1.05 } : {}}
            >
              <span className="text-sm">{step.number}</span>
              <span className="text-xs hidden sm:inline">{step.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Linear Progress Bar */}
        <div className="w-full h-1.5 bg-surface-elevated border border-border rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-brand to-brand/60"
            initial={{ width: 0 }}
            animate={{
              width: `${((formData.currentStep - 1) / (steps.length - 1)) * 100}%`,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 rounded-lg bg-destructive-muted border border-destructive-border text-destructive-foreground font-medium"
        >
          {error}
        </motion.div>
      )}

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={formData.currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="mb-12 p-8 rounded-2xl bg-surface border border-border"
        >
          {renderStepComponent()}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex gap-4"
      >
        <Button
          variant="ghost"
          size="lg"
          onClick={handlePrevious}
          disabled={formData.currentStep === 1}
          fullWidth
        >
          ← Previous
        </Button>

        {formData.currentStep < 6 ? (
          <Button
            variant="primary"
            size="lg"
            onClick={handleNext}
            disabled={!canProceedToNext()}
            fullWidth
          >
            Next →
          </Button>
        ) : null}
      </motion.div>

      {/* Auto-save indicator */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center text-xs text-gray mt-6"
      >
        💾 Your progress is automatically saved
      </motion.p>
    </div>
  );
};
