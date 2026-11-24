import { renderDigitalMatter } from './DigitalMatterView.js';
import { renderFooter, renderNavbar, renderWhatsAppShortcut } from './SiteChrome.js';

function renderHero(content) {
  const {hero}=content.page;
  const es=content.locale==='es';
  return `
    <section id="home" class="digital-hero">
      <div class="section-shell digital-hero-grid">
        <div class="digital-copy">
          <p class="digital-kicker"><span></span>${es?'ESTUDIO DE SOFTWARE INDEPENDIENTE':'INDEPENDENT SOFTWARE STUDIO'}</p>
          <h1>${es?'Construimos<br>lo que sigue.':'We build<br>what’s next.'}</h1>
          <p class="digital-lead">${hero.description}</p>
          <div class="digital-actions">
            <a class="cta-primary" href="#products">${es?'Ver proyectos':'Explore projects'} <span aria-hidden="true">↗</span></a>
            <a class="cta-secondary" href="#contact">${es?'Hablemos':'Let’s talk'}</a>
          </div>
          <p class="digital-footnote">${es?'DISEÑO / INGENIERÍA / PRODUCTO':'DESIGN / ENGINEERING / PRODUCT'}</p>
        </div>
        ${renderDigitalMatter(content)}
      </div>
      <div class="section-shell digital-impact" aria-label="${es?'Resultados':'Impact'}">
        <div><strong>3,400+</strong><span>${es?'Descargas Android · Aphidex':'Android downloads · Aphidex'}</span></div>
        <div><strong>02</strong><span>${es?'Productos propios':'Independent products'}</span></div>
        <div><strong>ES / EN</strong><span>${es?'Experiencias digitales':'Digital experiences'}</span></div>
      </div>
    </section>
  `;
}

function renderProblems({ problems, sectionEyebrows }) {
  const items = problems.items
    .map(
      (item) => `
        <article class="info-card">
          <div class="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-container/15 text-primary-container">
            <span class="material-symbols-outlined" aria-hidden="true">${item.icon}</span>
          </div>
          <h3 class="text-xl font-bold text-on-surface">${item.title}</h3>
          <p class="mt-3 text-sm leading-7 text-on-surface-variant">${item.body}</p>
        </article>
      `,
    )
    .join('');

  return `
    <section id="problems" class="scroll-mt-28 py-24 sm:py-28">
      <div class="section-shell">
        <div class="mb-12 space-y-5">
          <span class="eyebrow">${sectionEyebrows.problems}</span>
          <h2 class="section-title">${problems.title}</h2>
          <p class="section-copy">${problems.intro}</p>
        </div>
        <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          ${items}
        </div>
      </div>
    </section>
  `;
}

function renderServices(content) {
  const { services, sectionEyebrows } = content.page;
  const { links } = content;

  const cards = services.items
    .map(
      (item) => `
        <article class="glass-panel rounded-[24px] border border-outline-variant/28 p-6">
          <div class="flex items-start justify-between gap-4">
            <div class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-container/16 text-primary-container">
              <span class="material-symbols-outlined" aria-hidden="true">${item.icon}</span>
            </div>
            <span class="signal-chip">${services.chipLabel}</span>
          </div>
          <h3 class="mt-6 text-2xl font-bold text-on-surface">${item.title}</h3>
          <p class="mt-3 text-sm leading-7 text-on-surface-variant">${item.description}</p>
          <ul class="mt-6 space-y-3 text-sm text-on-surface-variant">
            ${item.benefits
              .map(
                (benefit) => `
                  <li class="flex items-start gap-3">
                    <span class="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-primary-container"></span>
                    <span>${benefit}</span>
                  </li>
                `,
              )
              .join('')}
          </ul>
          <a
            class="mt-7 inline-flex items-center gap-2 font-label text-sm font-bold uppercase tracking-[0.18em] text-primary-container transition hover:text-white"
            href="${links.whatsappQuote}"
            target="_blank"
            rel="noreferrer"
          >
            ${item.cta}
            <span class="material-symbols-outlined text-base" aria-hidden="true">north_east</span>
          </a>
        </article>
      `,
    )
    .join('');

  return `
    <section id="services" class="scroll-mt-28 bg-surface-container-lowest/45 py-24 sm:py-28">
      <div class="section-shell">
        <div class="mb-12 space-y-5">
          <span class="eyebrow">${sectionEyebrows.services}</span>
          <h2 class="section-title">${services.title}</h2>
          <p class="section-copy">${services.intro}</p>
        </div>
        <div class="grid gap-6 xl:grid-cols-4 md:grid-cols-2">
          ${cards}
        </div>
      </div>
    </section>
  `;
}

// Portfolio groups are sibling sections, not nested cards. Each uses its source brand palette.
function renderProof(content) {
  const {proof}=content.page;
  const {realCases,ownSoftware,commercialDemos}=content.collections;
  const es=content.locale==='es';
  const theme=item=>`--brand-accent:${item.accent.from};--brand-secondary:${item.accent.to};--brand-surface:${item.accent.surface};--logo-surface:${item.accent.logoSurface??item.accent.surface};`;
  const chips=items=>items.map(item=>`<span class="signal-chip">${item}</span>`).join('');
  const links=items=>items.map((link,i)=>`<a class="${i===0?'cta-primary':'cta-secondary'}" href="${link.href}" ${(link.external??link.href.startsWith('http'))?'target="_blank" rel="noreferrer"':''}>${link.label}</a>`).join('');
  const heading=(copy,index)=>`<header class="portfolio-section-heading"><span class="eyebrow">${index} / ${copy.eyebrow}</span><h2 class="section-title">${copy.title}</h2><p class="section-copy">${copy.description}</p></header>`;
  const swatches=item=>`<span class="brand-swatches" aria-hidden="true"><i></i><i></i></span>`;
  return `
    <section id="products" class="portfolio-section portfolio-section--products">
      <div class="section-shell">
        ${heading(proof.ownSoftware,'01')}
        <div class="grid gap-5 md:grid-cols-2">
          ${ownSoftware.map(item=>`
            <article class="info-card product-card brand-card" style="${theme(item)}">
              <div class="brand-logo-stage brand-logo-stage--${item.slug}">
                <img class="product-logo" src="${item.image}" alt="${item.imageAlt}" loading="lazy" decoding="async"/>
                ${swatches(item)}
              </div>
              <p class="brand-category">${item.category}</p>
              <h3 class="brand-title">${item.name}</h3>
              <p class="brand-description">${item.description}</p>
              <div class="brand-tags">${chips(item.tags)}</div>
              <div class="product-actions brand-actions">${links(item.ctaLinks)}</div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
    <section id="proof" class="portfolio-section portfolio-section--cases">
      <div class="section-shell">
        ${heading(proof.realCases,'02')}
        <div class="grid gap-4 md:grid-cols-2">
          ${realCases.map(item=>`
            <article class="brand-card case-teaser" style="${theme(item)}">
              <div class="brand-preview">
                <span class="brand-preview-mark" aria-hidden="true">${item.name.split(/\s+/).slice(0,2).map(word=>word[0]).join('')}</span>
                ${swatches(item)}
              </div>
              <div class="case-teaser-body">
                <p class="brand-category">${item.category}</p>
                <h3 class="brand-title">${item.name}</h3>
                <p class="brand-description">${item.description}</p>
                <div class="brand-tags">${chips(item.tags.slice(0,3))}</div>
                ${item.ctaLinks.length?`<div class="brand-actions">${links(item.ctaLinks.slice(0,1))}</div>`:''}
              </div>
            </article>
          `).join('')}
        </div>
        <div class="portfolio-section-actions">
          <a class="cta-primary" href="${content.links.casesCatalog}">${proof.realCases.primaryCta}</a>
          <a class="cta-secondary" href="#contact">${proof.realCases.secondaryCta}</a>
        </div>
      </div>
    </section>
    <section id="demos" class="portfolio-section portfolio-section--demos">
      <div class="section-shell">
        ${heading(proof.demosSummary,'03')}
        <div class="demo-brand-grid">
          ${commercialDemos.map(item=>`
            <a class="brand-card demo-brand-card" style="${theme(item)}" href="${item.href}">
              ${swatches(item)}
              <span class="brand-category">${item.category}</span>
              <h3 class="brand-title">${item.name}</h3>
              <span class="demo-link">${es?'Ver demo':'View demo'} <span aria-hidden="true">↗</span></span>
            </a>
          `).join('')}
        </div>
        <div class="portfolio-section-actions"><a class="cta-primary" href="${content.links.demosCatalog}">${proof.demosSummary.primaryCta}</a></div>
      </div>
    </section>
  `;
}

function renderContact(content) {
  const { contact, sectionEyebrows } = content.page;
  const { links } = content;

  const checklist = contact.checklist
    .map(
      (item) => `
        <li class="flex items-start gap-3">
          <span class="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-container/15 text-primary-container">
            <span class="material-symbols-outlined text-sm" aria-hidden="true">check</span>
          </span>
          <span>${item}</span>
        </li>
      `,
    )
    .join('');

  return `
    <section id="contact" class="scroll-mt-28 pb-24 pt-10 sm:pb-28">
      <div class="section-shell">
        <div class="glass-panel overflow-hidden rounded-[32px] border border-outline-variant/30 p-6 sm:p-10 lg:p-12">
          <div class="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-start">
            <div class="min-w-0 space-y-6">
              <span class="eyebrow">${sectionEyebrows.contact}</span>
              <h2 class="max-w-3xl font-headline text-[clamp(2.6rem,10vw,3.6rem)] font-bold leading-[0.96] tracking-tight text-on-surface sm:text-5xl">
                ${contact.title}
              </h2>
              <p class="max-w-2xl text-lg leading-8 text-on-surface-variant">
                ${contact.intro}
              </p>
              <div class="flex flex-wrap gap-4">
                <a class="cta-primary" href="${links.whatsappQuote}" target="_blank" rel="noreferrer">
                  ${contact.primaryCta}
                </a>
                <a class="cta-secondary" href="#proof">
                  ${contact.secondaryCta}
                </a>
              </div>
              <div class="rounded-[24px] border border-outline-variant/25 bg-surface-container-low/80 p-6">
                <p class="font-label text-xs uppercase tracking-[0.2em] text-secondary">${contact.checklistTitle}</p>
                <ul class="mt-5 grid gap-4 text-sm leading-7 text-on-surface-variant md:grid-cols-2">
                  ${checklist}
                </ul>
              </div>
            </div>
            <aside class="min-w-0 space-y-6 rounded-[28px] border border-outline-variant/25 bg-surface-container-low/80 p-6">
              <div class="min-w-0">
                <p class="font-label text-xs uppercase tracking-[0.2em] text-secondary">${contact.supportTitle}</p>
                <p class="mt-4 text-sm leading-7 text-on-surface-variant text-wrap-anywhere">${contact.supportCopy}</p>
              </div>
              <div class="space-y-4">
                <a class="info-card flex min-w-0 items-center gap-4 p-5 transition hover:border-primary-container/40" href="${links.email}">
                  <span class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-container/15 text-primary-container">
                    <span class="material-symbols-outlined" aria-hidden="true">mail</span>
                  </span>
                  <span class="min-w-0">
                    <span class="block font-label text-xs uppercase tracking-[0.18em] text-secondary">${contact.touchpoints.emailLabel}</span>
                    <span class="mt-1 block font-semibold text-on-surface text-wrap-anywhere">${links.emailAddress}</span>
                  </span>
                </a>
                <a class="info-card flex min-w-0 items-center gap-4 p-5 transition hover:border-primary-container/40" href="${links.github}" target="_blank" rel="noreferrer">
                  <span class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-container/15 text-primary-container">
                    <span class="material-symbols-outlined" aria-hidden="true">code</span>
                  </span>
                  <span class="min-w-0">
                    <span class="block font-label text-xs uppercase tracking-[0.18em] text-secondary">${contact.touchpoints.githubLabel}</span>
                    <span class="mt-1 block font-semibold text-on-surface text-wrap-anywhere">${contact.touchpoints.githubValue}</span>
                  </span>
                </a>
                <a class="info-card flex min-w-0 items-center gap-4 p-5 transition hover:border-primary-container/40" href="${links.linkedin}" target="_blank" rel="noreferrer">
                  <span class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-container/15 text-primary-container">
                    <span class="material-symbols-outlined" aria-hidden="true">business_center</span>
                  </span>
                  <span class="min-w-0">
                    <span class="block font-label text-xs uppercase tracking-[0.18em] text-secondary">${contact.touchpoints.linkedinLabel}</span>
                    <span class="mt-1 block font-semibold text-on-surface text-wrap-anywhere">${contact.touchpoints.linkedinValue}</span>
                  </span>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function renderHomePage(content) {
  return `
    ${renderNavbar(content, 'home')}
    <main id="main-content">
      ${renderHero(content)}
      ${renderProof(content)}
      ${renderServices(content)}
      ${renderProblems(content.page)}
      ${renderContact(content)}
    </main>
    ${renderFooter(content, 'home')}
    ${renderWhatsAppShortcut(content)}
  `;
}
