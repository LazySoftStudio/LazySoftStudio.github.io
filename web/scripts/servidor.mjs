import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, sep, extname } from 'node:path';
import { carpetaWeb } from './leer-datos.mjs';

// Servidor local opcional. La web también funciona abriendo index.html directamente.
const versionPublica = process.argv.includes('--version-publica');
const raiz = resolve(carpetaWeb, versionPublica ? 'dist' : '.');
const puerto = versionPublica ? 4173 : 5173;
const tipos = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.mp4': 'video/mp4', '.txt': 'text/plain; charset=utf-8' };
const servidor = createServer(async (peticion, respuesta) => {
  try {
    const ruta = decodeURIComponent(new URL(peticion.url, 'http://localhost').pathname);
    let archivo = resolve(raiz, '.' + ruta);
    if (archivo !== raiz && !archivo.startsWith(raiz + sep)) { respuesta.writeHead(403).end('Acceso no permitido'); return; }
    if ((await stat(archivo)).isDirectory()) archivo = resolve(archivo, 'index.html');
    const datos = await readFile(archivo);
    respuesta.writeHead(200, { 'Content-Type': tipos[extname(archivo)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    respuesta.end(datos);
  } catch {
    respuesta.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Archivo no encontrado.');
  }
});
servidor.on('error', error => { console.error(`No se pudo abrir el servidor local: ${error.message}`); process.exitCode = 1; });
servidor.listen(puerto, '127.0.0.1', () => console.log(`Web local: http://127.0.0.1:${puerto}/\nGuarda los cambios y recarga el navegador. Para detener el servidor, pulsa Ctrl+C.`));
