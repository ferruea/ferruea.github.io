// Función para ajustar el zoom
function adjustZoom() {
  if (window.innerWidth > 1000) {
    document.body.style.zoom = '90%';
  } else {
    document.body.style.zoom = '100%'; // Opcional: restablece el zoom si es menor de 1000px
  }
}
// Espera a que el contenido esté completamente cargado
document.addEventListener('DOMContentLoaded', adjustZoom);
// Ajusta el zoom cuando cambie el tamaño de la ventana
window.addEventListener('resize', adjustZoom);

function updateProgressMax() {
  var progress = document.getElementById('progress');
  if (window.innerWidth < 1000) {
    progress.max = 100;
  } else {
    progress.max = 90;
  }
}
// Llamar a la función cuando la página se carga y cuando se redimensiona la ventana
window.onload = updateProgressMax;
window.onresize = updateProgressMax;