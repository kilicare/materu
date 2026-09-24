import React from 'react';
import clsx from 'clsx';

interface MetadataProps {
  children: React.ReactNode;
  className?: string;
}

export const Metadata: React.FC<MetadataProps> = ({ children, className }) => {
  return (
    <span className={clsx('font-sans text-xs text-text-secondary', className)}>
      {children}
    </span>
  );
};
