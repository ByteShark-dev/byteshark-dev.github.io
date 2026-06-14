function renderNavigationLinks(navigation, linkClass = '') {
  return navigation
    .map((item) => {
      return `
        <a
          class="${linkClass}"
          href="#${item.section}"
        >
          ${item.label}
        </a>
      `;
    })
    .join('');
}

export function renderNavbar(content, currentPage) {
  const mobileNavItems = renderNavigationLinks(
    content.navigation,
    'rounded-2xl border border-outline-variant/25 bg-surface-container-low/55 px-4 py-3 text-base font-semibold tracking-tight text-on-surface transition hover:border-primary-container/35 hover:bg-surface-container',
  );
  const localeButtons = content.supportedLocales
    .map(
      (item) => `
        <button
          class="rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors ${
            item === content.locale
              ? 'bg-primary-container text-on-primary-container'
              : 'text-on-surface/62 hover:text-on-surface'
          }"
          type="button"
          data-locale-target="${item}"
          aria-pressed="${item === content.locale}"
        >
          ${content.ui.localeLabels[item]}
        </button>
      `,
    )
    .join('');
  const homeHref = '#home';
  const quoteHref = '#contact';
  const desktopCtaLabel = content.page.contact?.primaryCta ?? content.ui.mobileHeaderCta;

  return `
    <header class="site-navbar fixed inset-x-0 top-0 z-50" data-navbar>
      <a
        class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary-container focus:px-4 focus:py-2 focus:font-label focus:text-sm focus:font-bold focus:uppercase focus:tracking-widest focus:text-on-primary-container"
        href="#main-content"
      >
        ${content.ui.skipToContent}
      </a>
      <nav class="section-shell flex items-center justify-between gap-3 py-3.5 sm:gap-4 sm:py-4" aria-label="Primary">
        <a
          class="flex min-w-0 items-center gap-2.5 font-headline text-lg font-bold tracking-tight text-primary sm:gap-3 sm:text-2xl"
          href="${homeHref}"
          aria-label="${content.ui.homeAria}"
        >
          <img
            src="${content.brand.logoIcon}"
            alt=""
            aria-hidden="true"
            class="h-10 w-10 rounded-full object-contain"
            width="40"
            height="40"
            decoding="async"
          />
          <span class="truncate">${content.brand.name}</span>
        </a>
        <div class="flex items-center gap-3">
          <a class="cta-primary px-4 py-2.5 text-[11px] sm:px-5 sm:text-xs" href="${quoteHref}">
            ${content.ui.mobileHeaderCta}
          </a>
          <button
            class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant/40 bg-surface-container-high/70 text-on-surface"
            type="button"
            data-nav-toggle
            aria-expanded="false"
            aria-label="${content.ui.menuLabel}"
            data-nav-open-label="${content.ui.menuLabel}"
            data-nav-close-label="${content.ui.closeMenuLabel}"
          >
            <span class="material-symbols-outlined" aria-hidden="true" data-nav-icon>menu</span>
          </button>
        </div>
      </nav>
      <div class="section-shell hidden pb-4" data-nav-panel>
        <div class="ml-auto w-full max-w-md glass-panel rounded-[26px] border border-outline-variant/30 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
          <div class="flex items-center justify-between gap-4">
            <p class="font-label text-xs font-bold uppercase tracking-[0.22em] text-secondary">
              ${content.ui.menuPanelTitle}
            </p>
            <div
              class="flex items-center gap-1 rounded-full border border-outline-variant/30 bg-surface-container-high/45 p-1"
              aria-label="${content.ui.languageLabel}"
            >
              ${localeButtons}
            </div>
          </div>
          <div class="mt-4 flex flex-col gap-3 font-label text-sm text-on-surface">
            ${mobileNavItems}
            <a class="cta-primary mt-1" href="${quoteHref}">
              ${desktopCtaLabel}
            </a>
          </div>
        </div>
      </div>
    </header>
  `;
}

export function renderFooter(content, currentPage) {
  const homeHref = '#home';

  return `
    <footer class="border-t border-outline-variant/20 bg-surface-container-lowest/80 pb-28 pt-12 sm:py-12">
      <div class="section-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <a class="flex items-center gap-3 font-headline text-lg font-bold text-on-surface" href="${homeHref}">
          <img
            src="${content.brand.logoIcon}"
            alt=""
            aria-hidden="true"
            class="h-9 w-9 rounded-full object-contain"
            width="36"
            height="36"
            decoding="async"
          />
          <span>${content.brand.name}</span>
        </a>
        <p class="max-w-md text-sm uppercase tracking-[0.18em] text-on-surface/55 text-wrap-anywhere">
          ${content.footer.copyright} ${content.footer.tagline}
        </p>
        <div class="grid grid-cols-2 gap-x-6 gap-y-3 font-label text-sm uppercase tracking-[0.18em] sm:flex sm:flex-wrap">
          <a class="text-on-surface/58 transition hover:text-primary-container" href="${content.links.github}" target="_blank" rel="noreferrer">
            ${content.footer.links.github}
          </a>
          <a class="text-on-surface/58 transition hover:text-primary-container" href="${content.links.linkedin}" target="_blank" rel="noreferrer">
            ${content.footer.links.linkedin}
          </a>
          <a class="text-on-surface/58 transition hover:text-primary-container" href="${content.links.playStoreDeveloper}" target="_blank" rel="noreferrer">
            ${content.footer.links.playStoreDeveloper}
          </a>
          <a class="text-on-surface/58 transition hover:text-primary-container" href="${content.links.email}">
            ${content.footer.links.email}
          </a>
        </div>
      </div>
    </footer>
  `;
}

export function renderWhatsAppShortcut(content) {
  return `
    <a
      class="whatsapp-shortcut"
      href="${content.links.whatsappQuote}"
      target="_blank"
      rel="noreferrer"
      aria-label="${content.ui.whatsappShortcutAria}"
      title="${content.ui.whatsappShortcutAria}"
    >
      <span class="whatsapp-shortcut__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" focusable="false" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.78.65 2.62a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.46-1.22a2 2 0 0 1 2.11-.45c.84.31 1.72.53 2.62.65A2 2 0 0 1 22 16.92z"></path>
        </svg>
      </span>
      <span class="whatsapp-shortcut__label">${content.ui.whatsappShortcut}</span>
    </a>
  `;
}
