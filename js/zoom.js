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