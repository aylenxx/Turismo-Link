/* ============================================
   SHARED.JS — Link Turismo Perú
   Lógica compartida entre Index.html y Perfil.html
   ============================================ */

const STORAGE_KEY = 'linkPeruData';

const PLAT = {
  custom:{i:'fas fa-globe',c:'#64748b'},
  instagram:{i:'fab fa-instagram',c:'#E4405F'},
  facebook:{i:'fab fa-facebook-f',c:'#1877F2'},
  youtube:{i:'fab fa-youtube',c:'#FF0000'},
  tiktok:{i:'fab fa-tiktok',c:'#010101'},
  twitter:{i:'fab fa-x-twitter',c:'#000'},
  whatsapp:{i:'fab fa-whatsapp',c:'#25D366'},
  tripadvisor:{i:'fab fa-tripadvisor',c:'#34E0A1'},
  booking:{i:'fas fa-bed',c:'#003580'},
  airbnb:{i:'fab fa-airbnb',c:'#FF5A5F'},
  linkedin:{i:'fab fa-linkedin-in',c:'#0A66C2'},
  blog:{i:'fas fa-pen-nib',c:'#7C3AED'},
  email:{i:'fas fa-envelope',c:'#EA580C'},
  phone:{i:'fas fa-phone',c:'#059669'}
};

const CATS = {
  'guia-turistico':'Guía turístico','agencia-viaje':'Agencia de viajes',
  'hotel':'Hotel / Alojamiento','fotografo':'Fotografía de viaje',
  'creador-contenido':'Creador de contenido','gastronomia':'Gastronomía local',
  'transporte':'Transporte turístico','experiencias':'Experiencias / Aventura','otro':'Otro'
};

const THEMES = {
  teal:{p:'#1b6b7d',d:'#0f4c5c',l:'#3a9db0'},
  coral:{p:'#c2553a',d:'#8b3222',l:'#e8765e'},
  forest:{p:'#2d6a4f',d:'#1b4332',l:'#40916c'},
  sand:{p:'#b08d57',d:'#8a6d3b',l:'#d4a76a'},
  lavender:{p:'#6b5b7b',d:'#4a3d5c',l:'#9b8bb0'},
  midnight:{p:'#1a1a2e',d:'#0f0f1e',l:'#4a4a6a'},
  sunset:{p:'#d35400',d:'#a04000',l:'#e74c3c'},
  earth:{p:'#6d4c41',d:'#4e342e',l:'#8d6e63'},
  ocean:{p:'#0077b6',d:'#023e8a',l:'#00b4d8'},
  ruby:{p:'#9d0208',d:'#6a040f',l:'#d00000'},
  mint:{p:'#40916c',d:'#2d6a4f',l:'#95d5b2'},
  amber:{p:'#e09f3e',d:'#9e6c00',l:'#f4c430'}
};

const CUSTOM_DEFAULTS = {
  bg:'', border:'', shadow:'', btn:'', hover:'', title:'',
  avatarSize:88, accentCustom:'',
  bgImage:'', bgEffect:'parallax', bgOpacity:40, bgCat:''
};

const PRESETS = {
  classico:{template:'classic',theme:'teal',custom:Object.assign({},CUSTOM_DEFAULTS)},
  elegante:{template:'elegant',theme:'midnight',custom:Object.assign({},CUSTOM_DEFAULTS,{btn:'cz-btn-glass'})},
  vibrante:{template:'aurora',theme:'coral',custom:Object.assign({},CUSTOM_DEFAULTS,{btn:'cz-btn-glass'})},
  natural:{template:'inca',theme:'sand',custom:Object.assign({},CUSTOM_DEFAULTS,{btn:'cz-btn-outline',hover:'cz-hover-lift'})}
};

const CZ_GROUPS = ['bg','border','shadow','btn','hover','title'];

const BG_EFFECTS = {
  none: 'Sin efecto',
  parallax: 'Parallax',
  kenburns: 'Ken Burns',
  zoom: 'Zoom lento',
  fade: 'Fade in'
};

const TURISMO_CATS = {
  nevados: {label:'Nevados',icon:'🏔️',desc:'Montañas, lagos de altura y paisajes andinos'},
  selva:   {label:'Selva',  icon:'🌿',desc:'Amazonía, ríos tropicales y biodiversidad'},
  cusco:   {label:'Cusco',  icon:'🏛️',desc:'Machu Picchu, cultura inca y tradiciones'},
  nazca:   {label:'Nazca',  icon:'✨',desc:'Líneas de Nazca, geoglifos y misterio'},
  costa:   {label:'Costa',  icon:'🏖️',desc:'Playas, mar y costa peruana'}
};

const TURISMO_FONDOS = [
  // ── NEVADOS ──
  {id:'nev-lagobravo',cat:'nevados',label:'Lago bravo',src:'img/aguas-serenas-rodeadas-espectacular-terreno-accidentado-cielo-despejado_1310786-53081.avif',effect:'parallax'},
  {id:'nev-tilicho',cat:'nevados',label:'Lago Tilicho',src:'img/lago-tilicho-nepal_898699-2578.avif',effect:'kenburns'},
  {id:'nev-llama',cat:'nevados',label:'Llama en valle',src:'img/lama-guanaco-encuentra-valle-cerca-altas-montanas-lama-guanicoe-animales-salvajes-america-sur_624728-1081.avif',effect:'zoom'},
  {id:'nev-aconcagua',cat:'nevados',label:'Aconcagua',src:'img/parque-provincial-aconcagua-provincia-mendoza-argentina-wpa-cartel-art-deco_263080-2388.avif',effect:'fade'},
  {id:'nev-salvaje',cat:'nevados',label:'Naturaleza salvaje',src:'img/ilustracion-sobre-temas-naturaleza-salvaje-ee-uu_207954-264.avif',effect:'kenburns'},
  {id:'nev-panoramica',cat:'nevados',label:'Vista panorámica',src:'img/vista-panoramica-agua-rodeada-terreno-accidentado_1310786-54861.avif',effect:'zoom'},

  // ── SELVA ──
  {id:'sel-riotropical',cat:'selva',label:'Río tropical',src:'img/vibrante-paisaje-rio-selva-tropical-al-atardecer_1092975-1378.avif',effect:'parallax'},
  {id:'sel-atardecer',cat:'selva',label:'Selva al atardecer',src:'img/paisaje-sereno-selva-montana-rio-al-atardecer-estilo-arte-vectorial_615314-635.avif',effect:'kenburns'},
  {id:'sel-aerea',cat:'selva',label:'Vista aérea',src:'img/vista-aerea-impresionante-paisaje-ucraniano-rio_1332472-18841.avif',effect:'zoom'},
  {id:'sel-rocas',cat:'selva',label:'Río entre rocas',src:'img/pintura-rio-rocas-arboles_1084749-6246.avif',effect:'fade'},
  {id:'sel-bosque',cat:'selva',label:'Bosque tropical',src:'img/rill-estilo-vectorial-plano-bosque-aislado-fondo-blanco_1310786-35205.jpg',effect:'parallax'},
  {id:'sel-serenidad',cat:'selva',label:'Río serenidad',src:'img/vector-fondo-naturaleza-rio-serenity_1332476-11956.avif',effect:'kenburns'},
  {id:'sel-kinabatangan',cat:'selva',label:'Río selvático',src:'img/ilustracion-vectorial-rio-kinabatangan-malasia-aislada_1310786-58469.avif',effect:'zoom'},

  // ── CUSCO ──
  {id:'cusco-paisajes',cat:'cusco',label:'Paisajes del Perú',src:'img/ilustraciones-paisajes_961307-23564.avif',effect:'kenburns'},
  {id:'cusco-coloridas',cat:'cusco',label:'Montañas coloridas',src:'img/montanas-ilustracion-plana-color-abstracto-paisaje-simple-colinas-coloridas-abstracto-multicolor_812194-304.avif',effect:'zoom'},
  {id:'cusco-turismo',cat:'cusco',label:'Ilustración turística',src:'img/imprimir_590832-990.avif',effect:'fade'},

  // ── NAZCA ──
  {id:'nazca-tribal',cat:'nazca',label:'Patrón geoglifo',src:'img/patron-fisuras-tribal_1409-9798.avif',effect:'kenburns'},
  {id:'nazca-lineas',cat:'nazca',label:'Líneas antiguas',src:'img/resumen-patrones-fisuras-garabatos-rizos-laberinto_149326-7167.avif',effect:'parallax'},
  {id:'nazca-tribal2',cat:'nazca',label:'Elementos tribales',src:'img/diseno-patron-vector-elementos-tribales_12196-777.avif',effect:'kenburns'},
  {id:'nazca-tribal3',cat:'nazca',label:'Elementos tribales II',src:'img/diseno-patron-vector-elementos-tribales_12196-775.avif',effect:'fade'},

  // ── COSTA ──
  {id:'costa-oasis',cat:'costa',label:'Oasis desértico',src:'img/surrealista-lago-oasis-medio-paisaje-desertico_1171172-13562.avif',effect:'parallax'}
];

const syncChannel = ('BroadcastChannel' in window) ? new BroadcastChannel('linkPeruSync') : null;

function esc(s) {
  const d = document.createElement('div');
  d.textContent = s || '';
  return d.innerHTML;
}

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

function getData() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)); } catch(e) { return null; }
}

function saveData(d) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(d));
  if (syncChannel) { try { syncChannel.postMessage('update'); } catch(e) {} }
}

function applyTheme(name) {
  const t = THEMES[name] || THEMES.teal;
  document.documentElement.style.setProperty('--brand', t.p);
  document.documentElement.style.setProperty('--brand-deep', t.d);
  document.documentElement.style.setProperty('--brand-soft', t.l);
}

function applyCustomization(el, custom) {
  const c = Object.assign({}, CUSTOM_DEFAULTS, custom || {});
  CZ_GROUPS.forEach(function(group) {
    el.classList.forEach(function(cls) {
      if (cls.startsWith('cz-' + group + '-')) el.classList.remove(cls);
    });
    if (c[group]) el.classList.add(c[group]);
  });
  if (c.avatarSize !== CUSTOM_DEFAULTS.avatarSize) {
    el.style.setProperty('--avatar-size', c.avatarSize + 'px');
    el.setAttribute('data-cz-avatar-size', '1');
  } else {
    el.style.removeProperty('--avatar-size');
    el.removeAttribute('data-cz-avatar-size');
  }
  if (c.accentCustom) {
    el.style.setProperty('--link-color', c.accentCustom);
  } else {
    el.style.removeProperty('--link-color');
  }
}

function applyBgImage(body, custom) {
  var c = Object.assign({}, CUSTOM_DEFAULTS, custom || {});
  var existing = body.querySelector('.bg-turismo');
  if (existing) existing.remove();
  body.classList.remove('has-bg-image');
  body.style.removeProperty('--bg-opacity');
  if (!c.bgImage) return;
  var fondo = TURISMO_FONDOS.find(function(f) { return f.id === c.bgImage; });
  if (!fondo) return;
  var effect = c.bgEffect || fondo.effect || 'parallax';
  var opacity = (c.bgOpacity !== undefined ? c.bgOpacity : 40) / 100;
  var overlay = document.createElement('div');
  overlay.className = 'bg-turismo bg-fx-' + effect;
  overlay.style.cssText = 'position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden;';
  var img = document.createElement('img');
  img.src = fondo.src;
  img.alt = '';
  img.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block;';
  overlay.appendChild(img);
  var veil = document.createElement('div');
  veil.className = 'bg-turismo-veil';
  veil.style.cssText = 'position:absolute;inset:0;background:rgba(0,0,0,' + opacity + ');';
  overlay.appendChild(veil);
  body.insertBefore(overlay, body.firstChild);
  body.classList.add('has-bg-image');
  body.querySelectorAll('.wrap, .p-avatar, .p-name, .p-role, .p-bio, .p-links, .p-foot, .p-empty, .profile-sticker-wrap').forEach(function(el) { el.style.position = 'relative'; el.style.zIndex = '1'; });
  if (effect === 'kenburns') {
    img.style.animation = 'kenBurns 20s ease-in-out infinite alternate';
  } else if (effect === 'zoom') {
    img.style.animation = 'slowZoom 15s ease-in-out infinite alternate';
  } else if (effect === 'fade') {
    img.style.animation = 'fadeBg 3s ease-in forwards';
  }
}

function toast(msg, type) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.className = type || '';
  requestAnimationFrame(function() {
    t.classList.add('show');
    setTimeout(function() { t.classList.remove('show'); }, 2600);
  });
}

function normalizeUrl(u, platform) {
  if (!u) return '#';
  if (platform === 'email' && !u.startsWith('mailto:')) return 'mailto:' + u.replace(/^mailto:/,'');
  if (platform === 'phone' && !u.startsWith('tel:')) return 'tel:' + u.replace(/^tel:/,'');
  if (platform === 'whatsapp' && !/^https?:|^tel:/.test(u)) return 'https://wa.me/' + u.replace(/\D/g,'');
  if (!/^https?:\/\//i.test(u) && !/^mailto:|^tel:/.test(u)) return 'https://' + u;
  return u;
}

function applyAvatar(el, data) {
  if (data.avatarImg) {
    el.classList.add('has-photo');
    el.innerHTML = '<img src="' + data.avatarImg + '" alt="Foto de perfil">';
  } else {
    el.classList.remove('has-photo');
    var initial = (data.nombre || '').trim().charAt(0).toUpperCase();
    el.innerHTML = initial ? esc(initial) : '<i class="fas fa-user"></i>';
  }
}
