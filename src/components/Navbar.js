export function renderNavbar({ brand, links, navigation }) {
  const navItems = navigation
    .map(
      ({ label, href }) => `
          <a class="text-on-surface opacity-70 transition-all hover:text-primary-container hover:opacity-100 focus-visible:opacity-100 focus-visible:text-primary-container" href="${href}">
            ${label}
          </a>
        `,
    )
    .join('');

  return `
    <header class="site-navbar fixed inset-x-0 top-0 z-50" data-navbar>
      <a class="skip-link sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-primary-container focus:px-4 focus:py-2 focus:font-label focus:text-sm focus:font-bold focus:uppercase focus:tracking-widest focus:text-on-primary-container" href="#main-content">
        Skip to content
      </a>
      <nav
        aria-label="Primary"
        class="mx-auto flex max-w-7xl items-center justify-between px-8 py-4"
      >
        <a class="flex items-center gap-3 text-2xl font-bold tracking-tighter text-primary font-headline" href="#home" aria-label="${brand.name} home">
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
        <a
          class="bg-primary-container px-6 py-2 font-label text-sm font-bold uppercase tracking-widest text-on-primary-container transition-all duration-200 hover:brightness-110 active:scale-90"
          href="${links.hireMe}"
          aria-label="Jump to contact section"
        >
          Hire Me
        </a>
      </nav>
    </header>
  `;
}
