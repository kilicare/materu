import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      ink: '#15171B',
      ivory: '#F3F1EB',
      orange: '#FF5A36',
      white: '#FFFFFF',
      gray: '#9FA4AC',
      bg: {
        primary: '#15171B',
        secondary: '#181B20',
        surface: '#1C1F24',
        'surface-hover': '#22262C',
      },
      border: {
        DEFAULT: '#2A2E35',
      },
    },
    fontFamily: {
      sans: ['Manrope', 'Inter', 'Segoe UI', 'Arial', 'sans-serif'],
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
    spacing: {
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      6: '1.5rem',
      8: '2rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      32: '8rem',
      40: '10rem',
      48: '12rem',
      56: '14rem',
      64: '16rem',
    },
    borderRadius: {
      none: '0',
      xs: '4px',
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '32px',
      '4xl': '40px',
      full: '9999px',
    },
    transitionDuration: {
      DEFAULT: '240ms',
      fast: '160ms',
      base: '240ms',
      slow: '420ms',
    },
    transitionTimingFunction: {
      DEFAULT: 'cubic-bezier(.22,1,.36,1)',
    },
    extend: {
      maxWidth: {
        '7xl': '80rem',
      },
      opacity: {
        7: '0.07',
        15: '0.15',
      },
      backgroundColor: {
        'bg-primary': '#15171B',
        'bg-secondary': '#181B20',
        'bg-surface': '#1C1F24',
        'bg-surface-hover': '#22262C',
      },
      textColor: {
        'text-primary': '#F3F1EB',
        'text-secondary': '#9FA4AC',
      },
    },
  },
  plugins: [],
};

export default config;
