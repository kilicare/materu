'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@/components/Link';
import { Button } from '@/components/Button';

interface MobileMenuProps {
  isOpen: boolean;
  items: Array<{ label: string; href: string }>;
  onClose?: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, items, onClose }) => {
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Listen for Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose?.();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="border-t border-border bg-nav/95 backdrop-blur-2xl lg:hidden max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain shadow-2xl"
          id="mobile-menu"
          role="menu"
          aria-label="Mobile navigation"
        >
          <div className="px-5 py-5 flex flex-col justify-between min-h-[min-content] space-y-4">
            {/* Nav links list */}
            <div className="space-y-1">
              {items.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.04 }}
                  onClick={onClose}
                >
                  <Link href={item.href} underline={false} className="block w-full">
                    <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-surface-elevated/80 active:bg-surface-elevated transition-colors group">
                      <span className="text-base font-bold text-foreground group-hover:text-brand transition-colors">
                        {item.label}
                      </span>
                      <span className="text-text-muted group-hover:text-brand transition-colors text-sm font-mono font-semibold">
                        →
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Quick Contacts & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: items.length * 0.04 }}
              className="pt-3 border-t border-border/70 space-y-3"
            >
              <div onClick={onClose}>
                <Link href="/start-a-project" underline={false} className="block w-full">
                  <Button variant="primary" size="md" fullWidth aria-label="Start a project">
                    Start a Project →
                  </Button>
                </Link>
              </div>

              <div className="flex items-center justify-center gap-6 pt-1 text-xs text-text-secondary">
                <a
                  href="https://wa.me/255650745642"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand transition-colors font-medium"
                >
                  WhatsApp Support ↗
                </a>
                <span>•</span>
                <a
                  href="mailto:hello@materu.com"
                  className="hover:text-brand transition-colors font-medium"
                >
                  hello@materu.com
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

