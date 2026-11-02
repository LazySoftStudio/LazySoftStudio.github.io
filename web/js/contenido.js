'use strict';
window.LazySoft = window.LazySoft || {};

// Actualizo aquí el contenido conforme avanzamos con el proyecto.
window.LazySoft.site = {
    studio: 'LazySoft', email: 'lazysoftstudio@gmail.com',
    game: {
        title: 'El secreto de Monteviejo', provisionalTitle: false,
        // Página del juego en itch.io: la usan todos los botones de «Jugar».
        playUrl: 'https://lazysoftstudio.itch.io/el-secreto-de-monteviejo'
    },
    // Cuando subamos el tráiler, pego aquí el enlace de YouTube (vale el enlace completo o solo el código del vídeo).
    // Si preferimos un archivo propio, lo guardo en assets/ y escribo su ruta en video, por ejemplo 'assets/trailer.mp4'.
    trailer: { youtube: '', video: '', poster: 'assets/plaza-volumen.jpeg' },
    // Dirección de envío de un servicio de formularios (por ejemplo, Formspree).
    // Si la dejo vacía, el formulario de contacto abre el programa de correo con el mensaje escrito.
    contactForm: '',
    team: ['Ángel Bermúdez', 'Alberto Caro', 'Daniel Corbacho', 'Alejandro Hernández', 'Paula Ortiz', 'Iván Palacios'],
        socials:{
        instagram: 'https://www.instagram.com/lazysoftstudio', 
        youtube: 'https://www.youtube.com/@LazySoftStudio',
        x: 'https://x.com/LazySoftStudio',
        itchio: 'https://lazysoftstudio.itch.io/',
        linktree: 'https://linktr.ee/LazySoftStudio'
    }
};

// Juegos parecidos del apartado de marketing. Es una lista provisional: la cambiamos cuando lo decidamos en equipo.
window.LazySoft.similares = [
    {
        titulo: 'Return of the Obra Dinn',
        estudio: 'Lucas Pope',
        anio: 2018,
        motivo: 'Hay que averiguar quién era cada persona cruzando pistas sueltas. Es la referencia más cercana a nuestra investigación.'
    },
    {
        titulo: 'Life is Strange',
        estudio: 'Dontnod Entertainment',
        anio: 2015,
        motivo: 'Un pueblo pequeño, cámara en tercera persona y conversaciones en las que eliges qué decir.'
    },
    {
        titulo: 'Mutazione',
        estudio: 'Die Gute Fabrik',
        anio: 2019,
        motivo: 'Una comunidad pequeña donde todos se conocen y los cotilleos mueven la historia.'
    },
    {
        titulo: 'Super Mario 64',
        estudio: 'Nintendo',
        anio: 1996,
        motivo: 'Referencia visual del documento de diseño: modelos de pocos polígonos y texturas sencillas.'
    },
];

window.LazySoft.artworks = [
    {
        id: '10',
        title: 'UV de Antonio',
        category: 'Personajes',
        type: 'desplegado UV',
        src: [ 'assets/UVAntonio.jpg'],
        alt: ['desplegado UV de Antonio.'],
        description: ['Hemos despiezado a Antonio y lo hemos aplanado. Este es el resultado de su desplegado UV, que nos permitirá texturizarlo en 3D.']
    }, 
    {
        id: '09',
        title: 'Eugenia: comienzo de modelado',
        category: 'Personajes',
        type: 'Diseño de personaje',
        src: [ 'assets/Eugenia3Dv1.png'],
        alt: ['Primer modelado 3D de Eugenia, vecina de Antonio'],
        description: ['Eugenia comienza a tener forma en 3D. Esta es la primera aproximación básica de su futuro modelado.']
    }, 
    {
        id: '08',
        title: 'Antonio: comienzo de modelado',
        category: 'Personajes',
        type: 'Diseño de personaje',
        src: [ 'assets/Antonio3Dv2.png' , 'assets/Antonio3Dv1.png'],
        alt: ['Modelado 3D de Antonio, protagonista del juego', 
            'Primer modelado básico de Antonio, le falta el pelo y algunos detalles'],
        description: ['Antonio va tomando vida. Ya se puede comenzar a ver su forma en 3D.', 
            'Primer modelado básico de Antonio, aunque aún le faltan algunos detalles... Creo que se ha dejado el pelo por ahí.']
    },    
    {
        id: '07',
        title: 'Eugenia: vecina de Antonio',
        category: 'Personajes',
        type: 'Diseño de personaje',
        src: [ 'assets/vecina-color.jpeg' , 'assets/vecina-vistas.jpeg', 'assets/vecina-boceto.jpeg'],
        alt: [
            'Diseño de Eugenia: Personaje de una mujer mayor con gafas, moño y vestido violeta, visto de espalda', 
            'Vistas de referencia de Eugenia: vistas de frente, perfiles y espalda',
            'Boceto inicial a lápiz de Eugenia'],
        description:  ['Diseño de Eugenia: Personaje de una mujer mayor con gafas, moño y vestido violeta, visto de espalda', 
            'Vistas de referencia de Eugenia, la vecina de Antonio. En ellas se muestran las vistas de frente, espalda y ambos perfiles para que posteriormente se pueda modelar el personaje en 3D.',
            'Boceto inicial a lápiz de Eugenia'
        ]
    },
    {
        id: '06',
        title: 'Gustavo y Basilio: meseros enfrentados',
        category: 'Personajes',
        type: 'Diseño de personaje',
        src: ['assets/camarero-color.jpeg', 'assets/MeseroTurn.jpeg', 'assets/camarero-boceto.jpeg'],
        alt: ['Diseño de Gustavo y Basilio: dos meseros con uniforme de chaleco, cada uno con un color de pajarita distinto',
            'Vistas de referencia de Gustavo y Basilio: vistas de frente, perfiles y espalda',
            'Boceto inicial a lápiz de Gustavo y Basilio'],
        description: ['Diseño de Gustavo y Basilio: dos meseros con uniforme de chaleco, cada uno con un color de pajarita distinto',
            'Vistas de referencia de Gustavo y Basilio: vistas de frente, perfiles y espalda',
            'Boceto inicial a lápiz de Gustavo y Basilio'
        ]
    },
    {
        id: '05',
        title: 'Antonio: protagonista del juego',
        category: 'Personajes',
        type: 'Diseño de personaje',
        src: ['assets/Antonio.jpg','assets/AntonioTuraround.jpg','assets/AntonioColores.jpeg', 'assets/AntonioBoceto.jpg'],
        alt: ['Dos versiones de Antonio: uno más elegante con camisa, y otro más informal con camiseta roja',
            'Vistas de referencia de Antonio: vistas de frente, perfiles y espalda',
            'Estudio de color de Antonio: cinco variantes de color para la piel, el cabello y la ropa',
            'Boceto inicial a lápiz de Antonio'],
        description: ['Diseño de Antonio: protagonista del juego, con dos versiones de vestuario',
            'Vistas de referencia de Antonio: vistas de frente, perfiles y espalda',
            'Estudio de color de Antonio: cinco variantes de color para la piel, el cabello y la ropa',
            'Boceto inicial a lápiz de Antonio'
        ]
    },
    {
        id: '04',
        title: 'Juan Fran',
        category: 'Personajes',
        type: 'Boceto de personaje',
        src: ['assets/JuanFranBoceto.jpeg'],
        alt: ['Boceto inicial de Juan Fran, un hombre mayor sentado en un banco con las manos apoyadas en un bastón'],
        description: ['Boceto inicial de Juan Francisco, uno de los antiguos vecinos de Monteviejo. ¿Dónde estará ahora?']
    },
    {
        id: '03',
        title: 'Arsenio: alcalde de Monteviejo',
        category: 'Personajes',
        type: 'Boceto de personaje',
        src: ['assets/ArsenioBoceto.jpeg'],
        alt: ['Boceto a lápiz del alcalde de Monteviejo, un hombre con bigote, camisa, corbata y pantalón'],
        description: ['Boceto inicial de Arsenio, el alcalde de Monteviejo.']
    },    
    {
        id: '02',
        title: 'Primeras fachadas',
        category: 'Escenarios',
        type: 'Diseño de Escenarios',
        src: ['assets/plaza-volumen.jpeg', 'assets/calle-volumen.png', 'assets/iglesia-volumen.png'],
        alt: ['Primera aproximación a las fachadas de la plaza en 3D, observándose la iglesia, las dos tabernas, el ayuntamiento y algunas de las casas. ',
            'Primera aproximación de modelado en 3D, en la que se ve una de las tabernas y una casa',
            'Primera aproximación de la iglesia de Monteviejo en 3D'
        ],
        description: ['Primera aproximación a las fachadas de la plaza en 3D, observándose la iglesia, las dos tabernas, el ayuntamiento y algunas de las casas. ',
            'Primera aproximación de modelado en 3D, en la que se ve una de las tabernas y una casa',
            'Primera aproximación de la iglesia de Monteviejo en 3D'
        ]
    },    
    {
        id: '01',
        title: 'El pueblo sobre el papel',
        category: 'Escenarios',
        type: 'Estudio de distribución',
        src: ['assets/plano-pueblo.png', 'assets/calle-boceto.jpg', 'assets/plaza-boceto.jpg'],
        alt: ['Plano a mano con la distribución inicial de edificios y calles',
            'Boceto a lápiz de una calle entre viviendas, en la que se encuentra uno de los parques, la biblioteca y una casa en ruinas',
            'Boceto a lápiz de la plaza de Monteviejo, en el que se ve la fuente, una de las tabernas y la iglesia'
        ],
        description: ['El primer esquema espacial ayuda a pensar los recorridos y los lugares donde se encontrarán los habitantes.',
            'Boceto a lápiz de una de las calles entre viviendas, en la que se encuentra uno de los parques, la biblioteca y una casa en ruinas.',
            'Boceto a lápiz de la plaza de Monteviejo, en el que se ve la fuente, una de las tabernas y la iglesia del pueblo.'
        ]
    },
];
