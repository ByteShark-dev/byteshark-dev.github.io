export function renderAbout({ about }) {
  const skillIcons = ['language', 'settings_ethernet', 'router', 'sports_esports'];

  const skills = about.skills
    .map(
      (skill, index) => `
        <div class="flex flex-col items-center gap-4 border-b border-outline-variant/10 bg-surface-container p-6 transition-colors hover:bg-surface-container-high">
          <span aria-hidden="true" class="material-symbols-outlined text-primary-container">${skillIcons[index]}</span>
          <span class="font-label text-sm uppercase tracking-widest">${skill}</span>
        </div>
      `,
    )
    .join('');

  return `
    <section id="about" aria-labelledby="about-title" class="scroll-mt-28 bg-surface py-32">
      <div class="mx-auto max-w-7xl px-8">
        <div class="grid gap-8 md:grid-cols-12">
          <div class="space-y-8 md:col-span-8">
            <h2 id="about-title" class="flex items-center gap-4 font-headline text-4xl font-bold text-primary">
              <span aria-hidden="true" class="material-symbols-outlined text-primary-container">person</span>
              ${about.title}
            </h2>
            <div class="border-l-2 border-primary-container bg-surface-container-low p-8">
              <p class="font-body text-lg leading-relaxed text-on-surface-variant">
                ${about.body}
              </p>
            </div>
          </div>
          <aside class="flex flex-col items-center justify-center bg-surface-container-highest p-8 text-center md:col-span-4" aria-label="${about.calloutTitle}">
            <span aria-hidden="true" class="material-symbols-outlined mb-4 text-5xl text-primary-container">architecture</span>
            <h3 class="mb-2 font-headline text-xl font-bold">${about.calloutTitle}</h3>
            <p class="font-label text-sm text-outline">${about.calloutBody}</p>
          </aside>
          <div class="mt-8 grid grid-cols-2 gap-4 md:col-span-12 md:grid-cols-4">
            ${skills}
          </div>
        </div>
      </div>
    </section>
  `;
}
