'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Link } from '@/components/Link';
import { Metadata } from '@/components/Typography';

const footerLinks = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'Work', href: '/work' },
  { label: 'Process', href: '/process' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/materu.tech', icon: 'instagram' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/gervas-materu', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/materu', icon: 'github' },
  { label: 'Twitter', href: 'https://twitter.com/materu', icon: 'twitter' },
  { label: 'WhatsApp', href: 'https://wa.me/255650745642', icon: 'whatsapp' },
];

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
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        {/* Top Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 grid gap-12 md:grid-cols-3 lg:grid-cols-5"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="space-y-4 md:col-span-3 lg:col-span-2">
            <Image
              src="/brand/logo-horizontal.svg"
              alt="MATERU"
              width={120}
              height={32}
              className="h-8 w-auto"
              style={{ width: 'auto', height: '32px' }}
            />
            <Metadata>Digital Products</Metadata>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
              A modern symbol for a bigger tomorrow. We design and build
              digital products that move people forward.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map(social => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-xl text-text-secondary hover:text-brand transition-colors duration-base"
                  aria-label={`Follow MATERU on ${social.label}`}
                  title={social.label}
                >
                  {social.icon === 'instagram' && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  )}
                  {social.icon === 'linkedin' && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  )}
                  {social.icon === 'github' && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  )}
                  {social.icon === 'twitter' && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  )}
                  {social.icon === 'whatsapp' && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.04 2.502 2.72 6.5 5.247 9.043c.36.25.68.425.93.555.24.13.517.13.71.08.192-.05.669-.247 1.04-.479.372-.232.669-.522.792-.724.124-.198.124-.372.074-.495-.05-.124-.198-.371-.447-.619z"/>
                    </svg>
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Column 1 */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <div className="space-y-3">
              {footerLinks.slice(0, 3).map(link => (
                <Link key={link.href} href={link.href} underline={false}>
                  <motion.span
                    className="text-sm text-text-secondary hover:text-brand transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    {link.label}
                  </motion.span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Links Column 2 */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-semibold text-foreground">Resources</h4>
            <div className="space-y-3">
              {footerLinks.slice(3).map(link => (
                <Link key={link.href} href={link.href} underline={false}>
                  <motion.span
                    className="text-sm text-text-secondary hover:text-brand transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    {link.label}
                  </motion.span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@materu.com"
                className="block text-sm text-text-secondary hover:text-brand transition-colors"
              >
                hello@materu.com
              </a>
              <a
                href="https://wa.me/255650745642"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-brand hover:text-foreground transition-colors font-semibold"
              >
                WhatsApp Chat
              </a>
              <a
                href="/contact"
                className="block text-sm text-text-secondary hover:text-brand transition-colors"
              >
                Contact Form
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="mb-8 h-px origin-left bg-gradient-to-r from-brand/40 to-transparent"
        />

        {/* Bottom Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
        >
          <motion.div variants={itemVariants}>
            <Metadata>
              © 2024 MATERU. Crafted with care in Tanzania.
            </Metadata>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-6 flex-wrap"
          >
            <Link href="/privacy" underline={false}>
              <Metadata className="hover:text-brand transition-colors">
                Privacy Policy
              </Metadata>
            </Link>
            <Link href="/terms" underline={false}>
              <Metadata className="hover:text-brand transition-colors">
                Terms of Service
              </Metadata>
            </Link>
            <Link href="/sitemap" underline={false}>
              <Metadata className="hover:text-brand transition-colors">
                Sitemap
              </Metadata>
            </Link>
          </motion.div>
        </motion.div>

        {/* Brand Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center border-t border-border pt-8"
        >
          <p className="text-sm text-muted-foreground italic">
            &ldquo;A modern symbol for a bigger tomorrow.&rdquo;
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
