import{n as e,r as t,t as n}from"./SiteChrome-Dxi2MMBs.js";function r(e){let{hero:t}=e.page,{links:n,brand:r}=e,i=t.bullets.map(e=>`
        <li class="flex items-start gap-3">
          <span class="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-container/15 text-primary-container">
            <span class="material-symbols-outlined text-sm" aria-hidden="true">bolt</span>
          </span>
          <span>${e}</span>
        </li>
      `).join(``);return`
    <section id="home" class="relative overflow-hidden pt-28 sm:pt-32">
      <div aria-hidden="true" class="hero-grid absolute inset-0 opacity-[0.18]"></div>
      <div aria-hidden="true" class="absolute left-1/2 top-12 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full radial-ring blur-3xl"></div>
      <div class="section-shell relative grid gap-14 pb-20 pt-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-center lg:pb-28">
        <div class="space-y-8">
          <div class="space-y-5">
            <span class="eyebrow">${t.eyebrow}</span>
            <h1 class="max-w-4xl font-headline text-5xl font-bold leading-[0.95] tracking-tight text-on-surface sm:text-6xl lg:text-7xl">
              ${t.title}
            </h1>
            <p class="max-w-2xl text-lg leading-8 text-on-surface-variant sm:text-xl">
              ${t.description}
            </p>
          </div>
          <div class="flex flex-wrap gap-4">
            <a class="cta-primary" href="${n.whatsappQuote}" target="_blank" rel="noreferrer">
              ${t.primaryCta}
            </a>
            <a class="cta-secondary" href="#proof">
              ${t.secondaryCta}
            </a>
          </div>
          <ul class="grid gap-4 text-sm leading-6 text-on-surface-variant sm:grid-cols-2">
            ${i}
          </ul>
        </div>
        <aside class="glass-panel relative overflow-hidden rounded-[28px] border border-outline-variant/30 p-7 shadow-[0_24px_90px_rgba(0,0,0,0.28)]">
          <div aria-hidden="true" class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-container via-white/70 to-primary-container"></div>
          <div class="flex items-start justify-between gap-6">
            <div>
              <p class="font-label text-xs uppercase tracking-[0.22em] text-primary-container">${r.name}</p>
              <h2 class="mt-3 text-2xl font-bold text-on-surface">${t.statusCardTitle}</h2>
            </div>
            <img
              src="${r.logoMark}"
              alt="${r.name} logo"
              class="h-14 w-14 object-contain"
              width="56"
              height="56"
              decoding="async"
            />
          </div>
          <p class="mt-5 max-w-sm text-base leading-7 text-on-surface-variant">
            ${t.statusCardBody}
          </p>
          <div class="mt-8 grid gap-4 sm:grid-cols-2">
            <div class="info-card bg-surface-container-low/80 p-5">
              <p class="font-label text-xs uppercase tracking-[0.18em] text-secondary">Focus</p>
              <p class="mt-3 text-lg font-semibold text-on-surface">Commercial clarity</p>
            </div>
            <div class="info-card bg-surface-container-low/80 p-5">
              <p class="font-label text-xs uppercase tracking-[0.18em] text-secondary">Build</p>
              <p class="mt-3 text-lg font-semibold text-on-surface">Web, app and systems</p>
            </div>
            <div class="info-card bg-surface-container-low/80 p-5 sm:col-span-2">
              <p class="font-label text-xs uppercase tracking-[0.18em] text-secondary">Approach</p>
              <p class="mt-3 text-lg font-semibold text-on-surface">Design that looks premium. Engineering that survives real use.</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  `}function i({problems:e}){let t=e.items.map(e=>`
        <article class="info-card">
          <div class="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-container/15 text-primary-container">
            <span class="material-symbols-outlined" aria-hidden="true">${e.icon}</span>
          </div>
          <h3 class="text-xl font-bold text-on-surface">${e.title}</h3>
          <p class="mt-3 text-sm leading-7 text-on-surface-variant">${e.body}</p>
        </article>
      `).join(``);return`
    <section id="problems" class="scroll-mt-28 py-24 sm:py-28">
      <div class="section-shell">
        <div class="mb-12 space-y-5">
          <span class="eyebrow">PROBLEMS WE FIX</span>
          <h2 class="section-title">${e.title}</h2>
          <p class="section-copy">${e.intro}</p>
        </div>
        <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          ${t}
        </div>
      </div>
    </section>
  `}function a(e){let{services:t}=e.page,{links:n}=e,r=t.items.map(e=>`
        <article class="glass-panel rounded-[24px] border border-outline-variant/28 p-6">
          <div class="flex items-start justify-between gap-4">
            <div class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-container/16 text-primary-container">
              <span class="material-symbols-outlined" aria-hidden="true">${e.icon}</span>
            </div>
            <span class="signal-chip">Service</span>
          </div>
          <h3 class="mt-6 text-2xl font-bold text-on-surface">${e.title}</h3>
          <p class="mt-3 text-sm leading-7 text-on-surface-variant">${e.description}</p>
          <ul class="mt-6 space-y-3 text-sm text-on-surface-variant">
            ${e.benefits.map(e=>`
                  <li class="flex items-start gap-3">
                    <span class="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-primary-container"></span>
                    <span>${e}</span>
                  </li>
                `).join(``)}
          </ul>
          <a
            class="mt-7 inline-flex items-center gap-2 font-label text-sm font-bold uppercase tracking-[0.18em] text-primary-container transition hover:text-white"
            href="${n.whatsappQuote}"
            target="_blank"
            rel="noreferrer"
          >
            ${e.cta}
            <span class="material-symbols-outlined text-base" aria-hidden="true">north_east</span>
          </a>
        </article>
      `).join(``);return`
    <section id="services" class="scroll-mt-28 bg-surface-container-lowest/45 py-24 sm:py-28">
      <div class="section-shell">
        <div class="mb-12 space-y-5">
          <span class="eyebrow">SERVICES</span>
          <h2 class="section-title">${t.title}</h2>
          <p class="section-copy">${t.intro}</p>
        </div>
        <div class="grid gap-6 xl:grid-cols-4 md:grid-cols-2">
          ${r}
        </div>
      </div>
    </section>
  `}function o({proof:e}){let t=e.items.map(e=>`
        <article class="overflow-hidden rounded-[28px] border border-outline-variant/30 bg-surface-container/82 shadow-[0_24px_90px_rgba(0,0,0,0.22)]">
          <div class="relative aspect-[16/10] overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(30,90,168,0.28),_rgba(7,17,31,0.95)_62%)]">
            <img
              src="${e.image}"
              alt="${e.imageAlt}"
              class="h-full w-full object-contain p-6 transition duration-500 hover:scale-[1.03]"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="space-y-6 p-7">
            <div class="space-y-3">
              <span class="signal-chip">${e.eyebrow}</span>
              <div>
                <h3 class="text-3xl font-bold text-on-surface">${e.name}</h3>
                <p class="mt-3 text-sm leading-7 text-on-surface-variant">${e.description}</p>
              </div>
            </div>
            <div class="flex flex-wrap gap-2">
              ${e.highlights.map(e=>`<span class="signal-chip">${e}</span>`).join(``)}
            </div>
            <div class="flex flex-wrap gap-4">
              <a class="cta-primary px-5 py-3 text-xs" href="${e.primaryCtaHref}" ${e.primaryCtaHref.startsWith(`http`)?`target="_blank" rel="noreferrer"`:``}>
                ${e.primaryCtaLabel}
              </a>
              <a class="cta-secondary px-5 py-3 text-xs" href="${e.secondaryCtaHref}" target="_blank" rel="noreferrer">
                ${e.secondaryCtaLabel}
              </a>
            </div>
          </div>
        </article>
      `).join(``);return`
    <section id="proof" class="scroll-mt-28 py-24 sm:py-28">
      <div class="section-shell">
        <div class="mb-12 space-y-5">
          <span class="eyebrow">PROOF OF WORK</span>
          <h2 class="section-title">${e.title}</h2>
          <p class="section-copy">${e.intro}</p>
        </div>
        <div class="grid gap-7 xl:grid-cols-2">
          ${t}
        </div>
      </div>
    </section>
  `}function s(e){let{contact:t}=e.page,{links:n}=e,r=t.checklist.map(e=>`
        <li class="flex items-start gap-3">
          <span class="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-container/15 text-primary-container">
            <span class="material-symbols-outlined text-sm" aria-hidden="true">check</span>
          </span>
          <span>${e}</span>
        </li>
      `).join(``);return`
    <section id="contact" class="scroll-mt-28 pb-24 pt-10 sm:pb-28">
      <div class="section-shell">
        <div class="glass-panel overflow-hidden rounded-[32px] border border-outline-variant/30 p-8 sm:p-10 lg:p-12">
          <div class="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-start">
            <div class="space-y-6">
              <span class="eyebrow">CONTACT</span>
              <h2 class="max-w-3xl font-headline text-4xl font-bold tracking-tight text-on-surface sm:text-5xl">
                ${t.title}
              </h2>
              <p class="max-w-2xl text-lg leading-8 text-on-surface-variant">
                ${t.intro}
              </p>
              <div class="flex flex-wrap gap-4">
                <a class="cta-primary" href="${n.whatsappQuote}" target="_blank" rel="noreferrer">
                  ${t.primaryCta}
                </a>
                <a class="cta-secondary" href="#proof">
                  ${t.secondaryCta}
                </a>
              </div>
              <div class="rounded-[24px] border border-outline-variant/25 bg-surface-container-low/80 p-6">
                <p class="font-label text-xs uppercase tracking-[0.2em] text-secondary">${t.checklistTitle}</p>
                <ul class="mt-5 grid gap-4 text-sm leading-7 text-on-surface-variant md:grid-cols-2">
                  ${r}
                </ul>
              </div>
            </div>
            <aside class="space-y-6 rounded-[28px] border border-outline-variant/25 bg-surface-container-low/80 p-6">
              <div>
                <p class="font-label text-xs uppercase tracking-[0.2em] text-secondary">${t.supportTitle}</p>
                <p class="mt-4 text-sm leading-7 text-on-surface-variant">${t.supportCopy}</p>
              </div>
              <div class="space-y-4">
                <a class="info-card flex items-center gap-4 p-5 transition hover:border-primary-container/40" href="${n.email}">
                  <span class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-container/15 text-primary-container">
                    <span class="material-symbols-outlined" aria-hidden="true">mail</span>
                  </span>
                  <span>
                    <span class="block font-label text-xs uppercase tracking-[0.18em] text-secondary">${t.touchpoints.emailLabel}</span>
                    <span class="mt-1 block font-semibold text-on-surface">${n.emailAddress}</span>
                  </span>
                </a>
                <a class="info-card flex items-center gap-4 p-5 transition hover:border-primary-container/40" href="${n.github}" target="_blank" rel="noreferrer">
                  <span class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-container/15 text-primary-container">
                    <span class="material-symbols-outlined" aria-hidden="true">code</span>
                  </span>
                  <span>
                    <span class="block font-label text-xs uppercase tracking-[0.18em] text-secondary">${t.touchpoints.githubLabel}</span>
                    <span class="mt-1 block font-semibold text-on-surface">github.com/byteshark-dev</span>
                  </span>
                </a>
                <a class="info-card flex items-center gap-4 p-5 transition hover:border-primary-container/40" href="${n.linkedin}" target="_blank" rel="noreferrer">
                  <span class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-container/15 text-primary-container">
                    <span class="material-symbols-outlined" aria-hidden="true">business_center</span>
                  </span>
                  <span>
                    <span class="block font-label text-xs uppercase tracking-[0.18em] text-secondary">${t.touchpoints.linkedinLabel}</span>
                    <span class="mt-1 block font-semibold text-on-surface">Angel Arenas Patino</span>
                  </span>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  `}function c(t){return`
    ${e(t,`home`)}
    <main id="main-content">
      ${r(t)}
      ${i(t.page)}
      ${a(t)}
      ${o(t.page)}
      ${s(t)}
    </main>
    ${n(t,`home`)}
  `}t({pageKey:`home`,render:c});