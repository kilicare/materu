// COLORS
export const colors = {
  // Primary
  ink: '#15171B', // Materu Ink (Deep Charcoal)
  ivory: '#F3F1EB', // Warm Ivory
  orange: '#FF5A36', // Signal Orange

  // Neutrals
  white: '#FFFFFF',
  gray: '#9FA4AC', // Soft Gray

  // Dark theme
  dark: {
    bg: '#15171B',
    surface: '#181B20',
    'surface-hover': '#22262C',
    border: '#2A2E35',
    text: '#F3F1EB',
    accent: '#FF5A36',
  },

  // Light theme
  light: {
    bg: '#F3F1EB',
    surface: '#FFFFFF',
    text: '#15171B',
    accent: '#FF5A36',
  },
};

// TYPOGRAPHY
export const typography = {
  font: {
    primary: 'Manrope',
    fallback: 'Inter, Segoe UI, Arial, sans-serif',
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
  md: '14px',
  lg: '20px',
  full: '999px',
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
