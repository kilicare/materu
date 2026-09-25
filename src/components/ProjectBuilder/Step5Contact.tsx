'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useProjectBuilder } from '@/contexts/ProjectBuilderContext';
import { Heading, Body } from '@/components/Typography';
import { roles } from '@/lib/projectBuilder';

export const Step5Contact: React.FC = () => {
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

  const inputClass =
    'w-full rounded-lg bg-surface px-6 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand border border-border transition-all';

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <div className="mb-8">
        <Heading level="h3" className="mb-3">
          Contact Information
        </Heading>
        <Body color="secondary">
          How can we reach you? (All fields required)
        </Body>
      </div>

      {/* Name */}
      <motion.div variants={itemVariants}>
        <label className="block mb-2 font-semibold text-foreground">
          Full Name *
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={e => updateFormData({ name: e.target.value })}
          placeholder="Your full name"
          className={inputClass}
          aria-label="Full name"
        />
      </motion.div>

      {/* Email */}
      <motion.div variants={itemVariants}>
        <label className="block mb-2 font-semibold text-foreground">
          Email Address *
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={e => updateFormData({ email: e.target.value })}
          placeholder="your@email.com"
          className={inputClass}
          aria-label="Email address"
        />
      </motion.div>

      {/* Phone */}
      <motion.div variants={itemVariants}>
        <label className="block mb-2 font-semibold text-foreground">
          Phone Number *
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={e => updateFormData({ phone: e.target.value })}
          placeholder="+1 (555) 000-0000"
          className={inputClass}
          aria-label="Phone number"
        />
      </motion.div>

      {/* Company */}
      <motion.div variants={itemVariants}>
        <label className="block mb-2 font-semibold text-foreground">
          Company Name *
        </label>
        <input
          type="text"
          value={formData.company}
          onChange={e => updateFormData({ company: e.target.value })}
          placeholder="Your company name"
          className={inputClass}
          aria-label="Company name"
        />
      </motion.div>

      {/* Role */}
      <motion.div variants={itemVariants}>
        <label className="block mb-3 font-semibold text-foreground">
          Your Role *
        </label>
        <select
          value={formData.role}
          onChange={e => updateFormData({ role: e.target.value })}
          className={inputClass}
          aria-label="Your role"
        >
          <option value="" className="bg-surface text-foreground">Select your role</option>
          {roles.map(role => (
            <option key={role} value={role} className="bg-surface text-foreground">
              {role}
            </option>
          ))}
        </select>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="p-6 rounded-lg bg-brand-muted border border-brand/20"
      >
        <p className="text-sm text-text-secondary">
          🔒 <strong className="text-foreground">Privacy:</strong> We&apos;ll never share your information. It&apos;s
          used only to respond to your inquiry.
        </p>
      </motion.div>
    </motion.div>
  );
};
