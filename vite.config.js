import { defineConfig } from 'vite';

import { defaultLocale, getSiteContent } from './src/config/site.js';

const defaultContent = getSiteContent(defaultLocale);
const createAbsoluteUrl = (path) => new URL(path, defaultContent.seo.siteUrl).toString();

const metaTokens = {
  '%SITE_TITLE%': defaultContent.seo.title,
  '%SITE_DESCRIPTION%': defaultContent.seo.description,
  '%SITE_URL%': defaultContent.seo.siteUrl,
  '%SITE_OG_IMAGE%': createAbsoluteUrl(defaultContent.seo.ogImagePath),
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
