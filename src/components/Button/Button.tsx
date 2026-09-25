'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { motion } from 'framer-motion';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  isLoading?: boolean;
  magnetic?: boolean;
  onClick?: () => void | Promise<void>;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      children,
      fullWidth = false,
      disabled = false,
      className,
      isLoading = false,
      magnetic = true,
      ...props
    },
    ref
  ) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [magneticOffset, setMagneticOffset] = useState({ x: 0, y: 0 });
    const [isDesktop, setIsDesktop] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    // Check for reduced motion preference
    useEffect(() => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      const timer = setTimeout(() => {
        setPrefersReducedMotion(mediaQuery.matches);
      }, 0);

      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches);
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => {
        clearTimeout(timer);
        mediaQuery.removeEventListener('change', handleChange);
      };
    }, []);

    // Check if desktop
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsDesktop(window.innerWidth >= 768);
      }, 0);
      const handleResize = () => {
        setIsDesktop(window.innerWidth >= 768);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        clearTimeout(timer);
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    // Magnetic effect handler
    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!magnetic || !isDesktop || prefersReducedMotion || !buttonRef.current) {
        return;
      }

      const button = buttonRef.current;
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distance = Math.sqrt(
        Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
      );

      const maxDistance = 100;
      if (distance < maxDistance) {
        const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
        const force = (maxDistance - distance) / maxDistance;

        setMagneticOffset({
          x: Math.cos(angle) * force * 20,
          y: Math.sin(angle) * force * 20,
        });
      }
    };

    const handleMouseLeave = () => {
      setMagneticOffset({ x: 0, y: 0 });
    };

    const baseStyles =
      'inline-flex items-center justify-center font-sans font-bold rounded-full transition-all duration-base focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95';

    const variantStyles = {
      primary:
        'bg-cta text-cta-foreground hover:bg-cta-hover focus:ring-cta focus:ring-offset-background shadow-sm',
      secondary:
        'bg-surface text-foreground border border-border hover:border-border-strong hover:bg-surface-hover focus:ring-brand focus:ring-offset-background',
      dark:
        'bg-surface text-foreground border border-border hover:bg-surface-hover hover:border-border-strong focus:ring-brand focus:ring-offset-background',
      ghost:
        'text-foreground hover:text-brand hover:bg-surface/60 focus:ring-brand focus:ring-offset-background',
      destructive:
        'bg-destructive text-white hover:bg-destructive/90 focus:ring-destructive focus:ring-offset-background shadow-sm',
    };

    const sizeStyles = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const MotionButton = motion.button;
    const MotionLink = motion(Link);

    const buttonContent = (
      <>
        {isLoading ? (
          <>
            <svg
              className="mr-2 h-4 w-4 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </>
        ) : (
          children
        )}
      </>
    );

    const animationProps = {
      animate:
        !prefersReducedMotion
          ? {
              x: magneticOffset.x,
              y: magneticOffset.y,
            }
          : {},
      transition: { type: 'spring' as const, stiffness: 150, damping: 15 },
      whileHover:
        !prefersReducedMotion
          ? { scale: 1.05, y: -2 }
          : undefined,
      whileTap:
        !prefersReducedMotion
          ? { scale: 0.95, y: 0 }
          : undefined,
    };

    const commonProps = {
      className: clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && 'w-full',
        className
      ),
      onMouseLeave: handleMouseLeave,
    };

    // If href is provided, render as Link
    if (props.href) {
      return (
        <MotionLink
          href={props.href}
          {...commonProps}
          {...animationProps}
        >
          {buttonContent}
        </MotionLink>
      );
    }

    return (
      <MotionButton
        ref={ref || buttonRef}
        {...commonProps}
        disabled={disabled || isLoading}
        onMouseMove={handleMouseMove}
        onClick={props.onClick}
        type={props.type}
        {...animationProps}
      >
        {buttonContent}
      </MotionButton>
    );
  }
);

Button.displayName = 'Button';
