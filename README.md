# LazySoft · El secreto de Monteviejo

https://lazysoftstudio.github.io/

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

## Datos que cambio a menudo (todos en `web/js/contenido.js`)

| Dato | Dónde | Qué hace |
| --- | --- | --- |
| Enlace para jugar | `game.playUrl` | Lo usan todos los botones «Jugar» de la web (cabecera, portada y tráiler). |
| Tráiler | `trailer.youtube` | Pego el enlace de YouTube (o solo el código del vídeo) y aparece el botón de reproducir. Mientras esté vacío, se ve el aviso de que estamos montando el tráiler. |
| Tráiler en archivo propio | `trailer.video` | Si prefiero no usar YouTube, guardo el vídeo en `web/assets/` y escribo su ruta, por ejemplo `assets/trailer.mp4`. |
| Imagen de fondo del tráiler | `trailer.poster` | La imagen que se ve antes de reproducir. |
| Formulario de contacto | `contactForm` | Vacío: al enviar se abre el programa de correo con el mensaje escrito. Si pego la dirección de un servicio de formularios (por ejemplo, Formspree), los mensajes llegan directamente al correo del estudio sin salir de la web. |
| Juegos parecidos | `window.LazySoft.similares` | Lista del apartado de marketing: título, estudio, año y por qué se parece. |

Los textos de público objetivo y la ficha del juego del apartado de marketing están directamente en `web/index.html`.

Edito siempre dentro de `web/`. El HTML, el CSS, el JavaScript y las imágenes de la raíz son la copia que sirve GitHub Pages. La preparo a partir de `web/` para que ambas versiones coincidan; si edito directamente la raíz, perderé esos cambios la próxima vez que la prepare.
