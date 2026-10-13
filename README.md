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

Nuestra manera es: Tienes que tener descargado Github Desktop y dentro de Github Desktop abrir el repositorio de **LazySoftStudio/LazySoftStudio.github.io**. Puedes cambiar los archivos dentro de la carpeta del repositorio que se te ha generado en tu PC. Después de haber hecho los cambios, abres CMD o Símbolo de Sistema en ti PC y entras en la carpeta del repositorio... cd ...\...\**LazySoftStudio/LazySoftStudio.github.io**\web. Desde ahí escribes los siguientes comandos:

cd "C:\Users\user\Desktop\LazySoftStudio.github.io\web" **en este caso está en el escritorio**
npm ci --include=dev
npm run publicar

Después al haber compilado correctamente, escribimos los siguiente para subirlo a la web y que se vean los cambios realizados:

cd ..
git add web index.html assets .nojekyll icono-lazysoft.svg
git commit -m "Actualiza la web" **comentario**
git push origin main

Después comprueba que la publicación termine en verde en Actions.
