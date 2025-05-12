/**
 * Cambia la visibilidad entre secciones del sitio web.
 * Se utiliza para mostrar la sección seleccionada y ocultar las demás.
 * 
 * @param {string} id - El ID de la sección que se desea mostrar.
 */
function mostrarSeccion(id) {
  const secciones = document.querySelectorAll('.seccion');
  secciones.forEach(seccion => {
    seccion.classList.remove('activa');
  });

  const seccionActiva = document.getElementById(id);
  if (seccionActiva) {
    seccionActiva.classList.add('activa');
  }
}

/**
 * Alterna la visibilidad de un contenido específico.
 * Se utiliza para mostrar u ocultar detalles dentro de una sección (como el mercado laboral).
 * 
 * @param {string} id - El ID del contenido que se desea alternar.
 */
function toggleContenido(id) {
  const contenido = document.getElementById(id);
  if (contenido) {
    contenido.classList.toggle('oculto');
  }
}
