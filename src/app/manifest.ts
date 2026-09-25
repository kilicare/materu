import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'materu',
    short_name: 'materu',
    description: 'materu — Digital Products For A Bigger Tomorrow. Building custom websites, web apps, and software solutions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0B0C0E',
    theme_color: '#0B0C0E',
    orientation: 'portrait-primary',
    scope: '/',
    categories: ['business', 'productivity', 'utilities'],
    icons: [
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-maskable-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
