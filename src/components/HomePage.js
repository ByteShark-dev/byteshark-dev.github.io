import { renderFooter, renderNavbar, renderWhatsAppShortcut } from './SiteChrome.js';

function renderHero(content) {
  const { hero } = content.page;
  const { links, brand } = content;
  const statusHighlights = hero.statusHighlights
    .map(
      (item, index) => `
        <div class="info-card bg-surface-container-low/80 p-5 ${index === hero.statusHighlights.length - 1 ? 'sm:col-span-2' : ''}">
          <p class="font-label text-xs uppercase tracking-[0.18em] text-secondary">${item.label}</p>
          <p class="mt-3 text-lg font-semibold text-on-surface text-wrap-anywhere">${item.value}</p>
        </div>
      `,
    )
    .join('');

  const bullets = hero.bullets
    .map(
      (item) => `
        <li class="flex items-start gap-3">
          <span class="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-container/15 text-primary-container">
            <span class="material-symbols-outlined text-sm" aria-hidden="true">bolt</span>
          </span>
          <span>${item}</span>
        </li>
      `,
    )
    .join('');

  return `
    <section id="home" class="relative overflow-hidden pt-28 sm:pt-32">
      <div aria-hidden="true" class="hero-grid absolute inset-0 opacity-[0.18]"></div>
      <div aria-hidden="true" class="absolute left-1/2 top-12 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full radial-ring blur-3xl"></div>
      <div class="section-shell relative grid gap-14 pb-20 pt-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-center lg:pb-28">
        <div class="min-w-0 space-y-8">
          <div class="space-y-5">
            <span class="eyebrow">${hero.eyebrow}</span>
            <h1 class="max-w-4xl font-headline text-[clamp(3rem,11vw,4.75rem)] font-bold leading-[0.95] tracking-tight text-on-surface lg:text-7xl">
              ${hero.title}
            </h1>
            <p class="max-w-2xl text-lg leading-8 text-on-surface-variant sm:text-xl">
              ${hero.description}
            </p>
          </div>
          <div class="flex flex-wrap gap-4">
            <a class="cta-primary" href="${links.whatsappQuote}" target="_blank" rel="noreferrer">
              ${hero.primaryCta}
            </a>
            <a class="cta-secondary" href="#proof">
              ${hero.secondaryCta}
            </a>
          </div>
          <ul class="grid gap-4 text-sm leading-6 text-on-surface-variant sm:grid-cols-2">
            ${bullets}
          </ul>
        </div>
        <aside class="glass-panel relative min-w-0 overflow-hidden rounded-[28px] border border-outline-variant/30 p-6 sm:p-7 shadow-[0_24px_90px_rgba(0,0,0,0.28)]">
          <div aria-hidden="true" class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-container via-white/70 to-primary-container"></div>
          <div class="flex items-start justify-between gap-6">
            <div class="min-w-0">
              <p class="font-label text-xs uppercase tracking-[0.22em] text-primary-container">${brand.name}</p>
              <h2 class="mt-3 text-2xl font-bold text-on-surface">${hero.statusCardTitle}</h2>
            </div>
            <img
              src="${brand.logoMark}"
              alt="${brand.name} logo"
              class="h-14 w-14 object-contain"
              width="56"
              height="56"
              decoding="async"
            />
          </div>
          <p class="mt-5 max-w-sm text-base leading-7 text-on-surface-variant">
            ${hero.statusCardBody}
          </p>
          <div class="mt-8 grid gap-4 sm:grid-cols-2">
            ${statusHighlights}
          </div>
        </aside>
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

function renderProof(content) {
  const { proof, sectionEyebrows } = content.page;
  const { realCases, ownSoftware } = content.collections;
  const software = ownSoftware[0];
  const demoPreviewItems = [
    {
      label: 'Bruma Cafe',
      accent: {
        from: '#C79D77',
        to: '#4A2C24',
        halo: 'rgba(199, 157, 119, 0.18)',
      },
    },
    {
      label: 'Business Manager',
      accent: {
        from: '#1E5AA8',
        to: '#16C7D8',
        halo: 'rgba(22, 199, 216, 0.16)',
      },
    },
    {
      label: 'Booking Manager',
      accent: {
        from: '#1E5AA8',
        to: '#7C5CFF',
        halo: 'rgba(124, 92, 255, 0.16)',
      },
    },
  ];

  const renderChips = (items) =>
    items.map((item) => `<span class="signal-chip">${item}</span>`).join('');

  const renderActionLinks = (linksList, compact = false) =>
    linksList
      .map((link, index) => {
        const isExternal = link.external ?? link.href.startsWith('http');
        const linkClass =
          index === 0
            ? `cta-primary ${compact ? 'px-4 py-3 text-[0.68rem]' : 'px-5 py-3 text-xs'}`
            : `cta-secondary ${compact ? 'px-4 py-3 text-[0.68rem]' : 'px-5 py-3 text-xs'}`;

        return `
          <a
            class="${linkClass}"
            href="${link.href}"
            ${isExternal ? 'target="_blank" rel="noreferrer"' : ''}
          >
            ${link.label}
          </a>
        `;
      })
      .join('');

  const renderMosaic = (items, variant = 'blue') => {
    return `
      <div class="compact-mosaic compact-mosaic--${variant}" aria-hidden="true">
        ${items
          .map((item, index) => {
            const label = typeof item === 'string' ? item : item.label;
            const accent = typeof item === 'string' ? null : item.accent;
            const image = typeof item === 'string' ? null : item.image;
            const style = accent
              ? `style="--tile-from: ${accent.from}; --tile-to: ${accent.to}; --tile-halo: ${accent.halo};"`
              : '';

            return `
              <div class="compact-mosaic__tile ${index === 0 ? 'is-featured' : ''}" ${style}>
                ${image ? `<img src="${image}" alt="" aria-hidden="true" loading="lazy" decoding="async" />` : ''}
                <span>${label}</span>
              </div>
            `;
          })
          .join('')}
      </div>
    `;
  };

  const renderAphidexMockup = (item) => {
    return `
      <div class="aphidex-app-mockup" aria-hidden="true">
        <div class="aphidex-app-mockup__window">
          <div class="aphidex-app-mockup__bar">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="aphidex-app-mockup__content">
            <div class="aphidex-app-mockup__header">
              <img src="${item.image}" alt="" loading="lazy" decoding="async" />
              <div class="aphidex-app-mockup__lines">
                <span class="is-green"></span>
                <span></span>
                <span class="is-short"></span>
              </div>
            </div>
            <div class="aphidex-app-mockup__body">
              <div class="aphidex-app-mockup__panel is-large"></div>
              <div class="aphidex-app-mockup__side">
                <div class="aphidex-app-mockup__panel"></div>
                <div class="aphidex-app-mockup__panel is-green"></div>
              </div>
            </div>
            <div class="aphidex-app-mockup__footer"></div>
          </div>
        </div>
      </div>
    `;
  };

  return `
    <section id="proof" class="scroll-mt-28 py-16 sm:py-20">
      <div class="section-shell">
        <div class="mx-auto max-w-[1180px]">
          <div class="mb-8 space-y-4">
            <span class="eyebrow">${sectionEyebrows.proof}</span>
            <h2 class="section-title">${proof.title}</h2>
            <p class="section-copy">${proof.intro}</p>
          </div>
          <div class="grid gap-4">
            <article class="compact-showcase compact-showcase--featured">
              <div class="min-w-0 space-y-4">
                <div class="space-y-2.5">
                  <span class="signal-chip">${proof.realCases.eyebrow}</span>
                  <div>
                    <h3 class="text-[clamp(1.75rem,4vw,2.45rem)] font-bold leading-tight text-on-surface">${proof.realCases.title}</h3>
                    <p class="mt-2 max-w-2xl text-sm leading-7 text-on-surface-variant">${proof.realCases.description}</p>
                  </div>
                </div>
                <div class="flex flex-wrap gap-2">
                  ${renderChips(proof.realCases.tags)}
                </div>
                <div class="flex flex-wrap gap-3">
                  <a class="cta-primary" href="${content.links.casesCatalog}">
                    ${proof.realCases.primaryCta}
                  </a>
                  <a class="cta-secondary" href="${content.links.whatsappQuote}" target="_blank" rel="noreferrer">
                    ${proof.realCases.secondaryCta}
                  </a>
                </div>
              </div>
              ${renderMosaic(realCases.map((item) => ({ label: item.name, accent: item.accent })), 'cases')}
            </article>

            <article id="demos" class="compact-showcase compact-showcase--demos">
              <div class="min-w-0 space-y-4">
                <div class="space-y-2.5">
                  <span class="signal-chip">${proof.demosSummary.eyebrow}</span>
                  <div>
                    <h3 class="text-[clamp(1.75rem,4vw,2.35rem)] font-bold leading-tight text-on-surface">${proof.demosSummary.title}</h3>
                    <p class="mt-2 max-w-2xl text-sm leading-7 text-on-surface-variant">${proof.demosSummary.description}</p>
                  </div>
                </div>
                <div class="flex flex-wrap gap-2">
                  ${renderChips(proof.demosSummary.tags)}
                </div>
                <div class="flex flex-wrap gap-3">
                  <a class="cta-primary" href="${content.links.demosCatalog}">
                    ${proof.demosSummary.primaryCta}
                  </a>
                </div>
              </div>
              ${renderMosaic(demoPreviewItems, 'demos')}
            </article>

            <article class="compact-showcase compact-showcase--software">
              <div class="min-w-0 space-y-4">
                <div class="space-y-2.5">
                  <span class="signal-chip">${proof.ownSoftware.eyebrow}</span>
                  <div>
                    <h3 class="text-[clamp(1.75rem,4vw,2.35rem)] font-bold leading-tight text-on-surface">${proof.ownSoftware.title}</h3>
                    <p class="mt-2 max-w-2xl text-sm leading-7 text-on-surface-variant">${proof.ownSoftware.description}</p>
                  </div>
                </div>
                <div>
                  <span class="signal-chip">${software.category}</span>
                  <h4 class="mt-3 text-2xl font-bold text-on-surface">${software.name}</h4>
                  <p class="mt-2 max-w-2xl text-sm leading-7 text-on-surface-variant">${software.description}</p>
                </div>
                <div class="flex flex-wrap gap-2">
                  ${renderChips(software.tags)}
                </div>
                <div class="flex flex-wrap gap-3">
                  ${renderActionLinks(software.ctaLinks, true)}
                </div>
              </div>
              ${renderAphidexMockup(software)}
            </article>
          </div>
        </div>
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
      ${renderProblems(content.page)}
      ${renderServices(content)}
      ${renderProof(content)}
      ${renderContact(content)}
    </main>
    ${renderFooter(content, 'home')}
    ${renderWhatsAppShortcut(content)}
  `;
}
