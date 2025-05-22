/**
 * Muestra una sección específica del sitio ocultando las demás.
 * Activa visualmente solo la sección
 * correspondiente al ID recibido, desactivando las demás.
 * 
 * @param {string} id - Identificador de la sección que se quiere visualizar.
 */
function mostrarSeccion(id) {
  const secciones = document.querySelectorAll('.seccion');

  // Remueve la clase 'activa' de todas las secciones para ocultarlas
  secciones.forEach(seccion => {
    seccion.classList.remove('activa');
  });

  // Muestra la sección indicada al agregarle la clase 'activa'
  const seccionActiva = document.getElementById(id);
  if (seccionActiva) {
    seccionActiva.classList.add('activa');
  }
}

/**
 * Cambia el estado visible u oculto de un contenido específico.
 * Alterna entre mostrar y ocultar detalles
 * dentro de mercado laboral.
 * 
 * Gestiona la clase del botón correspondiente para reflejar su estado visual.
 * 
 * @param {string} id - Identificador del contenido cuyo estado se desea modificar.
 */
function toggleContenido(id) {
  const contenido = document.getElementById(id);
  const boton = document.querySelector(`.mercado-btn[onclick*="${id}"]`);

  // Si no se encuentra el contenido o el botón, no se hace nada
  if (!contenido || !boton) return;

  // Si el contenido está oculto, se muestra y se marca el botón como activo
  if (contenido.classList.contains('oculto')) {
    contenido.classList.remove('oculto');
    boton.classList.add('active');
  } else {
    // Si ya está visible, se oculta y se desmarca el botón
    contenido.classList.add('oculto');
    boton.classList.remove('active');
  }
}
