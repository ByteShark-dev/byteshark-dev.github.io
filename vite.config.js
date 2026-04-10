import { defineConfig } from 'vite';

import { siteConfig } from './src/config/site.js';

const createAbsoluteUrl = (path) => new URL(path, siteConfig.seo.siteUrl).toString();

const metaTokens = {
  '%SITE_TITLE%': siteConfig.seo.title,
  '%SITE_DESCRIPTION%': siteConfig.seo.description,
  '%SITE_URL%': siteConfig.seo.siteUrl,
  '%SITE_OG_IMAGE%': createAbsoluteUrl(siteConfig.seo.ogImagePath),
};

export default defineConfig({
  base: './',
  plugins: [
    {
      name: 'byteshark-meta',
      transformIndexHtml(html) {
        return Object.entries(metaTokens).reduce(
          (output, [token, value]) => output.replaceAll(token, value),
          html,
        );
      },
    },
  ],
});
