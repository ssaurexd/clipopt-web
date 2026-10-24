# Clipopt · Web pública

Web estática de Clipopt en español e inglés, sin dependencias de producción,
backend, fuentes externas, analítica ni rastreadores.

Clipopt es una app nativa gratuita para macOS 14 o posterior. **El código de la
app es privado y no forma parte de este repositorio.** El icono es el recurso de
marca autorizado (opción 1). La demostración usa datos ficticios, no accede al
portapapeles y mantiene sus favoritos únicamente en memoria hasta recargar.

## Desarrollo

Desde la raíz, `python3 -m http.server 8080` permite abrir
`http://localhost:8080`. No hay compilación. `node --test tests/site.test.mjs`
comprueba traducciones, enlaces locales y contrato de distribución sin paquetes.
Para las pruebas de navegador: `npm ci`, `npx playwright install chromium` y
`npm run test:browser`. Playwright sirve una copia bajo `/clipopt-web/` y comprueba
interacción, teclado, ES/EN, ausencia de desbordamiento a 320/375/768/1440 px,
funcionamiento sin JavaScript y reglas WCAG A/AA con axe. Las capturas quedan en
`test-results/`, fuera de Git. Estas herramientas solo se usan en desarrollo y CI;
no se publican con la web. Para repetir contra producción:
`SITE_URL=https://ssaurexd.github.io/clipopt-web/ npm run test:browser`.

Los textos iniciales están en español en `index.html`; sus equivalentes en
inglés y los textos dinámicos de la demo están en `app.js`. El selector cambia
también el atributo `lang`, el título, la descripción y las etiquetas accesibles.
No usa cookies ni almacenamiento del navegador.

## Publicación en GitHub Pages

URL pública: <https://ssaurexd.github.io/clipopt-web/>.

En Settings → Pages, seleccionar **GitHub Actions**. También se puede activar
con `gh api --method POST repos/ssaurexd/clipopt-web/pages -f build_type=workflow`
(para un sitio existente, usar PUT). El workflow `.github/workflows/pages.yml`
publica al recibir cambios en `main` o mediante ejecución manual.

Solo `index.html`, `styles.css`, `app.js` y `assets/` se suben al artefacto;
no se publica el repositorio entero. Todos los recursos usan rutas relativas,
compatibles con `/clipopt-web/`. No se necesita dominio personalizado.

## Descarga disponible: Clipopt 1.0.0

La versión pública está firmada con **Developer ID Application**, con hardened
runtime y notarización aceptada por Apple. El responsable de distribución confirmó
la validación de firma, ticket grapado y aceptación de Gatekeeper. Es universal
**arm64/x86_64** y requiere **macOS 14 o posterior**.

- [Release 1.0.0](https://github.com/ssaurexd/clipopt-web/releases/tag/v1.0.0)
- [ZIP universal](https://github.com/ssaurexd/clipopt-web/releases/download/v1.0.0/Clipopt-1.0.0-universal.zip)
- [Archivo SHA-256](https://github.com/ssaurexd/clipopt-web/releases/download/v1.0.0/Clipopt-1.0.0-universal.zip.sha256)

SHA-256 del ZIP descargado y comprobado:
`dc80d361e7eda05eee2a670e44db7e0b171f0de21773417238db5edd85ecdda6`.

Para verificarlo desde la carpeta de descarga:
`shasum -a 256 Clipopt-1.0.0-universal.zip` y comparar con el valor anterior o
el archivo `.sha256` publicado. No subir builds de desarrollo, código fuente de
la app, credenciales ni certificados a este repositorio.

## Publicar próximas versiones de forma segura

1. Obtener la app de producción firmada con **Developer ID Application**, con
   hardened runtime y notarización aceptada por Apple. Apple Development no es
   un sustituto válido. Grapar el ticket a la app antes de crear el ZIP final.
2. Verificar la firma (`codesign --verify --deep --strict --verbose=2 Clipopt.app`),
   el ticket (`xcrun stapler validate Clipopt.app`) y Gatekeeper
   (`spctl --assess --type execute --verbose=2 Clipopt.app`). Comprobar macOS mínimo
   y arquitecturas del ejecutable; no anunciar compatibilidad sin verificar
   el artefacto correspondiente.
3. Probar el ZIP descargado en un Mac limpio, conservar evidencia de notarización,
   generar SHA-256 y adjuntar ZIP y checksum a una Release pública de
   `ssaurexd/clipopt-web`, con versión, requisitos y arquitecturas reales.
4. Confirmar con el responsable de distribución la URL exacta del asset. Cambiar
   la descarga por un enlace explícito a ese ZIP, mostrando versión,
   requisitos, arquitecturas y checksum. Actualizar **ambos idiomas**, instalación,
   FAQ y las pruebas que exigen la URL y versión publicadas.
5. Comprobar respuesta HTTP del asset, instalación y permisos; desplegar y
   revisar la URL pública de Pages.

No afirmar que la app es de código abierto, que sincroniza dispositivos o que
se actualiza automáticamente. Accesibilidad es opcional para recuperar clips:
permite pegar automáticamente; sin ella se copia para pegar con Cmd + V.

## Privacidad

La app guarda el historial en el Mac, sin cuentas, pagos ni telemetría añadida.
La web no accede a ese historial ni al portapapeles del navegador. GitHub Pages
es el alojamiento y puede registrar solicitudes conforme a la
[política de privacidad de GitHub](https://docs.github.com/es/site-policy/privacy-policies/github-general-privacy-statement).
