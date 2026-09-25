import React from 'react';
import NextLink from 'next/link';
import clsx from 'clsx';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  underline?: boolean;
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  className,
  external = false,
  underline = true,
}) => {
  const baseStyles = clsx(
    'relative text-foreground transition-colors duration-base hover:text-brand focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background rounded px-1',
    underline && 'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-brand after:transition-all after:duration-base hover:after:w-full'
  );

  if (external) {
    return (
      <a href={href} className={clsx(baseStyles, className)} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={clsx(baseStyles, className)}>
      {children}
    </NextLink>
  );
};
