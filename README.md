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

GitHub Pages muestra el `index.html` y los archivos de `assets/` de la raíz. El código que editamos está dentro de `web/`. Subir solo ese código **no actualiza la versión que ven los visitantes**: hay que compilarlo antes.

Desde la carpeta del repositorio, con Node.js 22.13 o posterior:

```sh
git pull --ff-only
cd web
npm ci
npm run dev
```

Después de editar y revisar la web local, detén el servidor con Ctrl+C y ejecuta:

```sh
npm run publicar
cd ..
git status
git add web index.html assets .nojekyll icono-lazysoft.svg
git commit -m "Actualiza los diseños de personajes"
git push origin main
```

Cambia el mensaje del commit según lo que hayas hecho. Si también has editado documentación u otros archivos, añádelos expresamente. Si Git rechaza la subida porque otra persona se ha adelantado, incorpora sus cambios, revisa los conflictos y vuelve a ejecutar `npm run publicar`; no fuerces la subida.

`npm run publicar` comprueba los datos, compila y copia el resultado a la raíz. No hace el commit ni sube nada por su cuenta. Si aparece un error, hay que corregirlo antes de continuar. GitHub Pages publica la raíz cuando recibe el commit; se puede consultar el resultado en [Actions](https://github.com/LazySoftStudio/LazySoftStudio.github.io/actions).

No edites a mano `assets/index-*.js` ni `assets/index-*.css`: se generan al compilar. Tampoco subas imágenes nuevas solo a `assets/`; guárdalas primero en `web/public/assets/`.

## Añadir imágenes a la galería

Cada ficha puede contener varias imágenes. En `web/content/site.ts`, `src`, `alt` y `description` deben tener la misma cantidad de elementos y seguir el mismo orden:

```ts
{
    id: '11', // Usa un identificador que todavía no exista.
    title: 'Antonio: nuevas vistas',
    category: 'Personajes', // También puede ser 'Escenarios'.
    type: 'Diseño de personaje',
    src: ['/assets/antonio-frente.jpg', '/assets/antonio-perfil.jpg'],
    alt: ['Antonio visto de frente', 'Antonio visto de perfil'],
    description: ['Vista frontal del modelo.', 'Vista lateral del modelo.']
}
```

Este es un ejemplo: primero hay que guardar esas imágenes con esos nombres. La primera aparece en la tarjeta; las demás se ven al ampliar y pulsar **Anterior** o **Siguiente**. Conviene usar nombres sin espacios, tildes ni diferencias solo de mayúsculas. El nombre escrito en `src` debe coincidir exactamente con el archivo.

No hace falta traducir nombres técnicos de React, etiquetas HTML ni propiedades como `src` o `className`. Los textos, comentarios y mensajes que escribamos para el equipo van en español. Las licencias de terceros se conservan en su forma original.
