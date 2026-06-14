# ByteShark Portfolio

Production build for the ByteShark portfolio site, powered by Vite and Tailwind CSS.

`ByteShark_web` is the source repo. The old local `ByteShark_web_gh-pages` clone is no longer needed because GitHub Pages deployment is already automated from `main`.

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The generated production files are written to `dist/`.

## GitHub Pages Deployment

This repository deploys to GitHub Pages through the workflow in `.github/workflows/deploy.yml`.

Typical deployment flow:

1. Commit source changes on `main`
2. Push to GitHub
3. Let GitHub Actions build `dist/` and publish it to Pages

## Aphidex Extraction

The standalone Aphidex landing is prepared in `aphidex-landing/` as a self-contained Vite project ready to move into its own repository and publish at `https://byteshark-dev.github.io/aphidex/`.
