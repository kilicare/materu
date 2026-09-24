export interface QAItem {
  category: string;
  items: string[];
}

export const qaChecklist: QAItem[] = [
  {
    category: 'Functional Testing',
    items: [
      'All buttons click and navigate correctly',
      'All forms submit and validate properly',
      'All links work (internal and external)',
      'Hero text reveals on page load',
      'Solution cards update description on click',
      'Process section updates on scroll',
      'Mobile menu opens/closes smoothly',
      'All images load without errors',
    ],
  },
  {
    category: 'Responsive Design',
    items: [
      'Mobile (390px): All text readable, buttons accessible',
      'Mobile (390px): Images not distorted',
      'Tablet (768px): Layout reflows correctly',
      'Desktop (1024px): Full 3-column/multi-column layouts',
      'Large desktop (1440px): Content centered properly',
      'Touch targets: All buttons ≥44px tall',
      'No horizontal scroll on any device',
    ],
  },
  {
    category: 'Performance',
    items: [
      'Lighthouse score ≥90 (Performance)',
      'Lighthouse score ≥90 (Accessibility)',
      'Lighthouse score ≥90 (Best Practices)',
      'LCP (Largest Contentful Paint) < 2.5s',
      'FID (First Input Delay) < 100ms',
      'CLS (Cumulative Layout Shift) < 0.1',
      'Images load as WebP with fallback',
      'No unused CSS/JavaScript in bundle',
    ],
  },
  {
    category: 'Accessibility',
    items: [
      'All text has sufficient contrast (≥4.5:1)',
      'Keyboard navigation works (Tab through all elements)',
      'Focus states visible on all interactive elements',
      'All images have alt text',
      'Form inputs have associated labels',
      'Headings are semantic (H1 → H2 → H3)',
      'No keyboard traps',
      'Screen reader friendly (tested with NVDA/VoiceOver)',
    ],
  },
  {
    category: 'Animation & Interaction',
    items: [
      'Animations don\'t stutter on mobile',
      'Animations respect prefers-reduced-motion',
      'Hover effects work on desktop',
      'Scroll animations don\'t block interaction',
      'Page transitions smooth and fast',
      'Loading states clear and visible',
      'Error states obvious',
      'Magnetic button effect works (desktop only)',
    ],
  },
  {
    category: 'Cross-Browser',
    items: [
      'Chrome: All features working',
      'Firefox: All features working',
      'Safari: All features working',
      'Edge: All features working',
      'Mobile Safari (iOS): All features working',
      'Chrome Mobile (Android): All features working',
    ],
  },
  {
    category: 'Security & Performance',
    items: [
      'No console errors or warnings',
      'No sensitive data exposed',
      'HTTPS enforced in production',
      'Security headers configured',
      'Environment variables not exposed',
      'API calls secure and validated',
      'No performance warnings in DevTools',
    ],
  },
  {
    category: 'Mobile Specific',
    items: [
      'Scrolling smooth and responsive',
      'Touch interactions work perfectly',
      'Typography readable at 390px width',
      'Spacing comfortable for touch',
      '3D disabled or reduced on low-end devices',
      'Animations reduced on low-end devices',
      'Form inputs don\'t zoom on focus',
    ],
  },
];

export const performanceTargets = {
  lighthouse: {
    performance: 90,
    accessibility: 90,
    bestPractices: 90,
    seo: 95,
  },
  webVitals: {
    lcp: 2500, // milliseconds
    fid: 100, // milliseconds
    cls: 0.1, // score
  },
};
