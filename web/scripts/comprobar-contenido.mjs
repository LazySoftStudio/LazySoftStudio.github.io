import { readFile, readdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
import { Buffer } from 'node:buffer';
import console from 'node:console';

const carpetaWeb = dirname(dirname(fileURLToPath(import.meta.url)));
const codigo = await readFile(join(carpetaWeb, 'content/site.ts'), 'utf8');
const { outputText } = ts.transpileModule(codigo, { compilerOptions: { module: ts.ModuleKind.ESNext } });
const { artworks } = await import('data:text/javascript;base64,' + Buffer.from(outputText).toString('base64'));
const identificadores = new Set();
let imagenes = 0;

// Comprobamos también las mayúsculas: GitHub distingue nombres que Windows trata como iguales.
async function comprobarRuta(ruta) {
 if (!ruta.startsWith('/') || ruta.split('/').includes('..')) throw new Error('Ruta no válida: ' + ruta);
 let carpeta = join(carpetaWeb, 'public');
 for (const parte of ruta.slice(1).split('/')) {
  if (!(await readdir(carpeta)).includes(parte)) throw new Error('Falta el archivo o no coinciden las mayúsculas: ' + ruta);
  carpeta = join(carpeta, parte);
 }
}

for (const pieza of artworks) {
 if (identificadores.has(pieza.id)) throw new Error('Identificador repetido: ' + pieza.id);
 identificadores.add(pieza.id);
 if (!pieza.src.length || pieza.src.length !== pieza.alt.length || pieza.src.length !== pieza.description.length) {
  throw new Error('Revisa las imágenes, textos alternativos y descripciones de: ' + pieza.title);
 }
 for (let i = 0; i < pieza.src.length; i++) {
  if (!pieza.alt[i]?.trim() || !pieza.description[i]?.trim()) throw new Error('Falta texto en: ' + pieza.title);
  await comprobarRuta(pieza.src[i]);
  imagenes++;
 }
}
for (const archivo of ['index.html', 'app/page.tsx', 'components/hero.tsx', 'components/game-journey.tsx']) {
 const texto = await readFile(join(carpetaWeb, archivo), 'utf8');
 for (const coincidencia of texto.matchAll(/["'](\/(?:assets\/[^"']+|[^"']+\.svg))["']/g)) await comprobarRuta(coincidencia[1]);
}
console.log(`Contenido revisado: ${artworks.length} piezas y ${imagenes} imágenes. Todas las rutas existen.`);

// Los borradores pueden estar incompletos; las fichas públicas deben tener sus datos e imágenes.
const codigoTrayectoria = await readFile(join(carpetaWeb, 'content/trayectoria.ts'), 'utf8');
const moduloTrayectoria = ts.transpileModule(codigoTrayectoria, { compilerOptions: { module: ts.ModuleKind.ESNext } });
const { trayectoria } = await import('data:text/javascript;base64,' + Buffer.from(moduloTrayectoria.outputText).toString('base64'));
const proyectos = new Set();
for (const proyecto of trayectoria) {
 if (!proyecto.id?.trim() || proyectos.has(proyecto.id)) throw new Error('Identificador vacío o repetido en trayectoria: ' + proyecto.id);
 proyectos.add(proyecto.id);
 if (typeof proyecto.borrador !== 'boolean') throw new Error('Indica borrador: true o false en ' + proyecto.id);
 if (!proyecto.borrador && (['fecha', 'titulo', 'tipo', 'descripcion'].some(campo => !proyecto[campo]?.trim()) || !proyecto.imagenes.length)) {
  throw new Error('Completa fecha, título, tipo, descripción e imágenes antes de publicar: ' + proyecto.id);
 }
 if (proyecto.enlace && !/^https?:\/\/[^\s]+$/i.test(proyecto.enlace)) throw new Error('El enlace debe empezar por https:// o http:// en ' + proyecto.id);
 for (const imagen of proyecto.imagenes) {
  if (!imagen.alt?.trim()) throw new Error('Falta describir una imagen de ' + proyecto.id);
  await comprobarRuta(imagen.src);
 }
}
console.log(`Trayectoria revisada: ${trayectoria.filter(proyecto => !proyecto.borrador).length} fichas completas y ${trayectoria.filter(proyecto => proyecto.borrador).length} borradores locales.`);
