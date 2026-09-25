import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Manrope', 'Inter', 'Segoe UI', 'Arial', 'sans-serif'],
      mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
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
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
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
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
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
      200: '200ms',
      300: '300ms',
      500: '500ms',
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
      colors: {
        /* Design Tokens via CSS Custom Properties */
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        nav: {
          DEFAULT: 'var(--nav-background)',
          foreground: 'var(--nav-foreground)',
        },

        surface: {
          DEFAULT: 'var(--surface)',
          elevated: 'var(--surface-elevated)',
          hover: 'var(--surface-hover)',
        },

        border: {
          DEFAULT: 'var(--border)',
          subtle: 'var(--border-subtle)',
          strong: 'var(--border-strong)',
        },

        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },

        brand: {
          DEFAULT: 'var(--brand)',
          foreground: 'var(--brand-foreground)',
          muted: 'var(--brand-muted)',
          hover: 'var(--brand-hover)',
        },

        cta: {
          DEFAULT: 'var(--cta)',
          foreground: 'var(--cta-foreground)',
          hover: 'var(--cta-hover)',
          focus: 'var(--cta-focus)',
        },

        /* Semantic Feedback Tokens */
        success: {
          DEFAULT: 'var(--success)',
          foreground: 'var(--success-foreground)',
          muted: 'var(--success-muted)',
          border: 'var(--success-border)',
        },
        warning: {
          DEFAULT: 'var(--warning)',
          foreground: 'var(--warning-foreground)',
          muted: 'var(--warning-muted)',
          border: 'var(--warning-border)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
          muted: 'var(--destructive-muted)',
          border: 'var(--destructive-border)',
        },
        info: {
          DEFAULT: 'var(--info)',
          foreground: 'var(--info-foreground)',
          muted: 'var(--info-muted)',
          border: 'var(--info-border)',
        },

        /* Data Visualization */
        chart: {
          1: 'var(--chart-1)',
          2: 'var(--chart-2)',
          3: 'var(--chart-3)',
          4: 'var(--chart-4)',
          5: 'var(--chart-5)',
          6: 'var(--chart-6)',
        },

        /* Luxury Editorial & Architecture Tones */
        'warm-sand': '#F4F0E8',
        'soft-stone': '#F1F1EE',
        'warm-ivory': '#F7F4EC',
        'light-greige': '#EAE7E0',

        /* Backward Compatibility Aliases */
        ink: 'var(--background)',
        ivory: 'var(--foreground)',
        orange: 'var(--brand)',
        gray: 'var(--text-secondary)',
        accent: 'var(--brand)',

        bg: {
          primary: 'var(--background)',
          secondary: '#111111',
          surface: 'var(--surface)',
          'surface-hover': 'var(--surface-hover)',
        },

        'text-primary': 'var(--foreground)',
        'text-secondary': 'var(--text-secondary)',
      },
      backgroundColor: {
        'bg-primary': 'var(--background)',
        'bg-secondary': '#111111',
        'bg-surface': 'var(--surface)',
        'bg-surface-hover': 'var(--surface-hover)',
      },
      textColor: {
        'text-primary': 'var(--foreground)',
        'text-secondary': 'var(--text-secondary)',
      },
    },
  },
  plugins: [],
};

export default config;
