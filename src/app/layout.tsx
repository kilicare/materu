import type { Metadata } from 'next';
import './globals.css';
import LayoutContent from './LayoutContent';

export const metadata: Metadata = {
  metadataBase: new URL('https://materu.com'),
  title: 'MATERU — Digital Products For A Bigger Tomorrow',
  description: 'Building custom websites, web apps, and software solutions for businesses across Africa.',
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
        alt: 'MATERU',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MATERU',
    description: 'Building custom solutions that move people forward.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
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
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/manrope/Manrope-600.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/manrope/Manrope-700.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* DNS Prefetch for external services */}
        <link rel="dns-prefetch" href="https://api.anthropic.com" />

        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>

      <body className="bg-background text-foreground antialiased selection:bg-brand selection:text-white">
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}
