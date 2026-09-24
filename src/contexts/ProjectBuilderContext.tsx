'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ProjectBuilderFormData } from '@/lib/projectBuilder';

interface ProjectBuilderContextType {
  formData: ProjectBuilderFormData;
  updateFormData: (updates: Partial<ProjectBuilderFormData>) => void;
  setCurrentStep: (step: number) => void;
  resetForm: () => void;
  saveToLocalStorage: () => void;
  loadFromLocalStorage: () => boolean;
}

const ProjectBuilderContext = createContext<ProjectBuilderContextType | undefined>(undefined);

const defaultFormData: ProjectBuilderFormData = {
  category: '',
  subcategory: '',
  projectDescription: '',
  budget: '',
  timeline: '',
  existingSystems: '',
  name: '',
  email: '',
  phone: '',
  company: '',
  role: '',
  currentStep: 1,
};

export const ProjectBuilderProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [formData, setFormData] = useState<ProjectBuilderFormData>(
    defaultFormData
  );
  const [isMounted, setIsMounted] = useState(false);

  const loadFromLocalStorage = (): boolean => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('projectBuilderFormData');
      if (saved) {
        try {
          const parsedData = JSON.parse(saved);
          setFormData({
            ...defaultFormData,
            ...parsedData,
            currentStep: parsedData.currentStep || 1,
          });
          return true;
        } catch (error) {
          console.error('Failed to load form data:', error);
        }
      }
    }
    return false;
  };

  // Load from localStorage on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
      loadFromLocalStorage();
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const updateFormData = (updates: Partial<ProjectBuilderFormData>) => {
    setFormData(prev => ({
      ...prev,
      ...updates,
    }));
  };

  const setCurrentStep = (step: number) => {
    setFormData(prev => ({
      ...prev,
      currentStep: step,
    }));
  };

  const saveToLocalStorage = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('projectBuilderFormData', JSON.stringify(formData));
    }
  };

  const resetForm = () => {
    setFormData(defaultFormData);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('projectBuilderFormData');
    }
  };

  const value: ProjectBuilderContextType = {
    formData,
    updateFormData,
    setCurrentStep,
    resetForm,
    saveToLocalStorage,
    loadFromLocalStorage,
  };

  // Prevent hydration mismatch
  if (!isMounted) {
    return <>{children}</>;
  }

  return (
    <ProjectBuilderContext.Provider value={value}>
      {children}
    </ProjectBuilderContext.Provider>
  );
};

export const useProjectBuilder = () => {
  const context = useContext(ProjectBuilderContext);
  if (!context) {
    throw new Error(
      'useProjectBuilder must be used within ProjectBuilderProvider'
    );
  }
  return context;
};
