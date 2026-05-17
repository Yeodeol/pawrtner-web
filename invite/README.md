# pawrtner-invite — Sitio estático para invitaciones de co-owner

URL pública: `https://yeodeol.github.io/pawrtner-invite/?token=<token>`

## Para qué sirve

Cuando un dueño invita a otro usuario a co-administrar una mascota (viewer o
co-owner), comparte un link. Si el invitado tiene la app instalada, **Android
intercepta el link automáticamente** (gracias a `autoVerify=true` en
`AndroidManifest.xml` con `pathPrefix="/pawrtner-invite"`) y abre
`AcceptInvitationScreen`.

Si el invitado **NO tiene la app instalada**, este HTML estático se carga
como fallback: explica qué es Pawrtner, qué va a poder ver/hacer con la
mascota, muestra el código de invitación copiable y botones para descargar.

## Por qué no hay preview rico (como en pawrtner-claim)

El RPC `preview_walkin_owner_by_token` permite leer un walk-in pendiente
de forma pública. La tabla `pet_shares` no tiene un equivalente —
hoy la RLS solo permite SELECT por token al usuario autenticado que va
a aceptar (vía RPC `accept_pet_share`).

Si en el futuro queremos preview rico (nombre del pet, foto, rol invitado),
hay que crear un RPC `preview_pet_share_by_token` SECURITY DEFINER que
devuelva info mínima sin exponer datos sensibles.

## Stack visual

Estilos alineados con el sistema **Soft Living** del repo principal:
mismos CSS tokens, hero con `curved-header` + paws, cards `.sl-card`,
fuente Nunito. Soporta `prefers-color-scheme: dark`.

## Cómo deployar

1. Crear repo en GitHub: `Yeodeol/pawrtner-invite` (público).
2. Copiar `web_invite/index.html` del repo principal a la raíz del nuevo repo.
3. Commit + push.
4. **Settings → Pages**: source = `main` branch, folder = `/ (root)`.
5. Esperar 1-2 min hasta que GitHub Pages termine de publicar.
6. Verificar: `https://yeodeol.github.io/pawrtner-invite/?token=abc-123` → debe
   mostrar la pantalla con el token visible y los botones de stores.

## TODOs antes de publicar

- [ ] Reemplazar `APP_STORE_URL` con el ID real cuando se publique en App Store
  (hoy es placeholder `id000000000`).
- [ ] Considerar un RPC público para preview rico (ver sección arriba).
