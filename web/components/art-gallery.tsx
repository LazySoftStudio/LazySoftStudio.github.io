'use client';
import { useState } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { artworks, type Artwork } from '@/content/site';

function FichaDeArte({ pieza }: { pieza: Artwork }) {
 const [imagen, setImagen] = useState(0);
 return <Dialog onOpenChange={() => setImagen(0)}>
  <article className="art-card">
   <DialogTrigger asChild><button className="art-trigger" aria-label={'Ampliar: ' + pieza.title}>
    <div className="art-photo"><img loading="lazy" src={pieza.src[0]} alt={pieza.alt[0]}/><span className="zoom-label">Ampliar +</span></div>
    <div className="art-caption"><div><p>{pieza.type}</p><h3>{pieza.title}</h3></div><span className="art-index">{pieza.id}</span></div>
   </button></DialogTrigger>
   <p className="art-summary">{pieza.description[0]}</p>
  </article>
  <DialogContent className="art-dialog" showCloseButton={false}>
   <div className="dialog-bar"><span>{pieza.category} / {pieza.type}</span><DialogClose className="close-dialog">Cerrar ×</DialogClose></div>
   <img src={pieza.src[imagen]} alt={pieza.alt[imagen]}/>
   {pieza.src.length > 1 && <div className="dialog-bar" aria-label="Imágenes de la pieza">
    <button className="close-dialog" onClick={() => setImagen((imagen + pieza.src.length - 1) % pieza.src.length)}>Anterior</button>
    <span aria-live="polite">Imagen {imagen + 1} de {pieza.src.length}</span>
    <button className="close-dialog" onClick={() => setImagen((imagen + 1) % pieza.src.length)}>Siguiente</button>
   </div>}
   <DialogTitle>{pieza.title}</DialogTitle>
   <DialogDescription className="dialog-description">{pieza.description[imagen]} Material de desarrollo del proyecto.</DialogDescription>
  </DialogContent>
 </Dialog>;
}

export function ArtGallery() {
 const [filtro, setFiltro] = useState('Todo');
 const piezas = artworks.filter(pieza => filtro === 'Todo' || pieza.category === filtro);
 return <>
  <div className="gallery-toolbar"><div className="filters" role="group" aria-label="Filtrar material por categoría">
   {['Todo', 'Escenarios', 'Personajes'].map(categoria => <button key={categoria} aria-pressed={filtro === categoria} onClick={() => setFiltro(categoria)}>{categoria}</button>)}
  </div><p className="gallery-count" aria-live="polite">{piezas.length} {piezas.length === 1 ? 'pieza' : 'piezas'}</p></div>
  <div className="art-grid">{piezas.map(pieza => <FichaDeArte key={pieza.id} pieza={pieza}/>)}</div>
 </>;
}
