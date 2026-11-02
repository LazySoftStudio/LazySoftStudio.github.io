'use strict';

// Completo las partes que se repiten a partir de los datos del proyecto.
(() => {
  const { site, artworks, trayectoria, similares = [] } = window.LazySoft;
  const buscar = (selector, dentro = document) => dentro.querySelector(selector);
  const buscarTodos = (selector, dentro = document) => [...dentro.querySelectorAll(selector)];
  const clonar = id => buscar(id).content.firstElementChild.cloneNode(true);
  const escribir = (selector, texto, dentro = document) => { buscar(selector, dentro).textContent = texto; };
  const numero = valor => String(valor).padStart(2, '0');
  const enlaceValido = url => /^https?:\/\//i.test(url);
  const esLocal = location.protocol === 'file:' || ['localhost', '127.0.0.1', '[::1]'].includes(location.hostname);
  const mostrarBorradores = esLocal && !document.body.hasAttribute('data-version-publica');

  buscarTodos('[data-titulo-juego]').forEach(elemento => { elemento.textContent = site.game.title; });
  escribir('.email-link', site.email);
  buscar('.email-link').href = 'mailto:' + site.email;
  buscarTodos('[data-red]').forEach(enlace => {
    const url = site.socials[enlace.dataset.red];
    if (enlaceValido(url)) enlace.href = url;
  });
  buscarTodos('[data-enlace-jugar]').forEach(enlace => {
    if (enlaceValido(site.game.playUrl)) enlace.href = site.game.playUrl;
  });

  // Muestro el tráiler cuando está configurado; mientras tanto se ve el aviso sobre la imagen.
  const reproductor = buscar('#reproductor');
  const trailer = site.trailer || {};
  const codigoYoutube = (trailer.youtube || '').trim().match(/(?:v=|youtu\.be\/|embed\/|shorts\/|^)([\w-]{11})(?:[?&#]|$)/)?.[1];
  if (trailer.poster) buscar('.trailer-poster', reproductor).src = trailer.poster;
  if (trailer.video) {
    const video = document.createElement('video');
    video.controls = true;
    video.preload = 'none';
    video.playsInline = true;
    video.poster = trailer.poster || '';
    video.src = trailer.video;
    reproductor.replaceChildren(video);
  } else if (codigoYoutube) {
    buscar('.trailer-aviso', reproductor).hidden = true;
    const botonTrailer = buscar('.trailer-play', reproductor);
    botonTrailer.hidden = false;
    // Cargo YouTube solo cuando se pulsa el botón para que la página no espere al vídeo.
    botonTrailer.addEventListener('click', () => {
      const marco = document.createElement('iframe');
      marco.src = `https://www.youtube-nocookie.com/embed/${codigoYoutube}?autoplay=1&rel=0`;
      marco.title = 'Tráiler de ' + site.game.title;
      marco.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      marco.allowFullscreen = true;
      reproductor.replaceChildren(marco);
    });
  }

  // Cierro el menú móvil al navegar, pulsar Escape o volver a la vista de escritorio.
  const botonMenu = buscar('.menu-toggle');
  const navegacion = buscar('#main-navigation');
  function cambiarMenu(abierto) {
    botonMenu.setAttribute('aria-expanded', String(abierto));
    botonMenu.textContent = abierto ? 'Cerrar' : 'Menú';
    navegacion.classList.toggle('nav-open', abierto);
  }
  botonMenu.addEventListener('click', () => cambiarMenu(botonMenu.getAttribute('aria-expanded') !== 'true'));
  buscarTodos('.header a').forEach(enlace => enlace.addEventListener('click', () => cambiarMenu(false)));
  document.addEventListener('keydown', evento => {
    if (evento.key === 'Escape' && botonMenu.getAttribute('aria-expanded') === 'true') {
      cambiarMenu(false);
      botonMenu.focus();
    }
  });
  matchMedia('(min-width:1001px)').addEventListener('change', evento => { if (evento.matches) cambiarMenu(false); });

  // Pongo en negrita el apartado del menú que se está viendo.
  // Vigilo una franja fina a media pantalla: la sección que la cruza es la actual.
  const enlacesMenu = buscarTodos('#main-navigation a[href^="#"]');
  enlacesMenu.forEach(enlace => { enlace.dataset.texto = enlace.textContent; });
  const observadorMenu = new IntersectionObserver(entradas => {
    entradas.forEach(entrada => {
      if (!entrada.isIntersecting) return;
      enlacesMenu.forEach(enlace => {
        if (enlace.getAttribute('href') === '#' + entrada.target.id) enlace.setAttribute('aria-current', 'true');
        else enlace.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-45% 0px -54% 0px' });
  buscarTodos('main > section[id]').forEach(seccion => observadorMenu.observe(seccion));

  // Uso dialog y devuelvo el foco al botón de origen cuando se cierra.
  function abrirVentana(ventana) {
    const origen = document.activeElement;
    ventana.addEventListener('close', () => {
      document.body.classList.remove('ventana-abierta');
      if (origen?.isConnected) origen.focus({ preventScroll: true });
    }, { once: true });
    ventana.showModal();
    document.body.classList.add('ventana-abierta');
  }
  buscarTodos('dialog').forEach(ventana => {
    buscar('[data-cerrar]', ventana).addEventListener('click', () => ventana.close());
    // Compruebo si el clic queda fuera de la ventana para cerrarla al pulsar en el fondo.
    ventana.addEventListener('click', evento => {
      const caja = ventana.getBoundingClientRect();
      if (evento.target === ventana && (evento.clientX < caja.left || evento.clientX > caja.right || evento.clientY < caja.top || evento.clientY > caja.bottom)) ventana.close();
    });
  });
  buscar('#abrir-creditos').addEventListener('click', () => abrirVentana(buscar('#creditos')));

  // Agrupo en cada ficha las imágenes y sus descripciones.
  const visor = buscar('#visor-arte');
  let piezaActual;
  let imagenActual = 0;
  function mostrarImagen() {
    const imagen = buscar('#visor-imagen');
    imagen.src = piezaActual.src[imagenActual];
    imagen.alt = piezaActual.alt[imagenActual];
    escribir('#visor-titulo', piezaActual.title);
    escribir('#visor-categoria', piezaActual.category + ' / ' + piezaActual.type);
    escribir('#visor-descripcion', piezaActual.description[imagenActual] + ' Material de desarrollo del proyecto.');
    escribir('#visor-contador', `Imagen ${imagenActual + 1} de ${piezaActual.src.length}`);
    buscar('#visor-controles').hidden = piezaActual.src.length < 2;
  }
  function pasarImagen(paso) {
    imagenActual = (imagenActual + paso + piezaActual.src.length) % piezaActual.src.length;
    mostrarImagen();
  }
  buscar('#imagen-anterior').addEventListener('click', () => pasarImagen(-1));
  buscar('#imagen-siguiente').addEventListener('click', () => pasarImagen(1));
  visor.addEventListener('keydown', evento => {
    if (evento.key === 'ArrowLeft' || evento.key === 'ArrowRight') {
      evento.preventDefault();
      pasarImagen(evento.key === 'ArrowLeft' ? -1 : 1);
    }
  });
  function mostrarGaleria(filtro = 'Todo') {
    const piezas = artworks.filter(pieza => filtro === 'Todo' || pieza.category === filtro);
    const lista = buscar('#galeria');
    lista.replaceChildren();
    piezas.forEach(pieza => {
      const ficha = clonar('#plantilla-arte');
      const imagen = buscar('img', ficha);
      imagen.src = pieza.src[0];
      imagen.alt = pieza.alt[0];
      escribir('.art-caption p', pieza.type, ficha);
      escribir('h3', pieza.title, ficha);
      escribir('.art-index', pieza.id, ficha);
      escribir('.art-summary', pieza.description[0], ficha);
      const boton = buscar('button', ficha);
      boton.setAttribute('aria-label', 'Ampliar: ' + pieza.title);
      boton.addEventListener('click', () => {
        piezaActual = pieza;
        imagenActual = 0;
        mostrarImagen();
        abrirVentana(visor);
      });
      lista.append(ficha);
    });
    escribir('.gallery-count', `${piezas.length} ${piezas.length === 1 ? 'pieza' : 'piezas'}`);
    buscarTodos('[data-filtro]').forEach(boton => boton.setAttribute('aria-pressed', String(boton.dataset.filtro === filtro)));
  }
  buscarTodos('[data-filtro]').forEach(boton => boton.addEventListener('click', () => mostrarGaleria(boton.dataset.filtro)));
  mostrarGaleria();

  // Uso la misma lista de integrantes para el equipo y los créditos.
  site.team.forEach((nombre, indice) => {
    const ficha = clonar('#plantilla-integrante');
    escribir('h3', nombre, ficha);
    buscar('img', ficha).src = `assets/equipo/${indice}.jpeg`;
    buscar('#lista-equipo').append(ficha);
  });
  escribir('#numero-integrantes', `${site.team.length} integrantes`);
  escribir('#creditos-equipo', new Intl.ListFormat('es').format(site.team) + '.');

  // Juegos parecidos del apartado de marketing.
  similares.forEach(juego => {
    const ficha = clonar('#plantilla-similar');
    escribir('h4', juego.titulo, ficha);
    escribir('.similar-datos', `${juego.estudio}, ${juego.anio}`, ficha);
    escribir('.similar-motivo', juego.motivo, ficha);
    buscar('#lista-similares').append(ficha);
  });
  buscar('.similares').hidden = similares.length === 0;

  // Envío el formulario al servicio configurado o, si no hay ninguno, preparo el correo.
  const formulario = buscar('#formulario-contacto');
  const estadoFormulario = buscar('.form-estado', formulario);
  const servicioFormulario = enlaceValido(site.contactForm || '') ? site.contactForm : '';
  buscar('#nota-formulario').hidden = Boolean(servicioFormulario);
  formulario.addEventListener('submit', async evento => {
    evento.preventDefault();
    const datos = new FormData(formulario);
    if (datos.get('_gotcha')) return;
    if (!servicioFormulario) {
      const asunto = `${datos.get('motivo')}: mensaje de ${datos.get('nombre')}`;
      const cuerpo = `${datos.get('mensaje')}\n\n${datos.get('nombre')}\n${datos.get('correo')}`;
      location.href = `mailto:${site.email}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
      estadoFormulario.textContent = 'Hemos abierto tu programa de correo con el mensaje. Solo falta enviarlo desde allí.';
      return;
    }
    const botonEnviar = buscar('button[type="submit"]', formulario);
    botonEnviar.disabled = true;
    estadoFormulario.textContent = 'Enviando el mensaje…';
    try {
      const respuesta = await fetch(servicioFormulario, { method: 'POST', body: datos, headers: { Accept: 'application/json' } });
      if (!respuesta.ok) throw new Error(respuesta.status);
      formulario.reset();
      estadoFormulario.textContent = 'Mensaje enviado. Te responderemos al correo que nos has dejado.';
    } catch {
      estadoFormulario.textContent = `No se ha podido enviar el mensaje. Escríbenos a ${site.email}.`;
    } finally {
      botonEnviar.disabled = false;
    }
  });

  // Mantengo la trayectoria en el orden del archivo.
  const proyectos = trayectoria.filter(proyecto => mostrarBorradores || !proyecto.borrador);
  buscar('.trayectoria-vacia').hidden = proyectos.length > 0;
  buscar('#lista-trayectoria').hidden = proyectos.length === 0;
  proyectos.forEach((proyecto, indice) => {
    const ficha = clonar('#plantilla-trayectoria');
    const titulo = proyecto.titulo || 'Nombre del proyecto';
    escribir('.trayectoria-fecha .eyebrow', numero(indice + 1), ficha);
    escribir('.trayectoria-fecha p', proyecto.fecha || 'Fecha por completar', ficha);
    escribir('.trayectoria-etiquetas .eyebrow', proyecto.tipo || 'Tipo de proyecto', ficha);
    escribir('h3', titulo, ficha);
    escribir('.trayectoria-descripcion', proyecto.descripcion || 'Añade una descripción del proyecto: de qué trata, qué desarrolló el equipo y qué aprendisteis al hacerlo.', ficha);
    buscar('article', ficha).setAttribute('aria-label', titulo);
    buscar('.trayectoria-borrador', ficha).hidden = !proyecto.borrador;
    const enlace = buscar('.trayectoria-enlace', ficha);
    if (enlaceValido(proyecto.enlace)) {
      enlace.hidden = false;
      enlace.href = proyecto.enlace;
      enlace.setAttribute('aria-label', `Ver ${titulo} (se abre en otra pestaña)`);
    }
    if (proyecto.imagenes.length) {
      buscar('figure', ficha).hidden = false;
      buscar('.trayectoria-sin-imagen', ficha).hidden = true;
      const miniaturas = buscar('.trayectoria-miniaturas', ficha);
      miniaturas.hidden = proyecto.imagenes.length < 2;
      miniaturas.setAttribute('aria-label', 'Imágenes de ' + titulo);
      const seleccionar = posicion => {
        const foto = proyecto.imagenes[posicion];
        const imagen = buscar('.trayectoria-imagen', ficha);
        imagen.src = foto.src;
        imagen.alt = foto.alt;
        escribir('figcaption', foto.alt, ficha);
        buscarTodos('button', miniaturas).forEach((boton, indiceFoto) => boton.setAttribute('aria-pressed', String(posicion === indiceFoto)));
      };
      proyecto.imagenes.forEach((foto, posicion) => {
        const boton = document.createElement('button');
        boton.type = 'button';
        boton.setAttribute('aria-label', `Ver imagen ${posicion + 1} de ${titulo}`);
        const imagen = document.createElement('img');
        imagen.src = foto.src;
        imagen.alt = '';
        imagen.loading = 'lazy';
        boton.append(imagen);
        boton.addEventListener('click', () => seleccionar(posicion));
        miniaturas.append(boton);
      });
      seleccionar(0);
    }
    buscar('#lista-trayectoria').append(ficha);
  });

  // Animo solo la portada y respeto la preferencia de movimiento reducido.
  const movimientoReducido = matchMedia('(prefers-reduced-motion: reduce)');
  const portada = buscar('.hero-stage');
  let fotograma = 0;
  let cursorX = 0;
  let cursorY = 0;
  function pintarPortada() {
    fotograma = 0;
    const progreso = movimientoReducido.matches ? 0 : Math.min(1, Math.max(0, -portada.getBoundingClientRect().top / portada.offsetHeight));
    portada.style.setProperty('--hero-scroll', progreso);
    portada.style.setProperty('--pointer-x', movimientoReducido.matches ? 0 : cursorX);
    portada.style.setProperty('--pointer-y', movimientoReducido.matches ? 0 : cursorY);
  }
  function solicitarFotograma() { if (!fotograma) fotograma = requestAnimationFrame(pintarPortada); }
  portada.addEventListener('pointermove', evento => {
    if (evento.pointerType !== 'mouse') return;
    const caja = portada.getBoundingClientRect();
    cursorX = (evento.clientX - caja.left) / caja.width - 0.5;
    cursorY = (evento.clientY - caja.top) / caja.height - 0.5;
    solicitarFotograma();
  });
  portada.addEventListener('pointerleave', () => { cursorX = 0; cursorY = 0; solicitarFotograma(); });
  window.addEventListener('scroll', solicitarFotograma, { passive: true });
  movimientoReducido.addEventListener('change', solicitarFotograma);
  pintarPortada();
})();
