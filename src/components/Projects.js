function renderProjectCard(project) {
  const techStack = project.stack
    .map(
      (item) => `
        <span class="bg-surface-container-highest px-2 py-1 font-label text-[10px] uppercase tracking-wider text-secondary">
          ${item}
        </span>
      `,
    )
    .join('');

  return `
    <article class="group relative overflow-hidden rounded-lg border border-outline-variant/5 bg-surface-container">
      <div class="aspect-video overflow-hidden bg-surface-container-highest">
        <img
          src="${project.image}"
          alt="${project.imageAlt}"
          class="h-full w-full object-cover opacity-40 grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-60 group-hover:grayscale-0"
          width="${project.imageWidth}"
          height="${project.imageHeight}"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div class="space-y-6 p-8">
        <div class="flex items-start justify-between gap-6">
          <div>
            <h3 class="font-headline text-2xl font-bold text-on-surface">${project.name}</h3>
            <p class="mt-1 font-label text-xs uppercase tracking-widest text-primary-container">${project.tagline}</p>
          </div>
          <span aria-hidden="true" class="material-symbols-outlined text-outline transition-colors group-hover:text-primary-container">
            ${project.icon}
          </span>
        </div>
        <p class="font-body leading-relaxed text-on-surface-variant">
          ${project.description}
        </p>
        <div class="flex flex-wrap gap-2">
          ${techStack}
        </div>
        <div class="pt-4">
          <a
            class="inline-flex items-center gap-2 font-headline font-bold text-primary transition-colors hover:text-primary-container"
            href="${project.repoUrl}"
            target="_blank"
            rel="noreferrer"
            aria-label="Open ${project.name} repository"
          >
            <span aria-hidden="true" class="material-symbols-outlined text-sm">terminal</span>
            GITHUB REPOSITORY
          </a>
        </div>
      </div>
    </article>
  `;
}

export function renderProjects(projects) {
  return `
    <section id="projects" aria-labelledby="projects-title" class="scroll-mt-28 bg-surface-container-lowest py-32">
      <div class="mx-auto max-w-7xl px-8">
        <div class="mb-16 flex items-end justify-between gap-8">
          <div class="space-y-4">
            <h2 id="projects-title" class="font-headline text-5xl font-bold tracking-tight text-primary">Featured Projects</h2>
            <div class="h-1 w-24 bg-primary-container"></div>
          </div>
          <p class="hidden max-w-xs text-right font-label italic text-outline md:block">
            Selected works demonstrating technical depth and aesthetic precision.
          </p>
        </div>
        <div class="grid gap-12 md:grid-cols-2">
          ${projects.map(renderProjectCard).join('')}
        </div>
      </div>
    </section>
  `;
}
