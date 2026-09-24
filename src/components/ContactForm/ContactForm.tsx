'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/Button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  honeypot: string;
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Invalid email';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (formData.message.trim().length < 10)
      newErrors.message = 'Message must be at least 10 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    setErrors(prev => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) {
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        honeypot: '',
      });
      return;
    }

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Send to backend API
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

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          honeypot: '',
        });

        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
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
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  if (submitStatus === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-orange mb-3">
          Message Received!
        </h3>
        <p className="text-gray mb-6">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="text-orange hover:text-ivory transition-colors"
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
        className="text-center py-12"
      >
        <div className="text-5xl mb-4">✕</div>
        <h3 className="text-2xl font-bold text-red-500 mb-3">
          Oops, Something Went Wrong
        </h3>
        <p className="text-gray mb-6">
          We had trouble sending your message. Please try again or reach out
          directly at hello@materu.com
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="text-orange hover:text-ivory transition-colors"
        >
          Try Again →
        </button>
      </motion.div>
    );
  }

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
        <label className="block mb-2 font-semibold text-ivory">
          Full Name *
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full rounded-lg bg-bg-surface px-6 py-4 text-ivory placeholder-gray/50 focus:outline-none focus:ring-2 transition-all ${
            errors.name
              ? 'focus:ring-red-500 border border-red-500'
              : 'focus:ring-orange'
          }`}
          placeholder="Your name"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-2">{errors.name}</p>
        )}
      </motion.div>

      {/* Email */}
      <motion.div variants={itemVariants}>
        <label className="block mb-2 font-semibold text-ivory">
          Email Address *
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full rounded-lg bg-bg-surface px-6 py-4 text-ivory placeholder-gray/50 focus:outline-none focus:ring-2 transition-all ${
            errors.email
              ? 'focus:ring-red-500 border border-red-500'
              : 'focus:ring-orange'
          }`}
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-2">{errors.email}</p>
        )}
      </motion.div>

      {/* Phone */}
      <motion.div variants={itemVariants}>
        <label className="block mb-2 font-semibold text-ivory">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full rounded-lg bg-bg-surface px-6 py-4 text-ivory placeholder-gray/50 focus:outline-none focus:ring-2 focus:ring-orange transition-all"
          placeholder="+1 (555) 000-0000"
        />
      </motion.div>

      {/* Subject */}
      <motion.div variants={itemVariants}>
        <label className="block mb-2 font-semibold text-ivory">
          Subject *
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`w-full rounded-lg bg-bg-surface px-6 py-4 text-ivory placeholder-gray/50 focus:outline-none focus:ring-2 transition-all ${
            errors.subject
              ? 'focus:ring-red-500 border border-red-500'
              : 'focus:ring-orange'
          }`}
          placeholder="What&apos;s this about?"
        />
        {errors.subject && (
          <p className="text-red-500 text-sm mt-2">{errors.subject}</p>
        )}
      </motion.div>

      {/* Message */}
      <motion.div variants={itemVariants}>
        <label className="block mb-2 font-semibold text-ivory">
          Message *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className={`w-full rounded-lg bg-bg-surface px-6 py-4 text-ivory placeholder-gray/50 focus:outline-none focus:ring-2 transition-all resize-none ${
            errors.message
              ? 'focus:ring-red-500 border border-red-500'
              : 'focus:ring-orange'
          }`}
          placeholder="Tell us about your project..."
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-2">{errors.message}</p>
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
        className="text-center text-sm text-gray"
      >
        We&apos;ll get back to you within 24 hours.
      </motion.p>
    </motion.form>
  );
};