//Array con el listado de canciones a mostrar en el reprodutor
const canciones = ["",
//Aquí la musica
]
var indiceActual = new Array(1)
//Funcion para crear mediante javascript el listado de canciones en formato de tabla
function crearPlayList(){
	//Crear elemento table
	const table = document.createElement('table')
	table.setAttribute("id", 'regTable')

	const listado = document.createElement('ol')
	listado.setAttribute("id", 'listadoMusica')

	listado.appendChild(table)

	for (let i = 1; i<canciones.length; i++){
		//Crear elemento tr y td
		const tr = document.createElement('tr')
		const td = document.createElement('td')

		const item = document.createElement('li')

		tr.appendChild(td)
		td.appendChild(item)

		item.appendChild(document.createTextNode(canciones[i])) 
		item.setAttribute("id", canciones.indexOf(canciones[i]))
		//listado.appendChild(item)
		table.appendChild(tr)
	}
	return listado
}
document.getElementById('playList').appendChild(crearPlayList())

var listadoMusica= document.getElementById('listadoMusica')
listadoMusica.onclick = (e) =>{
	const itemClick = e.target
	removeActive()
	itemClick.classList.add("active");
	reproduccionActual("Reproduciendo:\n"+ itemClick.innerText)
	loadMusic(itemClick.innerText)
	player.play()
	indiceActual[0]= e.target.id
	classIconPlay();
	toggleIcon()
}
//Funcion para cambiar el icono del reprodutor
function classIconPlay(){
	var element = document.getElementById("iconPlay")
	element.classList.remove("fa-pause-circle");
    element.classList.add("fa-play-circle");
}
//Funcion para control del volumen
const volumen= document.getElementById("volumen")
volumen.oninput= (e) =>{
	const vol = e.target.value
	player.volume =vol
}
//Funcion para actualizar la barra de progreso del reprodutor
const updateProgress = () =>{
	if (player.currentTime >0){
		const barra = document.getElementById('progress')
		barra.value = (player.currentTime / player.duration) * 100
		
		var duracionSegundos= player.duration.toFixed(0);
		dura=secondsToString(duracionSegundos);
		var actualSegundos = player.currentTime.toFixed(0)
		actual=secondsToString(actualSegundos);
		
		duracion= actual +' / '+ dura
		document.getElementById('timer').innerText=duracion 
	}
	if (player.ended){
		nextMusic();//Reproducir la siguiente pista
	} 
}
//Funcion para reproducir la proxima cancion
function nextMusic(){  
	const source = document.getElementById('source');
	var musicaActual= Number(indiceActual[0]);
	if (canciones.length == (musicaActual+1)){
		var siguiente = 0
	} else {
		var siguiente = musicaActual + 1
	}
	removeActive()
	var item=document.getElementById(siguiente)
	item.classList.add("active");
	loadMusic(canciones[siguiente]);
	player.play()
	indiceActual[0]= siguiente
	reproduccionActual("Reproduciendo:\n"+ canciones[siguiente])
	classIconPlay()
	toggleIcon()
}
//Funcion para reproducir la cancion anterior
function prevMusic(){  
	const source = document.getElementById('source');
	var musicaActual= Number(indiceActual[0]);
	if (musicaActual==0){
		var anterior= canciones.length - 1
	} else {
		var anterior = musicaActual - 1
	}
	removeActive()
	var item=document.getElementById(anterior)
	item.classList.add("active");
	loadMusic(canciones[anterior]);
	player.play()
	indiceActual[0]= anterior
	reproduccionActual("Reproduciendo:\n"+ canciones[anterior])
	classIconPlay()
	toggleIcon()
}
//Funcion para remover todas las clases css activas
function removeActive(){
	var elems = document.querySelectorAll(".active");
 	 [].forEach.call(elems, function(el) {
    	el.classList.remove("active");
 	 });
 	 return elems
}
//Funcion para mostrar el nombre del arhivo actual en reproduccion
function reproduccionActual(texto){
	document.getElementById('currentPlay').innerText=texto
}
//Funcion para cargar las canciones en el reproductor
function loadMusic(ruta){
	var source = document.getElementById('source')
	var folder1 ="https://ferruea.github.io/music1/";//Carpeta donde tenemos almancenada la musica
	var folder2 ="https://ferruea.github.io/music2/";//Carpeta donde tenemos almancenada la musica
	//Verificar si el archivo existe en la variable folder1
	var xhr = new XMLHttpRequest()
	xhr.open('HEAD', folder1 + ruta, false)
	xhr.send();
	if (xhr.status === 200) {
		//Si el archivo existe en folder1
		source.src = folder1 + ruta;
	} else {
		//Si no se encuentra el archivo, cambiar la variable en folder2
		source.src = folder2 + ruta;
	}
	var index= indiceActual[0]= canciones.indexOf(ruta)
	removeActive()
	var item=document.getElementById(index)
	item.classList.add("active");
	reproduccionActual("Reproduciendo:\n"+ ruta)
	player.load()
}
//Funcion para pausar o darle play 
function togglePlay() {
	if (player.paused){
		toggleIcon();
		return player.play();
	} else {
		toggleIcon();
		return player.pause();
	}
}
//Funcion para cambiar el icono play o pause
function toggleIcon() {
   var element = document.getElementById("iconPlay");
   element.classList.toggle("fa-pause-circle");
   element.classList.toggle("fa-play-circle");
}
//Funcion para que al dar click sobre la barra de progeso se permita adelantar
progress.addEventListener('click', adelantar);
function adelantar(e){
	const scrubTime = (e.offsetX / progress.offsetWidth) * player.duration;
	player.currentTime = scrubTime;
	console.log(e);
}
//Funcion para convertir segundos a minutos y horas
function secondsToString(seconds) {
	var hour="";
	if (seconds>3600){
		hour = Math.floor(seconds / 3600);
		hour = (hour < 10)? '0' + hour : hour;
		hour+=":"
	}
   var minute = Math.floor((seconds / 60) % 60);
  minute = (minute < 10)? '0' + minute : minute;
  var second = seconds % 60;
  second = (second < 10)? '0' + second : second;
  return hour  + minute + ':' + second;
}
loadMusic(canciones[1])