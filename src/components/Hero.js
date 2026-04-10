export function renderHero({ brand, hero, links }) {
  return `
    <section
      id="home"
      aria-labelledby="hero-title"
      class="relative flex min-h-screen items-center justify-center overflow-hidden bg-surface-container-lowest pt-20"
    >
      <div aria-hidden="true" class="absolute inset-0 z-0">
        <div class="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary-container/10 blur-[120px]"></div>
        <div class="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-tertiary-container/5 blur-[120px]"></div>
        <div class="absolute inset-0 opacity-[0.03]">
          <img
            src="./assets/images/hero-grid.png"
            alt=""
            class="h-full w-full object-cover"
            decoding="async"
          />
        </div>
      </div>
      <div class="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-8 text-center md:grid-cols-2 md:text-left">
        <div class="space-y-8">
          <div>
            <span class="mb-4 inline-block bg-surface-container-highest px-3 py-1 font-label text-xs tracking-[0.2em] text-primary-container">
              ${hero.eyebrow}
            </span>
            <h1 id="hero-title" class="font-headline text-6xl font-bold leading-none tracking-tighter text-primary md:text-8xl">
              ${hero.title}<span class="text-primary-container">.</span>
            </h1>
          </div>
          <p class="max-w-xl font-body text-xl leading-relaxed text-on-surface-variant md:text-2xl">
            ${hero.description.replace('builder mindset', '<span class="text-tertiary">builder mindset</span>')}
          </p>
          <div class="flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              class="bg-primary px-8 py-4 font-headline font-bold tracking-tight text-on-primary transition-all hover:bg-primary-container hover:text-on-primary-container active:scale-95"
              href="${links.primaryCta}"
            >
              View Projects
            </a>
            <a
              class="border border-outline-variant px-8 py-4 font-headline font-bold tracking-tight text-primary transition-all hover:bg-surface-container active:scale-95"
              href="${links.hireMe}"
            >
              Contact
            </a>
          </div>
        </div>
        <div class="relative hidden md:block">
          <div class="glass-panel group relative flex aspect-square flex-col justify-between overflow-hidden rounded-lg border border-outline-variant/20 p-8">
            <div class="absolute right-0 top-0 p-4 opacity-20 transition-opacity group-hover:opacity-40">
              <span aria-hidden="true" class="material-symbols-outlined text-8xl">terminal</span>
            </div>
            <div class="space-y-4">
              <div class="flex gap-2" aria-hidden="true">
                <div class="h-3 w-3 rounded-full bg-error/50"></div>
                <div class="h-3 w-3 rounded-full bg-tertiary-container/50"></div>
                <div class="h-3 w-3 rounded-full bg-primary-container/50"></div>
              </div>
              <div class="space-y-1 font-label text-sm text-primary-container/80">
                <p>&gt; INITIALIZING PORTFOLIO_V4.0</p>
                <p>&gt; LOADING ASSETS...</p>
                <p>&gt; SYSTEMS ONLINE</p>
                <p class="text-on-surface">&gt; WELCOME, USER</p>
              </div>
            </div>
            <div class="flex items-end justify-between">
              <div class="font-headline text-4xl font-bold text-on-surface">${brand.initials}</div>
              <div class="font-label text-xs uppercase tracking-widest text-outline">${brand.established}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
