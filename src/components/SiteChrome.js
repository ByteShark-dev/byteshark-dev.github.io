function getHomeHref(section, currentPage) {
  return currentPage === 'home' ? `#${section}` : `../#${section}`;
}

function getAphidexHref(currentPage) {
  return currentPage === 'home' ? './aphidex.html' : '../aphidex.html';
}

function renderNavigationLinks(navigation, currentPage, linkClass = '') {
  return navigation
    .map((item) => {
      const href = item.page === 'aphidex' ? getAphidexHref(currentPage) : getHomeHref(item.section, currentPage);

      return `
        <a
          class="${linkClass}"
          href="${href}"
        >
          ${item.label}
        </a>
      `;
    })
    .join('');
}

export function renderNavbar(content, currentPage) {
  const desktopNavItems = renderNavigationLinks(
    content.navigation,
    currentPage,
    'rounded-full px-3 py-2 text-on-surface/74 transition hover:bg-white/5 hover:text-on-surface',
  );
  const mobileNavItems = renderNavigationLinks(
    content.navigation,
    currentPage,
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
  const homeHref = currentPage === 'home' ? '#home' : '../#home';
  const quoteHref = currentPage === 'home' ? '#contact' : '../#contact';
  const desktopCtaLabel = currentPage === 'home' ? content.page.contact.primaryCta : content.page.finalCta.primary;

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
        <div class="hidden items-center gap-2 font-label text-sm tracking-tight lg:flex">
          ${desktopNavItems}
        </div>
        <div class="hidden items-center gap-3 lg:flex">
          <div
            class="flex items-center gap-1 rounded-full border border-outline-variant/30 bg-surface-container-high/45 p-1"
            aria-label="${content.ui.languageLabel}"
          >
            ${localeButtons}
          </div>
          <a class="cta-primary px-5 py-2.5 text-xs" href="${quoteHref}">
            ${desktopCtaLabel}
          </a>
        </div>
        <div class="flex items-center gap-3 lg:hidden">
          <a class="cta-primary px-4 py-2.5 text-[11px]" href="${quoteHref}">
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
      <div class="section-shell hidden pb-4 lg:hidden" data-nav-panel>
        <div class="glass-panel rounded-[26px] border border-outline-variant/30 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
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
  const homeHref = currentPage === 'home' ? '#home' : '../#home';

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
        <svg viewBox="0 0 32 32" class="h-6 w-6 fill-current" focusable="false">
          <path d="M19.11 17.18c-.29-.14-1.69-.84-1.95-.94-.26-.09-.45-.14-.64.14-.19.29-.73.94-.89 1.13-.17.19-.33.21-.62.07-.29-.14-1.21-.45-2.31-1.44-.85-.76-1.43-1.7-1.59-1.98-.17-.28-.02-.43.12-.57.13-.12.29-.33.43-.5.14-.17.19-.29.29-.48.09-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.13-.24-.57-.48-.5-.64-.5h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43s1.02 2.82 1.17 3.01c.14.19 2 3.05 4.83 4.28.67.29 1.19.46 1.6.58.67.21 1.29.18 1.78.11.54-.08 1.69-.69 1.93-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33Z"></path>
          <path d="M16.02 3.2c-6.99 0-12.67 5.68-12.67 12.67 0 2.22.58 4.39 1.67 6.29L3.2 28.8l6.8-1.78a12.64 12.64 0 0 0 6.02 1.53h.01c6.99 0 12.67-5.68 12.67-12.67S23.01 3.2 16.02 3.2Zm0 23.2h-.01a10.5 10.5 0 0 1-5.36-1.47l-.38-.22-4.03 1.05 1.08-3.93-.24-.4a10.49 10.49 0 0 1-1.61-5.55c0-5.82 4.73-10.55 10.56-10.55 2.82 0 5.46 1.1 7.45 3.09a10.47 10.47 0 0 1 3.09 7.46c0 5.82-4.74 10.55-10.56 10.55Z"></path>
        </svg>
      </span>
      <span class="whatsapp-shortcut__label">${content.ui.whatsappShortcut}</span>
    </a>
  `;
}
