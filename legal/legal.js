/* Renderiza el markdown embebido (#md) dentro de (#doc) usando marked.js.
   Si marked.js no cargó (CDN caído, sin red), cae a texto plano legible —
   el contenido legal SIEMPRE queda visible. */
(function () {
  var src = document.getElementById('md');
  var target = document.getElementById('doc');
  if (!src || !target) return;
  var raw = src.textContent || '';

  function fallback() {
    var pre = document.createElement('pre');
    pre.className = 'md-fallback';
    pre.textContent = raw;
    target.innerHTML = '';
    target.appendChild(pre);
  }

  try {
    if (window.marked && typeof window.marked.parse === 'function') {
      if (window.marked.setOptions) {
        window.marked.setOptions({ gfm: true, breaks: false });
      }
      target.innerHTML = window.marked.parse(raw);
    } else {
      fallback();
    }
  } catch (e) {
    fallback();
  }
})();
