'use strict';

// Completo las partes que se repiten a partir de los datos del proyecto.
(() => {
  const { site, artworks, trayectoria } = window.LazySoft;
  const buscar = (selector, dentro = document) => dentro.querySelector(selector);
  const buscarTodos = (selector, dentro = document) => [...dentro.querySelectorAll(selector)];
  const clonar = id => buscar(id).content.firstElementChild.cloneNode(true);
  const escribir = (selector, texto, dentro = document) => { buscar(selector, dentro).textContent = texto; };
  const numero = valor => String(valor).padStart(2, '0');
  const enlaceValido = url => /^https?:\/\//i.test(url);
  const esLocal = location.protocol === 'file:' || ['localhost', '127.0.0.1', '[::1]'].includes(location.hostname);
  const mostrarBorradores = esLocal && !document.body.hasAttribute('data-version-publica');

  buscarTodos('[data-titulo-juego]').forEach(elemento => { elemento.textContent = site.game.title; });
  escribir('.footer-bottom span:last-child', site.game.title.toUpperCase());
  escribir('#sinopsis', site.game.description);
  escribir('.email-link', site.email);
  buscar('.email-link').href = 'mailto:' + site.email;
  buscarTodos('[data-red]').forEach(enlace => {
    const url = site.socials[enlace.dataset.red];
    if (enlaceValido(url)) enlace.href = url;
  });

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
    escribir('.member-number', numero(indice + 1), ficha);
    escribir('h3', nombre, ficha);
    escribir('.member-initials', nombre.split(' ').map(parte => parte[0]).join(''), ficha);
    buscar('img', ficha).src = `assets/equipo/${indice}.jpeg`;
    buscar('#lista-equipo').append(ficha);
  });
  escribir('#numero-integrantes', `${site.team.length} integrantes`);
  escribir('#creditos-equipo', new Intl.ListFormat('es').format(site.team) + '.');

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

  // Cambio la imagen según la parte del recorrido que se está viendo.
  const escenas = ['El espacio / Estudio de volumen', 'Sus habitantes / Estudio de personaje', 'Las conexiones / Plano del pueblo'];
  buscarTodos('[data-journey-step]').forEach((paso, indice) => {
    escribir('h3', site.game.pillars[indice].title, paso);
    escribir('p', site.game.pillars[indice].text, paso);
  });
  const observadorRecorrido = new IntersectionObserver(entradas => {
    entradas.forEach(entrada => {
      if (!entrada.isIntersecting) return;
      const activa = Number(entrada.target.dataset.journeyStep);
      buscarTodos('.journey-stage img').forEach((imagen, indice) => imagen.classList.toggle('scene-active', activa === indice));
      buscarTodos('.journey-progress span').forEach((barra, indice) => barra.classList.toggle('is-active', activa === indice));
      escribir('#escena-titulo', escenas[activa]);
      escribir('#escena-numero', `${numero(activa + 1)} / 03`);
    });
  }, { rootMargin: '-35% 0px -35% 0px', threshold: 0 });
  buscarTodos('[data-journey-step]').forEach(paso => observadorRecorrido.observe(paso));

  // Animo la portada y las secciones respetando la preferencia de movimiento reducido.
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
  const observadorAparicion = new IntersectionObserver(entradas => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('is-visible');
        observadorAparicion.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.08 });
  buscarTodos('[data-reveal]').forEach(elemento => {
    elemento.classList.add('reveal-ready');
    observadorAparicion.observe(elemento);
  });
})();
