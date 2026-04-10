import './styles/main.css';

import projects from './data/projects.json';
import { renderAbout } from './components/About.js';
import { renderContact } from './components/Contact.js';
import { renderFooter } from './components/Footer.js';
import { renderHero } from './components/Hero.js';
import { renderNavbar } from './components/Navbar.js';
import { renderProjects } from './components/Projects.js';
import { siteConfig } from './config/site.js';

function renderApp() {
  return `
    ${renderNavbar(siteConfig)}
    <main id="main-content">
      ${renderHero(siteConfig)}
      ${renderAbout(siteConfig)}
      ${renderProjects(projects)}
      ${renderContact(siteConfig)}
    </main>
    ${renderFooter(siteConfig)}
  `;
}

function syncSeo() {
  document.title = siteConfig.seo.title;

  const absoluteOgImage = new URL(siteConfig.seo.ogImagePath, siteConfig.seo.siteUrl).toString();
  const metaSelectors = [
    ['meta[name="description"]', siteConfig.seo.description, 'content'],
    ['link[rel="canonical"]', siteConfig.seo.siteUrl, 'href'],
    ['meta[property="og:url"]', siteConfig.seo.siteUrl, 'content'],
    ['meta[property="og:title"]', siteConfig.seo.title, 'content'],
    ['meta[property="og:description"]', siteConfig.seo.description, 'content'],
    ['meta[property="og:image"]', absoluteOgImage, 'content'],
    ['meta[name="twitter:title"]', siteConfig.seo.title, 'content'],
    ['meta[name="twitter:description"]', siteConfig.seo.description, 'content'],
    ['meta[name="twitter:image"]', absoluteOgImage, 'content'],
  ];

  metaSelectors.forEach(([selector, value, attribute]) => {
    const element = document.querySelector(selector);
    if (element) {
      element.setAttribute(attribute, value);
    }
  });
}

function initNavbarScroll() {
  const navbar = document.querySelector('[data-navbar]');

  if (!navbar) {
    return;
  }

  const updateNavbar = () => {
    navbar.classList.toggle('is-scrolled', window.scrollY > 12);
  };

  updateNavbar();
  window.addEventListener('scroll', updateNavbar, { passive: true });
}

function initContactForm() {
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

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
  });
}

const app = document.querySelector('#app');

if (app) {
  app.innerHTML = renderApp();
  syncSeo();
  initNavbarScroll();
  initContactForm();
}
