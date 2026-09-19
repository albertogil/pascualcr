# DreamHost deployment

This repository uses a manual GitHub Action so a source-code push cannot publish to the live domain by accident.

Before its first run, add these **repository secrets** in GitHub: **Settings → Secrets and variables → Actions**.

| Secret | Value |
| --- | --- |
| `DREAMHOST_SSH_PRIVATE_KEY` | Private key for the DreamHost deployment user |
| `DREAMHOST_HOST` | DreamHost SSH hostname |
| `DREAMHOST_USER` | DreamHost SSH username |
| `DREAMHOST_PATH` | Exact Pascual domain document-root path on DreamHost |

Use the corresponding values from the working Mari deployment only if that SSH user is authorized for the Pascual document root. Do not copy the production value from another site blindly.

After the secrets and exact path are verified, open **Actions → Deploy to DreamHost → Run workflow**. The workflow uploads only the static site files and deliberately does **not** use `--delete`.

## Before directing the public domain

1. Resolve the duplicate `www` A record with DreamHost support.
2. Publish to a staging directory or confirm the exact Pascual document root.
3. Test the homepage, all four menu URLs, the `/menu/` redirect, and WordPress `?page_id=` redirects.
4. Switch the custom domain only after those checks pass.

`/.htaccess` supplies the Apache/DreamHost redirects. GitHub Pages does not process it.
