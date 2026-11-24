// The server-rendered image keeps the hero readable without JavaScript.
export function renderDigitalMatter(content) {
  const es=content.locale==='es';
  return `
    <figure class="matter" data-digital-matter data-locale="${content.locale}">
      <div class="matter-top">
        <span class="matter-label"><i></i> DIGITAL MATTER / 001</span>
        <div class="matter-toolbar">
          <span data-matter-status>${es?'Identidad digital':'Digital identity'}</span>
          <button type="button" class="matter-toggle" data-matter-toggle aria-pressed="false" aria-label="${es?'Pausar animación':'Pause animation'}" title="${es?'Pausar animación':'Pause animation'}">
            <svg class="matter-pause-icon" width="15" height="15" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" focusable="false"><rect x="4" y="3" width="2.5" height="10" rx="1"/><rect x="9.5" y="3" width="2.5" height="10" rx="1"/></svg>
            <svg class="matter-play-icon" width="15" height="15" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" focusable="false"><path d="M5 3.5v9l8-4.5z"/></svg>
          </button>
        </div>
      </div>
      <div class="matter-stage">
        <img class="matter-fallback" data-matter-fallback src="/assets/images/byteshark_graphic_logo.png" alt="ByteShark" width="500" height="500" decoding="async"/>
        <canvas aria-hidden="true"></canvas>
        <span class="matter-coordinate matter-tl">+</span><span class="matter-coordinate matter-tr">+</span><span class="matter-coordinate matter-bl">+</span><span class="matter-coordinate matter-br">+</span>
      </div>
      <figcaption class="matter-caption">
        <strong data-matter-name>ByteShark</strong>
      </figcaption>
      <div class="matter-select" role="group" aria-label="${es?'Seleccionar identidad':'Select identity'}">
        ${['ByteShark','Aphidex','Minty Goals'].map((label,i)=>`<button type="button" data-matter-select aria-pressed="${i===0}"><span>0${i+1}</span>${label}</button>`).join('')}
      </div>
      <p class="matter-hint">${es?'Arrastra para explorar · elige un logo':'Drag to explore · choose a logo'}</p>
    </figure>
  `;
}
