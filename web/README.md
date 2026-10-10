# Código de la web de LazySoft

Aquí está la versión editable de la web de **El secreto de Monteviejo**. La guía para el equipo, las rutas y los pasos de publicación están en el [README del repositorio](../README.md).

## Comandos desde esta carpeta

```sh
npm ci
npm run dev
npm run comprobar
npm run publicar
```

- `dev`: abre el servidor de desarrollo.
- `comprobar`: revisa las rutas de las imágenes, los datos de la galería y los tipos.
- `publicar`: comprueba, compila y prepara los archivos que GitHub Pages sirve desde la raíz. Después hay que crear el commit y subirlo.
- `preview`: permite revisar la última compilación en local.

Las imágenes originales de la web van en `public/assets/`. Las fichas están en `content/site.ts`. Cada ficha admite varias imágenes con sus propios textos alternativos y descripciones.

Usamos React, TypeScript, Vite y Tailwind CSS. Los componentes reutilizables están en `components/ui/` y las licencias incluidas, en `vendor/`.
