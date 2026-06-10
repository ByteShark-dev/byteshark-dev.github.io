import { renderFooter, renderNavbar, renderWhatsAppShortcut } from './SiteChrome.js';

function renderHero(content) {
  const { hero } = content.page;

  return `
    <section id="home" class="relative overflow-hidden pt-28 sm:pt-32">
      <div aria-hidden="true" class="hero-grid absolute inset-0 opacity-[0.16]"></div>
      <div aria-hidden="true" class="absolute left-1/2 top-10 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full radial-ring blur-3xl"></div>
      <div class="section-shell relative grid gap-10 pb-20 pt-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(300px,0.95fr)] lg:items-center lg:pb-24">
        <div class="space-y-7">
          <span class="eyebrow">${hero.eyebrow}</span>
          <h1 class="max-w-4xl font-headline text-5xl font-bold leading-[0.96] tracking-tight text-on-surface sm:text-6xl">
            ${hero.title}
          </h1>
          <p class="max-w-3xl text-lg leading-8 text-on-surface-variant sm:text-xl">
            ${hero.description}
          </p>
          <div class="flex flex-wrap gap-4">
            <a class="cta-primary" href="${content.links.aphidexPlay}" target="_blank" rel="noreferrer">
              ${hero.primaryCta}
            </a>
            <a class="cta-secondary" href="${content.links.aphidexIos}" target="_blank" rel="noreferrer">
              ${hero.storeCta}
            </a>
            <a class="cta-secondary" href="../#contact">
              ${hero.secondaryCta}
            </a>
          </div>
          <p class="text-sm font-medium text-secondary">${hero.storeNote}</p>
          <div class="flex flex-wrap gap-4">
            <a
              class="inline-flex max-w-[220px] rounded-2xl border border-outline-variant/35 bg-black/30 p-2 transition hover:border-primary-container/60"
              href="${content.links.aphidexPlay}"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="${content.assets.playBadge}"
                alt="${hero.badgeAlt}"
                class="h-auto w-full"
                width="220"
                height="66"
                decoding="async"
              />
            </a>
            <a
              class="inline-flex max-w-[220px] rounded-2xl border border-outline-variant/35 bg-black/30 p-2 transition hover:border-primary-container/60"
              href="${content.links.aphidexIos}"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="${content.assets.appStoreBadge}"
                alt="${hero.storeBadgeAlt}"
                class="h-auto w-full"
                width="220"
                height="66"
                decoding="async"
              />
            </a>
          </div>
        </div>
        <aside class="glass-panel overflow-hidden rounded-[28px] border border-outline-variant/30 p-7 shadow-[0_24px_90px_rgba(0,0,0,0.28)]">
          <div class="relative aspect-[4/3] overflow-hidden rounded-[24px] border border-outline-variant/20 bg-[radial-gradient(circle_at_top,_rgba(30,90,168,0.24),_rgba(7,17,31,0.96)_64%)] p-8">
            <img
              src="/assets/images/Aphidex_logo.webp"
              alt="Aphidex logo"
              class="mx-auto h-full max-h-[260px] w-auto object-contain"
              width="512"
              height="512"
              decoding="async"
            />
          </div>
          <div class="mt-6">
            <p class="font-label text-xs uppercase tracking-[0.2em] text-secondary">${content.brand.name}</p>
            <h2 class="mt-3 text-2xl font-bold text-on-surface">${hero.sideCardTitle}</h2>
            <p class="mt-3 text-sm leading-7 text-on-surface-variant">${hero.sideCardBody}</p>
          </div>
        </aside>
      </div>
    </section>
  `;
}

function renderIntro(content) {
  const { overview, problem } = content.page;
  const { labels } = content.page;

  return `
    <section class="py-16 sm:py-20">
      <div class="section-shell grid gap-6 lg:grid-cols-2">
        <article class="info-card">
          <span class="eyebrow">${labels.overview}</span>
          <h2 class="mt-5 text-3xl font-bold text-on-surface">${overview.title}</h2>
          <p class="mt-4 text-base leading-8 text-on-surface-variant">${overview.body}</p>
        </article>
        <article class="info-card">
          <span class="eyebrow">${labels.playerValue}</span>
          <h2 class="mt-5 text-3xl font-bold text-on-surface">${problem.title}</h2>
          <p class="mt-4 text-base leading-8 text-on-surface-variant">${problem.body}</p>
        </article>
      </div>
    </section>
  `;
}

function renderSearchSections(content) {
  const { labels } = content.page;

  return `
    <section class="bg-surface-container-lowest/45 py-24 sm:py-28">
      <div class="section-shell">
        <div class="mb-12 space-y-5">
          <span class="eyebrow">${labels.searchContent}</span>
          <h2 class="section-title">${labels.searchTitle}</h2>
          <p class="section-copy">${labels.searchIntro}</p>
        </div>
        <div class="grid gap-6 lg:grid-cols-2">
          ${content.page.searchSections
            .map(
              (section) => `
                <article class="info-card">
                  <h3 class="text-2xl font-bold text-on-surface">${section.title}</h3>
                  <p class="mt-4 text-sm leading-7 text-on-surface-variant">${section.body}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
}

function renderFeatures(content) {
  const { labels } = content.page;

  return `
    <section class="py-24 sm:py-28">
      <div class="section-shell">
        <div class="mb-12 space-y-5">
          <span class="eyebrow">${labels.features}</span>
          <h2 class="section-title">${content.page.features.title}</h2>
        </div>
        <div class="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          ${content.page.features.items
            .map(
              (item) => `
                <article class="info-card">
                  <div class="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-container/15 text-primary-container">
                    <span class="material-symbols-outlined" aria-hidden="true">check_circle</span>
                  </div>
                  <h3 class="mt-5 text-xl font-bold text-on-surface">${item}</h3>
                </article>
              `,
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
}

function renderScreenshots(content) {
  const { labels } = content.page;

  return `
    <section class="bg-surface-container-lowest/45 py-24 sm:py-28">
      <div class="section-shell">
        <div class="mb-12 space-y-5">
          <span class="eyebrow">${labels.screenshots}</span>
          <h2 class="section-title">${content.page.screenshots.title}</h2>
        </div>
        <div class="grid gap-6 lg:grid-cols-3">
          ${content.page.screenshots.items
            .map(
              (item) => `
                <figure class="overflow-hidden rounded-[28px] border border-outline-variant/30 bg-surface-container/85">
                  <img
                    src="${item.src}"
                    alt="${item.alt}"
                    class="h-auto w-full"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption class="border-t border-outline-variant/25 p-5 text-sm text-on-surface-variant">
                    ${item.caption}
                  </figcaption>
                </figure>
              `,
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
}

function renderArchitecture(content) {
  const { labels } = content.page;

  return `
    <section class="py-24 sm:py-28">
      <div class="section-shell">
        <div class="mb-12 space-y-5">
          <span class="eyebrow">${labels.stack}</span>
          <h2 class="section-title">${content.page.architecture.title}</h2>
          <p class="section-copy">${content.page.architecture.intro}</p>
        </div>
        <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          ${content.page.architecture.items
            .map(
              (item) => `
                <article class="info-card">
                  <span class="signal-chip">${item.title}</span>
                  <p class="mt-5 text-sm leading-7 text-on-surface-variant">${item.body}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
}

function renderMonetization(content) {
  const { labels } = content.page;

  return `
    <section class="bg-surface-container-lowest/45 py-24 sm:py-28">
      <div class="section-shell grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
        <article class="info-card">
          <span class="eyebrow">${labels.monetization}</span>
          <h2 class="mt-5 text-3xl font-bold text-on-surface">${content.page.monetization.title}</h2>
          <p class="mt-4 text-base leading-8 text-on-surface-variant">${content.page.monetization.body}</p>
        </article>
        <article class="info-card">
          <span class="eyebrow">${labels.proof}</span>
          <h2 class="mt-5 text-3xl font-bold text-on-surface">${content.page.proof.title}</h2>
          <ul class="mt-5 space-y-3 text-sm leading-7 text-on-surface-variant">
            ${content.page.proof.items
              .map(
                (item) => `
                  <li class="flex items-start gap-3">
                    <span class="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-primary-container"></span>
                    <span>${item}</span>
                  </li>
                `,
              )
              .join('')}
          </ul>
        </article>
      </div>
    </section>
  `;
}

function renderDisclaimer(content) {
  const { labels } = content.page;

  return `
    <section class="py-16">
      <div class="section-shell">
        <div class="rounded-[28px] border border-outline-variant/30 bg-surface-container-low/80 p-6 text-sm leading-7 text-on-surface-variant">
          <span class="font-label text-xs uppercase tracking-[0.2em] text-secondary">${labels.legal}</span>
          <p class="mt-4">${content.page.disclaimer}</p>
        </div>
      </div>
    </section>
  `;
}

function renderFinalCta(content) {
  const { labels } = content.page;

  return `
    <section class="pb-24 pt-8 sm:pb-28">
      <div class="section-shell">
        <div class="glass-panel overflow-hidden rounded-[32px] border border-outline-variant/30 p-8 sm:p-10 lg:p-12">
          <div class="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)] lg:items-center">
            <div class="space-y-5">
              <span class="eyebrow">${labels.finalCta}</span>
              <h2 class="max-w-3xl font-headline text-4xl font-bold tracking-tight text-on-surface sm:text-5xl">
                ${content.page.finalCta.title}
              </h2>
              <p class="max-w-2xl text-lg leading-8 text-on-surface-variant">
                ${content.page.finalCta.body}
              </p>
            </div>
            <div class="flex flex-col gap-4">
              <a class="cta-primary w-full justify-center" href="../#contact">
                ${content.page.finalCta.primary}
              </a>
              <a class="cta-secondary w-full justify-center" href="../#services">
                ${content.page.finalCta.secondary}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function renderAphidexPage(content) {
  return `
    ${renderNavbar(content, 'aphidex')}
    <main id="main-content">
      ${renderHero(content)}
      ${renderIntro(content)}
      ${renderSearchSections(content)}
      ${renderFeatures(content)}
      ${renderScreenshots(content)}
      ${renderArchitecture(content)}
      ${renderMonetization(content)}
      ${renderDisclaimer(content)}
      ${renderFinalCta(content)}
    </main>
    ${renderFooter(content, 'aphidex')}
    ${renderWhatsAppShortcut(content)}
  `;
}
