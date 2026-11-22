'use strict';
window.LazySoft = window.LazySoft || {};

// Actualizo aquí el contenido conforme avanzamos con el proyecto.
window.LazySoft.site = {
    studio: 'LazySoft', email: 'lazysoftstudio@gmail.com',
    game: {
        title: 'El secreto de Monteviejo', provisionalTitle: false,
        // Página del juego en itch.io: la usa el enlace para abrirlo a pantalla completa.
        playUrl: 'https://lazysoftstudio.itch.io/el-secreto-de-monteviejo',
        // Versión jugable dentro de la web. En itch.io sale en Editar juego > Distribute > Embed game.
        // Si subimos una versión nueva del juego, el número cambia y hay que copiar el nuevo aquí.
        embedUrl: 'https://itch.io/embed-upload/20742239?color=DECEA2'
    },
    // Cuando subamos el tráiler, pego aquí el enlace de YouTube (vale el enlace completo o solo el código del vídeo).
    // Si preferimos un archivo propio, lo guardo en assets/ y escribo su ruta en video, por ejemplo 'assets/trailer.mp4'.
    trailer: { youtube: '', video: '', poster: 'assets/escenarios/pueblo-iglesia.jpg' },
    // Dirección de envío de un servicio de formularios (por ejemplo, Formspree).
    // Si la dejo vacía, el formulario de contacto abre el programa de correo con el mensaje escrito.
    contactForm: '',
    team: ['Ángel Bermúdez', 'Alberto Caro', 'Daniel Corbacho', 'Alejandro Hernández', 'Paula Ortiz', 'Iván Palacios'],
    // Qué hace cada uno, en el mismo orden que team. Salen en Equipo y en el devlog.
    teamRoles: [
        'Diseño y modelado de props',
        'Texturizado de interiores',
        'Modelado de escenarios, personajes y props, cinemáticas, rigging y skinning',
        'Diseño e implementación de interfaces',
        'Arte 2D, iluminación, texturizado de exteriores y de personajes, animación de personajes, tipografía y asistencia en programación',
        'Programación del juego'
    ],
        socials:{
        instagram: 'https://www.instagram.com/lazysoftstudio', 
        youtube: 'https://www.youtube.com/@LazySoftStudio',
        x: 'https://x.com/LazySoftStudio',
        itchio: 'https://lazysoftstudio.itch.io/',
        linktree: 'https://linktr.ee/LazySoftStudio'
    }
};

// Juegos parecidos del apartado de marketing. Cada uno sale como una tarjeta que gira: delante el juego y detrás el motivo.
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

// Devlog: entradas en orden, de la más antigua a la más reciente. tipo puede ser Equipo, Desarrollo o Marketing.
// La entrada con roles: true muestra debajo lo que hace cada integrante (sale de teamRoles).
window.LazySoft.devlog = [
    {
        fecha: 'Septiembre de 2023',
        tipo: 'Equipo',
        titulo: 'Nace LazySoft',
        texto: 'Seis estudiantes se juntan para hacer un videojuego como proyecto de la universidad. Elegimos el nombre, dibujamos el perezoso del logo. A lo largo de los años el equipo trabajará en muchos proyectos, aceptando nuevos miembros. '
    },
    {
        fecha: 'Septiembre de 2026',
        tipo: 'Equipo',
        titulo: 'Surge Monteviejo',
        texto: 'Empezamos a dar vueltas a la idea de un pueblo que esconde un secreto.'
    },
    {
        fecha: 'Septiembre de 2026',
        tipo: 'Desarrollo',
        titulo: 'Todo empieza en papel',
        texto: 'Antes de abrir Unity dibujamos el plano del pueblo, sus calles y la plaza, y los primeros bocetos de Antonio, Eugenia, los camareros gemelos y el alcalde.'
    },
    {
        fecha: 'Octubre de 2026',
        tipo: 'Desarrollo',
        titulo: 'El documento de diseño',
        texto: 'Escribimos el GDD: la historia de Antonio, los cuerpos que hay que identificar, los diálogos con opciones, el inventario de pistas y los controles. También definimos cómo se comporta cada tipo de vecino.'
    },
    {
        fecha: 'Octubre de 2026',
        tipo: 'Equipo',
        titulo: 'Nos repartimos el trabajo',
        texto: 'Hicimos una tabla con lo que se le da bien a cada uno y lo que le apetece hacer, y a partir de ahí repartimos las tareas:',
        roles: true
    },
    {
        fecha: 'Octubre de 2026',
        tipo: 'Marketing',
        titulo: 'Público y modelo de negocio',
        texto: 'Decidimos para quién es el juego, sobre todo jugadores exploradores según la taxonomía de Bartle, y cómo financiarlo: un crowdfunding de «paga lo que quieras» al principio, compra única y DLC con nuevos cuerpos que identificar.'
    },
    {
        fecha: 'Octubre de 2026',
        tipo: 'Marketing',
        titulo: 'Abrimos la web y las redes',
        texto: 'Publicamos este portfolio en GitHub Pages para enseñar el juego, el arte y el equipo, y lo enlazamos con nuestras redes: Instagram, YouTube, X, itch.io y Linktree.'
    },
    {
        fecha: 'Octubre de 2026',
        tipo: 'Desarrollo',
        titulo: 'Del boceto al 3D',
        texto: 'Levantamos el pueblo con volúmenes sencillos, empezamos a modelar a Antonio y a Eugenia, les hicimos el desplegado de UV y texturizamos los primeros interiores, empezando por la casa de Eugenia.'
    },
    {
        fecha: 'Noviembre de 2026',
        tipo: 'Desarrollo',
        titulo: 'Texturas, interfaces y tipografía',
        texto: 'El pueblo ya tiene piedra, cal y tejas. Diseñamos las pantallas del juego, desde el título hasta los diálogos, y dibujamos letra a letra la tipografía Monteviejo.'
    },
    {
        fecha: 'Noviembre de 2026',
        tipo: 'Desarrollo',
        titulo: 'Primera versión jugable',
        texto: 'Subimos a itch.io una versión que se juega en el navegador: se puede recorrer el pueblo, hablar con los vecinos, ver la cinemática del principio y usar el inventario, con un ciclo de día y noche de unos 15 minutos.'
    },
    {
        fecha: 'Noviembre de 2026',
        tipo: 'Marketing',
        titulo: 'El juego, dentro de la web',
        texto: 'Metimos la versión jugable en este portfolio, con sus controles al lado, para que cualquiera pueda probarla sin salir de aquí.'
    },
    {
        fecha: 'Próximamente',
        tipo: 'Marketing',
        titulo: 'Tráiler y campaña',
        texto: 'Lo siguiente es montar el tráiler y preparar la campaña de crowdfunding que recoge nuestro plan de negocio.'
    },
];

// KPIs del apartado de marketing. Escribimos el número en «valor» y el día en que lo miramos en «fecha».
// Mientras «valor» esté vacío, la tarjeta solo se ve en local y no sale en la web publicada.
window.LazySoft.kpis = [
    { nombre: 'Visitas a la página de itch.io', valor: '45', fuente: 'Estadísticas de itch.io', fecha: '22 - nov -2026' },
    { nombre: 'Partidas en el navegador', valor: '23', fuente: 'Estadísticas de itch.io', fecha: '22 - nov -2026' },
    { nombre: 'Seguidores en Instagram', valor: '29', fuente: 'Perfil de @lazysoftstudio', fecha: '22 - nov -2026' },
    { nombre: 'Suscriptores en YouTube', valor: '7', fuente: 'Canal de YouTube de LazySoft', fecha: '22 - nov -2026' },
];

// Grupos de la galería de arte, en el orden en que se muestran. Cada ficha usa uno de estos nombres en category.
window.LazySoft.categoriasArte = [
    { nombre: 'Escenarios', texto: 'Del plano dibujado a mano al pueblo en 3D con sus primeras texturas.' },
    { nombre: 'Personajes', texto: 'Bocetos, vistas de referencia, estudios de color y primeros modelos de los vecinos de Monteviejo.' },
    { nombre: 'Interfaces', texto: 'Prototipos de las pantallas del juego y del recorrido entre ellas.' },
    { nombre: 'Tipografía', texto: 'La letra del juego, dibujada carácter a carácter. Es también la que usa esta web.' },
];

window.LazySoft.artworks = [
    {
        id: '17',
        title: 'Nuevas interfaces',
        category: 'Interfaces',
        type: 'Interfaces',
        src: ['assets/interfaces/inicio.png', 'assets/interfaces/creditos.png', 'assets/interfaces/inventario.jpeg','assets/interfaces/ajustes.png', 'assets/interfaces/controles.png', 'assets/interfaces/dialogo.png', 'assets/interfaces/pausa.png', 'assets/interfaces/mercadillo.png', 'assets/interfaces/dlcpersonajes.png', 'assets/interfaces/dlcFederico.png', 'assets/interfaces/dlcMarisa.png', 'assets/interfaces/dlcProps.png', 'assets/interfaces/dlcEscenarios.png', 'assets/interfaces/seleccionPartida.png'], 
        alt: ['Menú de inicio',
            'Créditos', 
            'Inventario',
            'Ajustes',
            'Controles',
            'Dialogo',
            'Menu de pausa',
            'Mercadillo',
            'Compra DLC Personajes',
            'Compra DLC Federico',
            'Compra DLC Marisa',
            'Compra DLC Props',
            'Compra DLC Escenarios',
            'Seleccion de partidas'
        ],
        description: ['Menú de inicio',
            'Créditos', 
            'Inventario',
            'Ajustes',
            'Controles',
            'Dialogo',
            'Menu de pausa',
            'Mercadillo',
            'Compra DLC Personajes',
            'Compra DLC Federico',
            'Compra DLC Marisa',
            'Compra DLC Props',
            'Compra DLC Escenarios',
            'Seleccion de partidas'
        ]
    }, 
    {
        id: '16',
        title: 'Un pueblo iluminado',
        category: 'Escenarios',
        type: 'Iluminación',
        src: ['assets/escenarios/iluminacion7.png', 'assets/escenarios/iluminacion8.png', 'assets/escenarios/iluminacion1.png', 'assets/escenarios/iluminacion2.png', 'assets/escenarios/iluminacion4.png', 'assets/escenarios/iluminacion3.png', 'assets/escenarios/iluminacion5.png', 'assets/escenarios/iluminacion9.png'],
        alt: ['En Monteviejo van pasando los días. De día sale el sol, y en la oscuridad de la noche, las farolas alumbran las calles del pueblo',
            'Iluminación de farolas',
            'Atardecer',
            'Comienzan a salir las estrellas mientras el sol se esconde',
            'Estrellas de la noche', 
            'Amanecer',
            'Las nubes del día',
            'Iluminación de la plaza por la noche'],
        description: ['En Monteviejo van pasando los días. De día sale el sol, y en la oscuridad de la noche, las farolas alumbran las calles del pueblo',
            'Iluminación de farolas',
            'Atardecer',
            'Comienzan a salir las estrellas mientras el sol se esconde',
            'Estrellas de la noche', 
            'Amanecer',
            'Las nubes del día',
            'Iluminación de la plaza por la noche'

        ]
    },
    {
        id: '15',
        title: 'Tipografía Monteviejo',
        category: 'Tipografía',
        type: 'Diseño tipográfico',
        src: ['assets/tipografia-muestra.png', 'assets/tipografia-mayusculas.png', 'assets/tipografia-minusculas.png'],
        alt: ['Muestra de la tipografía Monteviejo con el título del juego, el abecedario y los números',
            'Las 26 letras mayúsculas de la tipografía Monteviejo dibujadas una a una',
            'Las 26 letras minúsculas de la tipografía Monteviejo dibujadas una a una'],
        description: ['La tipografía Monteviejo escrita con la fuente final: título, abecedario completo con ñ y números.',
            'Las mayúsculas, tal como las dibujamos antes de convertirlas en fuente.',
            'Las minúsculas, dibujadas con el mismo trazo para que el texto del juego tenga un aire antiguo.']
    },
    {
        id: '14',
        title: 'Interfaces: primeros prototipos',
        category: 'Interfaces',
        type: 'Prototipo de interfaz',
        src: ['assets/interfaz-titulo.png', 'assets/interfaz-nueva-partida.png', 'assets/interfaz-cargar-partida.png', 'assets/interfaz-ajustes.png', 'assets/interfaz-creditos.png', 'assets/interfaz-dialogos.png', 'assets/interfaz-flujo.png'],
        alt: ['Pantalla de título con los botones Jugar, Ajustes y Créditos',
            'Pantalla de nueva partida con un campo para escribir su nombre',
            'Pantalla para cargar una de las tres partidas guardadas',
            'Pantalla de ajustes con sonido, gráficos, controles y accesibilidad',
            'Pantalla de créditos con los miembros del equipo',
            'Interfaz de diálogo con el texto del personaje y las respuestas',
            'Esquema con las conexiones entre todas las pantallas'],
        description: ['Pantalla de título: lo primero que se ve al abrir el juego.',
            'Antes de empezar, cada partida lleva su propio nombre.',
            'Se pueden guardar hasta tres partidas y volver a cualquiera de ellas.',
            'Ajustes de sonido, gráficos, controles y accesibilidad, con subtítulos y tamaño de texto.',
            'Los créditos, con todo el equipo de LazySoft.',
            'Así se ven las conversaciones: el texto abajo y las respuestas para elegir a la derecha.',
            'El flujo completo entre pantallas, desde el título hasta la pausa dentro del juego.']
    },
    {
        id: '13',
        title: 'Monteviejo con texturas',
        category: 'Escenarios',
        type: 'Render de escenario',
        src: ['assets/escenarios/pueblo-vista.jpg', 'assets/escenarios/pueblo-iglesia.jpg', 'assets/escenarios/pueblo-calle.jpg', 'assets/escenarios/pueblo-edificio.jpg', 'assets/escenarios/pueblo-fachadas.jpg'],
        alt: ['Vista aérea del pueblo de Monteviejo en 3D con texturas',
            'Iglesia de piedra con su torre, ya texturizada',
            'Calle estrecha de piedra con la torre de la iglesia al fondo',
            'Edificio de dos plantas con fachada ocre y balcón central',
            'Fachadas de piedra, cal y ocre junto a la plaza'],
        description: ['El pueblo entero desde arriba, ya con los primeros materiales aplicados.',
            'La iglesia, ahora con piedra, tejas y su torre.',
            'Una de las calles estrechas que llevan a la plaza, con la torre de la iglesia al fondo.',
            'Uno de los edificios de la plaza, de dos plantas y con balcón.',
            'Piedra, cal y ocre: los colores con los que estamos vistiendo Monteviejo.']
    },
 

    {
        id: '12',
        title: 'Antonio: modelo 3D',
        category: 'Personajes',
        type: 'Modelado de personaje',
        src: [ 'assets/Personajes/AntonioFrente.jpg' ,'assets/Personajes/AntonioDetras.jpg' ,'assets/Personajes/Antonio3Dv2.png' , 'assets/Personajes/Antonio3Dv1.png','assets/Personajes/UVAntonio.jpg' ,'assets/Personajes/AntonioTextura.jpg'],
        alt: ['Modelado 3D final de Antonio por delante',
            'Modelado 3D final de Antonio por detras',
            'Segundo modelado 3D de Antonio, protagonista del juego', 
            'Primer modelado básico de Antonio, le falta el pelo y algunos detalles',
            'Coordenadas UV de Antonio',
            'Texturas de Antonio'],
        description: ['Modelado 3D final de Antonio por delante',
            'Modelado 3D final de Antonio por detras',
            'Antonio va tomando vida. Ya se puede comenzar a ver su forma en 3D.', 
            'Primer modelado básico de Antonio, aunque aún le faltan algunos detalles... Creo que se ha dejado el pelo por ahí.',
            'Coordenadas UV de Antonio',
            'Texturas de Antonio']
    },    
    {
        id: '11',
        title: 'Antonio: protagonista del juego',
        category: 'Personajes',
        type: 'Diseño de personaje',
        src: ['assets/Personajes/Antonio.jpg','assets/Personajes/AntonioTuraround.jpg','assets/Personajes/AntonioColores.jpeg', 'assets/Personajes/AntonioBoceto.jpg', 'assets/Personajes/Expresiones.jpg', 'assets/Personajes/AntonioPose.jpg', 'assets/Personajes/AntonioPose2.jpg'],
        alt: ['Dos versiones de Antonio: uno más elegante con camisa, y otro más informal con camiseta roja',
            'Vistas de referencia de Antonio: vistas de frente, perfiles y espalda',
            'Estudio de color de Antonio: cinco variantes de color para la piel, el cabello y la ropa',
            'Boceto inicial a lápiz de Antonio',
            'Expresiones faciales de Antonio: Alegría, miedo, aburrido, enfado.',
            'Antonio sentado en el suelo con camisa azul',
            'Antonio pensativo con camisa blanca'],
        description: ['Diseño de Antonio: protagonista del juego, con tres versiones de vestuario',
            'Vistas de referencia de Antonio: vistas de frente, perfiles y espalda',
            'Estudio de color de Antonio: cinco variantes de color para la piel, el cabello y la ropa',
            'Boceto inicial a lápiz de Antonio',
            'Expresiones faciales de Antonio: Alegría, miedo, aburrido, enfado.',
            'Prueba de pose: Antonio sentado en el suelo.',
            'Segunda pose de Antonio. ¿En qué estará pensando?'
        ]
    },
    {
        id: '10',
        title: 'Eugenia: vecina de Antonio',
        category: 'Personajes',
        type: 'Diseño de personaje',
        src: [ 'assets/Personajes/vecina-color.jpeg' , 'assets/Personajes/vecina-vistas.jpeg', 'assets/Personajes/vecina-boceto.jpeg',  'assets/Personajes/Eugenia3Dv1.png','assets/Personajes/EugeniaFrente.jpg', 'assets/Personajes/EugeniaDetras.jpg', 'assets/Personajes/UVEugenia.jpg', 'assets/Personajes/EugeniaTextura.jpg'],
        alt: [
            'Diseño de Eugenia: Personaje de una mujer mayor con gafas, moño y vestido violeta, visto de espalda', 
            'Vistas de referencia de Eugenia: vistas de frente, perfiles y espalda',
            'Boceto inicial a lápiz de Eugenia',
            'Primer modelado 3D de Eugenia, vecina de Antonio', 
            'Modelado final de Eugenia de frente',
            'Modelado final de Eugenia por detrás',
            'Coordenadas UV de Eugenia',
            'Texturizado de Eugenia'],
        description:  ['Diseño de Eugenia: vecina de Antonio.', 
            'Vistas de referencia de Eugenia, la vecina de Antonio. En ellas se muestran las vistas de frente, espalda y ambos perfiles para que posteriormente se pueda modelar el personaje en 3D.',
            'Boceto inicial a lápiz de Eugenia',
            'Eugenia comienza a tener forma en 3D. Esta es la primera aproximación básica de su futuro modelado.',
            'Modelado final de Eugenia de frente',
            'Modelado final de Eugenia por detrás',
            'Hemos desplegado las UV de Eugenia para poder texturizarla.',
            'Texturizado de Eugenia'
        ]
    },
    {
        id: '09',
        title: 'Gustavo y Basilio: meseros enfrentados',
        category: 'Personajes',
        type: 'Diseño de personaje',
        src: ['assets/Personajes/camarero-color.jpeg', 'assets/Personajes/MeseroTurn.jpeg', 'assets/Personajes/Mesero1Frente.jpeg', 'assets/Personajes/Mesero2Frente.jpeg','assets/Personajes/MeseroDetras.jpeg', 'assets/Personajes/camarero-boceto.jpeg','assets/Personajes/UVMesero.jpeg', 'assets/Personajes/Mesero1Textura.jpeg', 'assets/Personajes/Mesero2Textura.jpeg'],
        alt: ['Diseño de Gustavo y Basilio: dos meseros con uniforme de chaleco, cada uno con un color de pajarita distinto',
            'Vistas de referencia de Gustavo y Basilio: vistas de frente, perfiles y espalda',
            'Modelo 3D de Gustavo de frente',
            'Modelo 3D de Basilio de frente',
            'Modelo 3D de los meseros por detrás',
            'Boceto inicial a lápiz de Gustavo y Basilio',
            'Coordenadas UV de los meseros',
            'Texturas de Gustavo',
            'Texturas de Basilio'],
        description: ['Diseño de Gustavo y Basilio: dos meseros con uniforme de chaleco, cada uno con un color de pajarita distinto',
            'Vistas de referencia de Gustavo y Basilio: vistas de frente, perfiles y espalda',
            'Modelo 3D de Gustavo de frente',
            'Modelo 3D de Basilio de frente',
            'Modelo 3D de los meseros por detrás',
            'Boceto inicial a lápiz de Gustavo y Basilio',
            'Coordenadas UV de los meseros',
            'Texturas de Gustavo',
            'Texturas de Basilio'
        ]
    },
    {
        id: '08',
        title: '¿Quién es esta persona?',
        category: 'Personajes',
        type: 'Diseño de personaje',
        src: ['assets/Personajes/MisteriosoFrente.jpeg', 'assets/Personajes/MisteriosoDetras.jpeg', 'assets/Personajes/UVMisterioso.jpg', 'assets/Personajes/MisteriosoTextura.jpeg', 'assets/Personajes/MisteriosoSinCapuchaFrente.jpeg', 'assets/Personajes/MisteriosoSinCapuchaDetras.jpeg', 'assets/Personajes/UVMisteriosoSinCapucha.jpg', 'assets/Personajes/MisteriosoSinCapuchaTextura.jpeg'],
        alt: ['Modelado 3D de un personaje misterioso de frente',
            'Modelado 3D de un personaje misterioso por detrás',
            'Coordenadas UV del personaje misterioso',
            'Texturas del personaje misterioso',
            'Modelado 3D de un personaje misterioso sin capucha de frente',
            'Modelado 3D de un personaje misterioso sin capucha por detrás',
            'Coordenadas UV del personaje misterioso sin capucha',
            'Texturas del personaje misterioso sin capucha'
        ],
        description: ['A aparecido un hombre misterioso por el pueblo, ¿alguien sabe quién es?',
            'Modelado 3D de un personaje misterioso por detrás',
            'Coordenadas UV del personaje misterioso',
            'Texturas del personaje misterioso', 
            '¿COMO? ¿A desvelado quién es?',
            'Modelado 3D del personaje misterioso por detrás',
            'Coordenadas UV del personaje misterioso sin capucha',
            'Texturas del personaje misterioso sin capucha'
        ]
    }, 
    {
        id: '07',
        title: 'Juan Fran ¿Alguien le ha visto por ahí?',
        category: 'Personajes',
        type: 'Disseño de personaje',
        src: ['assets/Personajes/JuanFrancisco.png', 'assets/Personajes/JuanFranBoceto.jpeg'],
        alt: ['Fotografía antigua de Juan Francisco', 
            'Boceto inicial de Juan Fran, un hombre mayor sentado en un banco con las manos apoyadas en un bastón'],
        description: ['Fotografía antigual de Juan Fran, uno de los antiguos vecinos de Monteviejo. ¿Dónde estará ahora?',
            'Boceto inicial de Juan Francisco']
    },
    {
        id: '06',
        title: 'Arsenio, alcalde de Monteviejo',
        category: 'Personajes',
        type: 'Diseño de personaje',
        src: ['assets/Personajes/AlcaldeFrente.jpeg', 'assets/Personajes/AlcaldeDetras.jpeg', 'assets/Personajes/ArsenioBoceto.jpeg', 'assets/Personajes/UVAlcalde.jpg',  'assets/Personajes/AlcaldeTextura.jpeg'],
        alt: ['Modelado 3d y texturizado del alcalde de frente',
            'Modelado 3d y texturizado del alcalde por detrás',
            'Boceto a lápiz del alcalde de Monteviejo, un hombre con bigote, camisa, corbata y pantalón',
            'Coordenadas UV del alcalde',
            'Texturas del alcalde'],
        description: ['Modelado 3d y texturizado del alcalde de frente.',
            'Modelado 3d y texturizado del alcalde por detrás.',
            'Boceto a lápiz del alcalde de Monteviejo, un hombre con bigote, camisa, corbata y pantalón.',
            'Coordenadas UV del alcalde.',
            'Texturas del alcalde.']
    },    
    {
        id: '05',
        title: 'Francisca, mujer del alcalde',
        category: 'Personajes',
        type: 'Diseño de personajes',
         src: ['assets/Personajes/MujerAlcaldeFrente.jpeg', 'assets/Personajes/MujerAlcaldeDetras.jpeg', 'assets/Personajes/UVMujerAlcalde.jpg',  'assets/Personajes/MujerAlcaldeTextura.jpeg'],
        alt: ['Esta es Francisca, la mujer del alcalde',
            'Modelado 3d y texturizado del Francisca por detrás',
            'Coordenadas UV de Francisca',
            'Texturas de Francisca'],
        description: ['Esta es Francisca, la mujer del alcalde',
            'Modelado 3d y texturizado del Francisca por detrás',
            'Coordenadas UV de Francisca',
            'Texturas de Francisca'],
    }, 
    {
        id: '04',
        title: 'Manola, mejor amiga de Eugenia',
        category: 'Personajes',
        type: 'Diseño de personajes',
         src: ['assets/Personajes/AmigaVecinaFrente.jpeg', 'assets/Personajes/AmigaVecinaDetras.jpeg', 'assets/Personajes/UVAmiga.jpg',  'assets/Personajes/AmigaVecinaTextura.jpeg'],
        alt: ['Os presentamos a Manola, la mejor amiga de la vecina de Antonio',
            'Modelado 3d y texturizado del Manola por detrás',
            'Coordenadas UV de Manola',
            'Texturas de Manola'],
        description: ['Os presentamos a Manola, la mejor amiga de la vecina de Antonio',
            'Modelado 3d y texturizado del Manola por detrás',
            'Coordenadas UV de Manola',
            'Texturas de Manola'],
    },
    {
        id: '03',
        title: 'Primeras fachadas',
        category: 'Escenarios',
        type: 'Diseño de Escenarios',
        src: ['assets/escenarios/plaza-volumen.jpeg', 'assets/escenarios/calle-volumen.png', 'assets/escenarios/iglesia-volumen.png'],
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
        id: '02',
        title: 'Thumbnails y bocetos',
        category: 'Escenarios',
        type: 'Diseño de Escenarios',
        src: ['assets/escenarios/thumnails.jpg', 'assets/escenarios/bocetosPueblo.jpg'],
        alt: ['Thumbnails de las calles de monteviejo.',
            'Bocetos a partir de los Thumbnails. ',
        ],
        description: ['Thumbnails de las calles de monteviejo.',
            'Bocetos a partir de los Thumbnails. ',
        ]
    }, 
    {
        id: '01',
        title: 'El pueblo sobre el papel',
        category: 'Escenarios',
        type: 'Estudio de distribución',
        src: [ 'assets/escenarios/calle-boceto.jpg', 'assets/escenarios/plaza-boceto.jpg', 'assets/escenarios/plano-pueblo.png'],
        alt: ['Boceto a lápiz de una calle entre viviendas, en la que se encuentra uno de los parques, la biblioteca y una casa en ruinas',
            'Boceto a lápiz de la plaza de Monteviejo, en el que se ve la fuente, una de las tabernas y la iglesia',
            'Plano a mano con la distribución inicial de edificios y calles'
        ],
        description: [ 'Boceto a lápiz de una de las calles entre viviendas, en la que se encuentra uno de los parques, la biblioteca y una casa en ruinas.',
            'Boceto a lápiz de la plaza de Monteviejo, en el que se ve la fuente, una de las tabernas y la iglesia del pueblo.',
            'El primer esquema espacial ayuda a pensar los recorridos y los lugares donde se encontrarán los habitantes.'
        ]
    },
];
