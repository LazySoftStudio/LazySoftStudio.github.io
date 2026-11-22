'use strict';

// Ordeno las fichas desde el proyecto más antiguo hasta el más reciente.
// Mantengo borrador: true mientras falten datos; lo cambio a false cuando termino la ficha.
// Guardo las imágenes en assets/trayectoria/ y escribo esa misma ruta en src.
// La imagen es opcional: si un proyecto no tiene, la web le pone un cartel con su título.
// En la web salen al revés, del más reciente al más antiguo.
window.LazySoft.trayectoria = [
   {
    id: 'PhineasYFerb',
    borrador: false,
    fecha: '2023', // Año, mes y año o periodo; por ejemplo: '2023–2024'.
    titulo: 'Odisea En El Labarinto',
    tipo: 'Aventura Gráfica', // Videojuego, prototipo, game jam, proyecto de clase…
    descripcion: 'Phineas y Ferb lo han vuelto a hacer. Han creado un laberinto gigante en su propio patio. ¿Conseguirás salir? \n \n "Odisea En El Laberinto" se trata de una aventura gráfica desarrollada con Adventure Game Studio. \n \n Además, se trata del primer videojuego desarrollado por LazySoft. Aquí comenzó todo. \n \n Desarrolladores: Iván, Paula, Dani, Pablo, Carlos y Óscar' ,
    imagenes:[{ src: 'assets/trayectoria/OdiseaEnElLaberinto.png', alt: 'Carátula de Odisea en el Laberinto.' },]
  },
  {
    id: 'university',
    borrador: false,
    fecha: '2024', // Año, mes y año o periodo; por ejemplo: '2023–2024'.
    titulo: 'Horror University',
    tipo: 'Juego de terror', // Videojuego, prototipo, game jam, proyecto de clase…
    descripcion: 'Un día Emily sale de hacer un examen en la universidad, y se va directa al baño. Al salir, descubre que la universidad ha cambiado. La niebla invade el campus y hay criaturas extrañas en cada esquina. \n \n Para conseguir salir, Emily deberá enfrentarse a sus miedos más profundos. ¿Conseguirá superarlos? \n \n Desarrolladores: Iván, Paula, Dani, Álex, Pablo, Carlos y Óscar' ,
    imagenes:[{ src: 'assets/trayectoria/HorrorUniversity.png', alt: 'Carátula de Horror University.' },]
  },
  {
    id: 'time-trouble',
    borrador: false,
    fecha: '2025 GameGen Game Jam, 5.ª edición', // Año, mes y año o periodo; por ejemplo: '2023–2024'.
    titulo: 'Time Trouble',
    tipo: 'Game jam', // Videojuego, prototipo, game jam, proyecto de clase…
    descripcion: 'Shooter de supervivencia hecho en Unity. \n \n Un científico prueba su máquina del tiempo, se le cuela un insecto en el salto y acaba en la prehistoria sin memoria. Tiene que sobrevivir a los enemigos para recordar quién es, con la ayuda de un poder que para el tiempo durante unos segundos.\n \n Desarrolladores: Iván, Paula, Dani, Álex, Pablo y Carlos',
    imagenes: [{ src: 'assets/trayectoria/TimeTruble.png', alt: 'Carátula de Time Truble.' }], // Ejemplo: [{ src: 'assets/trayectoria/mi-juego.jpg', alt: 'Captura de mi juego' }].
    enlace: 'https://mippim.itch.io/time-trouble', // Opcional: URL completa de la demo, vídeo o página del proyecto.
  },
    {
    id: 'skitzzo',
    borrador: false,
    fecha: '2025', // Año, mes y año o periodo; por ejemplo: '2023–2024'.
    titulo: 'SKITZZO',
    tipo: 'Realidad Aumentada', // Videojuego, prototipo, game jam, proyecto de clase…
    descripcion: '¿Alguna vez has querido que todo aquello que imaginas cobre vida? En SKITZZO podrás hacerlo realidad. \n \n SKITZZO se trata de un juego de realidad aumentada en el que podrás ir creando todo aquello que imaginas e ir dejandolo por la ciudad para que otros usuarios puedan encontrarlo e interactuar con ello. Lo único que tendrás que hacer es imaginarlo y dibujarlo. \n \n Desarrolladores: Iván, Paula, Dani, Álex, Pablo y Carlos' ,
    imagenes:[{ src: 'assets/trayectoria/SKITZZO.png', alt: 'Carátula de SKITZZO.' },]
  },
  {
    id: 'chartarium',
    borrador: false,
    fecha: '2025',
    titulo: 'Chartarium Wars',
    tipo: 'Batalla multijugador',
    descripcion: 'Chartarium Wars es un juego de tanques multijugador con vista cenital 2D. Cuenta con un estilo visual de papel. Ha sido realizado en Phaser íntegramente. \n \n Desarrolladores: Iván, Pablo y Carlos',
    imagenes: [{ src: 'assets/trayectoria/ChartariumWars.png', alt: 'Carátula de Chartarium Wars.' }],
    enlace: 'https://mippim.itch.io/chartarium-wars',
  },
  {
    id: 'el-enigma-de-la-torre-encantada',
    borrador: false,
    fecha: '2025',
    titulo: 'El Enigma de la Torre Encantada',
    tipo: 'Multijugador colaborativo',
    descripcion: 'Cada jugador es un mago de una parte del mundo y entre todos hay que resolver los enigmas de la Torre Encantada para llegar al elixir de la vida eterna. Se puede jugar en equipo o traicionar a los demás.\n \n Dearrolladores: Paula, Dani, Alex y Ángel',
    imagenes: [{ src: 'assets/trayectoria/ElEnigmaDeLaTorreEncantada.png', alt: 'Carátula de El Enigma de la Torre Encantada.' }],
    enlace: 'https://laupaa.itch.io/el-enigma-de-la-torre-encantada',
  },
  {
    id: 'el-mago-canijo',
    borrador: false,
    fecha: '2026',
    titulo: 'El Mago Canijo',
    tipo: 'Videojuego',
    descripcion: 'Plataformas en 2D hecho en Unity. El mago canijo recorre los niveles buscando pergaminos que le enseñan hechizos nuevos, que se lanzan con las teclas del 1 al 5, para conseguir el elixir de la vida antes de que le pase algo malo.\n \n Desarrolladores: Iván, Paula y Dani',
    imagenes: [{ src: 'assets/trayectoria/ElMagoCanijo.png', alt: 'Carátula de El Mago Canijo.' }],
    enlace: 'https://mippim.itch.io/el-mago-canijo',
  },
  {
    id: 'el-secreto-de-monteviejo',
    borrador: false,
    fecha: '2026, en desarrollo',
    titulo: 'El secreto de Monteviejo',
    tipo: 'Aventura narrativa en 3D',
    descripcion: 'El secreto de Monteviejo se trata de una aventura narrativa en 3D hecha en Unity que ya se puede jugar en el navegador, aquí en la web y en itch.io. \n \n Desarrolladores: Iván, Paula, Dani, Alex, Ángel y Alberto',
    imagenes: [
      { src: 'assets/trayectoria/Monteviejo.png', alt: 'Carátula de El Secreto de Monteviejo.' },
      { src: 'assets/escenarios/pueblo-vista.jpg', alt: 'Vista aérea del pueblo de Monteviejo en 3D con texturas' },
      { src: 'assets/interfaz-titulo.png', alt: 'Pantalla de título de El secreto de Monteviejo' },
    ],
    enlace: 'https://lazysoftstudio.itch.io/el-secreto-de-monteviejo',
  },
];
