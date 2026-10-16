'use strict';

// Ordeno las fichas desde el proyecto más antiguo hasta el más reciente.
// Mantengo borrador: true mientras falten datos; lo cambio a false cuando termino la ficha.
// Guardo las imágenes en assets/trayectoria/ y escribo esa misma ruta en src.
// Tengo el ejemplo completo y los pasos en el README de la raíz del repositorio.
window.LazySoft.trayectoria = [
  {
    id: 'proyecto-01',
    borrador: true,
    fecha: '', // Año, mes y año o periodo; por ejemplo: '2023–2024'.
    titulo: '',
    tipo: '', // Videojuego, prototipo, game jam, proyecto de clase…
    descripcion: '', // Cuento de qué trata, qué hicimos y qué aprendimos.
    imagenes: [], // Ejemplo: [{ src: 'assets/trayectoria/mi-juego.jpg', alt: 'Captura de mi juego' }].
    enlace: '', // Opcional: URL completa de la demo, vídeo o página del proyecto.
  },
  {
    id: 'proyecto-02',
    borrador: true,
    fecha: '',
    titulo: '',
    tipo: '',
    descripcion: '',
    imagenes: [],
    enlace: '',
  },
  {
    id: 'proyecto-03',
    borrador: true,
    fecha: '',
    titulo: '',
    tipo: '',
    descripcion: '',
    imagenes: [],
    enlace: '',
  },
];
