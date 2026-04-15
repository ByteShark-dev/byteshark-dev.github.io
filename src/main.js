import './styles/main.css';

import projects from './data/projects.json';
import { renderAbout } from './components/About.js';
import { renderContact } from './components/Contact.js';
import { renderFooter } from './components/Footer.js';
import { renderHero } from './components/Hero.js';
import { renderNavbar } from './components/Navbar.js';
import { renderProjects } from './components/Projects.js';
import { defaultLocale, getSiteContent, supportedLocales } from './config/site.js';

const app = document.querySelector('#app');
const languageStorageKey = 'byteshark-locale';

let currentLocale = getInitialLocale();
let navbarScrollBound = false;

function getInitialLocale() {
  const savedLocale = window.localStorage.getItem(languageStorageKey);
  return supportedLocales.includes(savedLocale) ? savedLocale : defaultLocale;
}

function renderApp(locale) {
  const content = getSiteContent(locale);

  return `
    ${renderNavbar(content)}
    <main id="main-content">
      ${renderHero(content)}
      ${renderAbout(content)}
      ${renderProjects(projects, content.projects, content.locale)}
      ${renderContact(content)}
    </main>
    ${renderFooter(content)}
  `;
}

function syncSeo(content) {
  document.title = content.seo.title;
  document.documentElement.lang = content.locale;

  const absoluteOgImage = new URL(content.seo.ogImagePath, content.seo.siteUrl).toString();
  const ogLocale = content.locale === 'es' ? 'es_MX' : 'en_US';
  const metaSelectors = [
    ['meta[name="description"]', content.seo.description, 'content'],
    ['meta[name="author"]', content.brand.owner, 'content'],
    ['link[rel="canonical"]', content.seo.siteUrl, 'href'],
    ['meta[property="og:site_name"]', content.brand.name, 'content'],
    ['meta[property="og:locale"]', ogLocale, 'content'],
    ['meta[property="og:url"]', content.seo.siteUrl, 'content'],
    ['meta[property="og:title"]', content.seo.title, 'content'],
    ['meta[property="og:description"]', content.seo.description, 'content'],
    ['meta[property="og:image"]', absoluteOgImage, 'content'],
    ['meta[property="og:image:alt"]', content.seo.title, 'content'],
    ['meta[name="twitter:title"]', content.seo.title, 'content'],
    ['meta[name="twitter:description"]', content.seo.description, 'content'],
    ['meta[name="twitter:image"]', absoluteOgImage, 'content'],
    ['meta[name="twitter:image:alt"]', content.seo.title, 'content'],
  ];

  metaSelectors.forEach(([selector, value, attribute]) => {
    const element = document.querySelector(selector);
    if (element) {
      element.setAttribute(attribute, value);
    }
  });

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: content.brand.name,
        url: content.seo.siteUrl,
        description: content.seo.description,
        inLanguage: content.locale,
      },
      {
        '@type': 'Person',
        name: content.brand.owner,
        url: content.seo.siteUrl,
        image: absoluteOgImage,
        sameAs: [
          content.links.github,
          content.links.linkedin,
          content.links.playStore,
        ],
      },
      {
        '@type': 'Organization',
        name: content.brand.name,
        url: content.seo.siteUrl,
        logo: absoluteOgImage,
        founder: {
          '@type': 'Person',
          name: content.brand.owner,
        },
        sameAs: [
          content.links.github,
          content.links.linkedin,
          content.links.playStore,
        ],
      },
    ],
  };

  const structuredDataElement = document.querySelector('#structured-data');
  if (structuredDataElement) {
    structuredDataElement.textContent = JSON.stringify(structuredData, null, 2);
  }
}

function initNavbarScroll() {
  const updateNavbar = () => {
    const navbar = document.querySelector('[data-navbar]');

    if (!navbar) {
      return;
    }

    navbar.classList.toggle('is-scrolled', window.scrollY > 12);
  };

  updateNavbar();

  if (!navbarScrollBound) {
    window.addEventListener('scroll', updateNavbar, { passive: true });
    navbarScrollBound = true;
  }
}

function initLanguageToggle() {
  const localeButtons = document.querySelectorAll('[data-locale-target]');

  localeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const nextLocale = button.getAttribute('data-locale-target');

      if (!supportedLocales.includes(nextLocale) || nextLocale === currentLocale) {
        return;
      }

      currentLocale = nextLocale;
      window.localStorage.setItem(languageStorageKey, currentLocale);
      mountApp();
    });
  });
}

function initContactForm(content) {
  const contactForm = document.querySelector('[data-contact-form]');

  if (!contactForm) {
    return;
  }

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) {
      return;
    }

    const formData = new FormData(contactForm);
    const name = formData.get('name')?.toString().trim() ?? '';
    const email = formData.get('email')?.toString().trim() ?? '';
    const message = formData.get('message')?.toString().trim() ?? '';

    const subject = encodeURIComponent(`${content.contact.mailto.subjectPrefix} ${name}`);
    const body = encodeURIComponent(
      `${content.contact.mailto.bodyName}: ${name}\n${content.contact.mailto.bodyEmail}: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:${content.contact.email}?subject=${subject}&body=${body}`;
  });
}

function mountApp() {
  if (!app) {
    return;
  }

  const content = getSiteContent(currentLocale);

  app.innerHTML = renderApp(currentLocale);
  syncSeo(content);
  initNavbarScroll();
  initLanguageToggle();
  initContactForm(content);
}

if (app) {
  mountApp();
}
