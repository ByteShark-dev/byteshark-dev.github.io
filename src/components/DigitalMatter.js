// Digital Matter: dependency-free point cloud with real logo masks and 3D perspective.
const LOGOS = [
  { name: 'ByteShark', src: '/assets/images/byteshark_graphic_logo.png', color: [127,219,255], mask: 'blue' },
  { name: 'Aphidex', src: '/assets/images/Aphidex_logo.webp', color: [124,224,167], mask: 'green' },
  { name: 'Minty Goals', src: '/minty-goals/assets/images/favicon.png', color: [95,189,138], mask: 'green' },
];

export const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi,v));
export const mix = (a,b,t) => a+(b-a)*t;
export const ease = t => { t=clamp(t,0,1); return t*t*(3-2*t); };

// Exclude the white ByteShark background and dark purple Aphidex icon background.
export function isLogoPixel(r,g,b,a,mask) {
  if (a < 120) return false;
  return mask === 'blue' ? b > r+30 && b > g+15 : g > r+10 && g > b+10 && g > 47;
}

function seed(i) {
  const v=Math.sin(i*127.1+311.7)*43758.5453;
  return v-Math.floor(v);
}

// Preserve the image aspect ratio, crop transparent/background margins, and use
// deterministic sampling so all logo states have equal particle counts.
export function normalizeMask(coords,count) {
  if (!coords.length) throw Error('Logo mask is empty');
  let minX=Infinity,maxX=-Infinity,minY=Infinity,maxY=-Infinity;
  for (const [x,y] of coords) { minX=Math.min(minX,x); maxX=Math.max(maxX,x); minY=Math.min(minY,y); maxY=Math.max(maxY,y); }
  const span=Math.max(maxX-minX,maxY-minY,1), cx=(minX+maxX)/2,cy=(minY+maxY)/2;
  // Stable spatial order helps nearby points stay nearby during morphing.
  const ordered=coords.slice().sort((a,b)=>Math.floor(a[1]/5)-Math.floor(b[1]/5)||a[0]-b[0]||a[1]-b[1]);
  return Array.from({length:count},(_,i)=>{
    const [x,y]=ordered[Math.min(ordered.length-1,Math.floor((i+.5)*ordered.length/count))];
    return [(x-cx)/span*2,(y-cy)/span*2,(seed(i+1)-.5)*.23];
  });
}

async function loadMask(logo,count) {
  const img=new Image();
  img.src=logo.src;
  await img.decode();
  const sample=document.createElement('canvas');
  const side=144; sample.width=side;sample.height=side;
  const ctx=sample.getContext('2d',{willReadFrequently:true});
  if(!ctx) throw Error('Canvas unavailable');
  const scale=side/Math.max(img.naturalWidth,img.naturalHeight);
  const w=img.naturalWidth*scale,h=img.naturalHeight*scale;
  ctx.drawImage(img,(side-w)/2,(side-h)/2,w,h);
  const {data}=ctx.getImageData(0,0,side,side), coords=[];
  for(let y=0;y<side;y++) for(let x=0;x<side;x++){
    const i=(y*side+x)*4;
    if(isLogoPixel(data[i],data[i+1],data[i+2],data[i+3],logo.mask)) coords.push([x,y]);
  }
  return normalizeMask(coords,count);
}

export function projectPoint(x,y,z,rx,ry){
  const cy=Math.cos(ry),sy=Math.sin(ry),cx=Math.cos(rx),sx=Math.sin(rx);
  const xx=x*cy+z*sy, zz=-x*sy+z*cy;
  const yy=y*cx-zz*sx, depth=y*sx+zz*cx;
  const p=3.8/(3.8-depth);
  return [xx*p,yy*p,depth,p];
}

// One instance per mounted page. Cleanup is required when switching locale.
export function initDigitalMatter(root){
  if(!root) return ()=>{};
  const canvas=root.querySelector('canvas'), fallback=root.querySelector('[data-matter-fallback]');
  const controls=Array.from(root.querySelectorAll('[data-matter-select]'));
  const toggle=root.querySelector('[data-matter-toggle]'), name=root.querySelector('[data-matter-name]');
  const status=root.querySelector('[data-matter-status]');
  const labels=root.dataset.locale==='es'?{pause:'Pausar animación',play:'Reproducir animación',ready:'Identidad digital',static:'Vista estática'}:{pause:'Pause animation',play:'Play animation',ready:'Digital identity',static:'Static view'};
  const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
  const mobile=window.matchMedia('(max-width: 767px)').matches;
  const count=mobile?1000:1900;
  const listeners=[];
  const on=(el,event,fn,opts)=>{el.addEventListener(event,fn,opts);listeners.push(()=>el.removeEventListener(event,fn,opts));};
  let disposed=false,ready=false,playing=!motion.matches,visible=true,frame=0,lastFrame=0,active=0,from=0,transition=1,elapsed=0,angle=0,dragX=0,dragY=0,drag=null,shapes=[],startShape=null,startColor=null;
  let w=1,h=1,dpr=1,ctx=null;
  const hold=4200,duration=1800;
  const updateControls=()=>{
    controls.forEach((el,i)=>el.setAttribute('aria-pressed',String(i===active)));
    name.textContent=LOGOS[active].name;
    // Keep the SVG icons mounted and expose the current action to assistive technology.
    const action=playing?labels.pause:labels.play;
    toggle.setAttribute('aria-label',action);
    toggle.setAttribute('title',action);
    toggle.setAttribute('aria-pressed',String(!playing));
    fallback.src=LOGOS[active].src;
    fallback.alt=LOGOS[active].name;
  };
  function currentPoint(i){
    const a=startShape?.[i]??shapes[from][i], b=shapes[active][i],t=ease(transition);
    return [mix(a[0],b[0],t),mix(a[1],b[1],t),mix(a[2],b[2],t)];
  }
  function currentColor(){
    const a=startColor??LOGOS[from].color,b=LOGOS[active].color,t=ease(transition);
    return a.map((v,i)=>mix(v,b[i],t));
  }
  function select(i,manual=false){
    if(i===active) return;
    if(ready){startShape=Array.from({length:count},(_,j)=>currentPoint(j));startColor=currentColor();}
    from=active;active=i;transition=playing&&!motion.matches?0:1;elapsed=0;
    updateControls();
    if(!playing||motion.matches) draw();
    if(manual) schedule();
  }
  function resize(){
    const r=canvas.getBoundingClientRect();
    if(!r.width||!r.height)return;
    w=r.width;h=r.height;dpr=Math.min(window.devicePixelRatio||1,mobile?1.5:2);
    canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);
    if(ctx){ctx.setTransform(dpr,0,0,dpr,0,0);draw();}
  }
  function draw(){
    if(!ready||!ctx||disposed)return;
    ctx.clearRect(0,0,w,h);
    const scale=Math.min(w,h)*(mobile?.385:.36), color=currentColor(), t=ease(transition);
    const scatter=playing&&!motion.matches?Math.sin(Math.PI*t):0;
    // Subtle yaw/pitch plus pointer drag. True 3D projection, no CSS image spin.
    const ry=(playing?Math.sin(angle)*.46:0)+dragX+scatter*.72;
    const rx=(playing?Math.cos(angle*.73)*.13:0)+dragY;
    const rgb=color.map(Math.round).join(',');
    for(let i=0;i<count;i++){
      const p=currentPoint(i), offset=scatter*.46;
      const x=p[0]+(seed(i*3+7)-.5)*offset;
      const y=p[1]+(seed(i*3+8)-.5)*offset;
      const z=p[2]+(seed(i*3+9)-.5)*scatter*1.15;
      const [px,py,depth,zoom]=projectPoint(x,y,z,rx,ry);
      const dx=w/2+px*scale,dy=h/2+py*scale;
      const alpha=clamp(.68+depth*.23+seed(i+13)*.27,.25,1);
      ctx.fillStyle='rgba('+rgb+','+alpha.toFixed(2)+')';
      if(scatter>.38&&i%11===0){
        ctx.font=(mobile?'8':'10')+'px monospace';ctx.fillText(i%2?'1':'0',dx,dy);
      }else{
        const size=(mobile?1.65:2.05)*zoom;
        ctx.fillRect(dx-size/2,dy-size/2,size,size);
      }
    }
  }
  function schedule(){
    if(!frame&&!disposed&&ready&&playing&&visible&&!document.hidden)frame=requestAnimationFrame(tick);
  }
  function stop(){if(frame)cancelAnimationFrame(frame);frame=0;lastFrame=0;}
  function tick(now){
    frame=0;
    if(disposed||!playing||!visible||document.hidden)return;
    const dt=lastFrame?Math.min(50,now-lastFrame):0;
    lastFrame=now;
    if(!drag){angle+=dt*.00032;elapsed+=dt;}
    if(transition<1){
      transition=Math.min(1,transition+dt/duration);
      if(transition===1){startShape=null;startColor=null;from=active;elapsed=0;}
    }else if(elapsed>=hold)select((active+1)%LOGOS.length);
    draw();schedule();
  }
  function setPlaying(value){
    playing=value;elapsed=0;
    if(!playing){stop();transition=1;startShape=null;startColor=null;from=active;draw();}
    updateControls();schedule();
  }
  controls.forEach((el,i)=>on(el,'click',()=>select(i,true)));
  on(toggle,'click',()=>setPlaying(!playing));
  on(motion,'change',e=>{if(e.matches){dragX=dragY=0;setPlaying(false);}});
  on(document,'visibilitychange',()=>{if(document.hidden)stop();else schedule();});
  on(canvas,'pointerdown',e=>{if(!ready||e.button!==0)return;drag={id:e.pointerId,x:e.clientX,y:e.clientY};canvas.setPointerCapture(e.pointerId);});
  on(canvas,'pointermove',e=>{
    if(!drag||e.pointerId!==drag.id)return;
    dragX=clamp(dragX+(e.clientX-drag.x)*.008,-1.1,1.1);
    dragY=clamp(dragY+(e.clientY-drag.y)*.008,-.55,.55);
    drag.x=e.clientX;drag.y=e.clientY;draw();
  });
  const endDrag=()=>{drag=null;elapsed=0;};
  on(canvas,'pointerup',endDrag);on(canvas,'pointercancel',endDrag);on(canvas,'lostpointercapture',endDrag);
  const resizeObserver=typeof ResizeObserver==='function'?new ResizeObserver(resize):null;
  resizeObserver?.observe(canvas);if(!resizeObserver)on(window,'resize',resize,{passive:true});
  const visibilityObserver=typeof IntersectionObserver==='function'?new IntersectionObserver(([entry])=>{
    visible=entry.isIntersecting;if(!visible)stop();else schedule();
  },{rootMargin:'30px'}):null;
  visibilityObserver?.observe(root);
  updateControls();
  try{ctx=canvas.getContext('2d',{alpha:true});}catch{}
  if(ctx)Promise.all(LOGOS.map(logo=>loadMask(logo,count))).then(result=>{
    if(disposed)return;
    shapes=result;ready=true;root.classList.add('is-ready');status.textContent=labels.ready;
    resize();draw();schedule();
  }).catch(()=>{if(!disposed){playing=false;toggle.disabled=true;status.textContent=labels.static;updateControls();}});
  else{playing=false;toggle.disabled=true;status.textContent=labels.static;updateControls();}
  return ()=>{disposed=true;stop();resizeObserver?.disconnect();visibilityObserver?.disconnect();listeners.forEach(fn=>fn());};
}
