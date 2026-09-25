'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function OfflinePage() {
  const handleRetry = () => {
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 shadow-2xl backdrop-blur-sm">
        {/* Brand Symbol */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center p-3 shadow-inner">
            <Image
              src="/brand/logo-symbol.svg"
              alt="MATERU Symbol"
              width={40}
              height={40}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </div>

        {/* Offline Indicator */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono mb-4">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          No Internet Connection
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
          You're Offline
        </h1>

        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
          It looks like you’ve lost your network connection. You can still view previously cached MATERU pages, or retry once you are back online.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <button
            onClick={handleRetry}
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-brand text-white font-medium hover:bg-brand-light transition-all active:scale-[0.98] shadow-lg shadow-brand/20 cursor-pointer"
          >
            Retry Connection
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-zinc-800 text-zinc-200 hover:bg-zinc-700 hover:text-white transition-all font-medium border border-zinc-700/80"
          >
            Go to Home
          </Link>
        </div>

        {/* Support note */}
        <div className="pt-6 border-t border-zinc-800/80 text-xs text-zinc-500 space-y-1">
          <p>Need urgent assistance?</p>
          <p className="font-mono text-zinc-400">
            info@materu.com &bull; +255 784 895 244
          </p>
        </div>
      </div>
    </div>
  );
}
