'use client';

import React, { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageTransition } from '@/components/PageTransition';
import { PWAInstallPrompt } from '@/components/PWAInstallPrompt';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { getWebVitals } from '@/lib/performance';

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  useSmoothScroll();

  // Register Service Worker for PWA
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      const registerSW = () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((reg) => {
            reg.addEventListener('updatefound', () => {
              const installingWorker = reg.installing;
              if (installingWorker) {
                installingWorker.addEventListener('statechange', () => {
                  if (
                    installingWorker.state === 'installed' &&
                    navigator.serviceWorker.controller
                  ) {
                    console.log('[MATERU PWA] New version ready.');
                  }
                });
              }
            });
          })
          .catch((err) => {
            console.warn('[MATERU PWA] Service Worker registration failed:', err);
          });
      };

      if (document.readyState === 'complete') {
        registerSW();
      } else {
        window.addEventListener('load', registerSW);
        return () => window.removeEventListener('load', registerSW);
      }
    }
  }, []);

  // Initialize performance monitoring (development diagnostics only)
  useEffect(() => {
    getWebVitals();

    if (
      process.env.NODE_ENV === 'development' &&
      typeof window !== 'undefined' &&
      'PerformanceObserver' in window
    ) {
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
    <div className="min-h-screen w-full overflow-x-hidden relative flex flex-col justify-between">
      <Header />
      <PageTransition>
        <main id="main-content" role="main" className="pt-20 w-full overflow-x-hidden relative flex-1">
          {children}
        </main>
      </PageTransition>
      <Footer />
      <PWAInstallPrompt />
    </div>
  );
}
