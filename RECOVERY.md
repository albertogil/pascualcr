# Pascual content recovery

## Available source material

- A full All-in-One WP Migration export dated **2023-04-13** was recovered from DreamHost.
- The current WordPress media library on DreamHost contains uploads through **2025**.
- The backup includes the WordPress database, the cached home page, media, and a Spanish food and wine menu.

The original homepage was largely a starter-template design. It should be redesigned rather than reproduced. The business identity recovered from the source is **Pascual — Tapas & Bar**.

## Content that requires approval before publication

- Address, hours, reservation link, phone, and social profiles.
- All food, beverage, and wine prices: the recovered menu is from 2023 and must be treated as historical.
- The selection of current photography from the media library.

## Local recovery workflow

The WordPress export is intentionally stored in `.migration-source/` and excluded from Git. `tools/wpress-inspect.mjs` can list or selectively extract files without unpacking the full archive.

```sh
node tools/wpress-inspect.mjs .migration-source/backup.wpress list 'database\\.sql|uploads/2023/01/.*'
node tools/wpress-inspect.mjs .migration-source/backup.wpress extract 'database\\.sql' .migration-source/recovered
```

## Deployment status

No Pascual static site is published yet. That avoids replacing the existing setup with unreviewed historical content.
