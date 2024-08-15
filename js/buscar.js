//Funcion para crear buscador en una tabla
function doSearch() {
                var tableReg = document.getElementById('regTable');
                var searchText = document.getElementById('searchTerm').value.toLowerCase();
                for (var i = 0; i < tableReg.rows.length; i++) {
                    var cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
                    var found = false;
                    for (var j = 0; j < cellsOfRow.length && !found; j++) {
                        var compareWith = cellsOfRow[j].innerHTML.toLowerCase();
                        if (searchText.length == 0 || (compareWith.indexOf(searchText) > -1)) {
                            found = true;
                        }
                    }
                    if (found) {
                        tableReg.rows[i].style.display = '';
                    } else {
                        tableReg.rows[i].style.display = 'none';
                    }
                }
            }

function replaceName(e) {
  e.value = e.value.replace(/ /g, "-");
  e.value = e.value.replace(/ñ/g, 'n');
  e.value = e.value.replace(/Ñ/g, 'N');
  e.value = e.value.replace(/[áéíóúÁÉÍÓÚ]/g, function(match) {
    switch (match) {
      case 'á': return 'a';
      case 'é': return 'e';
      case 'í': return 'i';
      case 'ó': return 'o';
      case 'ú': return 'u';
      case 'Á': return 'A';
      case 'É': return 'E';
      case 'Í': return 'I';
      case 'Ó': return 'O';
      case 'Ú': return 'U';
    }
  });
  e.value = e.value.replace(/[àèìòùÀÈÌÒÙ]/g, function(match) {
    switch (match) {
      case 'à': return 'a';
      case 'è': return 'e';
      case 'ì': return 'i';
      case 'ò': return 'o';
      case 'ù': return 'u';
      case 'À': return 'A';
      case 'È': return 'E';
      case 'Ì': return 'I';
      case 'Ò': return 'O';
      case 'Ù': return 'U';
    }
  });
  e.value = e.value.replace(/[äëïöüÄËÏÖÜ]/g, function(match) {
    switch (match) {
      case 'ä': return 'a';
      case 'ë': return 'e';
      case 'ï': return 'i';
      case 'ö': return 'o';
      case 'ü': return 'u';
      case 'Ä': return 'A';
      case 'Ë': return 'E';
      case 'Ï': return 'I';
      case 'Ö': return 'O';
      case 'Ü': return 'U';
    }
  });
}

// Añade la clase 'loaded' al elemento con la clase 'phone' cuando la página ha terminado de cargar
window.addEventListener('load', () => {
  document.querySelector('.phone').classList.add('loaded');
});