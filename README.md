# Pascual

Lightweight, framework-free static source for Pascual Tapas & Bar.

## Included pages

- Home
- Spanish food, cocktails, and wine menus
- English food menu
- `robots.txt`, `sitemap.xml`, and a small 404 page

The visual content was captured from the restored live WordPress website on 2026-09-18 and again on 2026-09-20 after its restoration. The current live-reference capture is in `.migration-source/live-2026-09-20/` and includes the six published HTML pages, WordPress REST page export, and referenced public CSS, JavaScript, fonts, and images. Private exports and original downloads are deliberately excluded from Git.

The recovered 2023 All-in-One WP Migration archive includes a historical database export. A fresh database export of the newly restored production instance still requires DreamHost SSH/database access; do not treat the public REST export as a complete database backup.

## Redirects

`.htaccess` contains permanent redirects for the recovered WordPress page IDs and sends the old `/menu/` Pot & Bowls page to `https://www.potsandbowlscr.com/#menus`. The complete mapping is in `redirects.csv`.

These Apache redirects become active when the static files are deployed to DreamHost. GitHub Pages does not process `.htaccess`.

## Search Console

Google Search Console uses the URL-prefix property `https://www.pascualcr.com/`. Keep the `google-site-verification` meta tag in `index.html` when editing the page. The sitemap submitted to this property is `sitemap.xml`.

## Analytics

Google Analytics 4 property: **Pascual Tapas & Bar**. Measurement ID: `G-DFFGR6RVNK`. `assets/js/analytics.js` loads the Google tag only after a visitor accepts analytics; keep its matching measurement-ID meta tag on indexable pages. Enhanced measurement is enabled. Do not send personal information through page URLs, forms, or Analytics events.

## Current production setup

- **Hosting:** DreamHost serves the live static site. GitHub stores the source; GitHub Pages is not used because DreamHost handles the custom domain and Apache redirects.
- **Deployment:** Push approved changes to `main`, then manually run **Actions → Deploy to DreamHost → Run workflow**. See `DEPLOYMENT.md`; the workflow deliberately does not delete unspecified remote files.
- **Search:** Google Search Console and Bing Webmaster Tools are configured for `https://www.pascualcr.com/`; both use the production sitemap. Retain `robots.txt`, `sitemap.xml`, canonical tags, and the Search Console verification tag.
- **SEO:** Indexable pages have page titles, descriptions, canonical URLs, Open Graph/Twitter metadata, image alternatives, and Restaurant JSON-LD structured data. Google Rich Results Test found 2 valid eligible items on 2026-09-20.
- **Privacy:** The visitor consent notice controls Analytics loading. `/privacy/` is intentionally `noindex`.
- **Performance:** The 2026-09-19 desktop Lighthouse baseline was 93 performance / 100 accessibility / 100 best practices / 100 SEO.

### Remaining follow-up

- Confirm Google Search Console’s Pascual sitemap returns to a stable `Success` status after processing.
- Add exact street address, hours, phone, reservation link, price range, and Google Business Profile URL before enriching the local-business listing.
- Confirm the current menus, then transcribe them into accessible, searchable HTML while retaining the menu images.
- Review GA4 and Search Console after real visitor traffic has accumulated.

## Principles

- Plain HTML and CSS: no framework, build step, trackers, or cookies.
- Locally optimized WebP image assets.
- Do not commit WordPress exports, credentials, customer data, or internal documents.
- Review menu pricing and business information before deployment.
