import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

export const carpetaWeb = dirname(dirname(fileURLToPath(import.meta.url)));

// Leo los mismos datos que utiliza el navegador.
export async function leerDatos() {
  const contexto = vm.createContext({ window: {} });
  for (const archivo of ['contenido.js', 'trayectoria.js']) {
    const codigo = await readFile(join(carpetaWeb, 'js', archivo), 'utf8');
    new vm.Script(codigo, { filename: archivo }).runInContext(contexto, { timeout: 1000 });
  }
  return contexto.window.LazySoft;
}
