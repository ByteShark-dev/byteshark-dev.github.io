import{n as e,r as t,t as n}from"./SiteChrome-Dxi2MMBs.js";function r(e){let{hero:t}=e.page;return`
    <section id="home" class="relative overflow-hidden pt-28 sm:pt-32">
      <div aria-hidden="true" class="hero-grid absolute inset-0 opacity-[0.16]"></div>
      <div aria-hidden="true" class="absolute left-1/2 top-10 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full radial-ring blur-3xl"></div>
      <div class="section-shell relative grid gap-10 pb-20 pt-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(300px,0.95fr)] lg:items-center lg:pb-24">
        <div class="space-y-7">
          <span class="eyebrow">${t.eyebrow}</span>
          <h1 class="max-w-4xl font-headline text-5xl font-bold leading-[0.96] tracking-tight text-on-surface sm:text-6xl">
            ${t.title}
          </h1>
          <p class="max-w-3xl text-lg leading-8 text-on-surface-variant sm:text-xl">
            ${t.description}
          </p>
          <div class="flex flex-wrap gap-4">
            <a class="cta-primary" href="${e.links.aphidexPlay}" target="_blank" rel="noreferrer">
              ${t.primaryCta}
            </a>
            <a class="cta-secondary" href="../#contact">
              ${t.secondaryCta}
            </a>
          </div>
          <a
            class="inline-flex max-w-[220px] rounded-2xl border border-outline-variant/35 bg-black/30 p-2 transition hover:border-primary-container/60"
            href="${e.links.aphidexPlay}"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="${e.assets.playBadge}"
              alt="${t.badgeAlt}"
              class="h-auto w-full"
              width="220"
              height="66"
              decoding="async"
            />
          </a>
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
            <p class="font-label text-xs uppercase tracking-[0.2em] text-secondary">${e.brand.name}</p>
            <h2 class="mt-3 text-2xl font-bold text-on-surface">${t.sideCardTitle}</h2>
            <p class="mt-3 text-sm leading-7 text-on-surface-variant">${t.sideCardBody}</p>
          </div>
        </aside>
      </div>
    </section>
  `}function i(e){let{overview:t,problem:n}=e.page;return`
    <section class="py-16 sm:py-20">
      <div class="section-shell grid gap-6 lg:grid-cols-2">
        <article class="info-card">
          <span class="eyebrow">OVERVIEW</span>
          <h2 class="mt-5 text-3xl font-bold text-on-surface">${t.title}</h2>
          <p class="mt-4 text-base leading-8 text-on-surface-variant">${t.body}</p>
        </article>
        <article class="info-card">
          <span class="eyebrow">PLAYER VALUE</span>
          <h2 class="mt-5 text-3xl font-bold text-on-surface">${n.title}</h2>
          <p class="mt-4 text-base leading-8 text-on-surface-variant">${n.body}</p>
        </article>
      </div>
    </section>
  `}function a(e){return`
    <section class="bg-surface-container-lowest/45 py-24 sm:py-28">
      <div class="section-shell">
        <div class="mb-12 space-y-5">
          <span class="eyebrow">SEO LANDING CONTENT</span>
          <h2 class="section-title">Useful content for players searching for Grounded help</h2>
          <p class="section-copy">
            The page is structured to rank with natural language while still explaining what the app actually does.
          </p>
        </div>
        <div class="grid gap-6 lg:grid-cols-2">
          ${e.page.searchSections.map(e=>`
                <article class="info-card">
                  <h3 class="text-2xl font-bold text-on-surface">${e.title}</h3>
                  <p class="mt-4 text-sm leading-7 text-on-surface-variant">${e.body}</p>
                </article>
              `).join(``)}
        </div>
      </div>
    </section>
  `}function o(e){return`
    <section class="py-24 sm:py-28">
      <div class="section-shell">
        <div class="mb-12 space-y-5">
          <span class="eyebrow">FEATURES</span>
          <h2 class="section-title">${e.page.features.title}</h2>
        </div>
        <div class="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          ${e.page.features.items.map(e=>`
                <article class="info-card">
                  <div class="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-container/15 text-primary-container">
                    <span class="material-symbols-outlined" aria-hidden="true">check_circle</span>
                  </div>
                  <h3 class="mt-5 text-xl font-bold text-on-surface">${e}</h3>
                </article>
              `).join(``)}
        </div>
      </div>
    </section>
  `}function s(e){return`
    <section class="bg-surface-container-lowest/45 py-24 sm:py-28">
      <div class="section-shell">
        <div class="mb-12 space-y-5">
          <span class="eyebrow">SCREENSHOTS</span>
          <h2 class="section-title">${e.page.screenshots.title}</h2>
          <p class="section-copy">${e.page.screenshots.intro}</p>
        </div>
        <div class="grid gap-6 lg:grid-cols-3">
          ${e.page.screenshots.items.map(e=>`
                <figure class="overflow-hidden rounded-[28px] border border-outline-variant/30 bg-surface-container/85">
                  <img
                    src="${e.src}"
                    alt="${e.alt}"
                    class="h-auto w-full"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption class="border-t border-outline-variant/25 p-5 text-sm text-on-surface-variant">
                    ${e.caption}
                  </figcaption>
                </figure>
              `).join(``)}
        </div>
      </div>
    </section>
  `}function c(e){return`
    <section class="py-24 sm:py-28">
      <div class="section-shell">
        <div class="mb-12 space-y-5">
          <span class="eyebrow">STACK</span>
          <h2 class="section-title">${e.page.architecture.title}</h2>
          <p class="section-copy">${e.page.architecture.intro}</p>
        </div>
        <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          ${e.page.architecture.items.map(e=>`
                <article class="info-card">
                  <span class="signal-chip">${e.title}</span>
                  <p class="mt-5 text-sm leading-7 text-on-surface-variant">${e.body}</p>
                </article>
              `).join(``)}
        </div>
      </div>
    </section>
  `}function l(e){return`
    <section class="bg-surface-container-lowest/45 py-24 sm:py-28">
      <div class="section-shell grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
        <article class="info-card">
          <span class="eyebrow">MONETIZATION</span>
          <h2 class="mt-5 text-3xl font-bold text-on-surface">${e.page.monetization.title}</h2>
          <p class="mt-4 text-base leading-8 text-on-surface-variant">${e.page.monetization.body}</p>
        </article>
        <article class="info-card">
          <span class="eyebrow">PROOF</span>
          <h2 class="mt-5 text-3xl font-bold text-on-surface">${e.page.proof.title}</h2>
          <ul class="mt-5 space-y-3 text-sm leading-7 text-on-surface-variant">
            ${e.page.proof.items.map(e=>`
                  <li class="flex items-start gap-3">
                    <span class="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-primary-container"></span>
                    <span>${e}</span>
                  </li>
                `).join(``)}
          </ul>
        </article>
      </div>
    </section>
  `}function u(e){return`
    <section class="py-16">
      <div class="section-shell">
        <div class="rounded-[28px] border border-outline-variant/30 bg-surface-container-low/80 p-6 text-sm leading-7 text-on-surface-variant">
          <span class="font-label text-xs uppercase tracking-[0.2em] text-secondary">Legal disclaimer</span>
          <p class="mt-4">${e.page.disclaimer}</p>
        </div>
      </div>
    </section>
  `}function d(e){return`
    <section class="pb-24 pt-8 sm:pb-28">
      <div class="section-shell">
        <div class="glass-panel overflow-hidden rounded-[32px] border border-outline-variant/30 p-8 sm:p-10 lg:p-12">
          <div class="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)] lg:items-center">
            <div class="space-y-5">
              <span class="eyebrow">BYTE SHARK</span>
              <h2 class="max-w-3xl font-headline text-4xl font-bold tracking-tight text-on-surface sm:text-5xl">
                ${e.page.finalCta.title}
              </h2>
              <p class="max-w-2xl text-lg leading-8 text-on-surface-variant">
                ${e.page.finalCta.body}
              </p>
            </div>
            <div class="flex flex-col gap-4">
              <a class="cta-primary w-full justify-center" href="../#contact">
                ${e.page.finalCta.primary}
              </a>
              <a class="cta-secondary w-full justify-center" href="../#services">
                ${e.page.finalCta.secondary}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function f(t){return`
    ${e(t,`aphidex`)}
    <main id="main-content">
      ${r(t)}
      ${i(t)}
      ${a(t)}
      ${o(t)}
      ${s(t)}
      ${c(t)}
      ${l(t)}
      ${u(t)}
      ${d(t)}
    </main>
    ${n(t,`aphidex`)}
  `}t({pageKey:`aphidex`,render:f});