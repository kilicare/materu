import React from 'react';
import clsx from 'clsx';

export type BadgeVariant =
  | 'neutral'
  | 'brand'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'primary'
  | 'secondary'
  | 'orange';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: 'xs' | 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'sm',
  className,
}) => {
  const variantStyles: Record<BadgeVariant, string> = {
    neutral: 'bg-surface-elevated text-text-secondary border border-border',
    brand: 'bg-brand-muted text-brand border border-brand/20',
    success: 'bg-success-muted text-success-foreground border border-success-border',
    warning: 'bg-warning-muted text-warning-foreground border border-warning-border',
    error: 'bg-destructive-muted text-destructive-foreground border border-destructive-border',
    info: 'bg-info-muted text-info-foreground border border-info-border',
    // Backward compatibility aliases
    primary: 'bg-surface-elevated text-foreground border border-border',
    secondary: 'bg-surface text-text-secondary border border-border',
    orange: 'bg-brand-muted text-brand border border-brand/20',
  };

  const sizeStyles = {
    xs: 'px-2 py-0.5 text-xs',
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3.5 py-1.5 text-sm',
  };

  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 rounded-full font-sans font-semibold tracking-wide transition-colors',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
};
