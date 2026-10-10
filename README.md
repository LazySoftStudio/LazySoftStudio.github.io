# LazySoft · El secreto de Monteviejo

Web del equipo: https://lazysoftstudio.github.io/

Trabajamos en este repositorio: **LazySoftStudio/LazySoftStudio.github.io**.

## Dónde cambiar cada cosa

| Qué queremos cambiar | Archivo o carpeta |
| --- | --- |
| Título, sinopsis, equipo, correo y fichas de la galería | `web/content/site.ts` |
| Imágenes y logotipos | `web/public/assets/` |
| Icono de la pestaña | `web/public/icono-lazysoft.svg` |
| Título de la pestaña y descripción para buscadores | `web/index.html` |
| Textos de las secciones | `web/app/page.tsx` |
| Portada | `web/components/hero.tsx` |
| Menú | `web/components/navigation.tsx` |
| Galería y visor de imágenes | `web/components/art-gallery.tsx` |
| Créditos | `web/components/credits.tsx` |
| Estilos y adaptación a móvil | `web/app/globals.css` |

## Para que los cambios se vean en la web

GitHub Pages muestra el `index.html` y los archivos de `assets/` de la raíz. El código que editamos está dentro de `web/`. Subir solo ese código **no actualiza la versión que ven en la web**: hay que compilarlo antes.
