import { resolve } from 'node:path';

import { defineConfig } from 'vite';

import {
  getPageContent,
  getPageSeo,
  getPageStructuredData,
  getStaticLocale,
  siteConfig,
} from './src/config/site.js';
import { renderCasesPage } from './src/components/CasesPage.js';
import { renderHomePage } from './src/components/HomePage.js';

function getPageKeyFromFilename(filename = '') {
  const normalizedFilename = filename.replaceAll('\\', '/');

  if (normalizedFilename.endsWith('casos-reales/index.html')) {
    return 'cases';
  }

  if (normalizedFilename.endsWith('index.html')) {
    return 'home';
  }

  return null;
}

function buildMetaTokens(pageKey) {
  const locale = getStaticLocale(pageKey);
  const seo = getPageSeo(pageKey, locale);
  const structuredData = JSON.stringify(getPageStructuredData(pageKey, locale), null, 2);
  const ogImage = new URL(seo.ogImagePath, seo.siteUrl).toString();
  const ogLocale = locale === 'es' ? 'es_MX' : 'en_US';

  return {
    '%PAGE_TITLE%': seo.title,
    '%PAGE_DESCRIPTION%': seo.description,
    '%PAGE_URL%': seo.pageUrl,
    '%PAGE_OG_IMAGE%': ogImage,
    '%SITE_NAME%': siteConfig.brand.name,
    '%PAGE_AUTHOR%': siteConfig.brand.owner,
    '%OG_TYPE%': seo.ogType,
    '%PAGE_LOCALE%': ogLocale,
    '%TWITTER_CARD%': seo.twitterCard,
    '%STRUCTURED_DATA%': structuredData,
  };
}

function renderStaticPage(pageKey) {
  const locale = getStaticLocale(pageKey);
  const content = getPageContent(pageKey, locale);

  return pageKey === 'cases' ? renderCasesPage(content) : renderHomePage(content);
}

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        cases: resolve(__dirname, 'casos-reales/index.html'),
        aphidexFile: resolve(__dirname, 'aphidex.html'),
      },
    },
  },
  plugins: [
    {
      name: 'byteshark-static-pages',
      transformIndexHtml(html, context) {
        const pageKey = getPageKeyFromFilename(context?.filename);

        if (!pageKey) {
          return html;
        }

        const tokens = {
          ...buildMetaTokens(pageKey),
          '%PAGE_CONTENT%': renderStaticPage(pageKey),
        };

        return Object.entries(tokens).reduce(
          (output, [token, value]) => output.replaceAll(token, value),
          html,
        );
      },
    },
  ],
});
