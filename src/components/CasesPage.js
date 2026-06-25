import { renderFooter, renderNavbar, renderWhatsAppShortcut } from './SiteChrome.js';

function getInitials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

function renderCasePreview(item) {
  return `
    <div class="portfolio-preview">
      <div class="portfolio-preview__browser">
        <div class="portfolio-preview__bar">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="portfolio-preview__content">
          <div class="portfolio-preview__mark">${getInitials(item.name)}</div>
          <div class="portfolio-preview__lines">
            <span class="is-wide"></span>
            <span></span>
            <span></span>
          </div>
          <div class="portfolio-preview__stats">
            <span>${item.tags[0]}</span>
            <span>${item.tags[1]}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderCaseActions(links) {
  return links
    .map((link, index) => {
      const isExternal = link.external ?? link.href.startsWith('http');
      const linkClass = index === 0 ? 'cta-primary' : 'cta-secondary';

      return `
        <a
          class="${linkClass} w-full px-4 py-3 text-[0.72rem]"
          href="${link.href}"
          ${isExternal ? 'target="_blank" rel="noreferrer"' : ''}
        >
          ${link.label}
        </a>
      `;
    })
    .join('');
}

function renderCaseCard(item) {
  return `
    <article
      class="portfolio-card"
      style="--case-from: ${item.accent.from}; --case-to: ${item.accent.to}; --case-halo: ${item.accent.halo};"
    >
      <div class="portfolio-card__preview">
        ${renderCasePreview(item)}
      </div>
      <div class="portfolio-card__body">
        <div class="portfolio-card__header">
          <span class="portfolio-card__category">${item.category}</span>
          <h3 class="portfolio-card__title">${item.name}</h3>
        </div>
        <p class="portfolio-card__description">${item.description}</p>
        <div class="portfolio-card__tags">
          ${item.tags.map((tag) => `<span class="portfolio-card__tag">${tag}</span>`).join('')}
        </div>
        <div class="portfolio-card__actions">
          ${renderCaseActions(item.ctaLinks)}
        </div>
      </div>
    </article>
  `;
}

export function renderCasesPage(content) {
  const { hero, catalog } = content.page;
  const cases = content.collections.realCases;

  return `
    ${renderNavbar(content, 'cases')}
    <main id="main-content">
      <section class="cases-hero relative overflow-hidden pt-24 sm:pt-28">
        <div aria-hidden="true" class="hero-grid absolute inset-0 opacity-[0.18]"></div>
        <div aria-hidden="true" class="absolute left-1/2 top-8 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full radial-ring blur-3xl"></div>
        <div class="section-shell relative grid gap-8 pb-10 pt-8 xl:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.8fr)] xl:items-end">
          <div class="min-w-0 space-y-5">
            <span class="eyebrow">${hero.badge}</span>
            <h1 class="max-w-3xl font-headline text-[clamp(2.7rem,8vw,4.5rem)] font-bold leading-[0.94] tracking-tight text-on-surface">
              ${hero.title}
            </h1>
            <p class="max-w-2xl text-lg leading-8 text-on-surface-variant sm:text-xl">
              ${hero.subtitle}
            </p>
          </div>
          <aside class="cases-hero__aside min-w-0">
            <p class="text-base leading-8 text-on-surface-variant">
              ${hero.auxiliaryText}
            </p>
            <div class="mt-5 flex flex-wrap gap-3 xl:justify-end">
              <a class="cta-primary" href="${content.links.whatsappQuote}" target="_blank" rel="noreferrer">
                ${hero.primaryCta}
              </a>
              <a class="cta-secondary" href="/#home">
                ${hero.secondaryCta}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section id="catalogo" class="scroll-mt-28 py-10 sm:py-12">
        <div class="section-shell">
          <div class="mb-8 grid gap-5 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] xl:items-end">
            <div class="space-y-4">
              <span class="eyebrow">${catalog.eyebrow}</span>
              <h2 class="section-title">${catalog.title}</h2>
            </div>
            <p class="section-copy xl:justify-self-end">
              ${catalog.note}
            </p>
          </div>
          <div class="portfolio-grid">
            ${cases.map((item) => renderCaseCard(item)).join('')}
          </div>
        </div>
      </section>
    </main>
    ${renderFooter(content, 'cases')}
    ${renderWhatsAppShortcut(content)}
  `;
}
