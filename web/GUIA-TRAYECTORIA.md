# Cómo rellenar la trayectoria de LazySoft

La plantilla está en `content/trayectoria.ts`. Ahí puedes cambiar fechas, textos e imágenes sin tocar el diseño. Las tres fichas iniciales están vacías: no representan proyectos reales.

## 1. Abre la vista local

Desde la carpeta del repositorio en CMD:

```bat
cd web
npm ci --include=dev
npm run dev
```

Abre la dirección que aparezca en la terminal y entra en **Trayectoria**. No hace falta repetir la instalación cada vez. Al guardar los cambios en VS Code, el navegador se actualiza. Estos comandos no suben nada a GitHub.

## 2. Rellena una ficha

En `content/trayectoria.ts`, cambia los campos de uno de los bloques:

| Campo | Qué poner |
| --- | --- |
| `id` | Nombre interno único, sin espacios; por ejemplo, `mi-primer-juego`. |
| `borrador` | `true` mientras lo preparas; `false` cuando esté revisado y listo para aparecer en la web pública. |
| `fecha` | Año, mes y año o periodo. No hace falta un día exacto. |
| `titulo` | Nombre real del juego o proyecto. |
| `tipo` | Por ejemplo: videojuego, prototipo o proyecto de clase. |
| `descripcion` | De qué trata, qué hicisteis y qué aprendisteis. |
| `imagenes` | Una o varias imágenes, cada una con su ruta `src` y su descripción `alt`. La primera es la portada; las demás aparecen como miniaturas seleccionables. |
| `enlace` | URL completa de la demo, vídeo o página del proyecto. Déjalo como `''` si no hay enlace. |

Guarda las imágenes en `public/assets/trayectoria/`. Usa nombres sencillos como `mi-juego-portada.jpg`, con las mismas mayúsculas y extensión que la ruta escrita en la ficha. Para el navegador la ruta empieza en `/assets/trayectoria/`, sin `public`.

Este bloque es un **ejemplo ficticio de formato**. Sustituye los datos y añade las imágenes reales antes de copiarlo:

```ts
{
  id: 'mi-primer-juego',
  borrador: true,
  fecha: '2023–2024',
  titulo: 'Nombre real del juego',
  tipo: 'Proyecto de clase',
  descripcion: 'Cuenta aquí de qué trata el juego y qué hizo el equipo.',
  imagenes: [
    { src: '/assets/trayectoria/mi-juego-portada.jpg', alt: 'Portada del juego' },
    { src: '/assets/trayectoria/mi-juego-captura.jpg', alt: 'Captura del primer nivel' },
  ],
  enlace: '',
},
```

## 3. Añade proyectos y ordénalos

Duplica un bloque completo, desde `{` hasta `},`, dentro de la lista. Cambia su `id` para que no se repita. Coloca los proyectos **del más antiguo al más reciente**: la web respeta el orden del archivo, no intenta interpretar las fechas. Puedes borrar los bloques que no necesites.

Cada ficha debe tener fecha, título, tipo, descripción y al menos una imagen con texto alternativo antes de cambiar `borrador` a `false`. Los borradores se ven únicamente con `npm run dev`; no aparecen en la compilación pública. Si no hay ninguna ficha completa, la web muestra un breve aviso de próximos proyectos.

## 4. Comprueba el resultado

Revisa el apartado en ordenador y móvil. Prueba las miniaturas y los enlaces. Para comprobar datos y rutas, ejecuta desde `web/`:

```bat
npm run comprobar
npm run build
```

`build` genera la versión final solo dentro de `web/dist/`. Con `npm run preview` puedes verla en local, con los borradores ocultos. Ninguno de estos comandos hace commit, push ni modifica la web pública.

Cuando el equipo quiera publicarlo, se seguirá el procedimiento del README principal (`npm run publicar`, revisión, commit y push manual). Mientras tanto, trabajad y revisad los cambios en local.
