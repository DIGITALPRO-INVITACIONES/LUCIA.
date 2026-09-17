# Tu invitación

Incluye el video actualizado «WhatsApp Video 2026-09-17 at 16.41.27.mp4» (4,2 MB aproximadamente), en reemplazo del anterior. No requiere instalaciones, cuentas adicionales para reproducirlo, fuentes externas ni bibliotecas.

## Archivos

- `index.html`: invitación.
- `assets/style.css`: diseño responsive y animación del sobre.
- `assets/app.js`: apertura, reproducción y alternativas cuando hay bloqueos.
- `assets/invitacion.mp4`: video incluido, H.264 y audio AAC; metadatos al inicio para carga progresiva.
- `.nojekyll`: permite servir los archivos directamente en GitHub Pages.

## Publicar en GitHub Pages

1. Descomprime el ZIP.
2. Sube el contenido de la carpeta `invitacion` a la raíz de tu repositorio. `index.html` y `assets` deben quedar al mismo nivel, sin una carpeta adicional alrededor.
3. En el repositorio, abre **Settings → Pages**.
4. Elige **Deploy from a branch**, la rama donde subiste los archivos (habitualmente `main`) y **/(root)**. Guarda.
5. Cuando GitHub indique que está publicado, abre el enlace y compártelo por WhatsApp.

Guía oficial: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Ver y compartir

En computadora, puedes abrir `index.html` después de descomprimir, manteniendo la carpeta `assets` a su lado. Para invitados en celulares, comparte el enlace publicado de GitHub Pages por WhatsApp: la vista previa de un archivo HTML adjunto no equivale a abrir una página web.

El botón solicita reproducción con sonido dentro de la interacción del usuario. Si se bloquea, intenta reproducir silenciado y ofrece **Activar sonido**; si tampoco puede reproducir, aparece **Reproducir video**. Los controles nativos permiten pausar, avanzar, ajustar sonido y ampliar el video. El comportamiento final depende de los permisos del navegador y del dispositivo.

La apertura dura aproximadamente 1,1 segundos. La reproducción se solicita inmediatamente al tocar para conservar el permiso del navegador; al revelar el video se vuelve al inicio para no perder los primeros fotogramas. Se respeta la preferencia de reducir movimiento.

## Comprobación realizada

Se comprobó el diseño en navegador de escritorio y con una vista de 390 × 844, la apertura, la reproducción y el regreso al sobre. No se ha probado en un dispositivo físico con WhatsApp o Safari de iPhone. El archivo mantiene su calidad original y usa rutas relativas compatibles con subcarpetas de GitHub Pages.
