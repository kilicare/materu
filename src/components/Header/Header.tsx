'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Link } from '@/components/Link';
import { Button } from '@/components/Button';
import { MobileMenu } from './MobileMenu';

const navigationItems = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'Work', href: '/work' },
  { label: 'Process', href: '/process' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
];

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Skip to Main Content Link */}
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>

      <header
        className="fixed top-0 z-50 w-full border-b border-border bg-nav/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
        role="banner"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex items-center"
            >
              <Link href="/" underline={false}>
                <Image
                  src="/brand/logo-horizontal.svg"
                  alt="MATERU"
                  width={120}
                  height={32}
                  className="h-8 w-auto"
                  priority
                  style={{ width: 'auto' }}
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-8"
              aria-label="Main navigation"
            >
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link href={item.href} underline={false}>
                    <span className="text-sm font-semibold text-foreground hover:text-brand transition-colors duration-base">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="hidden lg:block"
            >
              <Link href="/start-a-project" underline={false}>
                <Button variant="primary" size="md" aria-label="Start a project">
                  Start a Project →
                </Button>
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="lg:hidden relative z-50 flex h-11 w-11 items-center justify-center rounded-xl bg-surface-elevated border border-border text-foreground backdrop-blur-md shadow-md hover:bg-surface-hover hover:border-brand/40 active:scale-95 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-controls="mobile-menu"
              id="mobile-menu-button"
            >
              <svg
                className="h-6 w-6 text-foreground transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          items={navigationItems}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </header>
    </>
  );
};
