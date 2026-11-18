'use strict';

// Completo las partes que se repiten a partir de los datos del proyecto.
(() => {
  const { site, artworks, trayectoria, similares = [] } = window.LazySoft;
  const buscar = (selector, dentro = document) => dentro.querySelector(selector);
  const buscarTodos = (selector, dentro = document) => [...dentro.querySelectorAll(selector)];
  const clonar = id => buscar(id).content.firstElementChild.cloneNode(true);
  const escribir = (selector, texto, dentro = document) => { buscar(selector, dentro).textContent = texto; };
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

  // El juego pesa bastante, así que solo lo cargo desde itch.io cuando se pulsa el botón.
  const marcoJuego = buscar('#marco-juego');
  if (enlaceValido(site.game.embedUrl || '')) {
    buscar('.juego-cargar', marcoJuego).addEventListener('click', () => {
      const juego = document.createElement('iframe');
      juego.src = site.game.embedUrl;
      juego.title = site.game.title + ', versión jugable';
      juego.allow = 'autoplay; fullscreen; gamepad';
      juego.allowFullscreen = true;
      marcoJuego.replaceChildren(juego);
      juego.focus();
    });
  } else {
    buscar('#jugar').hidden = true;
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
  matchMedia('(min-width:1251px)').addEventListener('change', evento => { if (evento.matches) cambiarMenu(false); });

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
    buscarTodos('#visor-miniaturas button').forEach((boton, indice) => boton.setAttribute('aria-pressed', String(indice === imagenActual)));
  }
  // Abro el visor con la primera imagen y una miniatura por cada imagen de la ficha.
  function abrirPieza(pieza) {
    piezaActual = pieza;
    imagenActual = 0;
    buscar('#visor-miniaturas').replaceChildren(...pieza.src.map((src, indice) => {
      const boton = document.createElement('button');
      boton.type = 'button';
      boton.setAttribute('aria-label', `Ver la imagen ${indice + 1} de ${pieza.src.length}`);
      const miniatura = document.createElement('img');
      miniatura.src = src;
      miniatura.alt = '';
      miniatura.loading = 'lazy';
      boton.append(miniatura);
      boton.addEventListener('click', () => {
        imagenActual = indice;
        mostrarImagen();
      });
      return boton;
    }));
    mostrarImagen();
    abrirVentana(visor);
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
  // Muestro la galería por grupos (escenarios, personajes...) con fichas del mismo formato.
  const plural = (cantidad, una, varias) => `${cantidad} ${cantidad === 1 ? una : varias}`;
  const grupos = window.LazySoft.categoriasArte || [...new Set(artworks.map(pieza => pieza.category))].map(nombre => ({ nombre, texto: '' }));
  const filtros = buscar('.filters');
  escribir('[data-filtro="Todo"] .filtro-numero', artworks.length);
  grupos.forEach(grupo => {
    const boton = document.createElement('button');
    boton.type = 'button';
    boton.dataset.filtro = grupo.nombre;
    boton.setAttribute('aria-pressed', 'false');
    const numeroPiezas = document.createElement('span');
    numeroPiezas.className = 'filtro-numero';
    numeroPiezas.textContent = artworks.filter(pieza => pieza.category === grupo.nombre).length;
    boton.append(grupo.nombre + ' ', numeroPiezas);
    filtros.append(boton);
  });
  function crearFicha(pieza) {
    const ficha = clonar('#plantilla-arte');
    const imagen = buscar('img', ficha);
    imagen.src = pieza.src[0];
    imagen.alt = pieza.alt[0];
    escribir('.art-tipo', pieza.type, ficha);
    escribir('.art-summary', pieza.description[0], ficha);
    const cantidad = buscar('.art-cantidad', ficha);
    cantidad.textContent = plural(pieza.src.length, 'imagen', 'imágenes');
    cantidad.hidden = pieza.src.length < 2;
    const boton = buscar('.art-trigger', ficha);
    boton.textContent = pieza.title;
    boton.addEventListener('click', () => abrirPieza(pieza));
    return ficha;
  }
  function mostrarGaleria(filtro = 'Todo') {
    const galeria = buscar('#galeria');
    galeria.replaceChildren();
    grupos.filter(grupo => filtro === 'Todo' || grupo.nombre === filtro).forEach(grupo => {
      const piezas = artworks.filter(pieza => pieza.category === grupo.nombre);
      if (!piezas.length) return;
      const bloque = clonar('#plantilla-grupo-arte');
      escribir('h3', grupo.nombre, bloque);
      escribir('.art-grupo-numero', plural(piezas.length, 'pieza', 'piezas'), bloque);
      escribir('.art-grupo-texto', grupo.texto, bloque);
      buscar('.art-grid', bloque).append(...piezas.map(crearFicha));
      galeria.append(bloque);
    });
    const visibles = artworks.filter(pieza => filtro === 'Todo' || pieza.category === filtro);
    const imagenes = visibles.reduce((total, pieza) => total + pieza.src.length, 0);
    escribir('.gallery-count', `${plural(visibles.length, 'pieza', 'piezas')} y ${plural(imagenes, 'imagen', 'imágenes')}`);
    buscarTodos('[data-filtro]').forEach(boton => boton.setAttribute('aria-pressed', String(boton.dataset.filtro === filtro)));
  }
  buscarTodos('[data-filtro]').forEach(boton => boton.addEventListener('click', () => mostrarGaleria(boton.dataset.filtro)));
  mostrarGaleria();

  // Uso la misma lista de integrantes para el equipo y los créditos.
  site.team.forEach((nombre, indice) => {
    const ficha = clonar('#plantilla-integrante');
    escribir('h3', nombre, ficha);
    const rol = (site.teamRoles || [])[indice] || '';
    escribir('.miembro-rol', rol, ficha);
    buscar('.miembro-rol', ficha).hidden = !rol;
    buscar('img', ficha).src = `assets/equipo/${indice}.jpeg`;
    buscar('#lista-equipo').append(ficha);
  });
  escribir('#numero-integrantes', `${site.team.length} integrantes`);
  escribir('#creditos-equipo', new Intl.ListFormat('es').format(site.team) + '.');

  // Devlog: línea de tiempo horizontal. Se mueve con las flechas, arrastrando o deslizando, y se puede filtrar por tipo.
  const devlog = window.LazySoft.devlog || [];
  const pista = buscar('#devlog-pista');
  const listaDevlog = buscar('#lista-devlog');
  const sinAnimacion = matchMedia('(prefers-reduced-motion: reduce)');
  const pantallaEstrecha = matchMedia('(max-width:600px)');
  devlog.forEach((entrada, indice) => {
    const ficha = clonar('#plantilla-devlog');
    ficha.dataset.tipo = entrada.tipo;
    escribir('.devlog-fecha', entrada.fecha, ficha);
    escribir('.devlog-tipo', entrada.tipo, ficha);
    escribir('.devlog-numero', String(indice + 1).padStart(2, '0'), ficha);
    escribir('h3', entrada.titulo, ficha);
    escribir('.devlog-texto', entrada.texto, ficha);
    // Lo que aún no ha pasado se marca con un recorte de borde discontinuo.
    if (/próximamente/i.test(entrada.fecha)) ficha.classList.add('devlog-futuro');
    // La entrada del reparto de tareas usa los nombres y roles del equipo, para no repetirlos.
    if (entrada.roles) {
      ficha.classList.add('devlog-ancha');
      const lista = buscar('.devlog-roles', ficha);
      lista.hidden = false;
      site.team.forEach((nombre, posicion) => {
        const elemento = document.createElement('li');
        const quien = document.createElement('strong');
        quien.textContent = nombre;
        elemento.append(quien, ': ' + ((site.teamRoles || [])[posicion] || ''));
        lista.append(elemento);
      });
    }
    listaDevlog.append(ficha);
  });
  buscar('#devlog').hidden = devlog.length === 0;
  const entradasVisibles = () => buscarTodos('.devlog-entrada', listaDevlog).filter(entrada => !entrada.hidden);
  // Posición de desplazamiento en la que una entrada queda alineada con el margen de la página.
  const posicionDe = entrada => entrada.getBoundingClientRect().left - pista.getBoundingClientRect().left + pista.scrollLeft - parseFloat(getComputedStyle(pista).paddingLeft);

  // Miro qué entrada está al principio de la pista para el contador, la barra de progreso y los botones.
  let fotogramaDevlog = 0;
  function actualizarDevlog() {
    fotogramaDevlog = 0;
    const entradas = entradasVisibles();
    const maximo = pista.scrollWidth - pista.clientWidth;
    let actual = 0;
    entradas.forEach((entrada, posicion) => { if (posicionDe(entrada) <= pista.scrollLeft + 40) actual = posicion; });
    if (maximo > 0 && pista.scrollLeft >= maximo - 4) actual = entradas.length - 1;
    entradas.forEach((entrada, posicion) => entrada.classList.toggle('es-actual', posicion === actual));
    // En el móvil solo se ve una entrada, así que la pista toma su altura y no deja hueco debajo de las cortas.
    const estilo = getComputedStyle(pista);
    pista.style.height = pantallaEstrecha.matches && entradas[actual] ? `${entradas[actual].offsetHeight + parseFloat(estilo.paddingTop) + parseFloat(estilo.paddingBottom)}px` : '';
    escribir('.devlog-contador', `${String(actual + 1).padStart(2, '0')} / ${String(entradas.length).padStart(2, '0')}`);
    buscar('.devlog-progreso span').style.transform = `scaleX(${maximo > 0 ? Math.min(1, pista.scrollLeft / maximo) : 1})`;
    buscar('#devlog-anterior').disabled = pista.scrollLeft <= 4;
    buscar('#devlog-siguiente').disabled = pista.scrollLeft >= maximo - 4;
  }
  const pedirActualizacion = () => { if (!fotogramaDevlog) fotogramaDevlog = requestAnimationFrame(actualizarDevlog); };
  pista.addEventListener('scroll', pedirActualizacion, { passive: true });
  window.addEventListener('resize', pedirActualizacion);
  // Si una entrada cambia de tamaño (por ejemplo, al terminar de cargar la tipografía), vuelvo a medir.
  if ('ResizeObserver' in window) {
    const observadorTamano = new ResizeObserver(pedirActualizacion);
    buscarTodos('.devlog-entrada', listaDevlog).forEach(entrada => observadorTamano.observe(entrada));
  }

  function moverDevlog(paso) {
    const entradas = entradasVisibles();
    const actual = Math.max(0, entradas.findIndex(entrada => entrada.classList.contains('es-actual')));
    const destino = entradas[Math.min(entradas.length - 1, Math.max(0, actual + paso))];
    if (destino) pista.scrollTo({ left: posicionDe(destino), behavior: sinAnimacion.matches ? 'auto' : 'smooth' });
  }
  buscar('#devlog-anterior').addEventListener('click', () => moverDevlog(-1));
  buscar('#devlog-siguiente').addEventListener('click', () => moverDevlog(1));
  pista.addEventListener('keydown', evento => {
    if (evento.key === 'ArrowRight' || evento.key === 'ArrowLeft') {
      evento.preventDefault();
      moverDevlog(evento.key === 'ArrowRight' ? 1 : -1);
    }
  });

  // Con ratón también se puede arrastrar la pista, igual que se desliza con el dedo en el móvil.
  let arrastre = null;
  pista.addEventListener('pointerdown', evento => {
    if (evento.pointerType !== 'mouse' || evento.button !== 0) return;
    arrastre = { x: evento.clientX, inicio: pista.scrollLeft, movido: false };
  });
  pista.addEventListener('pointermove', evento => {
    if (!arrastre) return;
    const distancia = evento.clientX - arrastre.x;
    if (!arrastre.movido && Math.abs(distancia) > 5) {
      arrastre.movido = true;
      pista.classList.add('arrastrando');
      pista.setPointerCapture(evento.pointerId);
    }
    if (arrastre.movido) pista.scrollLeft = arrastre.inicio - distancia;
  });
  const soltarPista = () => {
    if (!arrastre) return;
    const movido = arrastre.movido;
    arrastre = null;
    pista.classList.remove('arrastrando');
    // Al soltar, la pista se coloca en la entrada más cercana.
    if (movido) {
      const cercana = entradasVisibles().reduce((mejor, entrada) => Math.abs(posicionDe(entrada) - pista.scrollLeft) < Math.abs(posicionDe(mejor) - pista.scrollLeft) ? entrada : mejor);
      pista.scrollTo({ left: posicionDe(cercana), behavior: sinAnimacion.matches ? 'auto' : 'smooth' });
    }
  };
  pista.addEventListener('pointerup', soltarPista);
  pista.addEventListener('pointercancel', soltarPista);

  // Al llegar a la sección la línea se dibuja y las tarjetas aparecen una detrás de otra.
  function animarDevlog() {
    if (sinAnimacion.matches) return;
    listaDevlog.classList.remove('devlog-entra');
    void listaDevlog.offsetWidth;
    entradasVisibles().forEach((entrada, posicion) => entrada.style.setProperty('--orden', posicion));
    listaDevlog.classList.add('devlog-entra');
  }
  if (!sinAnimacion.matches && devlog.length) {
    listaDevlog.classList.add('devlog-esperando');
    new IntersectionObserver((entradas, observador) => {
      if (!entradas[0].isIntersecting) return;
      observador.disconnect();
      listaDevlog.classList.remove('devlog-esperando');
      animarDevlog();
    }, { threshold: 0.2 }).observe(pista);
  }

  buscarTodos('[data-devlog]').forEach(boton => boton.addEventListener('click', () => {
    buscarTodos('[data-devlog]').forEach(otro => otro.setAttribute('aria-pressed', String(otro === boton)));
    buscarTodos('.devlog-entrada', listaDevlog).forEach(entrada => {
      entrada.hidden = boton.dataset.devlog !== 'Todo' && entrada.dataset.tipo !== boton.dataset.devlog;
    });
    pista.scrollLeft = 0;
    animarDevlog();
    actualizarDevlog();
  }));
  actualizarDevlog();

  // Juegos parecidos del apartado de marketing, como recortes de periódico que giran.
  similares.forEach(juego => {
    const tarjeta = clonar('#plantilla-similar');
    escribir('.recorte-anio', juego.anio, tarjeta);
    escribir('.tarjeta-titulo', juego.titulo, tarjeta);
    escribir('.recorte-estudio', juego.estudio, tarjeta);
    escribir('.recorte-motivo', juego.motivo, tarjeta);
    buscar('#lista-similares').append(tarjeta);
  });
  buscar('.similares').hidden = similares.length === 0;

  // KPIs: delante el número y detrás de dónde sale. Los que aún no tienen número solo se ven en local.
  const kpis = (window.LazySoft.kpis || []).filter(kpi => kpi.valor || mostrarBorradores);
  kpis.forEach(kpi => {
    const tarjeta = clonar('#plantilla-kpi');
    escribir('.kpi-valor', kpi.valor || '—', tarjeta);
    escribir('.kpi-nombre', kpi.nombre, tarjeta);
    escribir('.kpi-detalle', kpi.valor ? `${kpi.fuente}${kpi.fecha ? ', a ' + kpi.fecha : ''}.` : `Por completar: falta el dato de ${kpi.fuente.toLowerCase()}.`, tarjeta);
    buscar('#lista-kpis').append(tarjeta);
  });
  buscar('.resultados').hidden = kpis.length === 0;

  // Las tarjetas de marketing giran al pasar el ratón; al pulsarlas se quedan giradas (móvil y teclado).
  buscarTodos('.tarjeta-giro').forEach(tarjeta => tarjeta.addEventListener('click', () => {
    tarjeta.setAttribute('aria-pressed', String(tarjeta.getAttribute('aria-pressed') !== 'true'));
  }));

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

  // Trayectoria en tarjetas, del proyecto más reciente al más antiguo. Si un proyecto no tiene imagen, sale un cartel con su título.
  const proyectos = trayectoria.filter(proyecto => mostrarBorradores || !proyecto.borrador).reverse();
  buscar('.trayectoria-vacia').hidden = proyectos.length > 0;
  buscar('#lista-trayectoria').hidden = proyectos.length === 0;
  proyectos.forEach(proyecto => {
    const ficha = clonar('#plantilla-trayectoria');
    const titulo = proyecto.titulo || 'Nombre del proyecto';
    escribir('h3', titulo, ficha);
    escribir('.proyecto-tipo', proyecto.tipo || 'Tipo de proyecto', ficha);
    escribir('.proyecto-fecha', proyecto.fecha || 'Fecha por completar', ficha);
    escribir('.proyecto-descripcion', proyecto.descripcion || 'Añade una descripción del proyecto: de qué trata, qué desarrolló el equipo y qué aprendisteis al hacerlo.', ficha);
    escribir('.proyecto-cartel-tipo', proyecto.tipo || '', ficha);
    escribir('.proyecto-cartel-titulo', titulo, ficha);
    buscar('.trayectoria-borrador', ficha).hidden = !proyecto.borrador;
    const portada = (proyecto.imagenes || [])[0];
    if (portada) {
      const imagen = buscar('img', ficha);
      imagen.src = portada.src;
      imagen.alt = portada.alt;
      imagen.hidden = false;
      buscar('.proyecto-cartel', ficha).hidden = true;
    }
    const enlace = buscar('.proyecto-enlace', ficha);
    if (enlaceValido(proyecto.enlace)) {
      enlace.hidden = false;
      enlace.href = proyecto.enlace;
      enlace.textContent = (proyecto.enlace.includes('itch.io') ? 'Ver en itch.io' : 'Ver proyecto') + ' ↗';
      enlace.setAttribute('aria-label', `Ver ${titulo} (se abre en otra pestaña)`);
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
