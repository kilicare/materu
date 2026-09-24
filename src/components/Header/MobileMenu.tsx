import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@/components/Link';
import { Button } from '@/components/Button';

interface MobileMenuProps {
  isOpen: boolean;
  items: Array<{ label: string; href: string }>;
  onClose?: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, items, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden border-t border-white/10 bg-ink/90 backdrop-blur-xl lg:hidden"
          id="mobile-menu"
          role="menu"
        >
          <div className="px-6 py-6 space-y-4">
            {items.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={onClose}
              >
                <Link href={item.href} underline={false}>
                  <span className="block py-2 text-base font-semibold text-ivory hover:text-orange transition-colors">
                    {item.label}
                  </span>
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: items.length * 0.05 }}
              className="pt-4"
              onClick={onClose}
            >
              <Link href="/start-a-project" underline={false}>
                <Button variant="primary" fullWidth aria-label="Start a project">
                  Start a Project →
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
