# Pascual content recovery

## Available source material

- A full All-in-One WP Migration export dated **2023-04-13** was recovered from DreamHost.
- The current WordPress media library on DreamHost contains uploads through **2025**.
- The backup includes the WordPress database, the cached home page, media, and a Spanish food and wine menu.

The business identity recovered from the source is **Pascual — Tapas & Bar**. A current live-site capture on 2026-09-18 confirmed the homepage and four current menu routes; the static implementation uses those current pages rather than the historical starter template.

## Content that requires approval before publication

- Hours, reservation link, and phone, which were not added to the static site without verification.
- Any future menu-pricing update. The static menu images were sourced from the restored current site; confirm them before a later refresh.

## Local recovery workflow

The WordPress export is intentionally stored in `.migration-source/` and excluded from Git. `tools/wpress-inspect.mjs` can list or selectively extract files without unpacking the full archive.

```sh
node tools/wpress-inspect.mjs .migration-source/backup.wpress list 'database\\.sql|uploads/2023/01/.*'
node tools/wpress-inspect.mjs .migration-source/backup.wpress extract 'database\\.sql' .migration-source/recovered
```

## Deployment status

No Pascual static site is published yet. That avoids replacing the existing setup with unreviewed historical content.
