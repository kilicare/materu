'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export function PWAInstallPrompt() {
  const [installPromptEvent, setInstallPromptEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // 1. Check if already running in standalone mode (already installed)
    if (typeof window === 'undefined') return;

    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true ||
      document.referrer.includes('android-app://');

    if (isStandalone) {
      setIsInstalled(true);
      return;
    }

    // 2. Check if user dismissed recently (allow session override or 24h)
    const dismissedAt = localStorage.getItem('materu_pwa_dismissed');
    if (dismissedAt) {
      const timePassed = Date.now() - parseInt(dismissedAt, 10);
      if (timePassed < 24 * 60 * 60 * 1000) {
        return;
      }
    }

    // 3. Detect platform
    const ua = window.navigator.userAgent;
    const isIOSDevice = /iPhone|iPad|iPod/.test(ua) && !('MSStream' in window);
    const isSafari = /Safari/.test(ua) && !/CriOS|FxiOS|EdgiOS/.test(ua);

    if (isIOSDevice && isSafari) {
      setIsIOS(true);
    }

    // 4. Capture standard beforeinstallprompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setInstallPromptEvent(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // 5. Always display the prompt after a slight delay if not installed
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1800);

    const handleAppInstalled = () => {
      setIsVisible(false);
      setIsInstalled(true);
      setInstallPromptEvent(null);
      console.log('[MATERU PWA] App was successfully installed.');
    };

    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowGuide((prev) => !prev);
      return;
    }

    if (installPromptEvent) {
      try {
        await installPromptEvent.prompt();
        const choiceResult = await installPromptEvent.userChoice;
        if (choiceResult.outcome === 'accepted') {
          console.log('[MATERU PWA] User installed the app');
          setIsVisible(false);
        } else {
          console.log('[MATERU PWA] User cancelled installation');
          handleDismiss();
        }
        setInstallPromptEvent(null);
      } catch (err) {
        console.warn('[MATERU PWA] Install error:', err);
        setShowGuide(true);
      }
    } else {
      // If browser didn't supply prompt event (e.g. desktop Chrome / Edge / Firefox)
      setShowGuide((prev) => !prev);
    }
  };

  const handleDismiss = () => {
    setIsVisible(false);
    setShowGuide(false);
    try {
      localStorage.setItem('materu_pwa_dismissed', Date.now().toString());
    } catch {
      // Ignore storage errors
    }
  };

  if (isInstalled || !isVisible) {
    return null;
  }

  return (
    <aside
      aria-label="Install MATERU App"
      className="fixed bottom-4 right-4 z-50 max-w-sm w-[calc(100vw-2rem)] sm:w-[380px] bg-[#121316]/95 border border-zinc-700/80 rounded-2xl p-4 shadow-2xl backdrop-blur-xl text-white transition-all duration-300"
    >
      <div className="flex items-start gap-3.5">
        {/* App Icon */}
        <div className="w-12 h-12 rounded-xl bg-zinc-900/90 border border-zinc-700/70 p-2 flex items-center justify-center shrink-0 shadow-inner">
          <Image
            src="/brand/logo-symbol.svg"
            alt="MATERU Symbol"
            width={32}
            height={32}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-1">
            <h3 className="text-sm font-semibold text-white tracking-tight">
              Install MATERU App
            </h3>
            <button
              onClick={handleDismiss}
              aria-label="Close install prompt"
              className="text-zinc-400 hover:text-white p-1 -mr-1 rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
            Fast access, standalone window, and offline support on your device.
          </p>

          {/* Action buttons */}
          <div className="flex items-center gap-2 mt-3.5">
            <button
              onClick={handleInstallClick}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-brand text-white text-xs font-semibold hover:bg-brand-light active:scale-[0.98] transition-all shadow-md shadow-brand/25 cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {isIOS ? 'How to Install' : installPromptEvent ? 'Install Now' : 'Install App'}
            </button>
            <button
              onClick={handleDismiss}
              className="px-3 py-2 rounded-xl bg-zinc-800/80 text-zinc-300 text-xs font-medium hover:bg-zinc-700 hover:text-white transition-colors cursor-pointer"
            >
              Not Now
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Guide when direct prompt is not supported */}
      {showGuide && (
        <div className="mt-3 pt-3 border-t border-zinc-800 text-xs text-zinc-300 space-y-2">
          {isIOS ? (
            <>
              <p className="font-medium text-white">To install on iOS Safari:</p>
              <ol className="list-decimal list-inside space-y-1 text-zinc-400 text-[11px] leading-relaxed">
                <li>
                  Tap the <span className="font-semibold text-white">Share button</span> in Safari.
                </li>
                <li>Select <span className="font-semibold text-white">"Add to Home Screen"</span>.</li>
                <li>Tap <span className="font-semibold text-brand">Add</span> at top right.</li>
              </ol>
            </>
          ) : (
            <>
              <p className="font-medium text-white">To install on Desktop / Mobile:</p>
              <ol className="list-decimal list-inside space-y-1 text-zinc-400 text-[11px] leading-relaxed">
                <li>
                  Look for the <span className="font-semibold text-white">Install icon (⬇️ / 💻)</span> in your browser's address bar (top right).
                </li>
                <li>Or open browser menu (&#8942;) ➔ choose <span className="font-semibold text-white">"Install MATERU..."</span>.</li>
              </ol>
            </>
          )}
        </div>
      )}
    </aside>
  );
}
