(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{name:`Aphidex`,tagline:{es:`Herramienta de Datos de Alto Rendimiento`,en:`High-Performance Data Tool`},description:{es:`Un motor de indexacion especializado para recuperar datasets anidados con rapidez, optimizado para infraestructuras empresariales a gran escala.`,en:`A specialized indexing engine built for rapid retrieval of nested datasets, optimized for large-scale enterprise infrastructures.`},stack:[`Rust`,`PostgreSQL`,`Redis`],repoUrl:`https://github.com/ByteShark-dev/Aphidex`,image:`./assets/images/Aphidex_logo.webp`,imageAlt:{es:`Logo de Aphidex.`,en:`Aphidex logo.`},icon:`open_in_new`,imageFit:`contain`},{name:`Homelab`,tagline:{es:`Ecosistema Autoalojado`,en:`Self-Hosted Ecosystem`},description:{es:`Una infraestructura cloud personal con pipelines de CI/CD automatizados, orquestacion de contenedores y monitoreo en tiempo real.`,en:`A personal cloud infrastructure featuring automated CI/CD pipelines, container orchestration, and real-time monitoring.`},stack:[`Docker`,`Kubernetes`,`Ansible`],repoUrl:`https://github.com/ByteShark-dev/homelab-nextcloud`,image:`./assets/images/nextcloud.png`,imageAlt:{es:`Logo de Nextcloud.`,en:`Nextcloud logo.`},icon:`dns`,imageFit:`contain`,imageWidth:1200,imageHeight:720}];function t({about:e}){let t=[`language`,`settings_ethernet`,`router`,`sports_esports`],n=e.skills.map((e,n)=>`
        <div class="flex flex-col items-center gap-4 border-b border-outline-variant/10 bg-surface-container p-6 transition-colors hover:bg-surface-container-high">
          <span aria-hidden="true" class="material-symbols-outlined text-primary-container">${t[n]}</span>
          <span class="font-label text-sm uppercase tracking-widest">${e}</span>
        </div>
      `).join(``);return`
    <section id="about" aria-labelledby="about-title" class="scroll-mt-28 bg-surface py-32">
      <div class="mx-auto max-w-7xl px-8">
        <div class="grid gap-8 md:grid-cols-12">
          <div class="space-y-8 md:col-span-8">
            <h2 id="about-title" class="flex items-center gap-4 font-headline text-4xl font-bold text-primary">
              <span aria-hidden="true" class="material-symbols-outlined text-primary-container">person</span>
              ${e.title}
            </h2>
            <div class="border-l-2 border-primary-container bg-surface-container-low p-8">
              <p class="font-body text-lg leading-relaxed text-on-surface-variant">
                ${e.body}
              </p>
            </div>
          </div>
          <aside class="flex flex-col items-center justify-center bg-surface-container-highest p-8 text-center md:col-span-4" aria-label="${e.calloutTitle}">
            <span aria-hidden="true" class="material-symbols-outlined mb-4 text-5xl text-primary-container">architecture</span>
            <h3 class="mb-2 font-headline text-xl font-bold">${e.calloutTitle}</h3>
            <p class="font-label text-sm text-outline">${e.calloutBody}</p>
          </aside>
          <div class="mt-8 grid grid-cols-2 gap-4 md:col-span-12 md:grid-cols-4">
            ${n}
          </div>
        </div>
      </div>
    </section>
  `}function n(e,t){return e.replace(`{value}`,t)}function r({contact:e,links:t}){return`
    <section id="contact" aria-labelledby="contact-title" class="scroll-mt-28 bg-surface py-32">
      <div class="mx-auto max-w-7xl px-8">
        <div class="grid gap-16 md:grid-cols-2">
          <div class="space-y-12">
            <div>
              <h2 id="contact-title" class="mb-4 font-headline text-5xl font-bold tracking-tighter text-primary">${e.title}</h2>
              <p class="text-lg text-on-surface-variant">${e.intro}</p>
            </div>
            <div class="space-y-6">
              <a class="group flex items-center gap-6" href="${t.email}" aria-label="${n(e.aria.email,e.email)}">
                <div class="flex h-12 w-12 items-center justify-center rounded bg-surface-container-high transition-colors group-hover:bg-primary-container/20">
                  <span aria-hidden="true" class="material-symbols-outlined text-primary-container">mail</span>
                </div>
                <div>
                  <p class="font-label text-xs uppercase tracking-widest text-outline">${e.labels.email}</p>
                  <p class="font-headline font-bold text-on-surface">${e.email}</p>
                </div>
              </a>
              <a class="group flex items-center gap-6" href="${t.github}" target="_blank" rel="noreferrer" aria-label="${e.aria.github}">
                <div class="flex h-12 w-12 items-center justify-center rounded bg-surface-container-high transition-colors group-hover:bg-primary-container/20">
                  <span aria-hidden="true" class="material-symbols-outlined text-primary-container">code</span>
                </div>
                <div>
                  <p class="font-label text-xs uppercase tracking-widest text-outline">${e.labels.github}</p>
                  <p class="font-headline font-bold text-on-surface">${e.githubLabel}</p>
                </div>
              </a>
              <a class="group flex items-center gap-6" href="${t.linkedin}" target="_blank" rel="noreferrer" aria-label="${e.aria.linkedin}">
                <div class="flex h-12 w-12 items-center justify-center rounded bg-surface-container-high transition-colors group-hover:bg-primary-container/20">
                  <span aria-hidden="true" class="material-symbols-outlined text-primary-container">business_center</span>
                </div>
                <div>
                  <p class="font-label text-xs uppercase tracking-widest text-outline">${e.labels.linkedin}</p>
                  <p class="font-headline font-bold text-on-surface">${e.linkedinLabel}</p>
                </div>
              </a>
            </div>
          </div>
          <div class="glass-panel relative overflow-hidden rounded-lg border border-outline-variant/10 p-8">
            <form class="relative z-10 space-y-6" data-contact-form>
              <div class="space-y-1">
                <label class="ml-1 font-label text-xs uppercase tracking-widest text-outline" for="contact-name">${e.form.nameLabel}</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="${e.form.namePlaceholder}"
                  required
                  class="w-full border-0 border-b-2 border-outline-variant bg-surface-container-highest/50 text-on-surface placeholder:text-outline-variant/50 focus:border-primary-container focus:ring-0"
                />
              </div>
              <div class="space-y-1">
                <label class="ml-1 font-label text-xs uppercase tracking-widest text-outline" for="contact-email">${e.form.emailLabel}</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="${e.form.emailPlaceholder}"
                  required
                  class="w-full border-0 border-b-2 border-outline-variant bg-surface-container-highest/50 text-on-surface placeholder:text-outline-variant/50 focus:border-primary-container focus:ring-0"
                />
              </div>
              <div class="space-y-1">
                <label class="ml-1 font-label text-xs uppercase tracking-widest text-outline" for="contact-message">${e.form.messageLabel}</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  placeholder="${e.form.messagePlaceholder}"
                  required
                  class="w-full border-0 border-b-2 border-outline-variant bg-surface-container-highest/50 text-on-surface placeholder:text-outline-variant/50 focus:border-primary-container focus:ring-0"
                ></textarea>
              </div>
              <button
                class="w-full bg-primary-container py-4 font-headline font-bold tracking-tight text-on-primary-container transition-all hover:brightness-110 active:scale-95"
                type="submit"
              >
                ${e.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `}function i({brand:e,footer:t,links:n,ui:r}){return`
    <footer class="border-t border-[#353534]/20 bg-surface-container-lowest py-12">
      <div class="mx-auto flex max-w-7xl flex-col items-center justify-between space-y-6 px-8 md:flex-row md:space-y-0">
        <a class="flex items-center gap-3 font-headline text-lg font-bold text-on-surface" href="#home" aria-label="${r.homeAria}">
          <img
            src="${e.logoIcon}"
            alt=""
            aria-hidden="true"
            class="h-8 w-8 rounded-sm object-contain"
            width="32"
            height="32"
            decoding="async"
          />
          <span>${e.name}</span>
        </a>
        <p class="font-label text-sm uppercase tracking-widest text-on-surface/50">
          ${t.copyright} ${t.tagline}
        </p>
        <div class="flex flex-wrap justify-center gap-x-8 gap-y-3 font-label text-sm uppercase tracking-widest">
          <a class="text-on-surface/50 transition-colors hover:text-primary-container hover:opacity-100" href="${n.github}" target="_blank" rel="noreferrer">
            ${t.links.github}
          </a>
          <a class="text-on-surface/50 transition-colors hover:text-primary-container hover:opacity-100" href="${n.linkedin}" target="_blank" rel="noreferrer">
            ${t.links.linkedin}
          </a>
          <a class="text-on-surface/50 transition-colors hover:text-primary-container hover:opacity-100" href="${n.playStore}" target="_blank" rel="noreferrer">
            ${t.links.playStore}
          </a>
          <a class="text-on-surface/50 transition-colors hover:text-primary-container hover:opacity-100" href="${n.email}">
            ${t.links.email}
          </a>
        </div>
      </div>
    </footer>
  `}function a({brand:e,hero:t,links:n}){let r=t.description.replace(/builder mindset|mentalidad de builder/i,`<span class="text-primary-container">$&</span>`),i=t.terminalLines.map((e,n)=>`<p class="${n===t.terminalLines.length-1?`text-on-surface`:``}">${e}</p>`).join(``);return`
    <section
      id="home"
      aria-labelledby="hero-title"
      class="relative flex min-h-screen items-center justify-center overflow-hidden bg-surface-container-lowest pt-20"
    >
      <div aria-hidden="true" class="absolute inset-0 z-0">
        <div class="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary-container/10 blur-[120px]"></div>
        <div class="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary-container/10 blur-[140px]"></div>
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
            <span class="mb-4 inline-block bg-surface-container-highest px-3 py-1 font-label text-xs tracking-[0.2em] text-primary">
              ${t.eyebrow}
            </span>
            <h1 id="hero-title" class="font-headline text-6xl font-bold leading-none tracking-tighter text-primary md:text-8xl">
              ${t.title}
            </h1>
          </div>
          <p class="max-w-xl font-body text-xl leading-relaxed text-on-surface-variant md:text-2xl">
            ${r}
          </p>
          <div class="flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              class="bg-primary-container px-8 py-4 font-headline font-bold tracking-tight text-on-primary-container transition-all hover:brightness-110 active:scale-95"
              href="${n.primaryCta}"
            >
              ${t.primaryCta}
            </a>
            <a
              class="border border-outline-variant px-8 py-4 font-headline font-bold tracking-tight text-primary transition-all hover:bg-surface-container active:scale-95"
              href="${n.hireMe}"
            >
              ${t.secondaryCta}
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
                <div class="h-3 w-3 rounded-full bg-primary/50"></div>
                <div class="h-3 w-3 rounded-full bg-secondary/50"></div>
                <div class="h-3 w-3 rounded-full bg-primary-container/50"></div>
              </div>
              <div class="space-y-1 font-label text-sm text-primary-container/80">
                ${i}
              </div>
            </div>
            <div class="flex items-end justify-between">
              <img
                src="${e.logoMark}"
                alt="${e.name} logo"
                class="h-14 w-14 object-contain"
                width="56"
                height="56"
                loading="eager"
                decoding="async"
              />
              <div class="font-label text-xs uppercase tracking-widest text-outline">${e.established}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function o({brand:e,links:t,navigation:n,ui:r,locale:i,supportedLocales:a}){let o=n.map(({label:e,href:t})=>`
          <a class="text-on-surface opacity-70 transition-all hover:text-primary-container hover:opacity-100 focus-visible:opacity-100 focus-visible:text-primary-container" href="${t}">
            ${e}
          </a>
        `).join(``),s=a.map(e=>`
        <button
          class="rounded px-2 py-1 text-xs font-bold uppercase tracking-widest transition-colors ${e===i?`bg-primary-container text-on-primary-container`:`text-on-surface/65 hover:text-primary`}"
          type="button"
          data-locale-target="${e}"
          aria-pressed="${e===i}"
        >
          ${r.localeLabels[e]}
        </button>
      `).join(``);return`
    <header class="site-navbar fixed inset-x-0 top-0 z-50" data-navbar>
      <a class="skip-link sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-primary-container focus:px-4 focus:py-2 focus:font-label focus:text-sm focus:font-bold focus:uppercase focus:tracking-widest focus:text-on-primary-container" href="#main-content">
        ${r.skipToContent}
      </a>
      <nav
        aria-label="Primary"
        class="mx-auto flex max-w-7xl items-center justify-between px-8 py-4"
      >
        <a class="flex items-center gap-3 text-2xl font-bold tracking-tighter text-primary font-headline" href="#home" aria-label="${r.homeAria}">
          <img
            src="${e.logoIcon}"
            alt=""
            aria-hidden="true"
            class="h-9 w-9 rounded-sm object-contain"
            width="36"
            height="36"
            decoding="async"
          />
          <span>${e.name}</span>
        </a>
        <div class="hidden items-center space-x-8 font-label tracking-tight md:flex">
          ${o}
        </div>
        <div class="flex items-center gap-3">
          <div
            class="flex items-center gap-1 rounded border border-outline-variant/40 bg-surface-container-high/70 p-1"
            aria-label="${r.languageLabel}"
          >
            ${s}
          </div>
          <a
            class="bg-primary-container px-6 py-2 font-label text-sm font-bold uppercase tracking-widest text-on-primary-container transition-all duration-200 hover:brightness-110 active:scale-90"
            href="${t.hireMe}"
            aria-label="${r.jumpToContact}"
          >
            ${r.hireMe}
          </a>
        </div>
      </nav>
    </header>
  `}function s(e,t){return Object.entries(t).reduce((e,[t,n])=>e.replaceAll(`{${t}}`,n),e)}function c(e,t,n){let r=e.imageWidth&&e.imageHeight?`width="${e.imageWidth}" height="${e.imageHeight}"`:``,i=e.imageFit===`contain`?`h-full w-full object-contain p-10 transition-transform duration-500 group-hover:scale-105`:`h-full w-full object-cover opacity-40 grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-60 group-hover:grayscale-0`,a=e.tagline?.[n]??e.tagline?.es??e.tagline,o=e.description?.[n]??e.description?.es??e.description,c=e.imageAlt?.[n]??e.imageAlt?.es??e.imageAlt,l=e.stack.map(e=>`
        <span class="bg-surface-container-highest px-2 py-1 font-label text-[10px] uppercase tracking-wider text-secondary">
          ${e}
        </span>
      `).join(``);return`
    <article class="group relative overflow-hidden rounded-lg border border-outline-variant/5 bg-surface-container">
      <div class="aspect-video overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(30,90,168,0.22),_rgba(4,13,26,0.95)_62%)]">
        <img
          src="${e.image}"
          alt="${c}"
          class="${i}"
          ${r}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div class="space-y-6 p-8">
        <div class="flex items-start justify-between gap-6">
          <div>
            <h3 class="font-headline text-2xl font-bold text-on-surface">${e.name}</h3>
            <p class="mt-1 font-label text-xs uppercase tracking-widest text-primary-container">${a}</p>
          </div>
          <span aria-hidden="true" class="material-symbols-outlined text-outline transition-colors group-hover:text-primary-container">
            ${e.icon}
          </span>
        </div>
        <p class="font-body leading-relaxed text-on-surface-variant">
          ${o}
        </p>
        <div class="flex flex-wrap gap-2">
          ${l}
        </div>
        <div class="pt-4">
          <a
            class="inline-flex items-center gap-2 font-headline font-bold text-primary-container transition-colors hover:text-primary"
            href="${e.repoUrl}"
            target="_blank"
            rel="noreferrer"
            aria-label="${s(t.repoAria,{projectName:e.name})}"
          >
            <span aria-hidden="true" class="material-symbols-outlined text-sm">terminal</span>
            ${t.repoLabel}
          </a>
        </div>
      </div>
    </article>
  `}function l(e,t,n){return`
    <section id="projects" aria-labelledby="projects-title" class="scroll-mt-28 bg-surface-container-lowest py-32">
      <div class="mx-auto max-w-7xl px-8">
        <div class="mb-16 flex items-end justify-between gap-8">
          <div class="space-y-4">
            <h2 id="projects-title" class="font-headline text-5xl font-bold tracking-tight text-primary">${t.title}</h2>
            <div class="h-1 w-24 bg-primary-container"></div>
          </div>
          <p class="hidden max-w-xs text-right font-label italic text-outline md:block">
            ${t.intro}
          </p>
        </div>
        <div class="grid gap-12 md:grid-cols-2">
          ${e.map(e=>c(e,t,n)).join(``)}
        </div>
      </div>
    </section>
  `}var u=[`es`,`en`],d={es:{seo:{title:`ByteShark | Angel Arenas Patiño`,description:`Portafolio de ByteShark enfocado en sistemas, apps y experiencias digitales construidas con mentalidad de builder.`},navigation:[{label:`Sobre mí`,href:`#about`},{label:`Proyectos`,href:`#projects`},{label:`Contacto`,href:`#contact`}],hero:{eyebrow:`ANGEL ARENAS PATIÑO`,title:`ByteShark`,description:`Construyendo sistemas, apps y experiencias digitales con mentalidad de builder.`,terminalLines:[`> INICIALIZANDO PORTAFOLIO_V4.0`,`> CARGANDO ASSETS...`,`> SISTEMAS EN LINEA`,`> BIENVENIDO, USUARIO`],primaryCta:`Ver proyectos`,secondaryCta:`Contacto`},about:{title:`La Mentalidad Builder`,body:`No solo escribo codigo; diseno soluciones. Desde aplicaciones web de alto rendimiento hasta ecosistemas IoT complejos y entornos inmersivos para videojuegos, mi enfoque nace de la mentalidad builder: entender el nucleo del problema y construir la solucion mas eficiente, escalable y elegante posible.`,calloutTitle:`Arquitecto de Sistemas`,calloutBody:`Disenando la base de futuras experiencias digitales.`,skills:[`Desarrollo Web`,`Sistemas`,`IoT`,`Game Dev`]},projects:{title:`Proyectos Destacados`,intro:`Trabajos seleccionados que muestran profundidad tecnica y criterio visual.`,repoLabel:`REPOSITORIO EN GITHUB`,repoAria:`Abrir repositorio de {projectName}`},contact:{title:`Construyamos algo.`,intro:`Disponible para colaboraciones, diseno de sistemas y retos tecnicos complejos.`,labels:{email:`Correo`,github:`GitHub`,linkedin:`LinkedIn`},form:{nameLabel:`Tu nombre`,namePlaceholder:`Tu nombre`,emailLabel:`Correo electronico`,emailPlaceholder:`tu@correo.com`,messageLabel:`Mensaje`,messagePlaceholder:`Cuentame sobre tu proyecto...`,submit:`ENVIAR MENSAJE`},mailto:{subjectPrefix:`Consulta de portafolio de`,bodyName:`Nombre`,bodyEmail:`Correo`},aria:{email:`Enviar correo a {value}`,github:`Abrir perfil de GitHub`,linkedin:`Abrir perfil de LinkedIn`}},footer:{tagline:`Construido para la era obsidiana.`,links:{github:`GitHub`,linkedin:`LinkedIn`,playStore:`Play Store`,email:`Correo`}},ui:{skipToContent:`Saltar al contenido`,hireMe:`Contactame`,jumpToContact:`Ir a la seccion de contacto`,homeAria:`Inicio de ByteShark`,languageLabel:`Idioma`,localeLabels:{es:`ES`,en:`EN`}}},en:{seo:{title:`ByteShark | Angel Arenas Patiño`,description:`ByteShark portfolio focused on systems, apps, and digital experiences built with a builder mindset.`},navigation:[{label:`About`,href:`#about`},{label:`Projects`,href:`#projects`},{label:`Contact`,href:`#contact`}],hero:{eyebrow:`ANGEL ARENAS PATIÑO`,title:`ByteShark`,description:`Building systems, apps and digital experiences with a builder mindset.`,terminalLines:[`> INITIALIZING PORTFOLIO_V4.0`,`> LOADING ASSETS...`,`> SYSTEMS ONLINE`,`> WELCOME, USER`],primaryCta:`View Projects`,secondaryCta:`Contact`},about:{title:`The Builder Mindset`,body:`I do not just write code; I architect solutions. From high-performance web applications to intricate IoT ecosystems and immersive game environments, my approach is rooted in the Builder Mindset: understanding the core problem and building the most efficient, scalable, and elegant solution possible.`,calloutTitle:`Systems Architect`,calloutBody:`Designing the backbone of future digital experiences.`,skills:[`Web Dev`,`Systems`,`IoT`,`Game Dev`]},projects:{title:`Featured Projects`,intro:`Selected works demonstrating technical depth and aesthetic precision.`,repoLabel:`GITHUB REPOSITORY`,repoAria:`Open {projectName} repository`},contact:{title:`Let's build something.`,intro:`Open for collaborations, system designs, or complex technical challenges.`,labels:{email:`Email`,github:`GitHub`,linkedin:`LinkedIn`},form:{nameLabel:`Your Name`,namePlaceholder:`John Doe`,emailLabel:`Email Address`,emailPlaceholder:`john@example.com`,messageLabel:`Message`,messagePlaceholder:`Tell me about your project...`,submit:`SEND MESSAGE`},mailto:{subjectPrefix:`Portfolio inquiry from`,bodyName:`Name`,bodyEmail:`Email`},aria:{email:`Email {value}`,github:`Open GitHub profile`,linkedin:`Open LinkedIn profile`}},footer:{tagline:`Built for the obsidian era.`,links:{github:`GitHub`,linkedin:`LinkedIn`,playStore:`Play Store`,email:`Email`}},ui:{skipToContent:`Skip to content`,hireMe:`Hire Me`,jumpToContact:`Jump to contact section`,homeAria:`ByteShark home`,languageLabel:`Language`,localeLabels:{es:`ES`,en:`EN`}}}},f={defaultLocale:`es`,supportedLocales:u,brand:{name:`ByteShark`,owner:`Angel Arenas Patiño`,initials:`AA`,established:`EST. 2024`,logoIcon:`/assets/images/byteshark_graphic_logo.png`,logoMark:`/assets/images/byteshark_graphic_logo_white.svg`},seo:{siteUrl:`https://byteshark.dev/`,ogImagePath:`/assets/images/byteshark_graphic_logo.png`},links:{primaryCta:`#projects`,hireMe:`#contact`,github:`https://github.com/byteshark-dev`,linkedin:`https://www.linkedin.com/in/angel-arenas-pati%C3%B1o-534372402/`,playStore:`https://play.google.com/store/apps/dev?id=7017575535426186313`,email:`mailto:byteshark098@gmail.com`},contactInfo:{email:`byteshark098@gmail.com`,githubLabel:`github.com/byteshark-dev`,linkedinLabel:`linkedin.com/in/angel-arenas-pati%C3%B1o-534372402`},localizedContent:d};function p(e=`es`){let t=d[e]?e:`es`,n=d[t];return{...f,locale:t,seo:{...f.seo,...n.seo},navigation:n.navigation,hero:n.hero,about:n.about,projects:n.projects,contact:{...f.contactInfo,...n.contact},footer:{copyright:`© 2024 ByteShark.`,...n.footer},ui:n.ui}}var m=document.querySelector(`#app`),h=`byteshark-locale`,g=v(),_=!1;function v(){let e=window.localStorage.getItem(h);return u.includes(e)?e:`es`}function y(n){let s=p(n);return`
    ${o(s)}
    <main id="main-content">
      ${a(s)}
      ${t(s)}
      ${l(e,s.projects,s.locale)}
      ${r(s)}
    </main>
    ${i(s)}
  `}function b(e){document.title=e.seo.title,document.documentElement.lang=e.locale;let t=new URL(e.seo.ogImagePath,e.seo.siteUrl).toString(),n=e.locale===`es`?`es_MX`:`en_US`;[[`meta[name="description"]`,e.seo.description,`content`],[`meta[name="author"]`,e.brand.owner,`content`],[`link[rel="canonical"]`,e.seo.siteUrl,`href`],[`meta[property="og:site_name"]`,e.brand.name,`content`],[`meta[property="og:locale"]`,n,`content`],[`meta[property="og:url"]`,e.seo.siteUrl,`content`],[`meta[property="og:title"]`,e.seo.title,`content`],[`meta[property="og:description"]`,e.seo.description,`content`],[`meta[property="og:image"]`,t,`content`],[`meta[property="og:image:alt"]`,e.seo.title,`content`],[`meta[name="twitter:title"]`,e.seo.title,`content`],[`meta[name="twitter:description"]`,e.seo.description,`content`],[`meta[name="twitter:image"]`,t,`content`],[`meta[name="twitter:image:alt"]`,e.seo.title,`content`]].forEach(([e,t,n])=>{let r=document.querySelector(e);r&&r.setAttribute(n,t)});let r={"@context":`https://schema.org`,"@graph":[{"@type":`WebSite`,name:e.brand.name,url:e.seo.siteUrl,description:e.seo.description,inLanguage:e.locale},{"@type":`Person`,name:e.brand.owner,url:e.seo.siteUrl,image:t,sameAs:[e.links.github,e.links.linkedin,e.links.playStore]},{"@type":`Organization`,name:e.brand.name,url:e.seo.siteUrl,logo:t,founder:{"@type":`Person`,name:e.brand.owner},sameAs:[e.links.github,e.links.linkedin,e.links.playStore]}]},i=document.querySelector(`#structured-data`);i&&(i.textContent=JSON.stringify(r,null,2))}function x(){let e=()=>{let e=document.querySelector(`[data-navbar]`);e&&e.classList.toggle(`is-scrolled`,window.scrollY>12)};e(),_||=(window.addEventListener(`scroll`,e,{passive:!0}),!0)}function S(){document.querySelectorAll(`[data-locale-target]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-locale-target`);!u.includes(t)||t===g||(g=t,window.localStorage.setItem(h,g),w())})})}function C(e){let t=document.querySelector(`[data-contact-form]`);t&&t.addEventListener(`submit`,n=>{if(n.preventDefault(),!t.reportValidity())return;let r=new FormData(t),i=r.get(`name`)?.toString().trim()??``,a=r.get(`email`)?.toString().trim()??``,o=r.get(`message`)?.toString().trim()??``,s=encodeURIComponent(`${e.contact.mailto.subjectPrefix} ${i}`),c=encodeURIComponent(`${e.contact.mailto.bodyName}: ${i}\n${e.contact.mailto.bodyEmail}: ${a}\n\n${o}`);window.location.href=`mailto:${e.contact.email}?subject=${s}&body=${c}`})}function w(){if(!m)return;let e=p(g);m.innerHTML=y(g),b(e),x(),S(),C(e)}m&&w();