# LazySoft · El secreto de Monteviejo

Aquí tengo la web de nuestro estudio y del videojuego. Trabajo con HTML, CSS y JavaScript. He separado el contenido del diseño para que podamos añadir avances sin rehacer la página.

## Dónde edito cada cosa

| Archivo o carpeta | Para qué lo uso |
| --- | --- |
| `web/index.html` | Cambio la estructura y los textos de las secciones. |
| `web/css/estilos.css` | Ajusto colores, tamaños, distribución y vista móvil. |
| `web/js/contenido.js` | Actualizo la información del juego, los integrantes, las redes y la galería. |
| `web/js/trayectoria.js` | Añado los proyectos anteriores del estudio. |
| `web/js/app.js` | Modifico el menú, los filtros, el visor y las demás interacciones. |
| `web/assets/` | Guardo las imágenes que utiliza la web. |
| `web/scripts/` | Tengo las herramientas para revisar los archivos y preparar la publicación. |

Edito siempre dentro de `web/`. El HTML, el CSS, el JavaScript y las imágenes de la raíz son la copia que sirve GitHub Pages. La preparo a partir de `web/` para que ambas versiones coincidan; si edito directamente la raíz, perderé esos cambios la próxima vez que la prepare.

## Cómo la veo en mi ordenador

Abro `web/index.html` con Live Server en VS Code. También puedo usar Node.js desde CMD, sin instalar paquetes:

```cmd
cd /d C:\Users\user\Desktop\LazySoftStudio.github.io\web
npm run dev
```

Entro en `http://127.0.0.1:5173`. Después de guardar un cambio, recargo el navegador. Para parar el servidor, pulso `Ctrl+C`.

## Cómo añado diseños

Guardo la imagen en `web/assets/` y añado una ficha a la lista `artworks` de `web/js/contenido.js`. Puedo copiar una ficha existente y cambiar sus datos. Uso un `id` diferente y la categoría `Personajes` o `Escenarios`.

Las listas `src`, `alt` y `description` deben tener el mismo número de elementos y seguir el mismo orden: imagen, texto alternativo y descripción. Escribo las rutas como `assets/mi-imagen.jpg`, sin barra al principio y respetando las mayúsculas del nombre.

## Cómo relleno la trayectoria

He dejado tres fichas vacías en `web/js/trayectoria.js`. Para añadir un proyecto, completo una ficha o duplico otra con un `id` nuevo. Guardo sus imágenes en `web/assets/trayectoria/` y ordeno las fichas de la más antigua a la más reciente.

```js
{
  id: 'nombre-del-proyecto',
  borrador: true,
  fecha: '',
  titulo: '',
  tipo: '',
  descripcion: '',
  imagenes: [
    { src: 'assets/trayectoria/mi-juego.jpg', alt: 'Descripción de la imagen' }
  ],
  enlace: ''
},
```

En `fecha` puedo poner un año, un mes y año o un periodo. En `tipo`, indico si es un videojuego, un prototipo, una game jam o un trabajo de clase. En la descripción cuento de qué trata y qué hicimos. El enlace es opcional; si lo incluyo, uso la dirección completa con `https://`.

Mientras falten datos, mantengo `borrador: true`: así puedo revisar la ficha en local. Cuando tengo la fecha, el título, el tipo, la descripción y al menos una imagen con su texto alternativo, cambio a `borrador: false`. Solo esas fichas pasan a la copia pública.

## Cómo preparo y subo una actualización

Desde la carpeta `web`, ejecuto:

```cmd
npm run publicar
```

Este comando comprueba los datos y las rutas y copia la web preparada a la raíz del repositorio. No sube nada a GitHub. Puedo revisar esa copia con `npm run preview` en `http://127.0.0.1:4173`.

Después reviso los cambios y hago la subida desde la raíz:

```cmd
cd ..
git status
git diff --stat
git add -A
git commit -m "Actualizo el contenido de la web"
git push origin main
```

Antes de confirmar el commit, compruebo que solo incluyo los cambios que quiero compartir. Cambio el mensaje por una descripción breve de lo que he hecho. Cuando termina el despliegue de Pages en la pestaña Actions de GitHub, reviso `https://lazysoftstudio.github.io/`. Si veo la versión anterior, recargo con `Ctrl+F5`.

Para comprobar los datos sin preparar la publicación, uso `npm run comprobar`. Con `npm run build` genero únicamente `web/dist/` para revisarla con `npm run preview`. Esa carpeta es temporal y no la subo.

## Cómo me coordino con el equipo

Antes de empezar, aviso de qué archivos voy a tocar y reviso si alguien está trabajando en ellos. Si voy a cambiar un diseño o una parte que lleva otro compañero, lo comento primero. Al terminar, explico qué he cambiado y dónde se edita. Antes de subir, reviso los cambios pendientes del equipo y compruebo la web en ordenador y móvil.

Si retiro una imagen de la web, conservo su original fuera del repositorio y reviso si sigue referenciada en alguna ficha. Mantengo los nombres de archivo claros y evito cambiarlos solo por sus mayúsculas.
