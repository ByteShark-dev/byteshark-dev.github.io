function replaceTemplate(template, value) {
  return template.replace('{value}', value);
}

export function renderContact({ contact, links }) {
  return `
    <section id="contact" aria-labelledby="contact-title" class="scroll-mt-28 bg-surface py-32">
      <div class="mx-auto max-w-7xl px-8">
        <div class="grid gap-16 md:grid-cols-2">
          <div class="space-y-12">
            <div>
              <h2 id="contact-title" class="mb-4 font-headline text-5xl font-bold tracking-tighter text-primary">${contact.title}</h2>
              <p class="text-lg text-on-surface-variant">${contact.intro}</p>
            </div>
            <div class="space-y-6">
              <a class="group flex items-center gap-6" href="${links.email}" aria-label="${replaceTemplate(contact.aria.email, contact.email)}">
                <div class="flex h-12 w-12 items-center justify-center rounded bg-surface-container-high transition-colors group-hover:bg-primary-container/20">
                  <span aria-hidden="true" class="material-symbols-outlined text-primary-container">mail</span>
                </div>
                <div>
                  <p class="font-label text-xs uppercase tracking-widest text-outline">${contact.labels.email}</p>
                  <p class="font-headline font-bold text-on-surface">${contact.email}</p>
                </div>
              </a>
              <a class="group flex items-center gap-6" href="${links.github}" target="_blank" rel="noreferrer" aria-label="${contact.aria.github}">
                <div class="flex h-12 w-12 items-center justify-center rounded bg-surface-container-high transition-colors group-hover:bg-primary-container/20">
                  <span aria-hidden="true" class="material-symbols-outlined text-primary-container">code</span>
                </div>
                <div>
                  <p class="font-label text-xs uppercase tracking-widest text-outline">${contact.labels.github}</p>
                  <p class="font-headline font-bold text-on-surface">${contact.githubLabel}</p>
                </div>
              </a>
              <a class="group flex items-center gap-6" href="${links.linkedin}" target="_blank" rel="noreferrer" aria-label="${contact.aria.linkedin}">
                <div class="flex h-12 w-12 items-center justify-center rounded bg-surface-container-high transition-colors group-hover:bg-primary-container/20">
                  <span aria-hidden="true" class="material-symbols-outlined text-primary-container">business_center</span>
                </div>
                <div>
                  <p class="font-label text-xs uppercase tracking-widest text-outline">${contact.labels.linkedin}</p>
                  <p class="font-headline font-bold text-on-surface">${contact.linkedinLabel}</p>
                </div>
              </a>
            </div>
          </div>
          <div class="glass-panel relative overflow-hidden rounded-lg border border-outline-variant/10 p-8">
            <form class="relative z-10 space-y-6" data-contact-form>
              <div class="space-y-1">
                <label class="ml-1 font-label text-xs uppercase tracking-widest text-outline" for="contact-name">${contact.form.nameLabel}</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="${contact.form.namePlaceholder}"
                  required
                  class="w-full border-0 border-b-2 border-outline-variant bg-surface-container-highest/50 text-on-surface placeholder:text-outline-variant/50 focus:border-primary-container focus:ring-0"
                />
              </div>
              <div class="space-y-1">
                <label class="ml-1 font-label text-xs uppercase tracking-widest text-outline" for="contact-email">${contact.form.emailLabel}</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="${contact.form.emailPlaceholder}"
                  required
                  class="w-full border-0 border-b-2 border-outline-variant bg-surface-container-highest/50 text-on-surface placeholder:text-outline-variant/50 focus:border-primary-container focus:ring-0"
                />
              </div>
              <div class="space-y-1">
                <label class="ml-1 font-label text-xs uppercase tracking-widest text-outline" for="contact-message">${contact.form.messageLabel}</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  placeholder="${contact.form.messagePlaceholder}"
                  required
                  class="w-full border-0 border-b-2 border-outline-variant bg-surface-container-highest/50 text-on-surface placeholder:text-outline-variant/50 focus:border-primary-container focus:ring-0"
                ></textarea>
              </div>
              <button
                class="w-full bg-primary-container py-4 font-headline font-bold tracking-tight text-on-primary-container transition-all hover:brightness-110 active:scale-95"
                type="submit"
              >
                ${contact.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}
