export type ProyectoTrayectoria = {
  id: string;
  borrador: boolean;
  fecha: string;
  titulo: string;
  tipo: string;
  descripcion: string;
  imagenes: { src: string; alt: string }[];
  enlace: string;
};

// Edita las fichas aquí. Aparecen en el orden de esta lista, de la más antigua a la más reciente.
// Los borradores solo se muestran con npm run dev. Pon borrador: false cuando la ficha esté lista.
// Guarda las imágenes en public/assets/trayectoria/ y usa /assets/trayectoria/nombre.jpg en src.
// Guía y ejemplo completo: ../GUIA-TRAYECTORIA.md. No hace falta modificar los componentes.
export const trayectoria: ProyectoTrayectoria[] = [
  {
    id: 'proyecto-01',
    borrador: true,
    fecha: '', // Año, mes y año o periodo; por ejemplo: '2023–2024'.
    titulo: '',
    tipo: '', // Videojuego, prototipo, game jam, proyecto de clase…
    descripcion: '', // Qué hicisteis, de qué trata y qué aportó al equipo.
    imagenes: [], // Ejemplo: [{ src: '/assets/trayectoria/mi-juego.jpg', alt: 'Captura de mi juego' }].
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
