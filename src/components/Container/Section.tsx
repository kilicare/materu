import React from 'react';
import clsx from 'clsx';

interface SectionProps {
  children: React.ReactNode;
  bgColor?: 'primary' | 'secondary' | 'surface' | 'accent' | 'transparent';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  id?: string;
  hasBackgroundImage?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  bgColor = 'primary',
  padding = 'lg',
  className,
  id,
  hasBackgroundImage = false,
}) => {
  const bgStyles = {
    primary: 'bg-bg-primary',
    secondary: 'bg-bg-secondary',
    surface: 'bg-bg-surface',
    accent: 'bg-orange',
    transparent: 'bg-transparent',
  };

  const activeBg = hasBackgroundImage ? 'bg-transparent' : bgStyles[bgColor];
  const isTransparent = hasBackgroundImage || bgColor === 'transparent';

  const paddingStyles = {
    sm: 'py-8 px-4 md:px-6 md:py-12',
    md: 'py-16 px-4 md:px-6 md:py-24',
    lg: 'py-24 px-4 md:px-6 md:py-32',
    xl: 'py-32 px-4 md:px-6 md:py-48',
  };

  return (
    <section
      id={id}
      className={clsx(
        activeBg,
        paddingStyles[padding],
        'relative',
        isTransparent && 'isolate',
        className
      )}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
};
