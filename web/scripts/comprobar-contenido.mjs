import { readFile, readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';
import vm from 'node:vm';
import { carpetaWeb, leerDatos } from './leer-datos.mjs';

const { site, artworks, trayectoria } = await leerDatos();
const texto = valor => typeof valor === 'string' && valor.trim().length > 0;
const enlaceValido = valor => { try { return ['http:', 'https:'].includes(new URL(valor).protocol); } catch { return false; } };

async function comprobarRuta(ruta) {
  if (!texto(ruta) || ruta.startsWith('/') || ruta.includes('..') || ruta.includes('\\') || ruta.includes(':')) throw new Error('Usa una ruta relativa válida: ' + ruta);
  let carpeta = carpetaWeb;
  for (const parte of ruta.split('/')) {
    if (!(await readdir(carpeta)).includes(parte)) throw new Error('Falta el archivo o no coinciden las mayúsculas: ' + ruta);
    carpeta = join(carpeta, parte);
  }
  if (!(await stat(carpeta)).isFile()) throw new Error('La ruta debe apuntar a un archivo: ' + ruta);
}

let imagenes = 0;
const identificadores = new Set();
for (const pieza of artworks) {
  if (!texto(pieza.id) || identificadores.has(pieza.id)) throw new Error('Identificador de arte vacío o repetido: ' + pieza.id);
  identificadores.add(pieza.id);
  if (!['Personajes', 'Escenarios'].includes(pieza.category)) throw new Error('Categoría desconocida: ' + pieza.id);
  if (!texto(pieza.title) || !pieza.src.length || pieza.src.length !== pieza.alt.length || pieza.src.length !== pieza.description.length) throw new Error('Revisa los datos de: ' + pieza.id);
  for (let i = 0; i < pieza.src.length; i++) {
    if (!texto(pieza.alt[i]) || !texto(pieza.description[i])) throw new Error('Falta describir una imagen de: ' + pieza.id);
    await comprobarRuta(pieza.src[i]);
    imagenes++;
  }
}
const proyectos = new Set();
for (const proyecto of trayectoria) {
  if (!texto(proyecto.id) || proyectos.has(proyecto.id)) throw new Error('Identificador de trayectoria vacío o repetido: ' + proyecto.id);
  proyectos.add(proyecto.id);
  if (typeof proyecto.borrador !== 'boolean') throw new Error('Indica borrador: true o false en ' + proyecto.id);
  if (!proyecto.borrador && (['fecha', 'titulo', 'tipo', 'descripcion'].some(campo => !texto(proyecto[campo])) || !proyecto.imagenes.length)) throw new Error('Completa la ficha antes de publicarla: ' + proyecto.id);
  if (proyecto.enlace && !enlaceValido(proyecto.enlace)) throw new Error('El enlace debe ser una URL http o https válida: ' + proyecto.id);
  for (const imagen of proyecto.imagenes) {
    if (!texto(imagen.alt)) throw new Error('Falta describir una imagen de: ' + proyecto.id);
    await comprobarRuta(imagen.src);
  }
}
for (let i = 0; i < site.team.length; i++) await comprobarRuta(`assets/equipo/${i}.jpeg`);
for (const enlace of Object.values(site.socials)) if (!enlaceValido(enlace)) throw new Error('Revisa el enlace de una red social.');
const html = await readFile(join(carpetaWeb, 'index.html'), 'utf8');
for (const coincidencia of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
  if (!/^(#|https?:|mailto:)/.test(coincidencia[1])) await comprobarRuta(coincidencia[1]);
}
// Reviso la sintaxis sin ejecutar las interacciones de la página.
for (const archivo of await readdir(join(carpetaWeb, 'js'))) {
  if (archivo.endsWith('.js')) new vm.Script(await readFile(join(carpetaWeb, 'js', archivo), 'utf8'), { filename: archivo });
}
console.log(`Contenido revisado: ${artworks.length} fichas, ${imagenes} imágenes y ${site.team.length} integrantes.`);
console.log(`Trayectoria: ${trayectoria.filter(p => !p.borrador).length} fichas completas y ${trayectoria.filter(p => p.borrador).length} borradores locales.`);
console.log('HTML y JavaScript revisados. Todas las rutas locales existen.');
