'use client';

import React, { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageTransition } from '@/components/PageTransition';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { getWebVitals } from '@/lib/performance';

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  useSmoothScroll();

  // Initialize performance monitoring
  useEffect(() => {
    getWebVitals();

    // Initialize PerformanceObserver
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            console.log('Performance:', entry.name, entry.duration);
          }
        });
        observer.observe({ entryTypes: ['measure', 'navigation', 'resource'] });
      } catch (e) {
        console.error('Performance monitoring error:', e);
      }
    }
  }, []);

  return (
    <>
      <Header />
      <PageTransition>
        <main id="main-content" role="main" className="pt-20">
          {children}
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
