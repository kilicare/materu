'use client';

import { useState, useCallback } from 'react';

export interface FormField {
  value: string;
  error?: string | null;
  touched: boolean;
}

export interface FormState {
  [key: string]: FormField;
}

export interface ValidationRules {
  [key: string]: (value: string) => string | null | undefined;
}

export const useFormValidation = (initialState: FormState, rules: ValidationRules) => {
  const [formState, setFormState] = useState(initialState);

  const validateField = useCallback(
    (fieldName: string, value: string) => {
      const rule = rules[fieldName];
      if (rule) {
        const error = rule(value);
        setFormState(prev => ({
          ...prev,
          [fieldName]: {
            ...prev[fieldName],
            error,
          },
        }));
        return !error;
      }
      return true;
    },
    [rules]
  );

  const handleChange = (
    fieldName: string,
    value: string
  ) => {
    setFormState(prev => ({
      ...prev,
      [fieldName]: {
        ...prev[fieldName],
        value,
      },
    }));
  };

  const handleBlur = (fieldName: string) => {
    setFormState(prev => ({
      ...prev,
      [fieldName]: {
        ...prev[fieldName],
        touched: true,
      },
    }));

    validateField(fieldName, formState[fieldName].value);
  };

  const isFormValid = () => {
    return Object.entries(formState).every(([fieldName, field]) => {
      const error = rules[fieldName]?.(field.value);
      return !error;
    });
  };

  return {
    formState,
    validateField,
    handleChange,
    handleBlur,
    isFormValid,
  };
};
