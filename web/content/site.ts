// Contenido público: actualizar aquí conforme avance el proyecto.
export const site = {
 studio: 'LazySoft', email: 'lazysoftstudio@gmail.com',
 game: {title: 'El secreto de Monteviejo',provisionalTitle: false,
 description: 'Antonio llega a Monteviejo por trabajo y comienza a investigar el pasado del pueblo. El jugador explora sus calles, habla con los vecinos y consulta documentos para relacionar las pistas.',
 pillars: [
 {title: 'Explora el pueblo',text: 'Calles, viviendas y una plaza donde se cruzan las historias. Un entorno rural pensado para descubrirlo a pie.'},
 {title: 'Escucha a sus habitantes',text: 'Cada vecino tiene su propia versión. El diálogo será la puerta de entrada a los vínculos y tensiones del pueblo.'},
 {title: 'Conecta las pistas',text: 'Observa, consulta documentos y contrasta testimonios para reconstruir lo que ocurrió.'},
 ]},
 team: ['Ángel Bermúdez','Alberto Caro','Daniel Corbacho','Alejandro Hernández','Paula Ortiz','Iván Palacios'],
};

export type Artwork = { id: string; title: string; category: 'Escenarios'|'Personajes'; type: string; src: string; alt: string; description: string };
export const artworks: Artwork[] = [
 {id:'16',title:'Vecina: vistas de referencia',category:'Personajes',type:'Hoja de personaje',src:'/assets/vecina-vistas.jpeg',alt:'Personaje de una mujer mayor con gafas, moño y vestido violeta, visto de frente, espalda y ambos perfiles',description:'Vistas de referencia para mantener las proporciones, el peinado y el vestuario del personaje.'},
 {id:'15',title:'Vecina: diseño en color',category:'Personajes',type:'Diseño de personaje',src:'/assets/vecina-color.jpeg',alt:'Mujer mayor con gafas verdes, chaqueta beige y vestido violeta con flores',description:'Propuesta de color para el vestuario y los rasgos del personaje.'},
 {id:'14',title:'Camarero: variantes de color',category:'Personajes',type:'Estudio de color',src:'/assets/camarero-color.jpeg',alt:'Dos variantes de un camarero con bigote, chaleco oscuro y pajarita roja o azul',description:'Comparación de dos combinaciones de color para la pajarita y el uniforme.'},
 {id:'13',title:'Personaje: estudio de sombreado',category:'Personajes',type:'Ilustración de personaje',src:'/assets/personaje-sombreado.jpeg',alt:'Personaje masculino con camiseta roja, pantalón oscuro y zapatillas negras, ilustrado con luces y sombras',description:'Desarrollo del diseño mediante luces, sombras y detalles en el cabello y la ropa.'},
 {id:'12',title:'Vecina: boceto inicial',category:'Personajes',type:'Boceto de personaje',src:'/assets/vecina-boceto.jpeg',alt:'Boceto a lápiz de una mujer mayor con gafas, chaqueta y falda',description:'Estudio inicial de la silueta, la postura y la ropa de una vecina del pueblo.'},
 {id:'11',title:'Camarero: boceto inicial',category:'Personajes',type:'Boceto de personaje',src:'/assets/camarero-boceto.jpeg',alt:'Boceto a lápiz de un camarero con bigote, chaleco y un paño sobre el brazo',description:'Diseño del uniforme, la postura y los accesorios del camarero.'},
 {id:'10',title:'Vecino sentado con bastón',category:'Personajes',type:'Boceto de personaje',src:'/assets/vecino-baston.jpeg',alt:'Boceto de un hombre mayor sentado en un banco con las manos apoyadas en un bastón',description:'Estudio de postura y proporciones de un vecino sentado.'},
 {id:'09',title:'Personaje con camisa y corbata',category:'Personajes',type:'Boceto de personaje',src:'/assets/personaje-corbata.jpeg',alt:'Boceto a lápiz de un hombre con bigote, camisa, corbata y pantalón',description:'Propuesta de vestuario formal y proporciones para un personaje del pueblo.'},
 {id:'08',title:'La plaza en volumen',category:'Escenarios',type:'Estudio de volumen',src:'/assets/plaza-volumen.jpeg',alt:'Vista de una plaza en 3D con iglesia, edificios y figuras de referencia de escala, sin materiales finales',description:'Distribución de los edificios alrededor de la plaza y comprobación de su escala.'},
 {id:'07',title:'Personaje: paletas de color',category:'Personajes',type:'Estudio de color',src:'/assets/personaje-paletas.jpeg',alt:'Cinco variantes de color de un personaje masculino con camiseta, pantalón y zapatillas',description:'Pruebas de color para el cabello, la piel y las prendas del mismo personaje.'},
 {id:'01',title:'La plaza como punto de encuentro',category:'Escenarios',type:'Boceto de entorno',src:'/assets/plaza-boceto.jpg',alt:'Boceto a lápiz de una plaza rural con fachadas y espacio central',description:'Una primera aproximación a los espacios compartidos del pueblo y a la relación entre sus edificios.'},
 {id:'02',title:'Recorrer las calles',category:'Escenarios',type:'Boceto de entorno',src:'/assets/calle-boceto.jpg',alt:'Boceto a lápiz de una calle entre viviendas, con pavimento de piedra',description:'Calles estrechas, viviendas antiguas y una escala cercana para acompañar la exploración.'},
 {id:'03',title:'El pueblo sobre el papel',category:'Escenarios',type:'Estudio de distribución',src:'/assets/plano-pueblo.png',alt:'Plano a mano con la distribución inicial de edificios y calles',description:'El primer esquema espacial ayuda a pensar los recorridos y los lugares donde se encontrarán los habitantes.'},
 {id:'04',title:'Buscar la silueta',category:'Personajes',type:'Boceto de personaje',src:'/assets/personaje-boceto.jpg',alt:'Estudio a lápiz de un personaje visto de frente y de perfil',description:'Exploración inicial de proporciones y silueta para los personajes del proyecto.'},
 {id:'05',title:'Una referencia en la plaza',category:'Escenarios',type:'Estudio de volumen',src:'/assets/iglesia-volumen.png',alt:'Modelo de volumen de una iglesia con torre, sin materiales finales',description:'La iglesia como hito del entorno. Un estudio de formas y escala previo al acabado visual.'},
 {id:'06',title:'Primeras fachadas',category:'Escenarios',type:'Estudio de volumen',src:'/assets/calle-volumen.png',alt:'Estudio de edificios blancos sin materiales, alineados junto a una calle',description:'Exploración de fachadas, alturas y cubiertas para construir el conjunto de viviendas.'},
];
