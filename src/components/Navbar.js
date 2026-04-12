export function renderNavbar({ brand, links, navigation, ui, locale, supportedLocales }) {
  const navItems = navigation
    .map(
      ({ label, href }) => `
          <a class="text-on-surface opacity-70 transition-all hover:text-primary-container hover:opacity-100 focus-visible:opacity-100 focus-visible:text-primary-container" href="${href}">
            ${label}
          </a>
        `,
    )
    .join('');

  const localeButtons = supportedLocales
    .map(
      (item) => `
        <button
          class="rounded px-2 py-1 text-xs font-bold uppercase tracking-widest transition-colors ${
            item === locale
              ? 'bg-primary-container text-on-primary-container'
              : 'text-on-surface/65 hover:text-primary'
          }"
          type="button"
          data-locale-target="${item}"
          aria-pressed="${item === locale}"
        >
          ${ui.localeLabels[item]}
        </button>
      `,
    )
    .join('');

  return `
    <header class="site-navbar fixed inset-x-0 top-0 z-50" data-navbar>
      <a class="skip-link sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-primary-container focus:px-4 focus:py-2 focus:font-label focus:text-sm focus:font-bold focus:uppercase focus:tracking-widest focus:text-on-primary-container" href="#main-content">
        ${ui.skipToContent}
      </a>
      <nav
        aria-label="Primary"
        class="mx-auto flex max-w-7xl items-center justify-between px-8 py-4"
      >
        <a class="flex items-center gap-3 text-2xl font-bold tracking-tighter text-primary font-headline" href="#home" aria-label="${ui.homeAria}">
          <img
            src="${brand.logoIcon}"
            alt=""
            aria-hidden="true"
            class="h-9 w-9 rounded-sm object-contain"
            width="36"
            height="36"
            decoding="async"
          />
          <span>${brand.name}</span>
        </a>
        <div class="hidden items-center space-x-8 font-label tracking-tight md:flex">
          ${navItems}
        </div>
        <div class="flex items-center gap-3">
          <div
            class="flex items-center gap-1 rounded border border-outline-variant/40 bg-surface-container-high/70 p-1"
            aria-label="${ui.languageLabel}"
          >
            ${localeButtons}
          </div>
          <a
            class="bg-primary-container px-6 py-2 font-label text-sm font-bold uppercase tracking-widest text-on-primary-container transition-all duration-200 hover:brightness-110 active:scale-90"
            href="${links.hireMe}"
            aria-label="${ui.jumpToContact}"
          >
            ${ui.hireMe}
          </a>
        </div>
      </nav>
    </header>
  `;
}
