# pawrtner-claim — Sitio estático para vincular walk-ins

URL pública: `https://yeodeol.github.io/pawrtner-claim/?token=<token>`

## Para qué sirve

Cuando un profesional registra una mascota walk-in en Pawrtner, comparte un link
con el dueño. Si el dueño tiene la app instalada, **Android intercepta el link
automáticamente** (gracias a `autoVerify=true` en `AndroidManifest.xml` con
`pathPrefix="/pawrtner-claim"`) y abre `AcceptWalkinClaimScreen` directamente.

Si el dueño **NO tiene la app instalada**, este HTML estático se carga como
fallback: muestra el preview del walk-in (vet + mascotas registradas) y un
botón para descargar la app.

## Stack visual

Estilos alineados con el sistema **Soft Living** del repo principal:
mismos CSS tokens (`--primary`, `--surface`, `--radius-xxl`, etc.),
hero con `curved-header` + paws scattered, cards `.sl-card`, botones
`.sl-btn-primary`, fuente Nunito 800/900. Soporta `prefers-color-scheme: dark`.

## Cómo deployar

1. Crear repo en GitHub: `Yeodeol/pawrtner-claim` (público).
2. Copiar `web_claim/index.html` del repo principal a la raíz del nuevo repo.
3. Commit + push.
4. **Settings → Pages**: source = `main` branch, folder = `/ (root)`.
5. Esperar 1-2 min hasta que GitHub Pages termine de publicar.
6. Verificar: `https://yeodeol.github.io/pawrtner-claim/?token=test` → debe
   mostrar "Invitación no encontrada" (token inválido).

## Mantenimiento

Cualquier cambio visual o de copy se hace en el repo principal (esta carpeta)
y luego se sincroniza al repo `pawrtner-claim`. Mantenemos el código aquí
para que viva junto al resto del producto y los tokens de Soft Living
queden alineados al sistema visual de la app.

## TODOs antes de publicar

- [ ] Reemplazar `APP_STORE_URL` con el ID real cuando se publique en App Store
  (hoy es placeholder `id000000000`).
