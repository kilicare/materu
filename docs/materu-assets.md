# MATERU Asset & PWA Architecture Documentation

## 1. Brand Asset Inventory & Mapping

The MATERU Brand Kit (`public/materuassests/MATERU_Brand_Kit_v1.1/`) provides the definitive brand identity assets. These have been mapped into standard public routes for modern browsers, Progressive Web App (PWA) installation, OpenGraph indexing, and cross-browser favicon support.

### 1.1 Web App & Favicon System

| Asset Type | Source in Brand Kit | Public Production Route | Dimensions / Format | Purpose |
|---|---|---|---|---|
| **Multi-size Favicon** | `02_FAVICON/materu-favicon.ico` | `/favicon.ico` | 16/32/48 Multi-res ICO | Desktop tab icon & bookmark icon |
| **Vector Favicon** | `02_FAVICON/SVG/materu-icon-dark.svg` | `/favicon.svg` | Scalable Vector SVG | Modern high-DPI browser tabs |
| **Apple Touch Icon** | `02_FAVICON/PNG/materu-icon-180.png` | `/apple-touch-icon.png` | 180x180 PNG | iOS Safari home screen bookmark |
| **PWA Standard Icon (Small)** | `02_FAVICON/PNG/materu-icon-192.png` | `/icons/icon-192x192.png` | 192x192 PNG | Android home screen icon |
| **PWA Standard Icon (Large)** | `02_FAVICON/PNG/materu-icon-512.png` | `/icons/icon-512x512.png` | 512x512 PNG | PWA splash screen & store badge |
| **PWA Maskable Icon** | `11_DELIVERY/PROFILE_READY/MATERU_Profile_Dark_512.png` | `/icons/icon-maskable-512x512.png` | 512x512 PNG (Safe Area) | Adaptive Android launcher icons |
| **OpenGraph Social Preview** | `07_WEBSITE/OG/MATERU_OG_1200x630.png` | `/og-image.png` | 1200x630 PNG | Facebook, Twitter/X, LinkedIn cards |

---

## 2. Brand Identity Tokens

- **Brand Background:** `Materu Ink` (`#0B0C0E`)
- **Brand Text & Light Accent:** `Warm Ivory` (`#F3F1EB`)
- **Brand Signal Orange:** `Signal Orange` (`#FF5A36`) / `Tailwind Brand` (`#F97316` / `#EA580C`)
- **Primary Typography:** `Manrope` (Next.js font optimization + system fallbacks)

---

## 3. Web App Manifest (`/manifest.webmanifest`)

The manifest is generated via `src/app/manifest.ts` and mirrored statically at `public/manifest.webmanifest` and `public/manifest.json`.

```json
{
  "name": "materu",
  "short_name": "materu",
  "description": "materu — Digital Products For A Bigger Tomorrow. Building custom websites, web apps, and software solutions.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0B0C0E",
  "theme_color": "#0B0C0E",
  "orientation": "portrait-primary",
  "scope": "/",
  "categories": ["business", "productivity", "utilities"],
  "icons": [
    {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/icons/icon-maskable-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    }
  ]
}
```

---

## 4. Service Worker Caching Strategies (`/sw.js`)

The service worker implements production-grade offline resilience and performance optimization:

1. **Pre-caching on Install:** Core static brand icons, logos, root route, and the offline fallback page (`/offline`).
2. **Navigation Requests (`request.mode === 'navigate'`):**
   - **Network-First:** Attempts live network fetch first to ensure fresh HTML and content updates.
   - **Cache Fallback:** If offline or network drops, serves the cached page if available.
   - **Offline Page Fallback:** If neither network nor page cache is available, serves `/offline`.
3. **Static Assets (`/_next/static/*`, `/brand/*`, `/icons/*`, images, fonts):**
   - **Stale-While-Revalidate:** Instantly serves cached assets for sub-millisecond render, while refreshing from network in the background.
4. **API Requests (`/api/*`):**
   - **Network-Only:** Bypasses service worker cache to ensure contact forms and dynamic queries are never served stale or improperly stored.
5. **Lifecycle & Cache Invalidation:**
   - On `activate`, automatically purges legacy caches not matching `materu-v1.0.0` and claims immediate client control.
