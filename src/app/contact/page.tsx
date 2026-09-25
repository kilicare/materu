'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heading, Body } from '@/components/Typography';
import { Section } from '@/components/Container';
import { ContactForm } from '@/components/ContactForm';

export default function ContactPage() {
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

  return (
    <>
      {/* Hero */}
      <Section bgColor="transparent" hasBackgroundImage padding="xl" className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/contacts_background.jpg"
            alt="Contact Background"
            fill
            priority
            quality={90}
            className="object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/80" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16 relative z-10"
        >
          <motion.div variants={itemVariants}>
            <Heading level="h1" className="mb-6">
              GET IN TOUCH
            </Heading>
          </motion.div>

          <motion.div variants={itemVariants} className="mx-auto max-w-3xl">
            <Body color="secondary" className="text-lg">
              Have questions about a project? Want to discuss your idea? We&apos;d
              love to hear from you. Fill out the form below and we&apos;ll get back
              to you within 24 hours.
            </Body>
          </motion.div>
        </motion.div>
      </Section>

      {/* Contact Info & Form */}
      <Section bgColor="secondary" padding="xl">
        <div className="grid gap-16 md:grid-cols-2 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-12"
          >
            {/* Email */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-3">
                <span className="text-3xl">📧</span>
                Email
              </h3>
              <a
                href="mailto:hello@materu.com"
                className="text-brand hover:text-foreground transition-colors font-semibold"
              >
                hello@materu.com
              </a>
              <p className="text-sm text-text-secondary mt-2">
                For general inquiries and project discussions
              </p>
            </motion.div>

            {/* Phone */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-3">
                <span className="text-3xl">📱</span>
                Phone
              </h3>
              <a
                href="tel:+255650745642"
                className="text-brand hover:text-foreground transition-colors font-semibold"
              >
                +255 650 745 642
              </a>
              <p className="text-sm text-text-secondary mt-2">
                Monday—Friday, 9 AM—6 PM (East Africa Time)
              </p>
            </motion.div>

            {/* WhatsApp */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-3">
                <span className="text-3xl">💬</span>
                WhatsApp
              </h3>
              <a
                href="https://wa.me/255650745642"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:text-foreground transition-colors font-semibold"
              >
                Chat on WhatsApp
              </a>
              <p className="text-sm text-text-secondary mt-2">
                For quick questions and updates
              </p>
            </motion.div>

            {/* Office */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-3">
                <span className="text-3xl">📍</span>
                Office
              </h3>
              <p className="text-foreground font-semibold">MATERU HQ</p>
              <p className="text-sm text-text-secondary mt-2">
                Dar es Salaam, Tanzania
                <br />
                East Africa
              </p>
            </motion.div>

            {/* Response Time */}
            <motion.div variants={itemVariants} className="pt-8 border-t border-border">
              <p className="text-sm text-text-secondary">
                <span className="text-brand font-semibold">Average Response Time:</span>{' '}
                4-12 hours during business days. We prioritize every inquiry.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </Section>

      {/* FAQ Quick Links */}
      <Section bgColor="primary" padding="xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-12">
            <Heading level="h2" className="mb-6">
              QUICK LINKS
            </Heading>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3 max-w-3xl mx-auto">
            {[
              {
                title: 'Our Process',
                desc: 'Learn how we work',
                href: '/process',
              },
              {
                title: 'See Our Work',
                desc: 'View case studies',
                href: '/work',
              },
              {
                title: 'Start a Project',
                desc: 'Begin your journey',
                href: '/start-a-project',
              },
            ].map((link, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <Link
                  href={link.href}
                  className="p-6 rounded-2xl bg-surface border border-border hover:border-brand/50 transition-all duration-base hover:shadow-lg block group"
                >
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-brand transition-colors">
                    {link.title} →
                  </h3>
                  <p className="text-sm text-text-secondary">{link.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>
    </>
  );
}