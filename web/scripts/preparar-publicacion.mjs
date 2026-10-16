import { cp, mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import { dirname, join, resolve, sep } from 'node:path';
import { carpetaWeb, leerDatos } from './leer-datos.mjs';

const raiz = dirname(carpetaWeb);
const destino = resolve(carpetaWeb, 'dist');
const soloCopia = process.argv.includes('--solo-copia');
// Regenero solo dist; los archivos de la raíz se copian al final si preparo la publicación.
if (!destino.startsWith(resolve(carpetaWeb) + sep) || destino !== join(carpetaWeb, 'dist')) throw new Error('Carpeta temporal no válida.');
await rm(destino, { recursive: true, force: true });
await mkdir(destino, { recursive: true });
for (const nombre of ['css', 'js', 'assets', 'icono-lazysoft.svg']) await cp(join(carpetaWeb, nombre), join(destino, nombre), { recursive: true });
const html = await readFile(join(carpetaWeb, 'index.html'), 'utf8');
await writeFile(join(destino, 'index.html'), html.replace('<body>', '<body data-version-publica>'));
// Excluyo los borradores de la copia que preparo para publicar.
const { trayectoria } = await leerDatos();
await writeFile(join(destino, 'js/trayectoria.js'), "'use strict';\nwindow.LazySoft.trayectoria = " + JSON.stringify(trayectoria.filter(p => !p.borrador), null, 2) + ';\n');
await writeFile(join(destino, '.nojekyll'), '');
if (soloCopia) {
  console.log('Copia final preparada en web/dist/. Puedes verla con npm run preview.');
} else {
  for (const nombre of ['index.html', 'css', 'js', 'assets', 'icono-lazysoft.svg', '.nojekyll']) await cp(join(destino, nombre), join(raiz, nombre), { recursive: true });
  console.log('Archivos preparados en la raíz. No se ha hecho commit ni se ha subido nada a GitHub.');
}
