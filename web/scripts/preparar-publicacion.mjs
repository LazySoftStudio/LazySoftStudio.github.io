import { cp, readdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import console from 'node:console';

const carpetaWeb = dirname(dirname(fileURLToPath(import.meta.url)));
const raiz = dirname(carpetaWeb);
const compilacion = join(carpetaWeb, 'dist');
const entrada = await readFile(join(compilacion, 'index.html'), 'utf8');
if (!entrada.includes('/assets/index-')) throw new Error('La compilación no está lista. Ejecuta npm run publicar desde web/.');

// Solo copiamos la web compilada. Los documentos, el código y el historial permanecen intactos.
for (const nombre of await readdir(compilacion)) await cp(join(compilacion, nombre), join(raiz, nombre), { recursive: true });
await writeFile(join(raiz, '.nojekyll'), '');
console.log('La versión pública está preparada en la raíz del repositorio. Revisa los cambios, crea el commit y súbelo a main.');
