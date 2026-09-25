import type { Metadata, Viewport } from 'next';
import './globals.css';
import LayoutContent from './LayoutContent';

export const viewport: Viewport = {
  themeColor: '#0B0C0E',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://materu.com'),
  title: 'MATERU — Digital Products For A Bigger Tomorrow',
  description: 'Building custom websites, web apps, and software solutions for businesses across Africa.',
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'MATERU',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://materu.com',
    siteName: 'MATERU',
    title: 'MATERU — Digital Products For A Bigger Tomorrow',
    description: 'Building custom solutions that move people forward.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MATERU — Digital Products',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MATERU — Digital Products',
    description: 'Building custom solutions that move people forward.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* DNS Prefetch for external services */}
        <link rel="dns-prefetch" href="https://api.anthropic.com" />

        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        {/* PWA & Mobile Web App Meta */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="MATERU" />
        <meta name="application-name" content="MATERU" />
      </head>

      <body className="bg-background text-foreground antialiased selection:bg-brand selection:text-white">
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}
