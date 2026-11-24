// The server-rendered image keeps the hero readable without JavaScript.
export function renderDigitalMatter(content) {
  const es=content.locale==='es';
  return `
    <figure class="matter" data-digital-matter data-locale="${content.locale}">
      <div class="matter-top"><span><i></i> DIGITAL MATTER / 001</span><span data-matter-status>${es?'Identidad digital':'Digital identity'}</span></div>
      <div class="matter-stage">
        <img class="matter-fallback" data-matter-fallback src="/assets/images/byteshark_graphic_logo.png" alt="ByteShark" width="500" height="500" decoding="async"/>
        <canvas aria-hidden="true"></canvas>
        <span class="matter-coordinate matter-tl">+</span><span class="matter-coordinate matter-tr">+</span><span class="matter-coordinate matter-bl">+</span><span class="matter-coordinate matter-br">+</span>
      </div>
      <figcaption class="matter-caption">
        <div><p class="matter-index">PRODUCT / IDENTITY</p><strong data-matter-name>ByteShark</strong></div>
        <button type="button" class="matter-toggle" data-matter-toggle aria-pressed="false">${es?'Pausar':'Pause'}</button>
      </figcaption>
      <div class="matter-select" role="group" aria-label="${es?'Seleccionar identidad':'Select identity'}">
        ${['ByteShark','Aphidex','Minty Goals'].map((label,i)=>`<button type="button" data-matter-select aria-pressed="${i===0}"><span>0${i+1}</span>${label}</button>`).join('')}
      </div>
      <p class="matter-hint">${es?'Arrastra para explorar · selecciona un producto':'Drag to explore · select a product'}</p>
    </figure>
  `;
}
