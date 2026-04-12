export function renderFooter({ brand, footer, links, ui }) {
  return `
    <footer class="border-t border-[#353534]/20 bg-surface-container-lowest py-12">
      <div class="mx-auto flex max-w-7xl flex-col items-center justify-between space-y-6 px-8 md:flex-row md:space-y-0">
        <a class="flex items-center gap-3 font-headline text-lg font-bold text-on-surface" href="#home" aria-label="${ui.homeAria}">
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
          ${footer.copyright} ${footer.tagline}
        </p>
        <div class="flex flex-wrap justify-center gap-x-8 gap-y-3 font-label text-sm uppercase tracking-widest">
          <a class="text-on-surface/50 transition-colors hover:text-primary-container hover:opacity-100" href="${links.github}" target="_blank" rel="noreferrer">
            ${footer.links.github}
          </a>
          <a class="text-on-surface/50 transition-colors hover:text-primary-container hover:opacity-100" href="${links.linkedin}" target="_blank" rel="noreferrer">
            ${footer.links.linkedin}
          </a>
          <a class="text-on-surface/50 transition-colors hover:text-primary-container hover:opacity-100" href="${links.playStore}" target="_blank" rel="noreferrer">
            ${footer.links.playStore}
          </a>
          <a class="text-on-surface/50 transition-colors hover:text-primary-container hover:opacity-100" href="${links.email}">
            ${footer.links.email}
          </a>
        </div>
      </div>
    </footer>
  `;
}
