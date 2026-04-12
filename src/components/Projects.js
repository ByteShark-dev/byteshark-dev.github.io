function replaceTemplate(template, values) {
  return Object.entries(values).reduce(
    (output, [key, value]) => output.replaceAll(`{${key}}`, value),
    template,
  );
}

function renderProjectCard(project, copy, locale) {
  const sizeAttributes =
    project.imageWidth && project.imageHeight
      ? `width="${project.imageWidth}" height="${project.imageHeight}"`
      : '';
  const imageClasses =
    project.imageFit === 'contain'
      ? 'h-full w-full object-contain p-10 transition-transform duration-500 group-hover:scale-105'
      : 'h-full w-full object-cover opacity-40 grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-60 group-hover:grayscale-0';
  const tagline = project.tagline?.[locale] ?? project.tagline?.es ?? project.tagline;
  const description = project.description?.[locale] ?? project.description?.es ?? project.description;
  const imageAlt = project.imageAlt?.[locale] ?? project.imageAlt?.es ?? project.imageAlt;
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
      <div class="aspect-video overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(30,90,168,0.22),_rgba(4,13,26,0.95)_62%)]">
        <img
          src="${project.image}"
          alt="${imageAlt}"
          class="${imageClasses}"
          ${sizeAttributes}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div class="space-y-6 p-8">
        <div class="flex items-start justify-between gap-6">
          <div>
            <h3 class="font-headline text-2xl font-bold text-on-surface">${project.name}</h3>
            <p class="mt-1 font-label text-xs uppercase tracking-widest text-primary-container">${tagline}</p>
          </div>
          <span aria-hidden="true" class="material-symbols-outlined text-outline transition-colors group-hover:text-primary-container">
            ${project.icon}
          </span>
        </div>
        <p class="font-body leading-relaxed text-on-surface-variant">
          ${description}
        </p>
        <div class="flex flex-wrap gap-2">
          ${techStack}
        </div>
        <div class="pt-4">
          <a
            class="inline-flex items-center gap-2 font-headline font-bold text-primary-container transition-colors hover:text-primary"
            href="${project.repoUrl}"
            target="_blank"
            rel="noreferrer"
            aria-label="${replaceTemplate(copy.repoAria, { projectName: project.name })}"
          >
            <span aria-hidden="true" class="material-symbols-outlined text-sm">terminal</span>
            ${copy.repoLabel}
          </a>
        </div>
      </div>
    </article>
  `;
}

export function renderProjects(projects, copy, locale) {
  return `
    <section id="projects" aria-labelledby="projects-title" class="scroll-mt-28 bg-surface-container-lowest py-32">
      <div class="mx-auto max-w-7xl px-8">
        <div class="mb-16 flex items-end justify-between gap-8">
          <div class="space-y-4">
            <h2 id="projects-title" class="font-headline text-5xl font-bold tracking-tight text-primary">${copy.title}</h2>
            <div class="h-1 w-24 bg-primary-container"></div>
          </div>
          <p class="hidden max-w-xs text-right font-label italic text-outline md:block">
            ${copy.intro}
          </p>
        </div>
        <div class="grid gap-12 md:grid-cols-2">
          ${projects.map((project) => renderProjectCard(project, copy, locale)).join('')}
        </div>
      </div>
    </section>
  `;
}
