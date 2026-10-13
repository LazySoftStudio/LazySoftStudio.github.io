import { useState } from 'react';
import { ImageIcon, ArrowUpRight } from 'lucide-react';
import { trayectoria, type ProyectoTrayectoria } from '@/content/trayectoria';

function Proyecto({ proyecto, numero }: { proyecto: ProyectoTrayectoria; numero: number }) {
  const [seleccionada, setSeleccionada] = useState(0);
  const imagen = proyecto.imagenes[seleccionada] ?? proyecto.imagenes[0];
  const titulo = proyecto.titulo || 'Nombre del proyecto';
  return <li className="trayectoria-hito">
    <div className="trayectoria-fecha">
      <span className="trayectoria-punto" aria-hidden="true" />
      <span className="eyebrow">{String(numero).padStart(2, '0')}</span>
      <p>{proyecto.fecha || 'Fecha por completar'}</p>
    </div>
    <article className="trayectoria-ficha" aria-label={titulo}>
      <div className="trayectoria-galeria">
        {imagen ? <figure>
          <img className="trayectoria-imagen" src={imagen.src} alt={imagen.alt} loading="lazy" />
          <figcaption aria-live="polite">{imagen.alt}</figcaption>
        </figure> : <div className="trayectoria-sin-imagen">
          <ImageIcon size={38} strokeWidth={1} aria-hidden="true" />
          <span>Imagen del proyecto</span>
          <small>Portada, captura o boceto</small>
        </div>}
        {proyecto.imagenes.length > 1 && <div className="trayectoria-miniaturas" role="group" aria-label={'Imágenes de ' + titulo}>
          {proyecto.imagenes.map((foto, indice) => <button key={foto.src} type="button" aria-label={`Ver imagen ${indice + 1} de ${titulo}`} aria-pressed={indice === seleccionada} onClick={() => setSeleccionada(indice)}>
            <img src={foto.src} alt="" loading="lazy" />
          </button>)}
        </div>}
      </div>
      <div className="trayectoria-texto">
        <div className="trayectoria-etiquetas">
          <p className="eyebrow">{proyecto.tipo || 'Tipo de proyecto'}</p>
          {proyecto.borrador && <span className="trayectoria-borrador">Por completar</span>}
        </div>
        <h3>{titulo}</h3>
        <p className="trayectoria-descripcion">{proyecto.descripcion || 'Añade una descripción del proyecto: de qué trata, qué desarrolló el equipo y qué aprendisteis al hacerlo.'}</p>
        {/^https?:\/\//i.test(proyecto.enlace) && <a className="trayectoria-enlace" href={proyecto.enlace} target="_blank" rel="noopener noreferrer" aria-label={`Ver ${titulo} (se abre en otra pestaña)`}>Ver proyecto <ArrowUpRight size={18} aria-hidden="true" /></a>}
      </div>
    </article>
  </li>;
}

export function Trayectoria() {
  const proyectos = trayectoria.filter(proyecto => import.meta.env.DEV || !proyecto.borrador);
  return <section className="trayectoria" id="trayectoria" aria-labelledby="titulo-trayectoria">
    <div className="wrap">
      <div className="section-heading"><p className="eyebrow">04 / TRAYECTORIA</p><span className="outline-tag">Nuestros proyectos</span></div>
      <div className="trayectoria-intro">
        <h2 id="titulo-trayectoria">La trayectoria<br/>de <em>LazySoft.</em></h2>
        <p>Los juegos y proyectos que hemos desarrollado como equipo.</p>
      </div>
      {proyectos.length > 0 ? <ol className="trayectoria-lista">{proyectos.map((proyecto, indice) => <Proyecto key={proyecto.id} proyecto={proyecto} numero={indice + 1} />)}</ol> : <p className="trayectoria-vacia">Próximamente compartiremos aquí nuestros proyectos anteriores.</p>}
    </div>
  </section>;
}
