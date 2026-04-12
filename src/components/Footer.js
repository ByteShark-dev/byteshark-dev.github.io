export function renderFooter({ brand, footer, links }) {
  return `
    <footer class="border-t border-[#353534]/20 bg-surface-container-lowest py-12">
      <div class="mx-auto flex max-w-7xl flex-col items-center justify-between space-y-6 px-8 md:flex-row md:space-y-0">
        <a class="flex items-center gap-3 font-headline text-lg font-bold text-on-surface" href="#home" aria-label="${brand.name} home">
          <img
            src="${brand.logoIcon}"
            alt=""
            aria-hidden="true"
            class="h-8 w-8 rounded-sm object-contain"
            width="32"
            height="32"
            decoding="async"
          />
          <span>${brand.name}</span>
        </a>
        <p class="font-label text-sm uppercase tracking-widest text-on-surface/50">
          ${footer.copyright} ${brand.footerTagline}
        </p>
        <div class="flex space-x-8 font-label text-sm uppercase tracking-widest">
          <a class="text-on-surface/50 transition-colors hover:text-primary-container hover:opacity-100" href="${links.github}" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a class="text-on-surface/50 transition-colors hover:text-primary-container hover:opacity-100" href="${links.playStore}" target="_blank" rel="noreferrer">
            Play Store
          </a>
          <a class="text-on-surface/50 transition-colors hover:text-primary-container hover:opacity-100" href="${links.email}">
            Email
          </a>
        </div>
      </div>
    </footer>
  `;
}
