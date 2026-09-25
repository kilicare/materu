// MATERU DESIGN SYSTEM TOKENS

// BRAND COLORS
export const brand = {
  orange: '#F97316', // Signature Brand Accent
  orangeHover: '#EA580C',
  orangeMuted: 'rgba(249, 115, 22, 0.12)',
  cta: '#C2410C', // Primary Action (WCAG AA Compliant on White text)
  ctaHover: '#9A3412',
  ctaForeground: '#FFFFFF',
};

// SEMANTIC COLORS
export const semantic = {
  success: {
    base: '#16A34A',
    foreground: '#4ADE80', // Dark theme text
    lightForeground: '#166534', // Light theme text
    muted: 'rgba(22, 163, 74, 0.15)',
    lightMuted: '#F0FDF4',
    border: 'rgba(22, 163, 74, 0.3)',
  },
  warning: {
    base: '#D97706',
    foreground: '#FBBF24',
    lightForeground: '#92400E',
    muted: 'rgba(217, 119, 6, 0.15)',
    lightMuted: '#FFFBEB',
    border: 'rgba(217, 119, 6, 0.3)',
  },
  destructive: {
    base: '#DC2626',
    foreground: '#F87171',
    lightForeground: '#991B1B',
    muted: 'rgba(220, 38, 38, 0.15)',
    lightMuted: '#FEF2F2',
    border: 'rgba(220, 38, 38, 0.3)',
  },
  info: {
    base: '#2563EB',
    foreground: '#60A5FA',
    lightForeground: '#1E40AF',
    muted: 'rgba(37, 99, 235, 0.15)',
    lightMuted: '#EFF6FF',
    border: 'rgba(37, 99, 235, 0.3)',
  },
};

// DATA VISUALIZATION PALETTE
export const charts = {
  1: '#F97316', // Brand Orange
  2: '#2563EB', // Blue
  3: '#16A34A', // Green
  4: '#D97706', // Amber
  5: '#DC2626', // Red
  6: '#71717A', // Neutral Gray
};

// THEME PALETTES
export const colors = {
  // Brand & CTA
  brand: brand.orange,
  cta: brand.cta,
  ctaForeground: brand.ctaForeground,

  // Dark Theme (Default MATERU Experience)
  dark: {
    bg: '#0B0C0E',
    nav: '#111111',
    surface: '#171717',
    surfaceElevated: '#1F1F1F',
    surfaceHover: '#262626',
    border: '#2A2A2A',
    borderSubtle: 'rgba(255, 255, 255, 0.08)',
    borderStrong: '#3F3F46',
    textPrimary: '#F3F1EB',
    textSecondary: '#A1A1AA',
    textMuted: '#71717A',
    accent: brand.orange,
  },

  // Light Theme (Clean Light Workspace Foundation)
  light: {
    bg: '#F7F7F5',
    nav: '#111111',
    surface: '#FFFFFF',
    surfaceElevated: '#F1F1EF',
    surfaceHover: '#FAFAF8',
    border: '#E5E5E5',
    borderSubtle: '#F1F1EF',
    borderStrong: '#D4D4D4',
    textPrimary: '#171717',
    textSecondary: '#737373',
    textMuted: '#A3A3A3',
    accent: brand.orange,
  },

  // Semantic
  semantic,
  charts,

  // Backward compatibility
  ink: '#0B0C0E',
  ivory: '#F3F1EB',
  orange: brand.orange,
  white: '#FFFFFF',
  gray: '#A1A1AA',
};

// TYPOGRAPHY
export const typography = {
  font: {
    primary: 'Manrope',
    fallback: 'Inter, Segoe UI, Arial, sans-serif',
    mono: 'JetBrains Mono, Fira Code, monospace',
  },
  weights: {
    light: 400,
    regular: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  sizes: {
    // Hero
    hero: {
      desktop: { min: '72px', max: '96px' },
      tablet: { min: '56px', max: '72px' },
      mobile: { min: '36px', max: '56px' },
    },
    // Section headings
    h1: { desktop: '56px', tablet: '48px', mobile: '36px' },
    h2: { desktop: '48px', tablet: '40px', mobile: '32px' },
    h3: { desktop: '32px', tablet: '28px', mobile: '24px' },
    // Body
    body: { base: '16px', large: '18px' },
    // Metadata
    meta: { base: '12px', large: '14px' },
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
};

// SPACING
export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
  '4xl': '96px',
  '5xl': '128px',
};

// RADIUS
export const radius = {
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '32px',
  full: '9999px',
};

// MOTION
export const motion = {
  duration: {
    fast: '160ms',
    base: '240ms',
    slow: '420ms',
  },
  easing: 'cubic-bezier(.22,1,.36,1)',
};

// BREAKPOINTS
export const breakpoints = {
  mobile: '390px',
  tablet: '768px',
  desktop: '1024px',
  large: '1440px',
};

// Z-INDEX
export const zIndex = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  backdrop: 1040,
  offcanvas: 1050,
  modal: 1060,
};
