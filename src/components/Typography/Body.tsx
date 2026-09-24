import React from 'react';
import clsx from 'clsx';

interface BodyProps {
  children: React.ReactNode;
  size?: 'sm' | 'base' | 'lg';
  weight?: 'regular' | 'semibold' | 'bold';
  color?: 'primary' | 'secondary';
  className?: string;
}

export const Body: React.FC<BodyProps> = ({
  children,
  size = 'base',
  weight = 'regular',
  color = 'primary',
  className,
}) => {
  const baseStyles = 'font-sans leading-relaxed';

  const sizeStyles = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
  };

  const weightStyles = {
    regular: 'font-normal',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const colorStyles = {
    primary: 'text-text-primary',
    secondary: 'text-text-secondary',
  };

  return (
    <p
      className={clsx(
        baseStyles,
        sizeStyles[size],
        weightStyles[weight],
        colorStyles[color],
        className
      )}
    >
      {children}
    </p>
  );
};
