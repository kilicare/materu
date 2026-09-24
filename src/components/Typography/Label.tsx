import React from 'react';
import clsx from 'clsx';

interface LabelProps {
  children: React.ReactNode;
  uppercase?: boolean;
  className?: string;
}

export const Label: React.FC<LabelProps> = ({
  children,
  uppercase = false,
  className,
}) => {
  return (
    <span
      className={clsx(
        'font-sans text-xs font-semibold tracking-wide text-text-secondary',
        uppercase && 'uppercase',
        className
      )}
    >
      {children}
    </span>
  );
};
