# /legal — Documentos legales de Pawrtner

Páginas públicas de Términos y Condiciones, Política de Privacidad y Descargo
médico. Se sirven como subpath de `pawrtner.app` (GitHub Pages de este repo).

## URLs
- Índice: `https://pawrtner.app/legal/`
- Términos: `https://pawrtner.app/legal/terminos.html`
- **Privacidad: `https://pawrtner.app/legal/privacidad.html`** ← usar en Google Play Console.
- Descargo: `https://pawrtner.app/legal/descargo.html`

## Archivos
- `index.html`, `terminos.html`, `privacidad.html`, `descargo.html`
- `legal.css` (estilo de marca, importa Nunito) · `legal.js` (render markdown + fallback)

## Cómo funciona / mantener
Cada `*.html` lleva el documento **embebido como markdown** dentro de
`<script type="text/markdown" id="md">` y lo renderiza con `marked.js`; si el CDN
falla, cae a texto plano legible.

> **Fuente de verdad:** los `.md` viven en el repo de la app
> (`Pawrtner/legal/*.md`). Si se actualiza un documento allí, copiar el nuevo
> contenido al bloque `<script id="md">` del HTML correspondiente (omitiendo las
> notas internas de "BORRADOR").

## Publicar
Al mergear a `main`, GitHub Pages publica automáticamente. Recordatorios antes de
producción: crear los buzones `legal@pawrtner.app` y `privacidad@pawrtner.app`, y
tener la revisión legal del abogado.
