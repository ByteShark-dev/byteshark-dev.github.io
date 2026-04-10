# ByteShark Portfolio

Production build for the ByteShark portfolio site, powered by Vite and Tailwind CSS.

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

This repository is prepared for branch-based GitHub Pages deployment.

- Production assets are built with Vite into `dist/`
- The published site should be served from the `gh-pages` branch
- The `gh-pages` branch should use the repository root as the Pages source
- A `.nojekyll` file is included so GitHub Pages serves the build output as-is

Typical deployment flow:

1. Commit source changes on `main`
2. Run `npm run build`
3. Publish the contents of `dist/` to the `gh-pages` branch
