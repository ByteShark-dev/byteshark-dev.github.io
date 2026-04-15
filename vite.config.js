import { defineConfig } from 'vite';

import { defaultLocale, getSiteContent } from './src/config/site.js';

const defaultContent = getSiteContent(defaultLocale);
const createAbsoluteUrl = (path) => new URL(path, defaultContent.seo.siteUrl).toString();
const structuredData = JSON.stringify(
  {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: defaultContent.brand.name,
        url: defaultContent.seo.siteUrl,
        description: defaultContent.seo.description,
        inLanguage: defaultLocale,
      },
      {
        '@type': 'Person',
        name: defaultContent.brand.owner,
        url: defaultContent.seo.siteUrl,
        image: createAbsoluteUrl(defaultContent.brand.logoIcon),
        sameAs: [
          defaultContent.links.github,
          defaultContent.links.linkedin,
          defaultContent.links.playStore,
        ],
      },
      {
        '@type': 'Organization',
        name: defaultContent.brand.name,
        url: defaultContent.seo.siteUrl,
        logo: createAbsoluteUrl(defaultContent.brand.logoIcon),
        founder: {
          '@type': 'Person',
          name: defaultContent.brand.owner,
        },
        sameAs: [
          defaultContent.links.github,
          defaultContent.links.linkedin,
          defaultContent.links.playStore,
        ],
      },
    ],
  },
  null,
  2,
);

const metaTokens = {
  '%SITE_TITLE%': defaultContent.seo.title,
  '%SITE_DESCRIPTION%': defaultContent.seo.description,
  '%SITE_URL%': defaultContent.seo.siteUrl,
  '%SITE_OG_IMAGE%': createAbsoluteUrl(defaultContent.seo.ogImagePath),
  '%SITE_AUTHOR%': defaultContent.brand.owner,
  '%SITE_NAME%': defaultContent.brand.name,
  '%STRUCTURED_DATA%': structuredData,
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
