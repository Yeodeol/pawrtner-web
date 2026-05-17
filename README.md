# Pawrtner Web (sitio publico)

Conjunto de paginas estaticas publicas de Pawrtner, deployadas como GitHub
Pages bajo el dominio `pawrtner.app`.

> Fuente de verdad de los HTMLs publicos. Este directorio se sincroniza
> manualmente al repo `yeodeol/pawrtner-web` (que es el que GitHub Pages
> sirve). Cada vez que se actualiza algo aqui, hay que pushear al repo
> separado tambien.

## Estructura

```
web/
├── index.html              → pawrtner.app/         (landing publica)
├── perfil/index.html       → pawrtner.app/perfil/?id=<petId>   (QR de mascota)
├── auth/index.html         → pawrtner.app/auth/                (bridge Supabase Auth)
├── claim/index.html        → pawrtner.app/claim/?token=<token> (claim walk-in)
├── invite/index.html       → pawrtner.app/invite/?token=<token>(invitacion co-owner)
├── CNAME                   → "pawrtner.app"
└── .well-known/
    └── assetlinks.json     → App Links de Android (SHA-256 del keystore)
```

## Setup inicial (una vez)

1. Crear repo publico `yeodeol/pawrtner-web` en GitHub.
2. Subir el contenido de esta carpeta al root del repo (`index.html`, `perfil/`, etc.).
3. Repo Settings -> Pages -> Source: branch `main` folder `/ (root)`.
4. Repo Settings -> Pages -> Custom domain: `pawrtner.app` -> Save.
5. Esperar 15-30 min al SSL automatico (Let's Encrypt via GitHub Pages).
6. Marcar "Enforce HTTPS".

## DNS en Cloudflare

```
A    @    185.199.108.153    DNS only
A    @    185.199.109.153    DNS only
A    @    185.199.110.153    DNS only
A    @    185.199.111.153    DNS only
CNAME www  yeodeol.github.io DNS only
```

Proxy gris (DNS only) — GitHub Pages maneja su propio SSL.

## assetlinks.json — Android App Links

El archivo `.well-known/assetlinks.json` tiene un placeholder
`REPLACE_WITH_RELEASE_KEYSTORE_SHA256_FINGERPRINT` que hay que sustituir
por el fingerprint SHA-256 real del keystore de release.

Para extraerlo:

```bash
keytool -list -v -keystore /ruta/al/release.keystore -alias <alias>
```

Buscar la linea `SHA256:` y copiar el valor sin los `:` separadores (Android
acepta ambos formatos, pero el oficial los lleva).

Para builds debug:

```bash
keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android
```

(Util para testear App Links antes de firmar release.)

## Activar el flag en la app Flutter

Una vez que `pawrtner.app/auth/` cargue correcto en navegador y el SSL este
verde, ir a `lib/config/app_urls.dart` y cambiar:

```dart
static const bool _useProductionDomain = true;
```

Hacer hot restart (no hot reload — es una `const`). Verificar que los QR
nuevos apunten a `pawrtner.app/perfil/?id=...` y los emails de Auth/invite
usen la URL nueva.
