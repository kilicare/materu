import React from 'react';
import clsx from 'clsx';

interface HeadingProps {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const Heading: React.FC<HeadingProps> = ({
  level,
  children,
  className,
  as: Component = level,
}) => {
  const baseStyles =
    'font-sans font-bold text-text-primary leading-tight tracking-tight';

  const sizeStyles = {
    h1: 'text-5xl md:text-6xl',
    h2: 'text-3xl md:text-4xl',
    h3: 'text-2xl md:text-3xl',
    h4: 'text-xl md:text-2xl',
    h5: 'text-lg md:text-xl',
    h6: 'text-base md:text-lg',
  };

  return (
    <Component className={clsx(baseStyles, sizeStyles[level], className)}>
      {children}
    </Component>
  );
};
