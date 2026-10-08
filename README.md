# LazySoft · Portfolio

Web del estudio y de su videojuego ambientado en Monteviejo.

Dirección pública: https://lazysoftstudio.github.io/

## Organización

- `web/`: código editable del portfolio en React, TypeScript y Vite.
- `index.html`, `assets/`, `favicon.svg` y `.nojekyll`: versión compilada que publica GitHub Pages.

GitHub Pages utiliza la rama `main`, carpeta `/ (root)`.

## Desarrollo

Con Node.js 22.13 o posterior:

```sh
cd web
npm ci
npm run dev
```

Los textos y las piezas de arte se editan en `web/content/site.ts`; las imágenes están en `web/public/assets`.

## Publicación

Ejecutar `npm run build` dentro de `web/`, copiar el contenido de `web/dist/` a la raíz del repositorio y subir los cambios a `main`. Conservar `.nojekyll`. GitHub Pages publicará los archivos de la raíz cuando termine su despliegue.

Los cambios del código en `web/` necesitan volver a compilarse antes de publicarlos. La copia del portfolio en el repositorio del videojuego se mantiene por separado.
