'use strict';

// Ordeno las fichas desde el proyecto más antiguo hasta el más reciente.
// Mantengo borrador: true mientras falten datos; lo cambio a false cuando termino la ficha.
// Guardo las imágenes en assets/trayectoria/ y escribo esa misma ruta en src.
// La imagen es opcional: si un proyecto no tiene, la web le pone un cartel con su título.
// En la web salen al revés, del más reciente al más antiguo.
window.LazySoft.trayectoria = [
  {
    id: 'time-trouble',
    borrador: false,
    fecha: 'GameGen Game Jam, 5.ª edición', // Año, mes y año o periodo; por ejemplo: '2023–2024'.
    titulo: 'Time Trouble',
    tipo: 'Game jam', // Videojuego, prototipo, game jam, proyecto de clase…
    descripcion: 'Shooter de supervivencia hecho en Unity. Un científico prueba su máquina del tiempo, se le cuela un insecto en el salto y acaba en la prehistoria sin memoria. Tiene que sobrevivir a los enemigos para recordar quién es, con la ayuda de un poder que para el tiempo durante unos segundos.\nEn el equipo estuvimos Iván, Dani, Paula y Alex.',
    imagenes: [], // Ejemplo: [{ src: 'assets/trayectoria/mi-juego.jpg', alt: 'Captura de mi juego' }].
    enlace: 'https://mippim.itch.io/time-trouble', // Opcional: URL completa de la demo, vídeo o página del proyecto.
  },
  {
    id: 'plof-battle',
    borrador: false,
    fecha: 'Proyecto de asignatura',
    titulo: 'Plof Battle',
    tipo: 'Videojuego multijugador',
    descripcion: 'Juego de batallas multijugador en pixel art, hecho en Unity para la asignatura de Proceso de Desarrollo de Videojuegos. El equipo se organizó con Scrum: Paula estuvo en arte e interfaz e Iván en programación.',
    imagenes: [],
    enlace: 'https://mippim.itch.io/plof-battle',
  },
  {
    id: 'el-enigma-de-la-torre-encantada',
    borrador: false,
    fecha: 'Juego para navegador',
    titulo: 'El Enigma de la Torre Encantada',
    tipo: 'Multijugador colaborativo',
    descripcion: 'Cada jugador es un mago de una parte del mundo y entre todos hay que resolver los enigmas de la Torre Encantada para llegar al elixir de la vida eterna. Se puede jugar en equipo o traicionar a los demás.\nLo hicieron Paula y Alex.',
    imagenes: [],
    enlace: 'https://laupaa.itch.io/el-enigma-de-la-torre-encantada',
  },
  {
    id: 'el-mago-canijo',
    borrador: false,
    fecha: 'Plataformas en 2D',
    titulo: 'El Mago Canijo',
    tipo: 'Videojuego',
    descripcion: 'Plataformas en 2D hecho en Unity. El mago canijo recorre los niveles buscando pergaminos que le enseñan hechizos nuevos, que se lanzan con las teclas del 1 al 5, para conseguir el elixir de la vida antes de que le pase algo malo.\nLo hicieron Iván y Paula.',
    imagenes: [],
    enlace: 'https://mippim.itch.io/el-mago-canijo',
  },
  {
    id: 'el-secreto-de-monteviejo',
    borrador: false,
    fecha: '2026, en desarrollo',
    titulo: 'El secreto de Monteviejo',
    tipo: 'Aventura narrativa en 3D',
    descripcion: 'Nuestro primer juego como LazySoft, con los seis integrantes del equipo. Una aventura narrativa en 3D hecha en Unity que ya se puede jugar en el navegador, aquí en la web y en itch.io.',
    imagenes: [
      { src: 'assets/pueblo-vista.jpg', alt: 'Vista aérea del pueblo de Monteviejo en 3D con texturas' },
      { src: 'assets/interfaz-titulo.png', alt: 'Pantalla de título de El secreto de Monteviejo' },
    ],
    enlace: 'https://lazysoftstudio.itch.io/el-secreto-de-monteviejo',
  },
];
