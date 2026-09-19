# Pascual

Lightweight, framework-free static source for Pascual Tapas & Bar.

## Included pages

- Home
- Spanish food, cocktails, and wine menus
- English food menu
- `robots.txt`, `sitemap.xml`, and a small 404 page

The visual content was captured from the restored live WordPress website on 2026-09-18. Private exports and original downloads live in `.migration-source/` and are deliberately excluded from Git.

## Redirects

`.htaccess` contains permanent redirects for the recovered WordPress page IDs and sends the old `/menu/` Pot & Bowls page to `https://www.potsandbowlscr.com/#menus`. The complete mapping is in `redirects.csv`.

These Apache redirects become active when the static files are deployed to DreamHost. GitHub Pages does not process `.htaccess`.

## Search Console

Google Search Console uses the URL-prefix property `https://www.pascualcr.com/`. Keep the `google-site-verification` meta tag in `index.html` when editing the page. The sitemap submitted to this property is `sitemap.xml`.

## Analytics

Google Analytics 4 property: **Pascual Tapas & Bar**. Measurement ID: `G-DFFGR6RVNK`. `assets/js/analytics.js` loads the Google tag only after a visitor accepts analytics; keep its matching measurement-ID meta tag on indexable pages. Enhanced measurement is enabled. Do not send personal information through page URLs, forms, or Analytics events.

## Principles

- Plain HTML and CSS: no framework, build step, trackers, or cookies.
- Locally optimized WebP image assets.
- Do not commit WordPress exports, credentials, customer data, or internal documents.
- Review menu pricing and business information before deployment.
