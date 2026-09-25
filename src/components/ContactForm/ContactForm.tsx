'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/Button';
import { validateEmail, validatePhone } from '@/lib/utils';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  honeypot: string; // Anti-spam field
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      // Optional, but if provided, validate
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot for spam
    if (formData.honeypot) {
      console.warn('Bot submission detected');
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        honeypot: '',
      });
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
      transition: { duration: 0.4 },
    },
  };

  if (submitStatus === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 p-8 rounded-2xl bg-surface border border-success-border"
      >
        <div className="text-5xl mb-4 text-success-foreground">✓</div>
        <h3 className="text-2xl font-bold text-success-foreground mb-3">
          Message Received!
        </h3>
        <p className="text-text-secondary mb-6">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="text-brand hover:text-foreground transition-colors font-semibold"
        >
          Send another message →
        </button>
      </motion.div>
    );
  }

  if (submitStatus === 'error') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 p-8 rounded-2xl bg-surface border border-destructive-border"
      >
        <div className="text-5xl mb-4 text-destructive-foreground">✕</div>
        <h3 className="text-2xl font-bold text-destructive-foreground mb-3">
          Oops, Something Went Wrong
        </h3>
        <p className="text-text-secondary mb-6">
          We had trouble sending your message. Please try again or reach out
          directly at hello@materu.com
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="text-brand hover:text-foreground transition-colors font-semibold"
        >
          Try Again →
        </button>
      </motion.div>
    );
  }

  const inputBaseClass =
    'w-full rounded-lg bg-surface px-6 py-4 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 transition-all';

  return (
    <motion.form
      onSubmit={handleSubmit}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="space-y-6"
    >
      {/* Honeypot Field (hidden) */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Name */}
      <motion.div variants={itemVariants}>
        <label htmlFor="contact-name" className="block mb-2 font-semibold text-foreground">
          Full Name *
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
          className={`${inputBaseClass} ${
            errors.name
              ? 'border border-destructive focus:ring-destructive'
              : 'border border-border focus:ring-brand focus:border-brand'
          }`}
          placeholder="Your name"
        />
        {errors.name && (
          <p id="contact-name-error" className="text-destructive-foreground text-sm mt-2 font-medium">{errors.name}</p>
        )}
      </motion.div>

      {/* Email */}
      <motion.div variants={itemVariants}>
        <label htmlFor="contact-email" className="block mb-2 font-semibold text-foreground">
          Email Address *
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'contact-email-error' : undefined}
          className={`${inputBaseClass} ${
            errors.email
              ? 'border border-destructive focus:ring-destructive'
              : 'border border-border focus:ring-brand focus:border-brand'
          }`}
          placeholder="your@email.com"
        />
        {errors.email && (
          <p id="contact-email-error" className="text-destructive-foreground text-sm mt-2 font-medium">{errors.email}</p>
        )}
      </motion.div>

      {/* Phone */}
      <motion.div variants={itemVariants}>
        <label htmlFor="contact-phone" className="block mb-2 font-semibold text-foreground">
          Phone Number
        </label>
        <input
          id="contact-phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`${inputBaseClass} border border-border focus:ring-brand focus:border-brand`}
          placeholder="+255 650 745 642"
        />
      </motion.div>

      {/* Subject */}
      <motion.div variants={itemVariants}>
        <label htmlFor="contact-subject" className="block mb-2 font-semibold text-foreground">
          Subject *
        </label>
        <input
          id="contact-subject"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
          className={`${inputBaseClass} ${
            errors.subject
              ? 'border border-destructive focus:ring-destructive'
              : 'border border-border focus:ring-brand focus:border-brand'
          }`}
          placeholder="What&apos;s this about?"
        />
        {errors.subject && (
          <p id="contact-subject-error" className="text-destructive-foreground text-sm mt-2 font-medium">{errors.subject}</p>
        )}
      </motion.div>

      {/* Message */}
      <motion.div variants={itemVariants}>
        <label htmlFor="contact-message" className="block mb-2 font-semibold text-foreground">
          Message *
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          className={`${inputBaseClass} resize-none ${
            errors.message
              ? 'border border-destructive focus:ring-destructive'
              : 'border border-border focus:ring-brand focus:border-brand'
          }`}
          placeholder="Tell us about your project..."
        />
        {errors.message && (
          <p id="contact-message-error" className="text-destructive-foreground text-sm mt-2 font-medium">{errors.message}</p>
        )}
      </motion.div>

      {/* Submit Button */}
      <motion.div variants={itemVariants}>
        <Button
          variant="primary"
          size="lg"
          fullWidth
          type="submit"
          disabled={isSubmitting}
          isLoading={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message →'}
        </Button>
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="text-center text-sm text-text-secondary"
      >
        We&apos;ll get back to you within 24 hours.
      </motion.p>
    </motion.form>
  );
};