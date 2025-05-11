/**
 * Cambia la visibilidad entre secciones del sitio web.
 * Se utiliza para mostrar la sección seleccionada y ocultar las demás.
 * 
 * @param {string} id - El ID de la sección que se desea mostrar.
 */
function mostrarSeccion(id) {
  // Obtener todas las secciones con la clase .seccion
  const secciones = document.querySelectorAll('.seccion');

  // Ocultar todas las secciones
  secciones.forEach(seccion => {
    seccion.classList.remove('activa');
  });

  // Mostrar la sección correspondiente al ID recibido
  const seccionActiva = document.getElementById(id);
  if (seccionActiva) {
    seccionActiva.classList.add('activa');
  }
}
