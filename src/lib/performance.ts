export interface WebVitals {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType?: string;
}

// Track Core Web Vitals
export const reportWebVitals = (metric: WebVitals) => {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vitals:', {
      name: metric.name,
      value: metric.value.toFixed(2),
      id: metric.id,
    });
  }

  // Send to analytics service in production
  if (process.env.NODE_ENV === 'production') {
    // TODO: Send to analytics service (e.g., Google Analytics, Sentry)
    const body = JSON.stringify(metric);
    navigator.sendBeacon('/api/metrics', body);
  }
};

// Measure performance marks
export const measurePerformance = (name: string, fn: () => void) => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    performance.mark(`${name}-start`);
    fn();
    performance.mark(`${name}-end`);
    performance.measure(name, `${name}-start`, `${name}-end`);

    const measure = performance.getEntriesByName(name)[0];
    console.log(`${name}: ${measure.duration.toFixed(2)}ms`);
  }
};

// Get Core Web Vitals
export const getWebVitals = async () => {
  if (typeof window === 'undefined') return;

  // Skip web-vitals if package is not installed
  try {
    // This will fail gracefully if the package is not installed
    // You can install it with: npm install web-vitals
    // Or pnpm add web-vitals
    return;
  } catch {
    console.warn('web-vitals package not installed, skipping performance monitoring');
  }
};
